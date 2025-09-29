export const editCommentById = async ({
  postId,
  commentId,
  content,
}: {
  postId: number;
  commentId: number;
  content: string;
}) => {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ commentId, content }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
