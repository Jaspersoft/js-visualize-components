/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  ClickAwayListener as MuiClickAwayListener,
  ClickAwayListenerProps as MuiClickAwayListenerProps,
} from "@mui/material";
import { FC } from "react";

export type ClickAwayListenerProps = MuiClickAwayListenerProps;
export const ClickAwayListener: FC<ClickAwayListenerProps> = (props) => {
  const { onClickAway, ...rest } = props;
  return <MuiClickAwayListener onClickAway={onClickAway} {...rest} />;
};
