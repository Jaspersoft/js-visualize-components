import "./i18n";
import SchedulerConfig from "./config/config.json";

// react and js api
export { default as Scheduler, renderScheduler } from "./components/EntryPoint";

// scheduler configuration
export { SchedulerConfig };

// types
export type { SchedulerConfigProps } from "./types/scheduleType";
