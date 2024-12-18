import {
  getStateOfCurrentActiveTab,
  getErrorsForCurrentTab,
  getUriParts,
  getExpandedNodeDataFromUri,
  getLengthOfObject,
  getUriToCompare,
  addChildrenToTreeOnLoad,
  updateChangeToStore,
} from "../../src/utils/schedulerUtils";
import { stateValidator } from "../../src/validations/scheduleValidators";
import {
  PUBLIC_FOLDER,
  ROOT_FOLDER,
  NOTIFICATIONS_TAB,
  SCHEDULE_TAB,
  OUTPUT_TAB,
} from "../../src/constants/schedulerConstants";

jest.mock("../../src/validations/scheduleValidators");

describe("schedulerUtils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getStateOfCurrentActiveTab", () => {
    const scheduleCurrentStateValues = {
      scheduleJobDescription: "description",
      scheduleJobName: "name",
      baseOutputFileDescription: "output description",
      baseOutputFilename: "output filename",
      mailNotification: {
        toAddresses: { address: "test@example.com" },
        subject: "subject",
        messageText: "message",
        resultSendType: "sendType",
      },
      outputFormats: { outputFormat: "format" },
      trigger: {
        simpleTrigger: {
          recurrenceInterval: 1,
          recurrenceIntervalUnit: "unit",
          startDate: "startDate",
          startType: "startType",
        },
      },
      outputTimeZone: "timezone",
      repositoryDestination: { folderURI: "folderURI" },
    };

    it("should return correct state for NOTIFICATIONS_TAB", () => {
      const result = getStateOfCurrentActiveTab(
        NOTIFICATIONS_TAB,
        scheduleCurrentStateValues,
      );
      expect(result).toEqual({
        address: "test@example.com",
        subject: "subject",
        messageText: "message",
        startDate: "startDate",
        startType: "startType",
        folderURI: "folderURI",
        resultSendType: "sendType",
      });
    });

    it("should return correct state for SCHEDULE_TAB", () => {
      const result = getStateOfCurrentActiveTab(
        SCHEDULE_TAB,
        scheduleCurrentStateValues,
      );
      expect(result).toEqual({
        scheduleJobName: "name",
        scheduleJobDescription: "description",
        recurrenceInterval: 1,
        recurrenceIntervalUnit: "unit",
        startDate: "startDate",
        startType: "startType",
        outputTimeZone: "timezone",
      });
    });

    it("should return correct state for OUTPUT_TAB", () => {
      const result = getStateOfCurrentActiveTab(
        OUTPUT_TAB,
        scheduleCurrentStateValues,
      );
      expect(result).toEqual({
        baseOutputFileDescription: "output description",
        baseOutputFilename: "output filename",
        outputFormat: "format",
        outputTimeZone: "timezone",
        startDate: "startDate",
        startType: "startType",
      });
    });

    it("should return default state for unknown tab", () => {
      const result = getStateOfCurrentActiveTab(
        "UNKNOWN_TAB",
        scheduleCurrentStateValues,
      );
      expect(result).toEqual({
        scheduleJobName: "name",
        scheduleJobDescription: "description",
        baseOutputFileDescription: "output description",
        startDate: "startDate",
        startType: "startType",
        address: "test@example.com",
        subject: "subject",
        messageText: "message",
        folderURI: "folderURI",
        resultSendType: "sendType",
        recurrenceInterval: 1,
        recurrenceIntervalUnit: "unit",
        outputTimeZone: "timezone",
        baseOutputFilename: "output filename",
        outputFormat: "format",
      });
    });
  });

  describe("getErrorsForCurrentTab", () => {
    it("should return errors for current tab", async () => {
      const currentState = {
        baseOutputFilename: "testFileName",
        baseOutputFileDescription: "file description",
        scheduleJobName: "job name",
        scheduleJobDescription: "job description",
        mailNotification: {
          resultSendType: "SEND_ATTACHMENT",
          messageText: "text",
          subject: "test",
          toAddresses: { address: "test@test.com" },
        },
        trigger: {
          simpleTrigger: {
            timezone: "UTC",
            occurrenceCount: 1,
            startType: 1,
            recurrenceInterval: 1,
            recurrenceIntervalUnit: "DAY",
            endDate: null,
            startDate: null,
          },
        },
        outputTimeZone: "UTC",
        outputFormatList: ["pdf"],
        outputFormats: { outputFormat: ["pdf"] },
        userTimeZones: [{ code: "UTC", description: "UTC" }] as [
          { code: string; description: string },
        ],
        repositoryDestination: {
          folderURI: "/test",
          saveToRepository: true,
        },
        source: {
          parameters: {
            parameterValues: {},
          },
        },
      };
      (stateValidator as jest.Mock).mockResolvedValue({ error: "error" });
      const result = await getErrorsForCurrentTab("tab", currentState);
      expect(result).toEqual({ error: "error" });
    });
  });

  describe("getUriParts", () => {
    it("should return URI parts without resource name", () => {
      const result = getUriParts("/root/some/path", false);
      expect(result).toEqual(["root", "some", "path"]);
    });

    it("should return URI parts with resource name", () => {
      const result = getUriParts("/root/some/path", true);
      expect(result).toEqual(["root", "some"]);
    });
  });

  describe("getExpandedNodeDataFromUri", () => {
    it("should return expanded node data from URI", () => {
      const result = getExpandedNodeDataFromUri("/root/some/path", false);
      expect(result).toEqual(["/root", "/root/some", "/root/some/path"]);
    });

    it("should call itemHandlerCallback for each part of the URI", () => {
      const itemHandlerCallback = jest.fn();
      getExpandedNodeDataFromUri("/root/some/path", false, itemHandlerCallback);
      expect(itemHandlerCallback).toHaveBeenCalledTimes(3);
    });
  });

  describe("getLengthOfObject", () => {
    it("should return length of object", () => {
      const obj = { a: 1, b: 2 };
      const result = getLengthOfObject(obj);
      expect(result).toBe(2);
    });
  });

  describe("getUriToCompare", () => {
    it('should return ROOT_FOLDER for "/"', () => {
      const result = getUriToCompare("/");
      expect(result).toBe(ROOT_FOLDER);
    });

    it("should return URI with ROOT_FOLDER if not starting with PUBLIC_FOLDER", () => {
      const result = getUriToCompare("/some/path");
      expect(result).toBe(`${ROOT_FOLDER}/some/path`);
    });

    it("should return URI if starting with PUBLIC_FOLDER", () => {
      const result = getUriToCompare(`${PUBLIC_FOLDER}/some/path`);
      expect(result).toBe(`${PUBLIC_FOLDER}/some/path`);
    });
  });

  describe("addChildrenToTreeOnLoad", () => {
    it("should add children to tree structure", () => {
      const treeStructure = [{ uri: "/" }];
      const childrenDataOfTreeNodes = {
        [ROOT_FOLDER]: [{ uri: `${ROOT_FOLDER}/child` }],
      };
      const pathWhereChildrensToBeAdded = [ROOT_FOLDER];
      const result = addChildrenToTreeOnLoad(
        treeStructure,
        childrenDataOfTreeNodes,
        pathWhereChildrensToBeAdded,
      );
      expect(result[0].children).toEqual([{ uri: `${ROOT_FOLDER}/child` }]);
    });

    it("should remove PUBLIC_FOLDER from children if uri is ROOT_FOLDER", () => {
      const treeStructure = [{ uri: "/" }];
      const childrenDataOfTreeNodes = {
        [ROOT_FOLDER]: [{ uri: PUBLIC_FOLDER }],
      };
      const pathWhereChildrensToBeAdded = [ROOT_FOLDER];
      const result = addChildrenToTreeOnLoad(
        treeStructure,
        childrenDataOfTreeNodes,
        pathWhereChildrensToBeAdded,
      );
      expect(result[0].children).toEqual([]);
    });
  });

  describe("updateChangeToStore", () => {
    it("should update store with new property value", () => {
      const storeData = { key: "value" };
      const updateStore = jest.fn();
      updateChangeToStore(storeData, "newKey", "newValue", true, updateStore);
      expect(updateStore).toHaveBeenCalledWith(
        storeData,
        { newKey: "newValue" },
        true,
      );
    });
  });
});
