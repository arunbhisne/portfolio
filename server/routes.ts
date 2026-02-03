import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
