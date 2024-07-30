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

export interface IState {
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
