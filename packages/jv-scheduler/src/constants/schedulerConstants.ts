export const PARAMETERS_TAB = "parameters";
export const SCHEDULE_TAB = "schedule";
export const NOTIFICATIONS_TAB = "notifications";
export const OUTPUT_TAB = "output";
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
    name: "output",
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
  recurrenceIntervalUnit: "DAY",
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
  outputFormats: {
    outputFormat: ["pdf"],
  },
  outputTimeZone: "Asia/Calcutta",
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
export const stepperState = {
  scheduleJobName: undefined,
  scheduleJobDescription: undefined,
  operator: "equals",
  thresholdValue: 0,
  address: undefined,
  subject: undefined,
  messageText: undefined,
  recurrenceInterval: undefined,
  recurrenceIntervalUnit: undefined,
  startDate: undefined,
  baseOutputFilename: undefined,
  baseOutputFileDescription: undefined,
  resultSendType: "SEND",
  outputFormat: [],
  outputTimeZone: "",
};

export const defaultState = {
  userTimeZones: [],
  outputFormats: [],
  schedulerUIConfig: {},
  folderData: {},
  stepperState,
  scheduleApisFailure: {
    userTimezoneApiFailure: false,
    userOutputFormatApiFailure: false,
  },
  fakeRoot: [],
  scheduleInfo: {
    ...ScheduleDefaultState,
  },
  visitedTabs: [],
  currentActiveTab: "schedule",
};

export const RECURRENCE_INTERVAL_DATE_TIME = 2;
export const RECURRENCE_INTERVAL_NOW = 1;
export const MAX_STEPPER_EMAIL_ADDRESS = 1;
export const MAX_STEPPER_OUTPUT_FORMATS = 5;
export const START_TIME_FORMAT = "MM/DD/YYYY, hh:mm A";
export const OUTPUT_FILE_NAME = "baseOutputFilename";
export const OUTPUT_FILE_DESCRIPTION = "baseOutputFileDescription";
export const SCHEDULE_JOB_NAME = "scheduleJobName";
export const SCHEDULE_JOB_DESCRIPTION = "scheduleJobDescription";
export const OUTPUT_TIME_ZONE = "outputTimeZone";
export const OUTPUT_FORMAT = "outputFormat";
export const SEND_LINK = "SEND";
export const SEND_ATTACHMENT = "SEND_ATTACHMENT";

export const INCOMPLETE_STATE = "incomplete";
export const INCOMPLETE_DEFAULT_STATE = "incompleteDefaults";
export const SUCCESS_STATE = "success";
export const ERROR_STATE = "error";

export const stepperSteps: { [key: string]: number } = {
  [PARAMETERS_TAB]: 1,
  [SCHEDULE_TAB]: 0,
  [NOTIFICATIONS_TAB]: 2,
  [OUTPUT_TAB]: 3,
};

export const tabsStateDefaultState: { [key: string]: string } = {
  [PARAMETERS_TAB]: "",
  [SCHEDULE_TAB]: INCOMPLETE_DEFAULT_STATE,
  [NOTIFICATIONS_TAB]: INCOMPLETE_STATE,
  [OUTPUT_TAB]: INCOMPLETE_DEFAULT_STATE,
};