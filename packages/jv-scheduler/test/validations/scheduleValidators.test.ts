import {
  validator,
  stateValidator,
} from "../../src/validations/scheduleValidators";
import { ERROR_FIELDS } from "../../src/constants/schedulerConstants";
import moment from "moment";
import { SEND_ATTACHMENT } from "../../src/constants/schedulerConstants";
import { checkPermissionOnResource } from "../../src/services/schedulerServices";
import store from "../../src/store/store";

jest.mock("../../src/services/schedulerServices", () => ({
  checkPermissionOnResource: jest.fn(),
}));

jest.mock("../../src/store/store", () => ({
  getState: jest.fn(),
}));

describe("scheduleValidators", () => {
  describe("validator", () => {
    it("should validate SCHEDULE_JOB_NAME", () => {
      expect(validator(ERROR_FIELDS.SCHEDULE_JOB_NAME, "")).toEqual({
        scheduleJobName: "error.schedule.job.name",
      });
      expect(
        validator(ERROR_FIELDS.SCHEDULE_JOB_NAME, "a".repeat(101)),
      ).toEqual({ scheduleJobName: "error.schedule.job.name.too.long" });
      expect(validator(ERROR_FIELDS.SCHEDULE_JOB_NAME, "validName")).toEqual({
        scheduleJobName: undefined,
      });
    });

    it("should validate SCHEDULE_JOB_DESCRIPTION", () => {
      expect(
        validator(ERROR_FIELDS.SCHEDULE_JOB_DESCRIPTION, "a".repeat(251)),
      ).toEqual({
        scheduleJobDescription: "error.schedule.job.description.too.long",
      });
      expect(
        validator(ERROR_FIELDS.SCHEDULE_JOB_DESCRIPTION, "validDescription"),
      ).toEqual({ scheduleJobDescription: undefined });
    });

    it("should validate RECURRENCE", () => {
      expect(validator(ERROR_FIELDS.RECURRENCE, "")).toEqual({
        recurrenceInterval: "error.recurrence",
      });
      expect(validator(ERROR_FIELDS.RECURRENCE, "1.5")).toEqual({
        recurrenceInterval: "error.recurrence.must.be.integer",
      });
      expect(validator(ERROR_FIELDS.RECURRENCE, "-1")).toEqual({
        recurrenceInterval: "error.recurrence.must.be.integer",
      });
      expect(validator(ERROR_FIELDS.RECURRENCE, "1")).toEqual({
        recurrenceInterval: undefined,
      });
    });

    it("should validate START_DATE", () => {
      const extraParams = { startType: 2, outputTimeZone: "UTC" };
      (store.getState as jest.Mock).mockReturnValue({
        schedulerUIConfig: { timezone: "UTC" },
      } as any);
      expect(validator(ERROR_FIELDS.START_DATE, "", extraParams)).toEqual({
        startDate: "error.start.date",
      });
      expect(
        validator(
          ERROR_FIELDS.START_DATE,
          moment().subtract(1, "day").toISOString(),
          extraParams,
        ),
      ).toEqual({ startDate: "error.past.date" });
      expect(
        validator(
          ERROR_FIELDS.START_DATE,
          moment().add(1, "day").toISOString(),
          extraParams,
        ),
      ).toEqual({ startDate: undefined });
    });

    it("should validate EMAIL_ADDRESS", () => {
      expect(validator(ERROR_FIELDS.EMAIL_ADDRESS, "")).toEqual({
        address: "error.notifications.email.empty",
      });
      expect(validator(ERROR_FIELDS.EMAIL_ADDRESS, "invalidEmail")).toEqual({
        address: "error.email.address",
      });
      expect(validator(ERROR_FIELDS.EMAIL_ADDRESS, "test@example.com")).toEqual(
        { address: undefined },
      );
    });

    it("should validate EMAIL_SUBJECT", () => {
      expect(validator(ERROR_FIELDS.EMAIL_SUBJECT, "")).toEqual({
        subject: "error.enter.subject",
      });
      expect(validator(ERROR_FIELDS.EMAIL_SUBJECT, "a".repeat(101))).toEqual({
        subject: "error.subject.too.long",
      });
      expect(validator(ERROR_FIELDS.EMAIL_SUBJECT, "validSubject")).toEqual({
        subject: undefined,
      });
    });

    it("should validate MESSAGE", () => {
      expect(validator(ERROR_FIELDS.MESSAGE, "a".repeat(2001))).toEqual({
        messageText: "error.message.too.long",
      });
      expect(validator(ERROR_FIELDS.MESSAGE, "validMessage")).toEqual({
        messageText: undefined,
      });
    });

    it("should validate FILE_NAME", () => {
      expect(validator(ERROR_FIELDS.FILE_NAME, "")).toEqual({
        baseOutputFilename: "error.file.name",
      });
      expect(validator(ERROR_FIELDS.FILE_NAME, "a".repeat(201))).toEqual({
        baseOutputFilename: "error.file.name.too.long",
      });
      expect(validator(ERROR_FIELDS.FILE_NAME, "invalid/fileName")).toEqual({
        baseOutputFilename: "error.invalid.file.name",
      });
      expect(validator(ERROR_FIELDS.FILE_NAME, "validFileName")).toEqual({
        baseOutputFilename: undefined,
      });
    });

    it("should validate OUTPUT_FORMAT", () => {
      expect(validator(ERROR_FIELDS.OUTPUT_FORMAT, "")).toEqual({
        outputFormat: "error.output.format",
      });
      expect(validator(ERROR_FIELDS.OUTPUT_FORMAT, "pdf")).toEqual({
        outputFormat: undefined,
      });
    });

    it("should validate SEND_TYPE", () => {
      expect(validator(ERROR_FIELDS.SEND_TYPE, SEND_ATTACHMENT)).toEqual({
        folderURI: undefined,
      });
    });

    it("should validate FOLDER_URI", async () => {
      (
        checkPermissionOnResource as jest.MockedFunction<
          typeof checkPermissionOnResource
        >
      ).mockResolvedValue({ permissionMask: 1 });
      expect(await validator(ERROR_FIELDS.FOLDER_URI, "")).toEqual({
        folderURI: "error.folder.uri.required",
      });
      expect(await validator(ERROR_FIELDS.FOLDER_URI, "invalid/uri")).toEqual({
        folderURI: "error.report.schedule.output.folder.resourceuri.format",
      });
      expect(await validator(ERROR_FIELDS.FOLDER_URI, "validUri")).toEqual({
        folderURI: undefined,
      });
    });
  });

  describe("stateValidator", () => {
    it("should validate state and return errors", async () => {
      const state = {
        startDate: moment().subtract(1, "day").format(),
        scheduleJobName: "",
        address: "invalid-email",
      };
      const result = await stateValidator(state);
      expect(result).toEqual({
        startDate: "error.past.date",
        scheduleJobName: "error.schedule.job.name",
        address: "error.email.address",
      });
    });
  });
});
