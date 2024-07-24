export const PARAMETERS_TAB = "parameters";
export const SCHEDULE_TAB = "schedule";
export const NOTIFICATIONS_TAB = "notifications";
export const OUTPUT_TAB = "outputOptions";
const allTabs = [PARAMETERS_TAB, SCHEDULE_TAB, NOTIFICATIONS_TAB, OUTPUT_TAB];

export const timeFrames = [
  {
    textPlural: "Hours",
    textSingular: "Hour",
    value: "HOUR",
  },
  {
    textPlural: "Days",
    textSingular: "Day",
    value: "DAY",
  },
  {
    textPlural: "Weeks",
    textSingular: "Week",
    value: "WEEK",
  },
];
export const tabParameters = [
  {
    key: "condition",
    label: "condition.label",
    value: "condition",
  },
  {
    key: "parameters",
    label: "parameters.label",
    value: "parameters",
  },
  {
    key: "schedule",
    label: "schedule.label",
    value: "schedule",
  },
  {
    key: "notifications",
    label: "notifications.label",
    value: "notifications",
  },
  {
    key: "output",
    label: "output.label",
    value: "output",
  },
];

export const stepInfo = [
  {
    name: "schedule",
    title: "Schedule",
  },
  {
    name: "parameters",
    title: "Parameters",
  },
  {
    name: "outputOptions",
    title: "Output",
  },
  {
    name: "notifications",
    title: "Notifications",
  },
];

export const simpleTriggerState = {
  timezone: "",
  occurrenceCount: -1,
  startType: 1,
  recurrenceInterval: 1,
  recurrenceIntervalUnit: "",
  endDate: null,
  startDate: null,
};

export const ScheduleDefaultState = {
  baseOutputFilename: "",
  scheduleJobDescription: "",
  scheduleJobName: "",
  mailNotification: {
    messageText: "",
    subject: "",
    toAddresses: {
      address: [],
    },
    resultSendType: "SEND",
  },
  outputFormats: {},
  // outputTimeZone: config.userTimezone,
  trigger: {
    simpleTrigger: { ...simpleTriggerState },
  },
  repositoryDestination: {
    overwriteFiles: true,
    sequentialFilenames: false,
    folderURI: undefined,
    saveToRepository: true,
    timestampPattern: null,
    outputFTPInfo: {
      type: "ftp",
      port: 21,
      folderPath: null,
      password: null,
      propertiesMap: {},
      serverName: null,
      userName: null,
    },
  },
};

export const defaultState = {
  userTimeZones: [],
  outputFormats: [],
  schedulerUIConfig: {},
  folderData: {},
  scheduleApisFailure: {
    userTimezoneApiFailure: false,
    userOutputFormatApiFailure: false,
  },
  scheduleInfo: {
    ...ScheduleDefaultState,
  },
  visitedTabs: [],
};

export const OUTPUT_FILE_NAME = "baseOutputFilename";
export const OUTPUT_FILE_DESCRIPTION = "baseOutputFileDescription";
export const SCHEDULE_JOB_NAME = "scheduleJobName";
export const SCHEDULE_JOB_DESCRIPTION = "scheduleJobDescription";
export const OUTPUT_TIME_ZONE = "outputTimeZone";
export const OUTPUT_FORMAT = "outputFormat";
export const SEND_LINK = "SEND";
export const SEND_ATTACHMENT = "SEND_ATTACHMENT";
