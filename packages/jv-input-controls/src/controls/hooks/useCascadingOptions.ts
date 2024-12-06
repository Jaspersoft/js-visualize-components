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

export const useCascadingOptions = ({
  inputControls,
  currentIcID,
}: {
  inputControls: InputControlProperties[];
  currentIcID: string;
}) => {
  const [options, setOptions] = useState<InputControlOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const icFromState = inputControls.find(({ id }) => id === currentIcID)!;
    // TODO: need to improve the way how we set the IsLoading variable. This variable is also living on the state.
    if (icFromState.isLoading === true) {
      setIsLoading(true);
    }
    if (
      icFromState.state !== undefined &&
      icFromState.state!.options !== undefined &&
      JSON.stringify(icFromState.state!.options) !== JSON.stringify(options)
    ) {
      setOptions(icFromState.state!.options!);
    }
  }, [inputControls]);

  return {
    options,
    isLoading,
    setIsLoading,
  };
};
