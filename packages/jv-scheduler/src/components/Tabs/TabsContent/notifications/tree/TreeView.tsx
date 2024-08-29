import React, { useEffect, useState } from "react";
import { JVRichTreeView } from "@jaspersoft/jv-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { CustomTreeItemProps, TreeItem } from "./TreeItem";
import { getFolderData } from "../../../../../actions/action";
import {
  addChildrenToTreeOnLoad,
  getExpandedNodeDataFromUri,
} from "../../../../../utils/schedulerUtils";
import { IState } from "../../../../../types/scheduleType";

export const TreeView = ({ handleCurrentSelection, folderSelected }: any) => {
  const dispatch = useDispatch();
  const folderURI = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination.folderURI,
  );
  const folderData = useSelector((state: IState) => state.folderData);
  const rootData = useSelector((state: IState) => state.fakeRoot);

  const [treeData, setTreeData] = useState(rootData);
  const [alreadyLoadedTreeNode, setAlreadyLoadedTreeNode] = useState<any[]>([]); // to keep track of whethere children nodes have been added to tree or not
  const [expandedItems, setExpandedItems] = useState<any[]>([]);
  const [lastExapanded, setLastExpandedNode] = useState<string>(folderSelected);
  const [disableNode, setDisableNode] = useState(false);
  const [isExapnded, setIsExpanded] = useState(true);

  const updateLastSelectedNode = (
    itemId: string,
    expanded: boolean,
    disabled: boolean,
  ) => {
    setLastExpandedNode(itemId);
    setDisableNode(disabled);
    setIsExpanded(expanded);
  };

  const setTreeStructureFromData = (foldersUriToBeExapanded: string[]) => {
    const nodesWhereFolderNeedsToBeaade = getExpandedNodeDataFromUri(
      lastExapanded,
      false,
    );
    const initialTreeStructure = addChildrenToTreeOnLoad(treeData, folderData, [
      ...nodesWhereFolderNeedsToBeaade,
    ]);

    setTreeData([...initialTreeStructure]);
    // keeping track of already added nodes to tree structure
    setAlreadyLoadedTreeNode([
      ...alreadyLoadedTreeNode,
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    ]);
    // to set expandedItems property of tree
    setExpandedItems([
      ...foldersUriToBeExapanded,
      ...nodesWhereFolderNeedsToBeaade,
    ]);
  };

  // show data and expansion on initial load
  useEffect(() => {
    let convertedUri = lastExapanded;
    if (!convertedUri.startsWith("/public")) {
      convertedUri = "/root" + folderURI;
    }
    updateLastSelectedNode(convertedUri, true, false);
  }, []);

  const setTreeStructureWhenExapndCollapse = () => {
    if (isExapnded) {
      if (!folderData[lastExapanded]) {
        dispatch(getFolderData(lastExapanded));
      }
      setTreeStructureFromData([...expandedItems, lastExapanded]);
    } else {
      setExpandedItems(expandedItems.filter((item) => item !== lastExapanded));
    }
    if (!disableNode) handleCurrentSelection(lastExapanded);
  };
  useEffect(() => {
    setTreeStructureWhenExapndCollapse();
  }, [folderData, lastExapanded, isExapnded]);

  return (
    <JVRichTreeView
      items={treeData}
      getItemLabel={(item: any) => {
        return item.label;
      }}
      expandedItems={expandedItems}
      defaultSelectedItems={folderURI}
      multipleSelection
      getItemId={(item: any) =>
        item.uri.startsWith("/public")
          ? item.uri
          : item.uri === "/"
            ? "/root"
            : `/root${item.uri}`
      }
      slots={{
        item: (customItemProps: CustomTreeItemProps) => (
          <TreeItem
            updateLastSelectedNode={updateLastSelectedNode}
            {...customItemProps}
          />
        ),
      }}
    />
  );
};
