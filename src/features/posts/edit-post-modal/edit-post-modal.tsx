import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { EditPostForm } from "../edit-post-form";

interface EditPostModalProps {
  postId: number;
  title: string;
  content: string;
  userId: number;
  onCloseDropdown?: VoidFunction;
}

const EditPostModal = ({
  postId,
  title,
  content,
  userId,
  onCloseDropdown,
}: EditPostModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm bg-border/30 font-medium cursor-pointer h-9 px-4 py-2 rounded-sm flex gap-1 items-center transition-colors hover:text-primary">
        <Pencil size={14} /> Edit post
      </DialogTrigger>
      <DialogContent className="w-full max-w-screen-xl p-4">
        <DialogHeader>
          <DialogTitle className="font-bold">Edit post</DialogTitle>
          <DialogDescription>Update</DialogDescription>
        </DialogHeader>
        <EditPostForm
          postId={postId}
          title={title}
          content={content}
          userId={userId}
          onCloseDropdown={onCloseDropdown}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditPostModal;
