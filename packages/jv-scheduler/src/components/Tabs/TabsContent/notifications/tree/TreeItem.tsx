/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  JVCollapse,
  JVTreeItem2Content,
  JVTreeItem2Icon,
  JVTreeItem2IconContainer,
  JVTreeItem2Root,
  JVTreeItem2Provider,
  useJVTreeItem2,
  useJVTreeItem2ParametersTypes,
} from "@jaspersoft/jv-ui-components";
import React from "react";
import { TreeItemLabel } from "./TreeItemLabel";
import { isTreeNodeDisable } from "../../../../../utils/treeUtils";

function TransitionComponent(props: any) {
  return <JVCollapse {...props} />;
}

export interface CustomTreeItemProps
  extends Omit<useJVTreeItem2ParametersTypes, "rootRef">,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {
  updateLastSelectedNode: (
    itemId: string,
    expanded: boolean,
    disabled: boolean,
  ) => void;
}

export const TreeItem = React.forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    updateLastSelectedNode,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
    publicAPI,
  } = useJVTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const item = publicAPI.getItem(itemId);
  status.expandable = true;
  status.disabled = isTreeNodeDisable(item);

  return (
    <JVTreeItem2Provider itemId={itemId}>
      <JVTreeItem2Root
        {...getRootProps(other)}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          updateLastSelectedNode(itemId, !status.expanded, status.disabled);
        }}
      >
        <JVTreeItem2Content {...getContentProps()}>
          {/*rendering expand collapse icon*/}
          <JVTreeItem2IconContainer {...getIconContainerProps()}>
            <JVTreeItem2Icon status={status} />
          </JVTreeItem2IconContainer>
          <TreeItemLabel
            {...getLabelProps({
              expandable: true,
              disable: status.disabled,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeItem2Provider>
  );
});
