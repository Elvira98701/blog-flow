import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

interface ModalProps {
  children: ReactNode;
  triggerNode: ReactNode;
  titleText: string;
  descriptionText: string;
  triggerClassName?: string;
}

const Modal = ({
  children,
  triggerNode,
  titleText,
  descriptionText,
  triggerClassName,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "text-sm font-medium w-full cursor-pointer capitalize h-9 px-6",
          "rounded-sm flex justify-center items-center gap-1 transition-all text-nowrap",
          triggerClassName
        )}
      >
        {triggerNode}
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-xl p-4">
        <DialogHeader>
          <DialogTitle className="font-bold">{titleText}</DialogTitle>
          <DialogDescription>{descriptionText}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
