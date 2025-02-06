import { useEffect, useState } from "react";

export function useMediaQuery(query = "(min-width: 1024px)") {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== isLargeScreen) {
      setIsLargeScreen(media.matches);
    }
    const listener = () => {
      setIsLargeScreen(media.matches);
    };
    media.addEventListener(listener);
    return () => media.removeEventListener(listener);
  }, [query]);

  return isLargeScreen;
}
