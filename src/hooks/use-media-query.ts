import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const result = matchMedia(query);
      result.addEventListener("change", callback);

      return () => {
        result.removeEventListener("change", callback);
      };
    },
    [query],
  );

  const getSnapshot = () => matchMedia(query).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
