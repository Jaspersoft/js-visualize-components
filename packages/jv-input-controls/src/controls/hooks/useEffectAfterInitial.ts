import { useEffect, useRef } from "react";

export const useEffectAfterInitial = (
  callback: () => void,
  dependencies: any[],
) => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      callback();
    }
  }, dependencies);
};
