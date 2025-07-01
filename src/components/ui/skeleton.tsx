import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-gradient-to-bl from-primary/40 to-accent/40 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
