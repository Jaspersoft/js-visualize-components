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
              expandable: true,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeProviderNameSpace.TreeItem2ProviderNameSpace>
  );
});

export const TreeView = () => {
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );
  const folderData = useSelector((state: any) => state.folderData);
  const rootData = useSelector((state: any) => state.fakeRoot);

  const [treeData, setTreeData] = useState(rootData);
  const [currentExpandedNode, setCurrentExpandedNode] = useState("");
  const [alreadyLoadedTreeNode, setAlreadyLoadedTreeNode] = useState([]); // to keep track of whethere children nodes have been added to tree or not
  const [expandedItems, setExpandedItems] = useState([]);

  const dispatch = useDispatch();
  const setTreeStructureFromData = (resourcePath) => {
    const foldersUriToBeExapanded = getExpandedNodeDataFromUri(resourcePath),
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
    setExpandedItems([...expandedItems, foldersUriToBeExapanded]);

    // latest tree node which has been expanded
    setCurrentExpandedNode(
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    );
  };
  // show data and expansion on initial load
  useEffect(() => {
    const foldersUriToBeExapanded = getExpandedNodeDataFromUri(resourceUri),
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
  }, []);
  //
  // useEffect(() => {
  //   const currentExpandedNodeData = folderData[currentExpandedNode];
  //   if (
  //     currentExpandedNodeData &&
  //     !alreadyLoadedTreeNode[currentExpandedNodeData]
  //   ) {
  //     if (currentExpandedNodeData.length !== 0) {
  //       let foldersNameFromResourceUri = currentExpandedNode
  //         .split("/")
  //         .filter(Boolean); // splits the string at each slash character and removes empty strings
  //       // gets folders name from uri
  //       let foldersUriToBeExapanded = getFoldersToBeExpandedFromURI(
  //         foldersNameFromResourceUri,
  //       );
  //
  //       const initialTreeStructure = addChildrenToTreeOnLoad(
  //         treeData,
  //         folderData,
  //         [...foldersUriToBeExapanded],
  //       );
  //       setTreeData([...initialTreeStructure]);
  //       setAlreadyLoadedTreeNode([
  //         ...alreadyLoadedTreeNode,
  //         currentExpandedNode,
  //       ]);
  //     }
  //     setExpandedItems([...expandedItems, currentExpandedNode]);
  //   }
  // }, [folderData]);

  console.log(currentExpandedNode);
  return (
    <JVRichTreeView
      items={treeData}
      onItemExpansionToggle={(
        event: React.SyntheticEvent,
        itemId: [],
        isExpanded: [],
      ) => {
        if (isExpanded) {
          setCurrentExpandedNode(itemId as any);
          dispatch(getFolderData(itemId as string));
        }
      }}
      getItemLabel={(item) => {
        return item.label;
      }}
      expandedItems={expandedItems}
      onItemExpansionToggle={(event, itemId, isExapnded) => {
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
      // selectedItems={currentExpandedNode}
      // multiSelect={true}
      getItemId={(item) => item.uri}
      slots={{ item: CustomTreeItem }}
    />
  );
};
