import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl sm:text-8xl font-bold text-center">Not Found</h1>
      <p className="text-center">This page could not be found.</p>
      <ButtonLink href="/dashboard" size="lg">
        Go Back
      </ButtonLink>
    </main>
  );
}
