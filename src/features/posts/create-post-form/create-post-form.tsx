"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormTextarea, FormInput } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { formPostSchema, FormPostValue } from "../schemas";

import { useCreatePost } from "./use-create-post";

interface CreatePostFormProps {
  sessionUserId: number;
  className?: string;
}

export const CreatePostForm = ({
  sessionUserId,
  className,
}: CreatePostFormProps) => {
  const { mutate, isPending } = useCreatePost(sessionUserId);

  const form = useForm<FormPostValue>({
    resolver: zodResolver(formPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: FormPostValue) => {
    mutate({
      title: data.title,
      content: data.content,
      userId: sessionUserId,
    });
    form.reset();
  };

  return (
    <div
      className={cn(
        "border p-4 rounded-lg bg-linear-to-b from-popover to-card",
        className
      )}
    >
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormInput name="title" label="Title" required />

          <FormTextarea
            className="flex-1/4"
            name="content"
            label="Content"
            rows={5}
            required
          />
          <Button
            loading={isPending}
            disabled={isPending}
            size="lg"
            type="submit"
          >
            Create Post
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
