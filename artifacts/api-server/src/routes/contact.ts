import { Router } from "express";
import { db } from "@workspace/db";
import { contactInquiries, insertContactInquirySchema } from "@workspace/db/schema";
import { ZodError } from "zod";
import { desc } from "drizzle-orm";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const data = insertContactInquirySchema.parse(req.body);
    const [inquiry] = await db.insert(contactInquiries).values(data).returning();
    res.status(201).json(inquiry);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ message: "入力内容に誤りがあります", errors: error.issues });
      return;
    }
    req.log.error({ err: error }, "contact form error");
    res.status(500).json({ message: "サーバーエラーが発生しました" });
  }
});

router.get("/contact", async (req, res) => {
  try {
    const inquiries = await db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
    res.json(inquiries);
  } catch (error) {
    req.log.error(error);
    res.status(500).json({ message: "サーバーエラーが発生しました" });
  }
});

export default router;
