"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { updateUserInfo, uploadUserImage } from "@/app/actions";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { FormInput } from "../form-input";

import { formUpdateSchema, FormUpdateValues } from "./schemas";

interface ProfileFormProps {
  className?: string;
}

export const ProfileForm = ({ className }: ProfileFormProps) => {
  const form = useForm<FormUpdateValues>({
    resolver: zodResolver(formUpdateSchema),
    defaultValues: {
      name: "",
      slogan: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormUpdateValues) => {
    const cleanedData: Omit<FormUpdateValues, "image" | "confirmPassword"> & {
      avatar?: string;
    } = {
      name: data.name?.trim() ? data.name : undefined,
      slogan: data.slogan?.trim() ? data.slogan : undefined,
      password: data.password?.trim() ? data.password : undefined,
    };

    if (
      !cleanedData.name &&
      !cleanedData.slogan &&
      !cleanedData.password &&
      !data.image?.length
    ) {
      toast.error("Please enter at least one field to update");
      return;
    }

    if (data.image?.[0]) {
      const formData = new FormData();
      formData.append("file", data.image[0]);

      try {
        const imageUrl = await uploadUserImage(formData);
        cleanedData.avatar = imageUrl;
      } catch (error) {
        console.error("Upload error:", error);
        toast.error("Image upload failed");
        return;
      }
    }

    try {
      await updateUserInfo(cleanedData);
      form.reset();

      toast.error("Update is successful.", {
        icon: "✅",
      });
    } catch (error) {
      console.log(error);
      return toast.error("Incorrect name or password", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "bg-card/40 p-4 rounded-lg border flex flex-col gap-5",
          className
        )}
      >
        <FormInput name="name" label="Name" placeholder="Ivan" type="text" />
        <FormInput
          name="slogan"
          label="Slogan"
          placeholder="I am a designer"
          type="text"
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="password123"
        />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="password123"
        />
        <FormInput
          name="image"
          label="Image"
          type="file"
          accept="image/jpeg, image/png, image/webp"
        />
        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Update Account
        </Button>
      </form>
    </FormProvider>
  );
};
