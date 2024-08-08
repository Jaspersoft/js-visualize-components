const schedulerUIConfig = {
  server: "http://localhost:8080/jasperserver-pro",
  resourceURI: "/public/Samples/Reports/02._Sales_Mix_by_City_Report",
  contextPath: "/jasperserver-pro",
  tabs: {
    // should have array of length 4
    tabsOrder: ["schedule", "parameters", "output", "notifications"],
    tabsData: {
      schedule: {
        defaultValues: {
          // name of the schedule: required in config
          label: { value: "aaa" },
          description: {
            value: "description test 1",
            showField: false,
          },
          recurrenceInterval: { showField: true, value: 1 },
          recurrenceIntervalUnit: {
            showField: true,
            value: "HOUR",
          },
          startTime: {
            startType: { value: 1 },
            // if startType is 2, we need start date
            startDate: {
              value: "2024-07-31 14:11",
            },
          },
        },
      },
      output: {
        defaultValues: {
          // output file name
          // outputFileName: required in config
          baseOutputFilename: {
            showField: true,
            value: "File name",
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
          // reportAccessType: {
          //   value: "SEND", // "SEND_ATTACHMENT" | "SEND"
          //   folderURI: {
          //     value: "/public",
          //   },
          //   saveToRepository: { showField: true, disabled: false, value: true },
          // },
        },
      },
    },
  },
  successIcon: "React/HTML element",
  errorIcon: "React/ HTML element",
  locale: "en",
  timezone: "UTC",
};
export default schedulerUIConfig;
