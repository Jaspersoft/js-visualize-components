/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import { TreeItem2Icon as MuiTreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { TreeItem2Provider as MuiTreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import { TreeViewBaseItem as MuiTreeViewBaseItem } from "@mui/x-tree-view/models";
import {
  TreeItem2Content as MuiTreeItem2Content,
  TreeItem2IconContainer as MuiTreeItem2IconContainer,
  TreeItem2Label as MuiTreeItem2Label,
  TreeItem2Root as MuiTreeItem2Root,
} from "@mui/x-tree-view/TreeItem2";
import {
  unstable_useTreeItem2 as useMuiTreeItem2,
  UseTreeItem2Parameters as useMuiTreeItem2Parameters,
} from "@mui/x-tree-view/useTreeItem2";

export const useTreeItem2 = useMuiTreeItem2;

export type UseTreeItem2ParametersTypes = useMuiTreeItem2Parameters;

export type TreeViewBaseItemTypes = MuiTreeViewBaseItem;

export const TreeItem2Provider: React.FC<any> = ({ ...rest }) => {
  return <MuiTreeItem2Provider {...rest} />;
};
export const TreeItem2Icon = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem2Icon ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);

export const TreeItem2Content = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem2Content
          ref={ref}
          className={`${className}  mui`}
          {...rest}
        />
      </>
    );
  },
);

export const TreeItem2IconContainer = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem2IconContainer
          ref={ref}
          className={`${className}  mui`}
          {...rest}
        />
      </>
    );
  },
);

export const TreeItem2Label = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem2Label
          ref={ref}
          className={`${className}  mui`}
          {...rest}
        />
      </>
    );
  },
);

export const TreeItem2Root = forwardRef<HTMLElement, any>(
  ({ className = "", ...rest }, ref) => {
    return (
      <>
        <MuiTreeItem2Root ref={ref} className={`${className}  mui`} {...rest} />
      </>
    );
  },
);
