import { StyledEngineProvider } from "@mui/material";
import { ReactNode } from "react";

export const StyleEngineProvider = ({ children }: { children: ReactNode }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};
