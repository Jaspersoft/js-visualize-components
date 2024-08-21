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
import {
  addChildrenToTreeOnLoad,
  getExpandedNodeDataFromUri,
} from "../../../../utils/schedulerUtils";
import { IState } from "../../../../types/scheduleType";

function TransitionComponent(props: any) {
  return <JVCollapse {...props} />;
}

interface CustomLabelProps {
  children: React.ReactNode;
  icon?: React.ElementType;
  expandable?: boolean;
}

const CustomLabel = ({ expandable, children, ...other }: CustomLabelProps) => {
  return (
    <>
      <JVTreeItem2Label
        {...other}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
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

interface CustomTreeItemProps
  extends Omit<typeof useJVTreeItem2ParametersTypes, "rootRef">,
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

  status.expandable = true;
  return (
    <JVTreeProviderNameSpace.TreeItem2ProviderNameSpace itemId={itemId}>
      <JVTreeItem2Root
        {...getRootProps(other)}
        onClick={(event: React.MouseEvent) => {
          if (status.disabled) {
            event.stopPropagation();
          }
        }}
      >
        <JVTreeItem2Content {...getContentProps()}>
          {/*rendering expand collapse icon*/}
          <JVTreeItem2IconContainer {...getIconContainerProps()}>
            <JVTreeItem2Icon status={status} />
          </JVTreeItem2IconContainer>
          <CustomLabel
            {...getLabelProps({
              expandable: true,
              disable: status.disabled,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeProviderNameSpace.TreeItem2ProviderNameSpace>
  );
});

const isItemDisable = (item: any) => {
  return !(item.permissionMask == 1 || item.permissionMask & 4);
};
export const TreeView = ({ handleCurrentSelection }: any) => {
  const dispatch = useDispatch();
  const folderURI = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination.folderURI,
  );
  const folderData = useSelector((state: IState) => state.folderData);
  const rootData = useSelector((state: IState) => state.fakeRoot);

  const [treeData, setTreeData] = useState(rootData);
  const [currentExpandedNode, setCurrentExpandedNode] = useState("");
  const [alreadyLoadedTreeNode, setAlreadyLoadedTreeNode] = useState<any[]>([]); // to keep track of whethere children nodes have been added to tree or not
  const [expandedItems, setExpandedItems] = useState<any[]>([]);

  useEffect(() => {
    const currentExpand = currentExpandedNode.startsWith("/root")
      ? currentExpandedNode.replace(/^\/root\/?/g, "/")
      : currentExpandedNode;
    handleCurrentSelection(currentExpand);
  }, [currentExpandedNode]);

  const setTreeStructureFromData = (resourcePath: string) => {
    const foldersUriToBeExapanded = getExpandedNodeDataFromUri(
        resourcePath,
        false,
      ),
      initialTreeStructure = addChildrenToTreeOnLoad(treeData, folderData, [
        ...foldersUriToBeExapanded,
      ]);

    setTreeData([...initialTreeStructure]);
    // keeping track of already added nodes to tree structure
    setAlreadyLoadedTreeNode([
      ...alreadyLoadedTreeNode,
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    ]);
    // to set expandedItems property of tree
    setExpandedItems([...expandedItems, ...foldersUriToBeExapanded]);

    // latest tree node which has been expanded
    setCurrentExpandedNode(
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    );
  };
  // show data and expansion on initial load
  useEffect(() => {
    setTreeStructureFromData(folderURI);
  }, []);

  useEffect(() => {
    const currentExpandedNodeData = folderData[currentExpandedNode];
    if (currentExpandedNode && currentExpandedNodeData) {
      const isNodeLoadedAlready = alreadyLoadedTreeNode.some(
        (nodePath: string) => nodePath === currentExpandedNode,
      );
      if (!isNodeLoadedAlready) {
        setTreeStructureFromData(currentExpandedNode);
      } else {
        setExpandedItems([...expandedItems, currentExpandedNode]);
      }
    }
  }, [folderData]);

  return (
    <JVRichTreeView
      items={treeData}
      getItemLabel={(item: any) => {
        return item.label;
      }}
      expandedItems={expandedItems}
      onItemExpansionToggle={(
        event: React.MouseEvent,
        itemId: string,
        isExapnded: boolean,
      ) => {
        if (isExapnded) {
          if (folderData[itemId]) {
            setExpandedItems(() => [...expandedItems, itemId]);
          } else {
            setCurrentExpandedNode(itemId);
            dispatch(getFolderData(itemId));
          }
        } else {
          setExpandedItems(() =>
            expandedItems.filter((item) => item !== itemId),
          );
        }
      }}
      isItemDisabled={(item: any) => isItemDisable(item)}
      defaultSelectedItems={folderURI}
      disabledItemsFocusable
      // selectedItems={currentExpandedNode}
      // multiSelect={true}
      getItemId={(item: any) =>
        item.uri.startsWith("/public")
          ? item.uri
          : item.uri === "/"
            ? "/root"
            : `/root${item.uri}`
      }
      slots={{ item: CustomTreeItem }}
    />
  );
};
