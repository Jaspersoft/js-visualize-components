import { forwardRef } from "react";
import { Box as MuiBox } from "@mui/material";

export const Box = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return <MuiBox ref={ref} className={`${className}  mui`} {...rest} />;
  },
);
