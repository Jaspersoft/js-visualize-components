/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import _ from "underscore";
// @ts-ignore
import XRegExp from "xregexp";
// @ts-ignore
import globalConfig from "../constants/globalConfiguration.settings";
import moment from "moment";
import {
  StepperStateProps,
  ScheduleErrorsProps,
  IState,
} from "../types/scheduleType";
import {
  accessiblePermissionMask,
  ERROR_FIELDS,
  SEND_ATTACHMENT,
} from "../constants/schedulerConstants";
import { checkPermissionOnResource } from "../services/schedulerServices";
import store from "../store/store";

const validatedFolderURIsCache: { [key: string]: any } = {};
const isEmail = (email: string) => {
  if (!email) return false;
  const re = new RegExp(globalConfig.emailRegExpPattern, "g");
  return re.test(email);
};

const validateEmail = (propName: string, propVal: string[] | string) => {
  let isValid;
  if (!propVal) return false;
  if (Array.isArray(propVal)) {
    isValid = !propVal.some((item: string) => !isEmail(item));
  } else {
    isValid = isEmail(propVal);
  }
  return isValid;
};

const isValidFileName = (fileName: string) => {
  if (!fileName) return false;
  const re = new RegExp(globalConfig.resourceIdNotSupportedSymbols, "g");
  return !re.test(fileName);
};

const isValidUri = (uri: string) => {
  if (!uri) return false;
  if (uri.indexOf("${") >= 0) return true;
  const re = new RegExp(globalConfig.resourceIdNotSupportedSymbols, "g");
  return !re.test(uri.replace(/\//g, "")); // exclude / from testing value
};

const isFieldEmpty = (propVal: string) => {
  return !propVal || _.isEmpty(String(propVal).trim());
};

const isPastDate = (propVal: string) => {
  const timeZone = `${(store.getState() as IState)?.schedulerUIConfig?.timezone}`,
    selectedDate = moment(propVal).format("X");

  if (!propVal || !timeZone) return false;
  // 'undefined' in toLocaleString signifies users default locale
  let currentDate = new Date().toLocaleString(undefined, { timeZone });
  currentDate = moment(currentDate).format("X");
  return selectedDate < currentDate;
};

const getFolderErr = async (folderUri: string) => {
  if (validatedFolderURIsCache[folderUri]) {
    return validatedFolderURIsCache[folderUri];
  }
  const folderUriError: { folderURI: string | undefined } = {
    folderURI: undefined,
  };
  try {
    const validResourceProps = await checkPermissionOnResource(folderUri);
    if (
      accessiblePermissionMask.indexOf(validResourceProps.permissionMask) < 0
    ) {
      folderUriError.folderURI =
        "error.report.schedule.output.folder.notwriteable";
    }
  } catch (e: any) {
    folderUriError.folderURI = e.responseJSON
      ? `error.${e.responseJSON?.errorCode}`
      : "error.unexpected.occurred";
  }
  validatedFolderURIsCache[folderUri] = folderUriError;
  return folderUriError;
};

export const validator = (
  propName: string,
  propVal: string,
  extraParams?: Pick<StepperStateProps, "startType" | "outputTimeZone">,
) => {
  let schedulerPropError;
  switch (propName) {
    case ERROR_FIELDS.SCHEDULE_JOB_NAME:
      if (isFieldEmpty(propVal)) {
        schedulerPropError = "error.schedule.job.name";
      } else if (propVal.length > 100) {
        schedulerPropError = "error.schedule.job.name.too.long";
      }
      break;
    case ERROR_FIELDS.SCHEDULE_JOB_DESCRIPTION:
      if (propVal.length > 250) {
        schedulerPropError = "error.schedule.job.description.too.long";
      }
      break;
    case ERROR_FIELDS.RECURRENCE:
      if (isFieldEmpty(propVal)) {
        schedulerPropError = "error.recurrence";
      } else if (
        String(propVal).includes(".") ||
        !Number.isInteger(Number(propVal)) ||
        Number(propVal) <= 0
      ) {
        schedulerPropError = "error.recurrence.must.be.integer";
      }
      break;
    case ERROR_FIELDS.START_DATE:
      if (extraParams?.startType === 2 && isFieldEmpty(propVal)) {
        schedulerPropError = "error.start.date";
      } else if (isPastDate(propVal)) {
        schedulerPropError = "error.past.date";
      }
      break;
    case ERROR_FIELDS.EMAIL_ADDRESS:
      if (isFieldEmpty(propVal)) {
        schedulerPropError = "notifications.send.schedule.to.helper.text";
      } else if (!validateEmail(propName, propVal)) {
        schedulerPropError = "error.email.address";
      }
      break;

    case ERROR_FIELDS.EMAIL_SUBJECT:
      if (isFieldEmpty(propVal)) {
        schedulerPropError = "error.enter.subject";
      } else if (propVal?.length > 100) {
        schedulerPropError = "error.subject.too.long";
      }
      break;
    case ERROR_FIELDS.MESSAGE:
      if (propVal?.length > 2000) {
        schedulerPropError = "error.message.too.long";
      }
      break;
    case ERROR_FIELDS.FILE_NAME:
      if (isFieldEmpty(propVal)) {
        schedulerPropError = "error.file.name";
      } else if (propVal?.length > 200) {
        schedulerPropError = "error.file.name.too.long";
      } else if (!isValidFileName(propVal)) {
        schedulerPropError = "error.invalid.file.name";
      }
      break;
    case ERROR_FIELDS.OUTPUT_FORMAT:
      if (!propVal?.length) {
        schedulerPropError = "error.output.format";
      }
      break;
    case ERROR_FIELDS.SEND_TYPE:
      if (propVal === SEND_ATTACHMENT) {
        return { folderURI: undefined };
      }
      break;
    case ERROR_FIELDS.FOLDER_URI: {
      if (!propVal?.length) {
        return { folderURI: "error.folder.uri.required" };
      }
      if (!isValidUri(propVal)) {
        return {
          folderURI: "error.report.schedule.output.folder.resourceuri.format",
        };
      }
      return getFolderErr(propVal);
    }
    default:
      break;
  }
  return { [propName]: schedulerPropError };
};

export const stateValidator = (
  state: ScheduleErrorsProps | StepperStateProps,
) => {
  const promises: Array<any> = [];
  const extraParams: {
    startType: number | undefined;
    outputTimeZone: string | undefined;
  } = {
    startType: undefined,
    outputTimeZone: undefined,
  };

  Object.entries(state).forEach(([propertyName, propertyValue]) => {
    if (propertyName === "startDate") {
      extraParams.startType = state.startType;
      extraParams.outputTimeZone = state.outputTimeZone;
    }
    promises.push(
      validator(propertyName, propertyValue as string, extraParams),
    );
  });

  return Promise.all(promises).then((data) => {
    let validationPromise = {};
    data.forEach((item: any) => {
      validationPromise = { ...validationPromise, ...item };
    });
    return validationPromise;
  });
};
