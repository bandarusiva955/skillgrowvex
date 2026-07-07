import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const verifySchema = z.object({
  certificateId: z
    .string()
    .regex(/^SGV-\d{4}-\d{6}$/, "Invalid certificate ID format"),
});

export const submissionSchema = z.object({
  assignmentId: z.string().cuid(),
});

export const profileSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  bio: z.string().max(500).optional(),
  phone: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
});

export const internshipSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  category: z.string(),
  description: z.string().min(50),
  shortDescription: z.string().min(10),
  duration: z.string(),
  durationWeeks: z.number().min(1).max(52),
  skills: z.array(z.string()),
  projects: z.array(z.string()),
  learningOutcomes: z.array(z.string()),
  isFeatured: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export const scoreSchema = z.object({
  submissionId: z.string().cuid(),
  score: z.number().min(0).max(100),
  feedback: z.string().optional(),
  status: z.enum(["APPROVED", "REJECTED", "RESUBMIT"]),
});

export const ALLOWED_FILE_TYPES = {
  pdf: ["application/pdf"],
  zip: ["application/zip", "application/x-zip-compressed"],
  xlsx: [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ],
  pbix: ["application/octet-stream"],
  png: ["image/png"],
  jpg: ["image/jpeg", "image/jpg"],
};

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
