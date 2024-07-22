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
}

export interface IStoreData {}

export interface IScheduleInfo {
  baseOutputFilename: string;
  baseOutputFileDescription: string;
  scheduleJobName: string;
  scheduleJobDescription: string;
  mailNotification: IMailNotifications;
}
