import { PUBLIC_FOLDER, ROOT_FOLDER } from "../constants/schedulerConstants";
import { getUriParts } from "./schedulerUtils";

export const removeRootFolderPath = (folderUri: string) => {
  let folderName;
  if (folderUri.startsWith(PUBLIC_FOLDER)) {
    folderName = folderUri;
  } else {
    const uriParts = getUriParts(folderUri, false);
    uriParts.shift();
    folderName = `/${uriParts.join("/")}`;
  }
  return folderName;
};

export const addRootFolderPath = (folderUri: string) => {
  return folderUri.startsWith(PUBLIC_FOLDER)
    ? folderUri
    : folderUri === "/"
      ? ROOT_FOLDER
      : `${ROOT_FOLDER}${folderUri}`;
};

export const isTreeNodeDisable = (item: any) => {
  return !(item.permissionMask == 1 || item.permissionMask & 4);
};

export const getExpandedNodeDataFromUri = (
  resourceUri: string,
  isResourceConatinName: boolean,
  itemHandlerCallback?: any,
) => {
  const uriParts = getUriParts(resourceUri, isResourceConatinName);

  return uriParts.reduce((acc: any[], item: string, i: number) => {
    if (i === 0) {
      acc.push(`/${item}`);
    } else {
      acc.push(`${acc[i - 1]}/${item}`);
    }
    itemHandlerCallback?.(acc[i]);
    return acc;
  }, []);
};

const getUriToCompare = (uri: string) => {
  if (uri === "/") return ROOT_FOLDER;
  return uri.startsWith(PUBLIC_FOLDER) ? uri : `${ROOT_FOLDER}${uri}`;
};

const removePublicFolderFromChildren = (children: any) => {
  return children.filter((item: any) => item.uri !== PUBLIC_FOLDER);
};
export const addChildrenToTreeOnLoad = (
  treeStructure: any,
  childrenDataOfTreeNodes: any,
  pathWhereChildrensToBeAdded: string[],
) => {
  let nodeToManipulate = treeStructure;
  pathWhereChildrensToBeAdded.forEach((treeNode: any) => {
    let indexOfNode;
    nodeToManipulate?.some?.((item: any, index: number) => {
      const isNodeFound = getUriToCompare(item.uri) === treeNode;
      if (isNodeFound) {
        indexOfNode = index;
      }
      return isNodeFound;
    });
    nodeToManipulate =
      indexOfNode !== undefined && indexOfNode > -1
        ? nodeToManipulate[indexOfNode]
        : null;
    const uri = nodeToManipulate?.uri
      ? getUriToCompare(nodeToManipulate?.uri)
      : nodeToManipulate?.uri;
    const childrenData = childrenDataOfTreeNodes[uri];
    if (nodeToManipulate && childrenData) {
      if (!nodeToManipulate.children) {
        let modifiedlChildrenData;
        if (Array.isArray(childrenData)) {
          if (uri === ROOT_FOLDER) {
            modifiedlChildrenData =
              removePublicFolderFromChildren(childrenData);
          } else {
            modifiedlChildrenData = childrenData;
          }
        } else {
          modifiedlChildrenData = [];
        }
        nodeToManipulate.children = modifiedlChildrenData;
      }
      nodeToManipulate = nodeToManipulate.children;
    }
  });
  return treeStructure;
};
