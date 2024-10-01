export const PARAMETERS_TAB = "parameters";
export const SCHEDULE_TAB = "schedule";
export const NOTIFICATIONS_TAB = "notifications";
export const OUTPUT_TAB = "output";
export const allTabs = [
  PARAMETERS_TAB,
  SCHEDULE_TAB,
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
];

export const SEND_LINK = "SEND";
export const SEND_ATTACHMENT = "SEND_ATTACHMENT";

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

export const tabsInfo = {
  [PARAMETERS_TAB]: {
    key: "parameters",
    label: "Parameters",
    value: "parameters",
  },
  [SCHEDULE_TAB]: {
    key: "schedule",
    label: "Schedule",
    value: "schedule",
  },
  [OUTPUT_TAB]: {
    key: "output",
    label: "Output",
    value: "output",
  },
  [NOTIFICATIONS_TAB]: {
    key: "notifications",
    label: "Notifications",
    value: "notifications",
  },
};

export const stepInfo = {
  [SCHEDULE_TAB]: {
    name: "schedule",
    title: "Schedule",
  },
  [PARAMETERS_TAB]: {
    name: "parameters",
    title: "Parameters",
  },
  [OUTPUT_TAB]: {
    name: "output",
    title: "Output",
  },
  [NOTIFICATIONS_TAB]: {
    name: "notifications",
    title: "Notifications",
  },
};

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
    resultSendType: SEND_LINK,
  },
  source: {
    parameters: {
      parameterValues: {},
    },
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
  address: undefined,
  subject: undefined,
  messageText: undefined,
  recurrenceInterval: undefined,
  recurrenceIntervalUnit: undefined,
  startDate: undefined,
  baseOutputFilename: undefined,
  baseOutputFileDescription: undefined,
  resultSendType: SEND_LINK,
  outputFormat: [],
  outputTimeZone: "",
};

export const defaultFieldVisibility = {
  baseOutputFilename: true,
  outputDescription: true,
  outputFormat: true,
  outputTimeZone: true,
  address: true,
  subject: true,
  messageText: true,
  scheduleJobName: true,
  scheduleJobDescription: true,
  recurrenceInterval: true,
  recurrenceIntervalUnit: true,
  reportAccessType: true,
  startTime: true,
};
export const scheduleDefaultErrorState = {
  name: undefined,
  operator: undefined,
  thresholdValue: undefined,
  address: undefined,
  subject: undefined,
  messageText: undefined,
  recurrenceInterval: undefined,
  recurrenceIntervalUnit: undefined,
  startDate: undefined,
  baseOutputFilename: undefined,
  outputFormats: undefined,
  folderURI: undefined,
};
export const defaultState = {
  userTimeZones: [],
  outputFormats: [],
  tabsConfiguration: {
    tabsToShow: [],
    stepsToShow: [],
  },
  stepperConfiguration: {
    show: true,
  },
  schedulerUIConfig: {},
  folderData: {},
  stepperState,
  scheduleErrors: {
    ...scheduleDefaultErrorState,
  },
  scheduleApisFailure: {
    userTimezoneApiFailure: false,
    userOutputFormatApiFailure: false,
    createScheduleApiFailure: false,
    initialTreeDataLoadApiFailure: false,
    treeLoadApiFailure: false,
  },
  lastApiCalledFailed: "",
  fakeRoot: [],
  fieldsVisibility: defaultFieldVisibility,
  scheduleInfo: {
    ...ScheduleDefaultState,
  },
  visitedTabs: [],
  currentActiveTab: "schedule",
  visualize: undefined,
  parametersTabLoading: {
    isLoaded: true,
    isError: false,
  },
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
export const accessiblePermissionMask = [1, 30, 6];
export const ERROR_FIELDS = {
  NAME: "name",
  SCHEDULE_JOB_NAME: "scheduleJobName",
  SCHEDULE_JOB_DESCRIPTION: "scheduleJobDescription",
  THRESHOLD: "thresholdValue",
  RECURRENCE: "recurrenceInterval",
  START_DATE: "startDate",
  EMAIL_ADDRESS: "address",
  EMAIL_SUBJECT: "subject",
  MESSAGE: "messageText",
  FILE_NAME: "baseOutputFilename",
  OUTPUT_FORMAT: "outputFormat",
  FOLDER_URI: "folderURI",
  SEND_TYPE: "resultSendType",
};
export const OUTPUT_TIME_ZONE = "outputTimeZone";
export const OUTPUT_FORMAT = "outputFormat";

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
  [PARAMETERS_TAB]: INCOMPLETE_DEFAULT_STATE,
  [SCHEDULE_TAB]: INCOMPLETE_DEFAULT_STATE,
  [NOTIFICATIONS_TAB]: INCOMPLETE_STATE,
  [OUTPUT_TAB]: INCOMPLETE_DEFAULT_STATE,
};

export const tabsDefaultOrder = [
  "schedule",
  "parameters",
  "output",
  "notifications",
];

export const manadatoryHiddenField = [
  "label",
  "address",
  "subject",
  "baseOutputFilename",
];

export const scheduleTabsFields = [];
export const typeOfFields: { [key: string]: string } = {
  label: "simple",
  description: "simple",
  recurrenceInterval: "simple",
  recurrenceIntervalUnit: "simple",
  startTime: "radio",
  baseOutputFilename: "simple",
  outputDescription: "simple",
  outputFormat: "simple",
  outputTimeZone: "simple",
  address: "simple",
  subject: "simple",
  messageText: "simple",
  reportAccessType: "radio",
  folderUri: "simple",
};

export const PUBLIC_FOLDER = "/public";
export const ROOT_FOLDER = "/root";

export const mapFieldName: { [key: string]: string } = {
  label: "scheduleJobName",
  description: "scheduleJobDescription",
};

export const validationMessages = {
  "error.schedule.job.description.too.long":
    "The scheduled job description is too long. The maximum length is 250 characters.",
  "error.schedule.job.name.too.long":
    "The scheduled job name is too long. The maximum length is 100 characters.",
  "error.invalid.file.name":
    "The base output name contains invalid characters. You might have mistyped it.",
  "error.file.name.too.long":
    "The file name is too long. It must be 200 characters or less.",
  "error.recurrence.must.be.integer":
    "The recurrence interval must be an integer greater than 0.",
  "error.schedule.job.name": "Scheduled job name should not be empty.",
  "error.schedule.job.description":
    "Scheduled job description should not be empty.",
  "error.recurrence": "Recurrence interval should not be empty.",
  "error.start.date": "Start date and time should not be empty or invalid.",
  "error.past.date":
    "Start date and time is in the past. The start date and time must be in the future.",
  "error.email.address": "One or more email addresses are invalid.",
  "error.enter.subject": "Subject should not be empty.",
  "error.subject.too.long": "The subject is too long.",
  "error.message.too.long": "The message is too long.",
  "error.file.name": "File name should not be empty.",
  "error.output.format": "Formats should not be empty",
  "error.folder.uri.required": "Folder uri should not be empty.",
  "error.report.schedule.output.folder.resourceuri.format":
    "The scheduled job output folder contains invalid characters.",
  "error.notifications.email.empty":
    "Email address should not be empty.Please one or more email addresses.",
  "error.report.schedule.output.folder.notwriteable":
    "The scheduled job output folder has restricted access.",
};
