import { z } from "zod";
import { Status } from "@prisma/client";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required").max(65535),
});

const statusValues = Object.values(Status) as [string, ...string[]]

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
    assignedToUserId: z.string().min(1, "Assigned to userId is required").max(255).optional().nullable(),
    status: z.enum(statusValues).optional()
});

export const panelSchema = issueSchema.extend({
  isPrivate: z.boolean().default(false),
})
