import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

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
    image: z
      .any()
      .optional()
      .refine(
        (fileList) => {
          if (!fileList || fileList.length === 0) return true; // not required
          const file = fileList[0];
          return (
            file.size <= MAX_FILE_SIZE && ACCEPTED_TYPES.includes(file.type)
          );
        },
        {
          message: "Invalid image file",
          path: ["image"],
        }
      ),
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
