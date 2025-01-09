/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlsConfig } from "@jaspersoft/jv-input-controls";
import { VisualizeClient } from "@jaspersoft/jv-tools";

export interface ApiErrorMsg {
  apiErrorTitle?: string;
  retryNetworkTitle?: string;
}
export interface ApiFailedProps extends ApiErrorMsg {
  userTimezoneApiFailure?: boolean;
  userOutputFormatApiFailure?: boolean;
  createScheduleApiFailure?: boolean;
  initialTreeDataLoadApiFailure?: boolean;
  treeLoadApiFailure?: boolean;
}

export interface SchedulerConfig {
  dryRun?: boolean;
  tabs?: {
    activeTab?: string;
    tabsOrder?: string[];
    tabsData?: {
      schedule?: {};
      parameters?: {};
      output?: {};
      notifications?: {};
    };
  };
  stepper?: {
    show?: boolean;
  };
  events?: {
    success?: () => void;
    error?: (error: { [key: string]: string }) => void;
    cancelBtnClick?: () => void;
    scheduleBtnClick?: (
      isScheduleCreatedSuccessfully: boolean,
      jobInformation: any,
    ) => void;
  };
  locale?: string;
  timezone?: string;
}
interface StepperErrorDataProps {
  baseOutputFilename?: string;
  messageText?: string;
  name?: string;
  operator?: string;
  recurrenceIntervalUnit?: string;
  subject?: string;
  startType?: number | undefined;
  outputTimeZone?: string | undefined;
}

export interface StepperStateProps extends StepperErrorDataProps {
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

export interface ScheduleErrorsProps extends StepperErrorDataProps {
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

interface RepositoryDestinationProps {
  folderURI: string;
  saveToRepository: boolean;
  outputDescription?: string;
}

export interface MailNotificationsProps {
  messageText: string;
  subject: string;
  toAddresses: {
    address: string;
  };
  resultSendType: string;
}

export interface FieldsVisibilityProps {
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
  resultSendType?: boolean;
  description?: boolean;
  startTime?: boolean;
  scheduleJobDescription?: boolean;
  scheduleJobName?: boolean;
}
export type TabConfigProps = {
  tabsToShow?: tabsToShow[];
  stepsToShow?: stepsToShow[];
};
export interface TabsConfigurationProps {
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

export interface SchedulerInitialPluginDataProps {
  currentActiveTab: string;
  fieldsVisibility: FieldsVisibilityProps;
  scheduleInfo: ScheduleInfoProps;
  showStepper: boolean;
  stepperDefaultState: StepperStateProps;
  stepsToShow: stepsToShow[];
  tabsToShow: tabsToShow[];
  fieldsSupportedValues: {
    outputFormat: string[];
  };
}

export interface IState extends SchedulerInitialPluginDataProps {
  scheduleErrors: ScheduleErrorsProps;
  visitedTabs: string[];
  outputFormats: string[];
  tabsConfiguration: TabConfigProps;
  stepperConfiguration: {
    show: boolean;
  };
  parametersTabConfig: InputControlsConfig;
  stepperState?: StepperStateProps;
  scheduleApisFailure?: ApiFailedProps;
  lastApiCalledFailed?: boolean;
  folderData?: any;
  fakeRoot?: any;
  schedulerUIConfig?: SchedulerConfig;
  userTimeZones: [{ code: string; description: string }];
  parametersTabLoading: {
    isLoaded: boolean;
    isError: boolean;
  };
  visualize: VisualizeClient;
}

export interface StoreDataProps {}

export interface ScheduleInfoProps {
  baseOutputFilename: string;
  baseOutputFileDescription: string;
  scheduleJobName: string;
  scheduleJobDescription: string;
  mailNotification: MailNotificationsProps;
  trigger: TriggerProps;
  outputTimeZone: string;
  outputFormatList: string[];
  outputFormats: OutputFormatProps;
  userTimeZones: [{ code: string; description: string }];
  repositoryDestination: RepositoryDestinationProps;
  source: {
    parameters: {
      parameterValues: { [key: string]: string[] };
    };
  };
}

export interface TriggerProps {
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

export interface OutputFormatProps {
  outputFormat: string[];
}

export interface StepperDataProps {
  baseOutputFilename?: string;
  messageText?: string;
  name?: string;
  operator?: string;
  recurrenceIntervalUnit?: string;
  subject?: string;
  startType?: number | undefined;
  outputTimeZone?: string | undefined;
}

export interface FakeRootDataProps {
  id: string;
  label: any;
  uri: string;
  resourceType: string;
  permissionMask: number;
}

export type translationProps = { t: (k: string | undefined) => string };

export type ScheduleInfoPropsOptionalProps = {
  outputTimeZone?: string;
};
