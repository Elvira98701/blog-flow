"use client";

import { LogOut } from "lucide-react";
import { Button, ButtonLink } from "../ui";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const ProfileButton = () => {
  const { data: session } = useSession();
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
