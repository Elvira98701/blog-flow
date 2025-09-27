"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { FormTextarea, FormInput } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { QUERY_KEYS } from "@/constants/query-keys";
import { cn } from "@/lib/utils";
import { createPost } from "@/services/api";

import { formPostSchema, FormPostValue } from "./schemas";

interface PostFormProps {
  sessionUserId: number;
  className?: string;
}

export const PostForm = ({ sessionUserId, className }: PostFormProps) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { title: string; content: string; userId: number }) =>
      createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_POSTS, sessionUserId],
      });
      toast.success("The post was created successfully");
    },
    onError: () => {
      toast.error("Error when creating a post");
    },
  });

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
    <div className={cn("border p-4 rounded-lg bg-card", className)}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormInput name="title" label="Title" required />
          <FormTextarea name="content" label="Content" rows={5} required />
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
