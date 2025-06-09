import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Logo } from "../ui";
import { Github, Twitter, Youtube } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("pb-10", className)}>
      <Container className="bg-background rounded-3xl min-h-32 p-5 flex flex-col justify-between bg-gradient-to-br from-accent/50 to-primary/50">
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
