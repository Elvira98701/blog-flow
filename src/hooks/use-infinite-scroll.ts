import { useCallback, useRef, useEffect } from "react";

export const useInfiniteScroll = (
  onIntersect: () => void,
  enabled: boolean = true
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastRowRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!enabled) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [enabled, onIntersect]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return lastRowRef;
};
