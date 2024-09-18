import {
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  PUBLIC_FOLDER,
  ROOT_FOLDER,
  SCHEDULE_TAB,
} from "../constants/schedulerConstants";
import { stateValidator } from "../validations/scheduleValidators";
import { ScheduleInfoProps } from "../types/scheduleType";

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
  currentState: ScheduleInfoProps,
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

export const getLengthOfObject = (obj: any) => {
  return Object.keys(obj).length;
};

export const getUriToCompare = (uri: string) => {
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
export const updateChangeToStore = (
  storeData: { [key: string]: string | any },
  propertyName: string,
  propertyValue: string | string[],
  isStepperVisbile: boolean,
  updateStore: (
    storeData: { [p: string]: any },
    p: { [p: string]: string | string[] },
    isStepperVisbile: boolean,
  ) => {},
) => {
  updateStore(storeData, { [propertyName]: propertyValue }, isStepperVisbile);
};
