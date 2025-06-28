"use client";

import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { formPostSchema, FormPostValue } from "./schemas";
import { Button } from "@/components/ui";
import { FormTextarea, FormInput } from "@/components/shared/form";
import { createPost } from "@/services/api";

interface PostFormProps {
  session: {
    id: string;
    name: string;
    image: string;
  };
  className?: string;
}

export const PostForm = ({ session, className }: PostFormProps) => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: { title: string; content: string; userId: number }) =>
      createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-posts", session.id] });
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
      userId: Number(session.id),
    });
    form.reset();
  };

  return (
    <div
      className={cn(
        "border p-4 rounded-lg bg-gradient-to-br from-primary/40 to-[#4B3BE4]/30",
        className
      )}
    >
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <h3 className="font-bold text-2xl">New post</h3>
          <FormInput name="title" label="Title" required />
          <FormTextarea name="content" label="Content" rows={10} required />
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
