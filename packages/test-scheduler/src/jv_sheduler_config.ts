const schedulerUIConfig = {
  server: "http://localhost:8080/jasperserver-pro",
  resourceURI: "/public/Samples/Reports/02._Sales_Mix_by_City_Report",
  contextPath: "/jasperserver-pro",
  tabs: {
    // should have array of length 4
    tabsOrder: ["parameters", "schedule", "notifications", "output"],
    activeTab: "notifications",
    tabsData: {
      schedule: {
        show: true,
        defaultValues: {
          //name of schedule
          // required in config
          label: { showField: true },
          description: {
            showField: true,
            disabled: false,
            value: "description",
          },
          recurrence: {
            recurrenceInterval: { showField: true, disabled: false, value: 1 },
            recurrenceIntervalUnit: {
              showField: true,
              disabled: false,
              value: "DAY",
            },
          },
          startTime: {
            startType: { showField: true, disabled: false, value: 1 },
            // if startType is 2, we need start date
            startDate: {
              showField: true,
              disabled: false,
              value: "2024-07-31 14:11",
            },
          },
        },
      },
      output: {
        show: true,
        defaultValues: {
          // output file name
          // required
          baseOutputFilename: {
            showField: true,
            disabled: false,
            value: "file name",
          },
          outputDescription: {
            showField: true,
            disabled: false,
            value: "output description",
          },
          outputFormat: { showField: true, disabled: false, value: ["pdf"] },
          // required
          outputTimeZone: {
            showField: true,
            disabled: false,
            value: "America/Los_Angeles",
          },
        },
      },
      parameters: {
        show: true,
        defaultValues: {
          // list of parameters
        },
      },
      notifications: {
        show: true,
        defaultValues: {
          address: { showField: true, disabled: false, value: ["a@tib.com"] },
          subject: { showField: true, disabled: false, value: "subject" },
          messageText: {
            showField: true,
            disabled: false,
            value: "message text",
          },
          folderURI: {
            showField: true,
            disabled: false,
            value: "/public/Samples/Reports",
          },
          saveToRepository: { showField: true, disabled: false, value: true },
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

// tabs: {
//   output: {
//     show: false,
//         defaultValues: {
//       // output file name
//       // required
//       baseOutputFilename: {
//         showField: true,
//             disabled: false,
//             value: "file name",
//       },
//       outputDescription: {
//         showField: true,
//             disabled: false,
//             value: "output description",
//       },
//       outputFormat: { showField: true, disabled: false, value: ["pdf"] },
//       // required
//       outputTimeZone: {
//         showField: true,
//             disabled: false,
//             value: "America/Los_Angeles",
//       },
//     },
//   },
//   parameters: {
//     show: true,
//         defaultValues: {
//       // list of parameters
//     },
//   },
//   schedule: {
//     show: true,
//         defaultValues: {
//       //name of schedule
//       label: { showField: true, disabled: false, value: "test" },
//       description: { showField: true, disabled: false, value: "description" },
//       // Interval (required)
//       recurrenceInterval: { showField: true, disabled: false, value: 1 },
//       // TimeFrame (required)
//       recurrenceIntervalUnit: {
//         showField: true,
//             disabled: false,
//             value: "DAY",
//       },
//       // Start time (required) 1 for now , 2 for specific date and time
//       startType: { showField: true, disabled: false, value: 1 },
//       // if startType is 2, we need start date
//       startDate: {
//         showField: true,
//             disabled: false,
//             value: "2024-07-31 14:11",
//       },
//     },
//   },
//   notifications: {
//     show: true,
//         defaultValues: {
//       address: { showField: true, disabled: false, value: ["a@tib.com"] },
//       subject: { showField: true, disabled: false, value: "subject" },
//       messageText: {
//         showField: true,
//             disabled: false,
//             value: "message text",
//       },
//       folderURI: {
//         showField: true,
//             disabled: false,
//             value: "/public/Samples/Reports",
//       },
//       saveToRepository: { showField: true, disabled: false, value: true },
//     },
//   },
// },
