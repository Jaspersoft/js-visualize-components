const schedulerUIConfig = {
  server: "http://localhost:8080/jasperserver-pro",
  resourceURI: "/public/Samples/Reports/02._Sales_Mix_by_City_Report",
  contextPath: "/jasperserver-pro",
  stepper: {
    show: true,
  },
  tabs: {
    tabsOrder: ["schedule", "parameters", "notifications", "output"],
    tabsData: {
      schedule: {
        defaultValues: {
          // name of the schedule: required in config
          label: { value: "aa cdn" },
          description: {
            value: "description test 1",
            showField: true,
          },
          recurrenceInterval: { showField: true, value: 1 },
          recurrenceIntervalUnit: {
            showField: true,
            value: "HOUR",
          },
          startTime: {
            showField: true,
            value: "2024-07-31 14:11",
            options: ["now", "specificDateAndTime"],
          },
        },
      },
      output: {
        defaultValues: {
          // output file name
          // outputFileName: required in config
          baseOutputFilename: {
            showField: true,
            value: "Filename",
          },
          outputDescription: {
            showField: true,
            value: "File description",
          },
          outputFormat: { showField: true, value: ["pdf"] },
          // required
          outputTimeZone: {
            showField: true,
            value: "America/Los_Angeles",
          },
        },
      },
      parameters: {
        defaultValues: {
          // list of parameters
        },
      },
      notifications: {
        defaultValues: {
          // required in config
          address: { showField: true, value: ["test@cloud.com"] },
          // required in config
          subject: { showField: true, value: "Email subject" },
          messageText: {
            // showField: true,
            value: "Email message",
          },
          reportAccessType: {
            showField: true,
            value: "/public/Samples", // "SEND_ATTACHMENT" | "SEND"
            options: ["SEND", "SEND_ATTACHMENT"],
          },
        },
      },
    },
  },
  locale: "en",
  timezone: "UTC",
};
export default schedulerUIConfig;
