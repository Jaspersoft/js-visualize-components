const schedulerUIConfig = {
  server: "http://localhost:8080/jasperserver-pro",
  contextPath: "/jasperserver-pro",
  resourceURI: "/public/Samples/Reports/ProfitDetailReport",
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
            value: "2024-10-31 14:11",
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
            value: "/public/Samples",
          },
        },
      },
    },
  },
  locale: "en",
  timezone: "UTC",
  handlers: {
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error: any) => {
      console.log("callback ", error);
      console.log("Error");
    },
    events: {
      onCancelBtnClick: () => {
        console.log("onCancelBtnClick");
      },
      onScheduleBtnClick: () => {
        console.log("onScheduleBtnClick");
      },
    },
  },
};
export default schedulerUIConfig;
