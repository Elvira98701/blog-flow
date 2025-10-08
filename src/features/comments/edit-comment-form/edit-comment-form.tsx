"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { FormTextarea } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { editCommentById } from "@/services/api";

import { formCommentSchema, FormCommentValue } from "../schemas";

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
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { content: string; commentId: number }) =>
      editCommentById({ postId, ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });
      toast.success("The comment was edited successfully");
      onFinishEdit?.();
    },
    onError: () => {
      toast.error("Error when editing a comment");
    },
  });

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
