import {
  removeRootFolderPath,
  addRootFolderPath,
  isTreeNodeDisable,
  getExpandedNodeDataFromUri,
  addChildrenToTreeOnLoad,
} from "../../src/utils/treeUtils";
import {
  PUBLIC_FOLDER,
  ROOT_FOLDER,
} from "../../src/constants/schedulerConstants";
import { getUriParts } from "../../src/utils/schedulerUtils";

jest.mock("../../src/utils/schedulerUtils");

describe("treeUtils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("removeRootFolderPath", () => {
    it("should return folderUri if it starts with PUBLIC_FOLDER", () => {
      const folderUri = `${PUBLIC_FOLDER}/some/path`;
      expect(removeRootFolderPath(folderUri)).toBe(folderUri);
    });

    it("should remove root folder path if it does not start with PUBLIC_FOLDER", () => {
      (getUriParts as jest.Mock).mockReturnValue(["root", "some", "path"]);
      const folderUri = "/root/some/path";
      expect(removeRootFolderPath(folderUri)).toBe("/some/path");
    });
  });

  describe("addRootFolderPath", () => {
    it("should return folderUri if it starts with PUBLIC_FOLDER", () => {
      const folderUri = `${PUBLIC_FOLDER}/some/path`;
      expect(addRootFolderPath(folderUri)).toBe(folderUri);
    });

    it('should return ROOT_FOLDER if folderUri is "/"', () => {
      expect(addRootFolderPath("/")).toBe(ROOT_FOLDER);
    });

    it("should add ROOT_FOLDER to folderUri if it does not start with PUBLIC_FOLDER", () => {
      const folderUri = "/some/path";
      expect(addRootFolderPath(folderUri)).toBe(`${ROOT_FOLDER}${folderUri}`);
    });
  });

  describe("isTreeNodeDisable", () => {
    it("should return true if permissionMask is not 1 or does not have 4", () => {
      expect(isTreeNodeDisable({ permissionMask: 0 })).toBe(true);
      expect(isTreeNodeDisable({ permissionMask: 2 })).toBe(true);
    });

    it("should return false if permissionMask is 1 or has 4", () => {
      expect(isTreeNodeDisable({ permissionMask: 1 })).toBe(false);
      expect(isTreeNodeDisable({ permissionMask: 4 })).toBe(false);
    });
  });

  describe("getExpandedNodeDataFromUri", () => {
    it("should return expanded node data from URI", () => {
      (getUriParts as jest.Mock).mockReturnValue(["root", "some", "path"]);
      const resourceUri = "/root/some/path";
      const result = getExpandedNodeDataFromUri(resourceUri, false);
      expect(result).toEqual(["/root", "/root/some", "/root/some/path"]);
    });

    it("should call itemHandlerCallback for each part of the URI", () => {
      (getUriParts as jest.Mock).mockReturnValue(["root", "some", "path"]);
      const resourceUri = "/root/some/path";
      const itemHandlerCallback = jest.fn();
      getExpandedNodeDataFromUri(resourceUri, false, itemHandlerCallback);
      expect(itemHandlerCallback).toHaveBeenCalledTimes(3);
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
      console.log(result, "result");
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
});
