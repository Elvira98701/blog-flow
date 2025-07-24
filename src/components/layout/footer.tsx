import { Github, Twitter, Youtube } from "lucide-react";

import { Container } from "@/components/shared";
import { Logo } from "@/components/ui";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("pb-10 px-2", className)}>
      <Container className="rounded-3xl min-h-32 p-5 flex flex-col justify-between bg-gradient-to-br from-primary/30 to-[#4B3BE4]/30">
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
