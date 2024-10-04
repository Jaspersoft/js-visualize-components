/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { StyledEngineProvider } from "@mui/material/styles";
import { ReactNode } from "react";

export const StyleEngineProvider = ({ children }: { children: ReactNode }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};
