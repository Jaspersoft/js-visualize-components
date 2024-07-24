import { SCHEDULE_JOB_NAME } from "../constants/schedulerConstants";

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
