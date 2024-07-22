import { TreeItem as MuiTreeItem, TreeItemProps } from "@mui/x-tree-view";
import React, { forwardRef } from "react";

export const TreeItem = forwardRef<HTMLLIElement, TreeItemProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);
