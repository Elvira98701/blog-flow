import { Github, Twitter, Youtube } from "lucide-react";

import { Container } from "@/components/shared";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("pb-8 px-2", className)}>
      <Container className="min-h-32 p-4 flex flex-col justify-between border rounded-md bg-background ring-3 ring-border/30">
        <Logo />
        <div className="flex justify-between">
          <small className="text-foreground/60">
            All Right Reserved | Terms and Conditions
          </small>
          <ul className="flex gap-4">
            <li>
              <a href="">
                <Youtube size={18} />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter size={18} />
              </a>
            </li>
            <li>
              <a href="">
                <Github size={18} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
