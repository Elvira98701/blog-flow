import { useState } from "react";

import { Post } from "@prisma/client";
import { useDebounce } from "react-use";

import { searchPosts } from "@/services/api";

export const usePostsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useDebounce(
    async () => {
      try {
        const response = await searchPosts(searchQuery);
        setPosts(response);
      } catch (error) {
        console.warn(error);
      }
    },
    250,
    [searchQuery]
  );

  const reset = () => {
    setSearchQuery("");
    setPosts([]);
  };

  return { searchQuery, setSearchQuery, posts, reset };
};
