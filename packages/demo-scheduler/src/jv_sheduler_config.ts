/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { SchedulerConfig } from "@jaspersoft/jv-scheduler";

const schedulerUIConfig: SchedulerConfig = {
  server: "https://localhost:8443",
  contextPath: "/jasperserver-pro",
  stepper: {
    show: true,
  },
  tabs: {
    tabsOrder: ["schedule", "parameters", "notifications", "output"],
    tabsData: {
      schedule: {
        // name of the schedule: required in config
        label: { value: "Schedule job name" },
        description: {
          value: "Schedule job description",
          show: true,
        },
        recurrenceInterval: { show: true, value: 1 },
        recurrenceIntervalUnit: {
          show: true,
          value: "HOUR",
        },
        startTime: {
          show: true,
          value: "2024-10-31 14:11",
        },
      },
      output: {
        // output file name
        // outputFileName: required in config
        baseOutputFilename: {
          show: true,
          value: "ScheduleJobFilename",
        },
        outputDescription: {
          show: true,
          value: "Schedule job file description",
        },
        outputFormat: { show: true, value: ["pdf", "xls"] },
        // required
        outputTimeZone: {
          show: true,
          value: "America/Los_Angeles",
        },
      },
      parameters: {
        config: { bool: { type: "switch" } },
        events: {
          change: (ics: any, vs: any) => {
            console.log("NEW ICS!! ", ics);
            if (vs) console.log("Validations: ", vs);
          },
        },
      },
      notifications: {
        // required in config
        address: { show: true, value: ["test@cloud.com"] },
        // required in config
        subject: { show: true, value: "Schedule job email subject" },
        messageText: {
          // show: true,
          value: "Email message",
        },
        resultSendType: {
          show: true,
          value: "/public",
        },
      },
    },
  },
  locale: "en",
  timezone: "UTC",
  events: {
    success: () => {
      console.log("Success");
    },
    error: (error: any) => {
      console.log("callback ", error);
      console.log("Error");
    },
    cancelBtnClick: () => {
      console.log("Cancel button is clicked");
    },
    scheduleBtnClick: (isScheduleCreatedSuccessfully, jobInfo) => {
      console.log(isScheduleCreatedSuccessfully, jobInfo);
      console.log("Create schedule button is clicked");
    },
  },
};
export default schedulerUIConfig;
