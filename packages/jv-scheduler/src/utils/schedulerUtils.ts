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
  console.log(jsonAsText);
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
