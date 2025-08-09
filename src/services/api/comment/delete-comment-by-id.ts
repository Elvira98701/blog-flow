export const deleteCommentById = async (postId: number, commentId: number) => {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ commentId }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
