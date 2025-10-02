import { z } from "zod";

export const formPostSchema = z.object({
  title: z.string().min(1, { message: "Enter a title" }),
  content: z.string().min(1, { message: "Enter a content" }),
});

export type FormPostValue = z.infer<typeof formPostSchema>;
