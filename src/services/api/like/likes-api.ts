import { jsonApiInstance } from "../api-instance";

export const likesApi = {
  toggleLike: (postId: number) => {
    return jsonApiInstance(`/api/posts/${postId}/likes`, {
      method: "POST",
    });
  },
};
