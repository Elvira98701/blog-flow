export const toggleLike = async (postId: number) => {
  const response = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
