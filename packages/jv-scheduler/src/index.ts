/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import "./i18n";
import defaultSchedulerConfig from "./config/config.json";

// react and js api
export { default as Scheduler, renderScheduler } from "./components/EntryPoint";

// scheduler configuration
export { defaultSchedulerConfig };

// types
export type { SchedulerConfigProps } from "./types/scheduleType";
export type { SchedulerProps } from "./components/EntryPoint";
