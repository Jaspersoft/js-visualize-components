import React, { useEffect, useState } from "react";
import {
  JVTypography,
  JVTreeItem2Content,
  JVTreeItem2IconContainer,
  JVTreeItem2Label,
  JVTreeItem2Root,
  JVTreeItem2Icon,
  JVTreeProviderNameSpace,
  useJVTreeItem2ParametersTypes,
  useJVTreeItem2,
  JVIcon,
  JVBox,
  JVCollapse,
} from "@jaspersoft/jv-ui-components";
import { JVRichTreeView } from "@jaspersoft/jv-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getFolderData } from "../../../../actions/action";

const data = [
  {
    version: 0,
    permissionMask: 1,
    label: "Root",
    description: "Root",
    uri: "/",
    resourceType: "folder",
  },
  {
    version: 0,
    label: "Public",
    description: "Public",
    uri: "/public",
    resourceType: "folder",
  },
];

function TransitionComponent(props: any) {
  return <JVCollapse {...props} />;
}

interface CustomLabelProps {
  children: React.ReactNode;
  icon?: React.ElementType;
  expandable?: boolean;
}

const CustomLabel = ({
  icon: Icon,
  expandable,
  children,
  ...other
}: CustomLabelProps) => {
  return (
    <>
      <JVTreeItem2Label
        {...other}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/*/!* render icon *!/*/}
        {/*{Icon && (*/}
        <JVBox
          className="labelIcon"
          color="inherit"
          sx={{ mr: 1, fontSize: "1.2rem" }}
        >
          <JVIcon icon="folder" />
        </JVBox>
        {/*)}*/}

        <JVTypography variant="body2">{children}</JVTypography>
      </JVTreeItem2Label>
    </>
  );
};

const isExpandable = (reactChildren: React.ReactNode) => {
  if (Array.isArray(reactChildren)) {
    return reactChildren.length > 0 && reactChildren.some(isExpandable);
  }
  return true;
};

const getIconFromFileType = () => <></>;

interface CustomTreeItemProps
  extends Omit<useJVTreeItem2ParametersTypes, "rootRef">,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const { id, itemId, label, disabled, children, ...other } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useJVTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  let icon = getIconFromFileType();

  status.expandable = true;
  return (
    <JVTreeProviderNameSpace.TreeItem2ProviderNameSpace itemId={itemId}>
      <JVTreeItem2Root {...getRootProps(other)}>
        <JVTreeItem2Content {...getContentProps()}>
          {/*rendering expand collapse icon*/}
          <JVTreeItem2IconContainer {...getIconContainerProps()}>
            <JVTreeItem2Icon status={status} />
          </JVTreeItem2IconContainer>
          <CustomLabel
            {...getLabelProps({
              icon,
              expandable: true,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeProviderNameSpace.TreeItem2ProviderNameSpace>
  );
});

function addChildrenToParentByParentId(id, node, childNodes) {
  const { children } = node;
  if (node.uri === id) {
    node.children = childNodes;
    console.log(node);
    return node;
  } else if (Array.isArray(children)) {
    return children.some((child) =>
      addChildrenToParentByParentId(id, child, childNodes),
    );
  }
  return [];
}

export const TreeView = () => {
  const [treeData, setTreeData] = useState(data);
  const folderData = useSelector((state: any) => state.folderData);
  const [currentExpandedNode, setCurrentExpandedNode] = useState();
  const [currentStructureExpanded, setCurrentStructureExpanded] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentExpnadedFolderChildren = folderData[currentExpandedNode];
    if (currentExpnadedFolderChildren) {
      data.some((treeItems, index) => {
        if (treeItems.uri == currentExpandedNode) {
          const currentExpandedData = addChildrenToParentByParentId(
            currentExpandedNode,
            treeItems,
            currentExpnadedFolderChildren,
          );
          data[index] = currentExpandedData;
          setTreeData([...data]);
          console.log(data);
          return true;
        }
      });
      setTreeData([...data]);
    }
  }, [folderData, currentExpandedNode]);

  return (
    <JVRichTreeView
      items={data}
      onItemExpansionToggle={(
        event: React.SyntheticEvent,
        itemId: [],
        isExpanded: [],
      ) => {
        if (isExpanded) {
          setCurrentExpandedNode(itemId as any);
          dispatch(getFolderData(itemId as string));
        }
        // console.log(itemId)
      }}
      getLabel={(item) => {
        return item.label;
      }}
      getItemId={(item) => item.uri}
      defaultSelectedItems="1.1"
      slots={{ item: CustomTreeItem }}
    />
  );
};
