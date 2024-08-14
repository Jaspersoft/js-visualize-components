const schedulerUIConfig = {
  server: "http://localhost:8080/jasperserver-pro",
  resourceURI: "/public/Samples/Reports/02._Sales_Mix_by_City_Report",
  contextPath: "/jasperserver-pro",
  tabs: {
    tabsOrder: ["schedule", "output", "parameters", "notifications"],
    tabsData: {
      schedule: {
        defaultValues: {
          // name of the schedule: required in config
          label: { value: "aaa" },
          description: {
            value: "description test 1",
            showField: true,
          },
          recurrenceInterval: { showField: true, value: 1 },
          recurrenceIntervalUnit: {
            showField: true,
            value: "HOUR",
          },
          // startTime: {
          //   showField: true,
          //   value: "1",
          //   options: ["now", "specificDateAndTime"]
          // },
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
          reportAccessType: {
            showField: true,
            value: "SEND_ATTACHMENT", // "SEND_ATTACHMENT" | "SEND"
            options: ["SEND", "SEND_ATTACHMENT"],
          },
          // reportAccessType: {
          //   showField: true,
          //   value: "SEND", // "SEND_ATTACHMENT" | "SEND"
          // },
          // folderURI: {
          //   showField: true,
          //   value: "/public",
          // },
          // saveToRepository: {
          //   showField: true,
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
