import { z } from "zod";

export const formUpdateSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Enter a name" })
      .optional()
      .or(z.literal("")),
    slogan: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "The password must contain at least 6 characters" })
      .optional()
      .or(z.literal("")),
    confirmPassword: z.string().optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.password && data.password.trim() !== "") {
        return data.confirmPassword === data.password;
      }
      return true;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export type FormUpdateValues = z.infer<typeof formUpdateSchema>;
