/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import { FieldHeader } from "./FieldHeader";
import { KeyValueTemplate } from "./KeyValueTemplate";
import { useTranslation } from "react-i18next";
import { IState, translationProps } from "../../types/scheduleType";
import i18nScheduler from "../../i18n";
import { useSelector } from "react-redux";
import { InputDataInStep } from "./FieldUserInputData";
import {
  MAX_STEPPER_EMAIL_ADDRESS,
  MAX_STEPPER_OUTPUT_FORMATS,
  RECURRENCE_INTERVAL_DATE_TIME,
  RECURRENCE_INTERVAL_NOW,
  SEND_LINK,
  START_TIME_FORMAT,
  timeFrames,
} from "../../constants/schedulerConstants";
import moment from "moment/moment";

export const ScheduleStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const label = useSelector(
      (state: IState) => state.scheduleInfo?.scheduleJobName,
    ),
    description = useSelector(
      (state: IState) => state.stepperState?.scheduleJobDescription,
    ),
    interval = useSelector(
      (state: IState) => state.stepperState?.recurrenceInterval,
    ),
    intervalUnit = useSelector(
      (state: IState) => state.stepperState?.recurrenceIntervalUnit,
    ),
    startDate = useSelector(
      (state: IState) => state.scheduleInfo?.trigger?.simpleTrigger?.startDate,
    ),
    startType = useSelector(
      (state: IState) => state.scheduleInfo?.trigger?.simpleTrigger?.startType,
    );

  const time =
      startType === RECURRENCE_INTERVAL_DATE_TIME
        ? moment(startDate).format(START_TIME_FORMAT)
        : startDate,
    timeFrameValue = timeFrames.filter((item) => item.value === intervalUnit),
    timeFrameText =
      interval === RECURRENCE_INTERVAL_NOW
        ? timeFrameValue[0]?.textSingular?.toLowerCase()
        : timeFrameValue[0]?.textPlural?.toLowerCase();

  console.log(startType);
  return (
    <>
      {label?.length ? (
        <InputDataInStep
          title={t("stepper.schedule.jobname.key")}
          value={label}
        />
      ) : (
        <FieldHeader text={t("stepper.schedule.jobname.helpertext")} />
      )}
      {description?.length ? (
        <InputDataInStep
          title={t("stepper.schedule.jobdescription.key")}
          value={description}
        />
      ) : (
        <FieldHeader text={t("stepper.schedule.description.helpertext")} />
      )}
      <FieldHeader text={t("stepper.schedule.recurrence.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.schedule.repeat.key")}
        value={`${interval} ${timeFrameText}`}
      />
      {startType === RECURRENCE_INTERVAL_DATE_TIME ? (
        <InputDataInStep title={t("stepper.schedule.start.key")} value={time} />
      ) : (
        <KeyValueTemplate
          title={t("stepper.schedule.start.key")}
          value={t("stepper.schedule.startnow.value")}
        />
      )}
    </>
  );
};

export const OutputStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;

  const fileName = useSelector(
      (state: IState) => state.stepperState?.baseOutputFilename,
    ),
    fileDescription = useSelector(
      (state: IState) =>
        state.scheduleInfo.repositoryDestination.outputDescription,
    ),
    formats = useSelector((state: IState) => state.stepperState?.outputFormat),
    outputTimezone = useSelector(
      (state: IState) => state.stepperState?.outputTimeZone,
    ),
    timezones = useSelector((state: IState) => state.userTimeZones);

  const currentTimezone = timezones.filter(
      (item: { code: string }) => item.code === outputTimezone,
    ),
    OutputTimeZone = `${currentTimezone[0]?.code} - ${currentTimezone[0]?.description}`;

  let formatsToDisplay;
  if (formats?.length) {
    const displayFormats = formats
      .slice(0, MAX_STEPPER_OUTPUT_FORMATS)
      .map((item: string) => t(`output.format.${item}`))
      .join(", ");

    formatsToDisplay =
      formats.length > MAX_STEPPER_OUTPUT_FORMATS
        ? `${displayFormats} (+${formats.length - MAX_STEPPER_OUTPUT_FORMATS} ${t("schedule.more")})`
        : displayFormats;
  }

  return (
    <>
      {fileName?.length ? (
        <InputDataInStep
          title={t("stepper.output.filename.key")}
          value={fileName}
          className="jv-uTextBreak"
        />
      ) : (
        <FieldHeader text={t("stepper.output.helpertext")} />
      )}
      {fileDescription?.length ? (
        <InputDataInStep
          title={t("stepper.output.description.key")}
          value={fileDescription}
          className="jv-uTextBreak"
        />
      ) : (
        <FieldHeader text={t("stepper.output.description.helpertext")} />
      )}
      <KeyValueTemplate
        title={t("stepper.output.timezone.key")}
        value={OutputTimeZone}
      />
      <KeyValueTemplate
        title={t("stepper.output.formats.key")}
        value={formatsToDisplay}
      />
    </>
  );
};

export const NotificationStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const mailNotificationSubject = useSelector(
      (state: IState) => state.stepperState?.subject,
    ),
    mailNotificationAddresses = useSelector(
      (state: IState) => state.stepperState?.address,
    ),
    resultSendType = useSelector(
      (state: IState) => state.stepperState?.resultSendType,
    ),
    mailNotificationMessage = useSelector(
      (state: IState) => state.stepperState?.messageText,
    );

  let address, reportionOptionValue;
  if (mailNotificationAddresses) {
    address = mailNotificationAddresses.length
      ? mailNotificationAddresses[0]
      : undefined;
    if (mailNotificationAddresses.length > MAX_STEPPER_EMAIL_ADDRESS) {
      address = `${address} (+${mailNotificationAddresses.length - MAX_STEPPER_EMAIL_ADDRESS} ${t("schedule.more")})`;
    }
  }

  if (resultSendType) {
    reportionOptionValue = resultSendType === SEND_LINK ? "Link" : "Attachment";
  }

  return (
    <>
      {mailNotificationAddresses?.length ? (
        <InputDataInStep
          title={t("stepper.notifications.recipients.key")}
          value={address}
        />
      ) : (
        <FieldHeader text={t("stepper.notifications.recipients.helpertext")} />
      )}
      {mailNotificationSubject?.length ? (
        <InputDataInStep
          title={t("stepper.notifications.subject.key")}
          value={mailNotificationSubject}
          className="jv-uTextBreak"
        />
      ) : (
        <FieldHeader text={t("stepper.notifications.subject.helpertext")} />
      )}
      {mailNotificationMessage?.length ? (
        <InputDataInStep
          title={t("stepper.notifications.message.key")}
          value={mailNotificationMessage}
          className=" jv-uTextBreak jv-uTextTruncate3"
        />
      ) : (
        <FieldHeader text={t("stepper.notifications.message.helpertext")} />
      )}
      {reportionOptionValue ? (
        <InputDataInStep
          title={t("stepper.notifications.access.key")}
          value={reportionOptionValue}
        />
      ) : (
        <FieldHeader text={t("stepper.notifications.access.helpertext")} />
      )}
    </>
  );
};

export const ParametersStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  return (
    <>
      <FieldHeader text={t("stepper.parameters.ic.helpertext")} />
    </>
  );
};
