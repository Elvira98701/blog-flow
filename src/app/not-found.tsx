import { BackButton } from "@/components/shared";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-center capitalize">Not found</h1>
      <p className="text-center">This page could not be found.</p>
      <div className="flex gap-4">
        <BackButton>Go Back</BackButton>
        <ButtonLink href="/" size="lg">
          Go Home
        </ButtonLink>
      </div>
    </main>
  );
}
