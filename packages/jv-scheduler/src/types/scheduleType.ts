export interface ApiErrorMsg {
  apiErrorTitle?: string;
  retryNetworkTitle?: string;
}
export interface IApiFailed extends ApiErrorMsg {
  userTimezoneApiFailure?: boolean;
  userOutputFormatApiFailure?: boolean;
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
}

export interface IScheduleErrors extends IStepperErrorData {
  folderURI?: string;
  address?: string;
  outputFormats?: string;
  recurrenceInterval?: string;
  outputFormat?: string;
  startDate?: string;
  thresholdValue?: string;
  scheduleJobName?: string;
  scheduleJobDescription?: string;
}

interface IRepositoryDestination {
  folderURI: string;
  saveToRepository: boolean;
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

export interface IState {
  scheduleErrors: IScheduleErrors;
  scheduleInfo: IScheduleInfo;
  visitedTabs: string[];
  outputFormats: string[];
  repositoryDestination: IRepositoryDestination;
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

interface IStepperData {
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
