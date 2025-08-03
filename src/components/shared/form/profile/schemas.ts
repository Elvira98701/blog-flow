import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, { message: "The password must contain at least 6 characters" })
  .optional();

export const formUpdateSchema = z
  .object({
    name: z.string().min(2, { message: "Enter a name" }),
    slogan: z.string().optional(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type FormUpdateValues = z.infer<typeof formUpdateSchema>;
