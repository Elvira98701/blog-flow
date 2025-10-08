"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";

import { FormTextarea } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { formCommentSchema, FormCommentValue } from "../schemas";

import { useCreateComment } from "./use-create-comment";

interface CreateCommentFormProps {
  postId: number;
  className?: string;
}

export const CreateCommentForm = ({
  postId,
  className,
}: CreateCommentFormProps) => {
  const { data: session } = useSession();
  const { isPending, mutate } = useCreateComment(postId);

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
