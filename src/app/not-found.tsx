import { BackButton } from "@/components/shared";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center text-center">
      <div className="text-[110px] md:text-[150px] lg:text-[200px] leading-none font-sans-2 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
        404
      </div>
      <h1 className="small-title max-w-5xl">Oops! Page not Found</h1>
      <p>
        Don’t panic. Just head back to the dashboard and double-check your
        routes.
      </p>
      <div className="flex gap-4">
        <BackButton>Go Back</BackButton>
        <ButtonLink href="/" size="lg">
          Go To Home Page
        </ButtonLink>
      </div>
    </main>
  );
}
