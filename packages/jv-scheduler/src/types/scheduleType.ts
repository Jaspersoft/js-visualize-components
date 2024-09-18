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
interface ScheduleHiddenConfigProps {
  show: false;
  defaultValues: {
    label: any;
    description?: any;
    recurrence?: any;
    startTime?: any;
  };
}

interface ScheduleVisibleConfigProps {
  show?: true;
  defaultValues?: {
    label?: any;
    description?: any;
    recurrence?: any;
    startTime?: any;
  };
}

export interface SchedulerConfigProps {
  server: string;
  resourceURI: string;
  contextPath?: string;
  tabs?: {
    activeTab?: string;
    tabsOrder?: string[];
    tabsData?: {
      schedule?: ScheduleVisibleConfigProps | ScheduleHiddenConfigProps;
      parameters?: {};
      output?: {};
      notifications?: {};
    };
  };
  handlers?: {
    onSuccess?: () => void;
    onError?: (error: any) => void;
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
  reportAccessType?: boolean;
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
}

export interface IState extends SchedulerInitialPluginDataProps {
  scheduleErrors: ScheduleErrorsProps;
  visitedTabs: string[];
  outputFormats: string[];
  tabsConfiguration: TabConfigProps;
  stepperConfiguration: {
    show: boolean;
  };
  stepperState?: StepperStateProps;
  scheduleApisFailure?: ApiFailedProps;
  lastApiCalledFailed?: boolean;
  folderData?: any;
  fakeRoot?: any;
  schedulerUIConfig?: SchedulerConfigProps;
  userTimeZones: [{ code: string; description: string }];
  parametersTabLoading: {
    isLoaded: boolean;
    isError: boolean;
  };
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

export type translationProps = { t: (k: string) => string };
