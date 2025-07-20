import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-gradient-to-bl from-primary/20 to-accent/20 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
