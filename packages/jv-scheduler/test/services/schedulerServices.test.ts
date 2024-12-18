import axios from "axios";
import {
  checkPermissionOnResource,
  createDummySchedule,
  createSchedule,
  getFakeRootDataFromService,
  getOutputFormatsFromService,
  getRepositoryFolderData,
  getUserTimezonesFromService,
} from "../../src/services/schedulerServices";
import store from "../../src/store/store";

jest.mock("axios");
jest.mock("../../src/store/store");

describe("schedulerServices", () => {
  const mockState = {
    schedulerUIConfig: {
      server: "http://localhost",
      contextPath: "/jasperserver",
      timezone: "UTC",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  store.getState = jest.fn().mockReturnValue(mockState);

  describe("checkPermissionOnResource", () => {
    it("should return data on success", async () => {
      const mockData = { permissionMask: 1 };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await checkPermissionOnResource(
        "/path",
        "http://localhost",
        "/jasperserver",
      );
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost/jasperserver/rest_v2/resources/path",
        { withCredentials: true, headers: { Accept: "application/json" } },
      );
    });

    it("should return error on failure", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("Failed"));

      const result = await checkPermissionOnResource(
        "/path",
        "http://localhost",
        "/jasperserver",
      );
      expect(result).toEqual({ error: "Failed to check permission folder" });
    });
  });

  describe("getUserTimezonesFromService", () => {
    it("should return data on success", async () => {
      const mockData = { timezones: ["UTC"] };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await getUserTimezonesFromService();
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost/jasperserver/rest_v2/settings/userTimeZones",
        { headers: { Accept: "application/json" } },
      );
    });

    it("should return error on failure", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("Failed"));

      const result = await getUserTimezonesFromService();
      expect(result).toEqual({ error: "Failed to fetch user timezones" });
    });
  });

  describe("getOutputFormatsFromService", () => {
    it("should return data on success", async () => {
      const mockData = { formats: ["pdf"] };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await getOutputFormatsFromService();
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost/jasperserver/rest_v2/settings/alertingSettings",
        { headers: { Accept: "application/json" } },
      );
    });

    it("should return error on failure", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("Failed"));

      const result = await getOutputFormatsFromService();
      expect(result).toEqual({ error: "Failed to fetch output options" });
    });
  });

  describe("getRepositoryFolderData", () => {
    it("should return data on success", async () => {
      const mockData = { folders: [] };
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await getRepositoryFolderData("/path");
      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost/jasperserver/rest_v2/api/resources?folderUri=%2Fpath&recursive=false&type=folder&offset=0&limit=5000&forceTotalCount=true&forceFullPage=true",
        { withCredentials: true, headers: { Accept: "application/json" } },
      );
    });

    it("should return error on failure", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("Failed"));

      const result = await getRepositoryFolderData("/path");
      expect(result).toEqual({
        error: "Failed to fetch repository folder data",
      });
    });
  });

  describe("getFakeRootDataFromService", () => {
    it("should return data on success", async () => {
      const mockData =
        '<div id=\'treeNodeText\'>{"children":[],"label":"root","extra":{}}</div>';
      (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

      const result = await getFakeRootDataFromService();
      expect(result).toEqual([
        {
          id: "/root",
          label: "root",
          uri: "/",
          resourceType: "folder",
          permissionMask: 2,
        },
      ]);
    });

    it("should return error on failure", async () => {
      (axios.get as jest.Mock).mockRejectedValue(new Error("Failed"));

      const result = await getFakeRootDataFromService();
      expect(result).toEqual({ error: "Failed to fetch base folder data" });
    });
  });

  describe("createSchedule", () => {
    it("should create schedule successfully", async () => {
      const mockData = { id: 1 };
      (axios.put as jest.Mock).mockResolvedValue({ data: mockData });

      const scheduleInfo = { name: "test" };
      const result = await createSchedule(scheduleInfo);
      expect(result.data).toEqual(mockData);
      expect(axios.put).toHaveBeenCalledWith(
        "http://localhost/jasperserver/rest_v2/jobs",
        scheduleInfo,
        {
          withCredentials: true,
          headers: {
            Accept: "application/job+json",
            "Content-Type": "application/job+json",
            "x-requested-with": "XMLHttpRequest, OWASP CSRFGuard Project",
            "X-Remote-Domain": "http://localhost",
            "X-Suppress-Basic": "true",
          },
        },
      );
    });
  });

  describe("createDummySchedule", () => {
    it("should return schedule info", async () => {
      const scheduleInfo = { name: "test" };
      const result = await createDummySchedule(scheduleInfo);
      expect(result).toEqual(scheduleInfo);
    });
  });
});
