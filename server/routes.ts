import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/medium-posts", async (_req, res) => {
    try {
      const response = await fetch("https://medium.com/feed/@arun.bhisne");
      if (!response.ok) {
        throw new Error(`Medium feed failed with ${response.status}`);
      }

      const xml = await response.text();
      const items = [...xml.matchAll(/<item>[\s\S]*?<\/item>/g)].map(
        (match) => match[0],
      );

      const posts = items.slice(0, 5).map((item) => {
        const title =
          item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
          "Untitled";
        const link =
          item.match(/<link>(.*?)<\/link>/)?.[1] ??
          "https://medium.com/@arun.bhisne";
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

      res.json(posts);
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
      res.json({ success: true, id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  return httpServer;
}
