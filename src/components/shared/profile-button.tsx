"use client";

import { useEffect } from "react";

import { LogOut } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { Button, ButtonLink } from "@/components/ui";

import { Loader } from "./loader";

export const ProfileButton = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  useEffect(() => {
    if (searchParams.has("verified")) {
      toast.success("Mail has been successfully confirmed!");
    }
  }, [searchParams]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      {!session ? (
        <ButtonLink href="/auth" size="lg">
          Log in
        </ButtonLink>
      ) : (
        <>
          {!pathname.startsWith("/dashboard") && (
            <ButtonLink size="lg" href="/dashboard">
              Dashboard
            </ButtonLink>
          )}
          <Button size="icon" onClick={handleClickSignOut} title="log out">
            <LogOut />
          </Button>
        </>
      )}
    </>
  );
};
