/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import "./i18n";
import SchedulerConfig from "./config/config.json";

// react and js api
export { default as Scheduler, renderScheduler } from "./components/EntryPoint";

// scheduler configuration
export { SchedulerConfig };

// types
export type { SchedulerConfigProps } from "./types/scheduleType";
