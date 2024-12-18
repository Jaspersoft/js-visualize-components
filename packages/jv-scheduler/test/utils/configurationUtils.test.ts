import { getSchedulerData } from "../../src/utils/configurationUtils";
import { checkPermissionOnResource } from "../../src/services/schedulerServices";

jest.mock("../../src/services/schedulerServices");

describe("configurationUtils", () => {
  describe("getSchedulerData", () => {
    it("should return error if basic resource URI is missing", async () => {
      const scheduleConfig = { resourceURI: "" };
      const result = await getSchedulerData(scheduleConfig);
      expect(result.error).toEqual({
        "resource.uri.missing.configuration":
          "resourceURI is required in the configuration",
      });
    });

    it("should return error if basic server is missing", async () => {
      const scheduleConfig = { resourceURI: "/test", server: "" };
      const result = await getSchedulerData(scheduleConfig);
      expect(result.error).toEqual({
        "server.missing.configuration":
          "server is required in the configuration",
      });
    });

    it("should return error if basic contextPath is missing", async () => {
      const scheduleConfig = {
        resourceURI: "/test",
        server: "https://test.com",
        contextPath: "",
      };
      const result = await getSchedulerData(scheduleConfig);
      expect(result.error).toEqual({
        "contextPath.missing.configuration":
          "contextPath is required in the configuration",
      });
    });

    it("should return error if resource URI is not found", async () => {
      (checkPermissionOnResource as jest.Mock).mockResolvedValue({});
      const scheduleConfig = {
        resourceURI: "resourceURI",
        server: "server",
        contextPath: "contextPath",
      };
      const result = await getSchedulerData(scheduleConfig);
      expect(result.error).toEqual({
        "resource.not.found": "Resource URI was not found",
      });
    });

    it("should return scheduler data if all configurations are correct", async () => {
      (checkPermissionOnResource as jest.Mock).mockResolvedValue({
        permissionMask: 1,
      });
      const scheduleConfig = {
        resourceURI: "resourceURI",
        server: "server",
        contextPath: "contextPath",
        tabs: { tabsData: {}, tabsOrder: [] },
        stepper: { show: true },
      };
      const result = await getSchedulerData(scheduleConfig);
      expect(result).toEqual({
        showStepper: true,
        stepperDefaultState: expect.any(Object),
        scheduleInfo: expect.any(Object),
        tabsToShow: expect.any(Array),
        stepsToShow: expect.any(Array),
        fieldsSupportedValues: expect.any(Object),
        currentActiveTab: expect.any(String),
        fieldsVisibility: expect.any(Object),
      });
    });
  });
  it("should return error if scheduler tab is hidden and required data for it is missing", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["parameters", "notifications", "output"],
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      schedule: {
        "label.missing.value.schedule.tab.hidden.configuration":
          "Value for label is required in the configuration when schedule tab is hidden",
      },
    });
  });

  it("should return error if scheduler tab is visible and required data for it is missing", async () => {
    (checkPermissionOnResource as jest.Mock).mockResolvedValue({
      permissionMask: 1,
    });
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "notifications", "output"],
        tabsData: {
          schedule: {
            label: {
              show: false,
            },
          },
        },
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      "label.hidden.missing.value.configuration":
        "Value for label is required in the configuration when label is hidden",
    });
  });

  it("should return error if scheduler tab is visible and required data for it is incorrect", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "notifications", "output"],
        tabsData: {
          schedule: {
            label: {
              value: "a".repeat(256),
              show: false,
            },
          },
        },
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      "label.invalid":
        "The scheduled job name is too long. The maximum length is 100 characters.",
    });
  });

  it("should return error if notifications tab is hidden and required data for it is missing", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "output"],
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      notifications: {
        "address.hidden.missing.value.notification.tab.hidden.configuration":
          "Value for address is required in the configuration when notifications tab is hidden",
        "subject.hidden.missing.value.configuration":
          "Value for subject is required in the configuration when notifications tab is hidden",
      },
    });
  });

  it("should return error if notifications tab is visible and required data for it is missing", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "notifications", "output"],
        tabsData: {
          notifications: {
            address: {
              show: false,
            },
            subject: {
              show: false,
            },
          },
        },
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      "address.hidden.missing.value.configuration":
        "Value for address is required in the configuration when address is hidden",
      "subject.hidden.missing.value.configuration":
        "Value for subject is required in the configuration when subject is hidden",
    });
  });

  it("should return error if notifications tab is hidden and address not in proper format", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "output"],
        tabsData: {
          notifications: {
            address: {
              value: "",
            },
            subject: {
              value: "subject",
            },
          },
        },
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      notifications: {
        "address.not.in.proper.format":
          "Value for address should be an array of strings",
      },
    });
  });

  it("should return error if output tab is hidden and required data for it is missing", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "notifications"],
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      output: {
        "baseOutputFilename.hidden.missing.value.output.tab.hidden.configuration":
          "Value for baseOutputFilename is required in the configuration when output tab is hidden",
      },
    });
  });

  it("should return error if output tab is visible and required data for it is missing", async () => {
    const scheduleConfig = {
      server: "https://mobiledemo.jaspersoft.com",
      contextPath: "/jasperserver-pro",
      resourceURI: "/test",
      stepper: {
        show: true,
      },
      tabs: {
        tabsOrder: ["schedule", "parameters", "notifications"],
        tabsData: {
          output: {
            baseOutputFilename: {
              show: false,
            },
          },
        },
      },
    };
    const result = await getSchedulerData(scheduleConfig);
    expect(result.error).toEqual({
      "baseOutputFilename.hidden.missing.value.configuration":
        "Value for baseOutputFilename is required in the configuration when baseOutputFilename is hidden",
    });
  });
});
