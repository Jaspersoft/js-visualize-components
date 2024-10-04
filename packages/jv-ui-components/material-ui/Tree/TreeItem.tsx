/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { TreeItem as MuiTreeItem, TreeItemProps } from "@mui/x-tree-view";
import { forwardRef } from "react";

export const TreeItem = forwardRef<HTMLLIElement, TreeItemProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);
