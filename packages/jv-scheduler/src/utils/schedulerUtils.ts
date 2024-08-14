import {
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  SCHEDULE_TAB,
} from "../constants/schedulerConstants";
import { stateValidator } from "../validations/scheduleValidators";
import { IScheduleInfo } from "../types/scheduleType";

const computePermissionMask = (extra) => {
  var mask = 2;
  extra.isWritable && (mask = mask | 4);
  extra.isRemovable && (mask = mask | 16);
  extra.isAdministrable && (mask = 1);
  return mask;
};

const extractRootLevelDataFromHtmlResponse = (html: string) => {
  // The length for '<div id='treeNodeText'>' is 23:
  const START_DIV_LENGTH = 23;
  // The length for '</div>' is 6:
  const END_DIV_LENGTH = 6;
  // Length for start + end is 29:
  const WRAPPING_DIV_LENGTH = 29;

  const htmlTrimmed = html.trim();
  if (htmlTrimmed.length <= WRAPPING_DIV_LENGTH) {
    return {};
  }
  const jsonAsText = htmlTrimmed.substring(
    START_DIV_LENGTH,
    htmlTrimmed.length - END_DIV_LENGTH,
  );
  return JSON.parse(jsonAsText);
};

export const getFakeRootRepositoryData = (data: any) => {
  const extractedData = extractRootLevelDataFromHtmlResponse(data);
  const publicFolder = extractedData.children.find(
      (item: any) => item.uri === "/public",
    ),
    fakeRoot = [
      {
        id: "/root",
        label: extractedData.label,
        uri: "/",
        resourceType: "folder",
        permissionMask: computePermissionMask(extractedData.extra),
      },
    ];
  if (publicFolder) {
    fakeRoot.push({
      id: "/public",
      label: publicFolder.label,
      uri: "/public",
      resourceType: "folder",
      permissionMask: computePermissionMask(publicFolder.extra),
    });
  }
  return fakeRoot;
};

export const getStateOfCurrentActiveTab = (
  tabName: string,
  scheduleCurrentStateValues: any,
) => {
  const {
    label,
    description,
    baseOutputFileDescription,
    baseOutputFilename,
    mailNotification,
    outputFormats,
    trigger,
    outputTimeZone,
    repositoryDestination,
  } = scheduleCurrentStateValues;
  const { toAddresses, subject, messageText, resultSendType } =
    mailNotification;
  const { address } = toAddresses;
  const { outputFormat } = outputFormats;
  const {
      simpleTrigger: {
        recurrenceInterval,
        recurrenceIntervalUnit,
        startDate,
        startType,
      },
    } = trigger,
    { folderURI } = repositoryDestination;
  switch (tabName) {
    case NOTIFICATIONS_TAB:
      return {
        address,
        subject,
        messageText,
        startDate,
        startType,
        folderURI,
        resultSendType,
      };
    case SCHEDULE_TAB:
      return {
        label,
        description,
        recurrenceInterval,
        recurrenceIntervalUnit,
        startDate,
        startType,
        outputTimeZone,
      };
    case OUTPUT_TAB:
      return {
        baseOutputFileDescription,
        baseOutputFilename,
        outputFormat,
        outputTimeZone,
        startDate,
        startType,
      };
    default:
      return {
        description,
        label,
        baseOutputFileDescription,
        startDate,
        startType,
        address,
        subject,
        messageText,
        folderURI,
        resultSendType,
        recurrenceInterval,
        recurrenceIntervalUnit,
        outputTimeZone,
        baseOutputFilename,
        outputFormat,
      };
  }
};
export const getErrorsForCurrentTab = async (
  currentActiveTab: string,
  currentState: IScheduleInfo,
) => {
  const currentTabValues = getStateOfCurrentActiveTab(
    currentActiveTab,
    currentState,
  );
  const errors = await stateValidator(currentTabValues);
  return errors;
};
export const getUriParts = (
  resourceUri: string,
  isResourceContainName: boolean,
) => {
  const removeStartSlash = resourceUri.replace(/^\//g, "");
  const uriParts = removeStartSlash.split("/");
  if (isResourceContainName) uriParts.pop();
  return uriParts;
};

export const getExpandedNodeDataFromUri = (
  resourceUri: string,
  isResourceConatinName: boolean,
  itemHandlerCallback?: any,
) => {
  const uriParts = getUriParts(resourceUri, isResourceConatinName);

  return uriParts.reduce((acc, item, i) => {
    if (i === 0) {
      acc.push(`/${item}`);
    } else {
      acc.push(`${acc[i - 1]}/${item}`);
    }
    itemHandlerCallback?.(acc[i]);
    return acc;
  }, []);
};

export const getLengthOfObject = (obj: any) => {
  return Object.keys(obj).length;
};

export const getUriToCompare = (uri: string) => {
  if (uri === "/") return "/root";
  return uri.startsWith("/public") ? uri : `/root${uri}`;
};

const removePublicFolderFromChildren = (children: any) => {
  return children.filter((item: any) => item.uri !== "/public");
};
export const addChildrenToTreeOnLoad = (
  treeStructure,
  childrenDataOfTreeNodes,
  pathWhereChildrensToBeAdded,
) => {
  let nodeToManipulate = treeStructure;
  pathWhereChildrensToBeAdded.forEach((treeNode, treeNodeIndex) => {
    let indexOfNode;
    nodeToManipulate?.some?.((item, index) => {
      const isNodeFound = getUriToCompare(item.uri) === treeNode;
      if (isNodeFound) {
        indexOfNode = index;
      }
      return isNodeFound;
    });
    nodeToManipulate = indexOfNode > -1 ? nodeToManipulate[indexOfNode] : null;
    const uri = nodeToManipulate?.uri
      ? getUriToCompare(nodeToManipulate?.uri)
      : nodeToManipulate?.uri;
    const childrenData = childrenDataOfTreeNodes[uri];
    if (nodeToManipulate && childrenData) {
      if (!nodeToManipulate.children) {
        let modifiedlChildrenData;
        if (Array.isArray(childrenData)) {
          if (uri === "/root") {
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
