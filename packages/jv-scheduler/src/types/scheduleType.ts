export interface ApiErrorMsg {
  apiErrorTitle?: string;
  retryNetworkTitle?: string;
}
export interface IApiFailed extends ApiErrorMsg {
  userTimezoneApiFailure?: boolean;
  userOutputFormatApiFailure?: boolean;
  createScheduleApiFailure?: boolean;
  initialTreeDataLoadApiFailure?: boolean;
  treeLoadApiFailure?: boolean;
}
interface IScheduleHiddenConfig {
  show: false;
  defaultValues: {
    label: any;
    description?: any;
    recurrence?: any;
    startTime?: any;
  };
}

interface IScheduleVisibleConfig {
  show?: true;
  defaultValues?: {
    label?: any;
    description?: any;
    recurrence?: any;
    startTime?: any;
  };
}

export interface ISchedulerUIConfig {
  server: string;
  resourceURI: string;
  contextPath?: string;
  tabs?: {
    activeTab?: string;
    tabsOrder?: string[];
    tabsData?: {
      schedule?: IScheduleVisibleConfig | IScheduleHiddenConfig;
      parameters?: {};
      output?: {};
      notifications?: {};
    };
  };
  locale?: string;
  timezone?: string;
}
interface IStepperErrorData {
  baseOutputFilename?: string;
  messageText?: string;
  name?: string;
  operator?: string;
  recurrenceIntervalUnit?: string;
  subject?: string;
  startType?: number | undefined;
  outputTimeZone?: string | undefined;
}

export interface IAddress {
  address: string | string[];
}

export interface IStepperState extends IStepperErrorData {
  address?: string | string[];
  outputFormat?: string[];
  startDate?: string | null;
  recurrenceInterval?: number;
  thresholdValue?: number;
  resultSendType?: string;
  outputTimeZone?: string;
  folderURI?: string;
  saveToRepository?: boolean;
  scheduleJobName?: string;
  scheduleJobDescription?: string;
}

export interface IScheduleErrors extends IStepperErrorData {
  baseOutputFileDescription?: string;
  folderURI?: string;
  address?: string;
  outputFormats?: string;
  recurrenceInterval?: string;
  outputFormat?: string;
  startDate?: string;
  scheduleJobName?: string;
  scheduleJobDescription?: string;
  parameters?: string;
}

interface IRepositoryDestination {
  folderURI: string;
  saveToRepository: boolean;
  outputDescription?: string;
}

export interface IMailNotifications {
  messageText: string;
  subject: string;
  toAddresses: {
    address: string;
  };
  resultSendType: string;
}

interface IStepperErrorData {
  baseOutputFilename?: string;
  messageText?: string;
  name?: string;
  operator?: string;
  recurrenceIntervalUnit?: string;
  subject?: string;
  startType?: number | undefined;
  outputTimeZone?: string | undefined;
}

export interface IScheduleErrors extends IStepperErrorData {
  folderURI?: string;
  address?: string;
  outputFormats?: string;
  recurrenceInterval?: string;
  outputFormat?: string;
  startDate?: string;
  thresholdValue?: string;
}

export interface IFieldsVisibility {
  baseOutputFilename?: boolean;
  outputDescription?: boolean;
  outputFormat?: boolean;
  outputTimeZone?: boolean;
  address?: boolean;
  subject?: boolean;
  messageText?: boolean;
  label?: boolean;
  recurrenceInterval?: boolean;
  recurrenceIntervalUnit?: boolean;
  reportAccessType?: boolean;
  description?: boolean;
  startTime?: boolean;
  scheduleJobDescription?: boolean;
  scheduleJobName?: boolean;
}
export type ITabConfig = {
  tabsToShow?: tabsToShow[];
  stepsToShow?: stepsToShow[];
};
export interface ITabsConfiguration {
  currentActiveTab?: string;
  tabsConfiguration?: {
    tabsToShow?: tabsToShow[];
    stepsToShow?: stepsToShow[];
  };
}

type stepsToShow = {
  name: string;
  title: string;
};

type tabsToShow = {
  key: string;
  label: string;
  value: string;
};

export interface ISchedulerInitialPluginData {
  currentActiveTab: string;
  fieldsVisibility: IFieldsVisibility;
  scheduleInfo: IScheduleInfo;
  showStepper: boolean;
  stepperDefaultState: IStepperState;
  stepsToShow: stepsToShow[];
  tabsToShow: tabsToShow[];
}

export interface IState extends ISchedulerInitialPluginData {
  scheduleErrors: IScheduleErrors;
  visitedTabs: string[];
  outputFormats: string[];
  tabsConfiguration: ITabConfig;
  stepperConfiguration: {
    show: boolean;
  };
  stepperState?: IStepperState;
  scheduleApisFailure?: IApiFailed;
  lastApiCalledFailed?: boolean;
  folderData?: any;
  fakeRoot?: any;
  schedulerUIConfig?: ISchedulerUIConfig;
  userTimeZones: [{ code: string; description: string }];
}

export interface IStoreData {}

export interface IScheduleInfo {
  baseOutputFilename: string;
  baseOutputFileDescription: string;
  scheduleJobName: string;
  scheduleJobDescription: string;
  mailNotification: IMailNotifications;
  trigger: ITrigger;
  outputTimeZone: string;
  outputFormatList: string[];
  outputFormats: IOutputFormat;
  userTimeZones: [{ code: string; description: string }];
  repositoryDestination: IRepositoryDestination;
  source: {
    parameters: {
      parameterValues: { [key: string]: string[] };
    };
  };
}

export interface ITrigger {
  simpleTrigger: {
    timezone: string;
    occurrenceCount: number;
    startType: number;
    recurrenceInterval: number;
    recurrenceIntervalUnit: string;
    endDate: null | string;
    startDate: null | string;
  };
}

export interface IOutputFormat {
  outputFormat: string[];
}

export interface IStepperData {
  baseOutputFilename?: string;
  messageText?: string;
  name?: string;
  operator?: string;
  recurrenceIntervalUnit?: string;
  subject?: string;
  startType?: number | undefined;
  outputTimeZone?: string | undefined;
}

export interface IStepperState extends IStepperData {
  address?: string | string[];
  outputFormat?: string[];
  startDate?: string | null;
  recurrenceInterval?: number;
  thresholdValue?: number;
  resultSendType?: string;
  outputTimeZone?: string;
  folderURI?: string;
  saveToRepository?: boolean;
}
export interface IFakeRootData {
  id: string;
  label: any;
  uri: string;
  resourceType: string;
  permissionMask: number;
}
