"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { FormInput } from "@/components/shared";
import { Button } from "@/components/ui";

import { formLoginSchema, FormLoginValues } from "./schemas";

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (!response?.ok) {
        throw Error();
      }

      toast.success("You have successfully logged in to your account", {
        icon: "✅",
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Couldn't log in to account", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <h3 className="font-bold text-2xl">Log in</h3>
          </div>
        </div>

        <FormInput
          name="email"
          label="E-Mail"
          placeholder="your@mail.ru"
          type="email"
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="password123"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Enter
        </Button>
      </form>
    </FormProvider>
  );
};
