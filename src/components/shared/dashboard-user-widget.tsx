import { cn } from "@/lib/utils";

interface DashboardUserWidgetProps {
  className?: string;
}

export const DashboardUserWidget = ({
  className,
}: DashboardUserWidgetProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-primary/70 to-accent/80 min-h-80 rounded-md p-4",
        className
      )}
    >
      <h2>User name</h2>
      <p>Slogun</p>
    </div>
  );
};
