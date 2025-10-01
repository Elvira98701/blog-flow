import { useState, useRef } from "react";

import { useClickAway } from "react-use";

export const useSearchFocus = () => {
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setFocused(false));

  return { focused, setFocused, ref };
};
