import { forwardRef } from "react";
import {
  TabPanel as MuiTabPanel,
  TabPanelProps as MuiTabPanelProps,
} from "@mui/lab";

export const TabPanels = forwardRef<HTMLDivElement, MuiTabPanelProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <MuiTabPanel
        ref={ref}
        className={`jv-mTabPanel ${className}  mui`}
        {...rest}
      >
        {children}
      </MuiTabPanel>
    );
  },
);
