"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { registerUser } from "@/app/actions";
import { FormInput } from "@/components/shared";
import { Button } from "@/components/ui";

import { formRegisterSchema, FormRegisterValues } from "./schemas";

export const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<FormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        name: data.name,
        password: data.password,
      });

      toast.success("Registration is successful. Confirm your email", {
        icon: "✅",
      });

      router.push("/verify-email");
    } catch (error) {
      console.log(error);
      return toast.error("Incorrect E-Mail or password", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <h3 className="font-bold text-2xl">Register with your e-mail</h3>
          </div>
        </div>
        <FormInput
          name="email"
          label="E-Mail"
          required
          placeholder="your@mail.ru"
          type="email"
        />
        <FormInput
          name="name"
          label="Name"
          required
          placeholder="Ivan"
          type="text"
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          required
          placeholder="password123"
        />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          required
          placeholder="password123"
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Create Account
        </Button>
      </form>
    </FormProvider>
  );
};
