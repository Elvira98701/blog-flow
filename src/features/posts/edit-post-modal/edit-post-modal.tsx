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
}

const EditPostModal = ({
  postId,
  title,
  content,
  userId,
}: EditPostModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className="border bg-background text-sm font-medium rounded-sm h-10 px-4 cursor-pointer capitalize">
        <Pencil size={16} />
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
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditPostModal;
