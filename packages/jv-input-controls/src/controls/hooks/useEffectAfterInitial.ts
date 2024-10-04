/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

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
