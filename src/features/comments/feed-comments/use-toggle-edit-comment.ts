import { useState } from "react";

export interface EditedComment {
  commentId: number | null;
  content: string | null;
}

export const useToggleEditComment = () => {
  const [editedComment, setEditedComment] = useState<EditedComment>({
    commentId: null,
    content: null,
  });

  const handleEditComment = ({ commentId, content }: EditedComment) => {
    setEditedComment({
      commentId,
      content,
    });
  };

  const handleFinishEditComment = () => {
    setEditedComment({ commentId: null, content: null });
  };

  return { editedComment, handleEditComment, handleFinishEditComment };
};
