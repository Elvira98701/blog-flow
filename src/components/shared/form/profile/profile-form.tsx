import { cn } from "@/lib/utils";

interface ProfileFormProps {
  className?: string;
}

export const ProfileForm = ({ className }: ProfileFormProps) => {
  return <div className={cn("", className)}>ProfileForm</div>;
};
