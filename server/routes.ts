import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import nodemailer from "nodemailer";

const MEDIUM_FEED_URL = "https://medium.com/feed/@arun.bhisne";
const MEDIUM_CACHE_TTL_MS = 1000 * 60 * 30;

let mediumCache: Array<{
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}> = [];
let mediumCacheUpdatedAt = 0;

async function fetchMediumPosts() {
  const response = await fetch(MEDIUM_FEED_URL);
  if (!response.ok) {
    throw new Error(`Medium feed failed with ${response.status}`);
  }

  const xml = await response.text();
  const items = [...xml.matchAll(/<item>[\s\S]*?<\/item>/g)].map(
    (match) => match[0],
  );

  return items.slice(0, 3).map((item) => {
    const title =
      item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "Untitled";
    const link =
      item.match(/<link>(.*?)<\/link>/)?.[1] ?? "https://medium.com/@arun.bhisne";
    const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
    const html =
      item.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/,
      )?.[1] ?? "";

    const excerpt = html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 170);

    return {
      title,
      link: link.split("?source=")[0],
      pubDate,
      excerpt: excerpt ? `${excerpt}...` : "Read this post on Medium.",
    };
  });
}

async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "Email delivery is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "arun.bhisne@gmail.com";
  const fromEmail =
    process.env.SMTP_FROM_EMAIL ?? `Portfolio Contact <${smtpUser}>`;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New portfolio inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/medium-posts", async (_req, res) => {
    try {
      const now = Date.now();
      const cacheFresh = now - mediumCacheUpdatedAt < MEDIUM_CACHE_TTL_MS;

      if (!cacheFresh || mediumCache.length === 0) {
        mediumCache = await fetchMediumPosts();
        mediumCacheUpdatedAt = now;
      }

      res.json(mediumCache);
    } catch (error) {
      console.error("Failed to fetch Medium posts:", error);
      res.json([]);
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ error: validationError.toString() });
      }

      const contact = await storage.createContact(result.data);
      await sendContactEmail(result.data);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        error: "Failed to deliver email. Please try again or email arun.bhisne@gmail.com directly.",
      });
    }
  });

  return httpServer;
}
