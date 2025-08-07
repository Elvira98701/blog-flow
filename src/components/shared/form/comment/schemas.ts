import { z } from "zod";

export const formCommentSchema = z.object({
  content: z.string().min(1, { message: "Enter a content" }),
});

export type FormCommentValue = z.infer<typeof formCommentSchema>;
