import {
  validator,
  stateValidator,
} from "../../src/validations/scheduleValidators";
import { ERROR_FIELDS } from "../../src/constants/schedulerConstants";
import moment from "moment";
import { SEND_ATTACHMENT } from "../../src/constants/schedulerConstants";
import { checkPermissionOnResource } from "../../src/services/schedulerServices";

jest.mock("../../src/services/schedulerServices", () => ({
  checkPermissionOnResource: jest
    .fn()
    .mockResolvedValueOnce({ permissionMask: "read" }),
}));

jest.mock("../../src/store/store", () => ({
  getState: jest.fn().mockReturnValue({
    schedulerUIConfig: { timezone: "UTC" },
  }),
}));

describe("scheduleValidators", () => {
  describe("validator", () => {
    it("should return error for empty job name", () => {
      const result = validator(ERROR_FIELDS.SCHEDULE_JOB_NAME, "");
      expect(result).toEqual({
        [ERROR_FIELDS.SCHEDULE_JOB_NAME]: "error.schedule.job.name",
      });
    });

    it("should return error for job name too long", () => {
      const result = validator(ERROR_FIELDS.SCHEDULE_JOB_NAME, "a".repeat(101));
      expect(result).toEqual({
        [ERROR_FIELDS.SCHEDULE_JOB_NAME]: "error.schedule.job.name.too.long",
      });
    });

    it("should return error for job description too long", () => {
      const result = validator(
        ERROR_FIELDS.SCHEDULE_JOB_DESCRIPTION,
        "test".repeat(251),
      );
      expect(result).toEqual({
        [ERROR_FIELDS.SCHEDULE_JOB_DESCRIPTION]:
          "error.schedule.job.description.too.long",
      });
    });

    it("should return error for empty recurrence interval", () => {
      const result = validator(ERROR_FIELDS.RECURRENCE, "");
      expect(result).toEqual({ [ERROR_FIELDS.RECURRENCE]: "error.recurrence" });
    });

    it("should return error for non-integer recurrence interval", () => {
      const result = validator(ERROR_FIELDS.RECURRENCE, "1.5");
      expect(result).toEqual({
        [ERROR_FIELDS.RECURRENCE]: "error.recurrence.must.be.integer",
      });
    });

    it("should return error for negative recurrence interval", () => {
      const result = validator(ERROR_FIELDS.RECURRENCE, "-1");
      expect(result).toEqual({
        [ERROR_FIELDS.RECURRENCE]: "error.recurrence.must.be.integer",
      });
    });

    it("should not return error for valid recurrence interval", () => {
      const result = validator(ERROR_FIELDS.RECURRENCE, "5");
      expect(result).toEqual({ [ERROR_FIELDS.RECURRENCE]: undefined });
    });

    it("should return error for past date", () => {
      const pastDate = moment().subtract(1, "day").format();
      const result = validator(ERROR_FIELDS.START_DATE, pastDate, {
        startType: 2,
      });
      expect(result).toEqual({ [ERROR_FIELDS.START_DATE]: "error.past.date" });
    });
    it("should return error for empty date when startType is 2", () => {
      const result = validator(ERROR_FIELDS.START_DATE, "", { startType: 2 });
      expect(result).toEqual({ [ERROR_FIELDS.START_DATE]: "error.start.date" });
    });

    it("should return error for empty email", () => {
      const result = validator(ERROR_FIELDS.EMAIL_ADDRESS, "");
      expect(result).toEqual({
        [ERROR_FIELDS.EMAIL_ADDRESS]: "error.notifications.email.empty",
      });
    });

    it("should return error for invalid email", () => {
      const result = validator(ERROR_FIELDS.EMAIL_ADDRESS, "invalid-email");
      expect(result).toEqual({
        [ERROR_FIELDS.EMAIL_ADDRESS]: "error.email.address",
      });
    });

    it("should return error for message too long", () => {
      const result = validator(ERROR_FIELDS.MESSAGE, "test".repeat(2001));
      expect(result).toEqual({
        [ERROR_FIELDS.MESSAGE]: "error.message.too.long",
      });
    });

    it("should return error for empty file name", () => {
      const result = validator(ERROR_FIELDS.FILE_NAME, "");
      expect(result).toEqual({ [ERROR_FIELDS.FILE_NAME]: "error.file.name" });
    });

    it("should return error for invalid file name", () => {
      const result = validator(ERROR_FIELDS.FILE_NAME, "invalid/file?name");
      expect(result).toEqual({
        [ERROR_FIELDS.FILE_NAME]: "error.invalid.file.name",
      });
    });

    it("should return error for empty folder URI", () => {
      const result = validator(ERROR_FIELDS.FOLDER_URI, "");
      expect(result).toEqual({ folderURI: "error.folder.uri.required" });
    });

    it("should return error for invalid folder URI", () => {
      const result = validator(ERROR_FIELDS.FOLDER_URI, "invalid/%uri");
      expect(result).toEqual({
        folderURI: "error.report.schedule.output.folder.resourceuri.format",
      });
    });
    it("should return error for empty output format", () => {
      const result = validator(ERROR_FIELDS.OUTPUT_FORMAT, "");
      expect(result).toEqual({
        [ERROR_FIELDS.OUTPUT_FORMAT]: "error.output.format",
      });
    });

    it("should not return error for valid output format", () => {
      const result = validator(ERROR_FIELDS.OUTPUT_FORMAT, "PDF");
      expect(result).toEqual({ [ERROR_FIELDS.OUTPUT_FORMAT]: undefined });
    });

    it("should return undefined folderURI for send type SEND_ATTACHMENT", () => {
      const result = validator(ERROR_FIELDS.SEND_TYPE, SEND_ATTACHMENT);
      expect(result).toEqual({ folderURI: undefined });
    });

    it("should not return undefined folderURI for send type other than SEND_ATTACHMENT", () => {
      const result = validator(ERROR_FIELDS.SEND_TYPE, "SEND_LINK");
      expect(result).toEqual({});
    });
    it("should return error for empty email subject", () => {
      const result = validator(ERROR_FIELDS.EMAIL_SUBJECT, "");
      expect(result).toEqual({
        [ERROR_FIELDS.EMAIL_SUBJECT]: "error.enter.subject",
      });
    });

    it("should return error for email subject too long", () => {
      const result = validator(ERROR_FIELDS.EMAIL_SUBJECT, "a".repeat(101));
      expect(result).toEqual({
        [ERROR_FIELDS.EMAIL_SUBJECT]: "error.subject.too.long",
      });
    });

    it("should not return error for valid email subject", () => {
      const result = validator(ERROR_FIELDS.EMAIL_SUBJECT, "Valid Subject");
      expect(result).toEqual({ [ERROR_FIELDS.EMAIL_SUBJECT]: undefined });
    });
    it("should return error for file name too long", () => {
      const result = validator(ERROR_FIELDS.FILE_NAME, "a".repeat(201));
      expect(result).toEqual({
        [ERROR_FIELDS.FILE_NAME]: "error.file.name.too.long",
      });
    });

    it("should return folder error for valid folder URI with permission granted", async () => {
      const folderUri = "/valid/folder/uri";
      const result = await validator(ERROR_FIELDS.FOLDER_URI, folderUri);
      expect(result.folderURI).toBeDefined;
    });

    it("should return folder error for valid folder URI with permission not granted", async () => {
      const folderUri = "/valid/folder/uri";
      (checkPermissionOnResource as jest.Mock).mockResolvedValueOnce({
        permissionMask: "none",
      });
      const result = await validator(ERROR_FIELDS.FOLDER_URI, folderUri);
      expect(result).toEqual({
        folderURI: "error.report.schedule.output.folder.notwriteable",
      });
    });

    it("should return folder error for invalid folder URI", async () => {
      const folderUri = "/invalid/folder/uri";
      (checkPermissionOnResource as jest.Mock).mockRejectedValueOnce({
        responseJSON: { errorCode: "invalid_uri" },
      });
      const result = await validator(ERROR_FIELDS.FOLDER_URI, folderUri);
      expect(result).toEqual({
        folderURI: "error.report.schedule.output.folder.notwriteable",
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
