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
