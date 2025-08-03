"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { updateUserInfo } from "@/app/actions";
import { Button } from "@/components/ui";

import { FormInput } from "../form-input";

import { formUpdateSchema, FormUpdateValues } from "./schemas";

export const ProfileForm = () => {
  const form = useForm<FormUpdateValues>({
    resolver: zodResolver(formUpdateSchema),
    defaultValues: {
      name: "",
      slogan: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormUpdateValues) => {
    try {
      await updateUserInfo({
        name: data.name,
        slogan: data.slogan,
        password: data.password,
      });
      toast.error("Update is successful.", {
        icon: "✅",
      });
    } catch (error) {
      console.log(error);
      return toast.error("Incorrect name or password", {
        icon: "❌",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="name" label="Name" placeholder="Ivan" />
        <FormInput name="slogan" label="Slogan" placeholder="I am a designer" />
        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="password123"
        />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="password123"
        />
        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Update Account
        </Button>
      </form>
    </FormProvider>
  );
};
