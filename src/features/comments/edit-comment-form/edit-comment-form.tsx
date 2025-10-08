"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormTextarea } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { formCommentSchema, FormCommentValue } from "../schemas";

import { useEditComment } from "./use-edit-comment";

interface EditCommentFormProps {
  content: string;
  commentId: number;
  postId: number;
  onFinishEdit?: () => void;
  className?: string;
}

export const EditCommentForm = ({
  content,
  commentId,
  postId,
  onFinishEdit,
  className,
}: EditCommentFormProps) => {
  const { isPending, mutate } = useEditComment(postId, onFinishEdit);

  const form = useForm<FormCommentValue>({
    resolver: zodResolver(formCommentSchema),
    defaultValues: {
      content,
    },
  });

  const onSubmit = async (data: FormCommentValue) => {
    mutate({
      content: data.content,
      commentId,
    });
  };

  return (
    <div className={cn("", className)}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormTextarea
            name="content"
            label="Content"
            rows={5}
            required
            className={cn({
              "opacity-40": isPending,
            })}
          />
          <Button
            loading={isPending}
            disabled={isPending}
            size="lg"
            type="submit"
            variant="secondary"
          >
            Edit Comment
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
