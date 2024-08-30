import { forwardRef } from "react";
import {
  TabContext as MuiTabContext,
  TabContextProps as MuiTabContextProps,
} from "@mui/lab";

export const TabContext = forwardRef<HTMLDivElement, MuiTabContextProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <MuiTabContext
        ref={ref}
        className={`jv-mTabContext ${className}  mui`}
        {...rest}
      >
        {children}
      </MuiTabContext>
    );
  },
);
