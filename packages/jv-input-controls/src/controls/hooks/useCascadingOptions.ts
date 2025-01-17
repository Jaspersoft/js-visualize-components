/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useEffect, useState } from "react";
import {
  InputControlOption,
  InputControlProperties,
} from "@jaspersoft/jv-tools";

export const useCascadingOptions = (
  inputControls: InputControlProperties[],
  currentIcID: string,
) => {
  const [options, setOptions] = useState<InputControlOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const icFromState = inputControls.find(({ id }) => id === currentIcID)!;
    if (icFromState.isLoading === true) {
      !isLoading && setIsLoading(true);
    }
    if (
      icFromState.state !== undefined &&
      icFromState.state.options !== undefined
    ) {
      if (
        JSON.stringify(icFromState.state.options) !== JSON.stringify(options)
      ) {
        setOptions(icFromState.state.options);
      } else if (icFromState.isLoading === false) {
        setIsLoading(false);
      }
    }
  }, [inputControls]);

  return {
    options,
    isLoading,
    setIsLoading,
  };
};
