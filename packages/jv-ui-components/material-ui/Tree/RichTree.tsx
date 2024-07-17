import React, { forwardRef } from "react";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

export const RichTree = forwardRef<HTMLUListElement, any>(
  ({ className, ...rest }, ref) => {
    return (
      <>
        <RichTreeView ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);
