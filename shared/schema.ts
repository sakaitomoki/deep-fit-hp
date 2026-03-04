import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").default(sql`now()`),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  isRead: true,
  createdAt: true,
}).extend({
  email: z.string().email("有効なメールアドレスを入力してください"),
  name: z.string().min(1, "お名前を入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
  inquiryType: z.string().min(1, "お問い合わせ種別を選択してください"),
  phone: z.string().nullable().optional(),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
