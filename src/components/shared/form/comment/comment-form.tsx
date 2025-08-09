"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { FormTextarea } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { createComment } from "@/services/api";

import { formCommentSchema, FormCommentValue } from "./schemas";

interface CommentFormProps {
  postId: number;
  className?: string;
}

export const CommentForm = ({ postId, className }: CommentFormProps) => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { content: string; userId: number }) =>
      createComment(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, String(postId)],
      });
      toast.success("The comment was created successfully");
    },
    onError: () => {
      toast.error("Error when creating a comment");
    },
  });

  const form = useForm<FormCommentValue>({
    resolver: zodResolver(formCommentSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (data: FormCommentValue) => {
    mutate({
      content: data.content,
      userId: Number(session?.user.id),
    });
    form.reset();
  };

  return (
    <div className={cn("", className)}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormTextarea name="content" label="Content" rows={5} required />
          <Button
            loading={isPending}
            disabled={isPending}
            size="lg"
            type="submit"
          >
            Create Comment
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
