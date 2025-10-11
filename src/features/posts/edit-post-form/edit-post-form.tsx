"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput, FormTextarea } from "@/components/shared";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { formPostSchema, FormPostValue } from "../schemas";

import { useEditPost } from "./use-edit-post";

interface EditPostFormProps {
  postId: number;
  title: string;
  content: string;
  userId: number;
  className?: string;
}

export const EditPostForm = ({
  userId,
  postId,
  title,
  content,
  className,
}: EditPostFormProps) => {
  const { isPending, mutate } = useEditPost(userId, postId);

  const form = useForm<FormPostValue>({
    resolver: zodResolver(formPostSchema),
    defaultValues: {
      title,
      content,
    },
  });

  const onSubmit = async (data: FormPostValue) => {
    mutate({
      postId,
      title: data.title,
      content: data.content,
    });
  };

  return (
    <div className={cn("", className)}>
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
            Update Post
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
