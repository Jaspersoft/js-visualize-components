/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { Skeleton as MuiSkeleton } from "@mui/material";
import { SkeletonProps as MuiSkeletonProps } from "@mui/material/Skeleton/Skeleton";

export const Skeleton = forwardRef((props: MuiSkeletonProps, ref) => {
  const { children, ...remaining } = props;
  if (children) {
    return <MuiSkeleton {...remaining}>{children}</MuiSkeleton>;
  }
  return <MuiSkeleton {...remaining} />;
});
