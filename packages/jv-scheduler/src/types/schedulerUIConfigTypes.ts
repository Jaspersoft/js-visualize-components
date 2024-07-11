export interface ISchedulerUIConfig {
  server: string;
  resourceURI: string;
  contextPath?: string;
  Tabs?: {
    output?: {};
    parameter: {};
    schedule: {};
    notification: {};
  };
  locale?: string;
  timezone?: string;
}
