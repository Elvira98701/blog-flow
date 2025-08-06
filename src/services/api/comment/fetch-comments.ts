import { CommentsWithUser } from "@/types";

export const fetchComments = async ({
  postId,
}: {
  postId: string;
}): Promise<CommentsWithUser[]> => {
  const response = await fetch(`/api/posts/${postId}/comments`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
