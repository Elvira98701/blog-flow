import { useState } from "react";

import { User } from "@prisma/client";
import { useDebounce } from "react-use";

import { searchUsers } from "@/services/api";

export const useUsersSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useDebounce(
    async () => {
      try {
        const response = await searchUsers(searchQuery);
        setUsers(response);
      } catch (error) {
        console.warn(error);
      }
    },
    250,
    [searchQuery]
  );

  const reset = () => {
    setSearchQuery("");
    setUsers([]);
  };

  return { searchQuery, setSearchQuery, users, reset };
};
