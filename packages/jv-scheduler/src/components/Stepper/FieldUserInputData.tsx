/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React, { FC } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { KeyValueTemplate } from "./KeyValueTemplate";
import { ErrorTemplate } from "./ErrorTemplate";
import {
  timeFrames,
  RECURRENCE_INTERVAL_DATE_TIME,
  RECURRENCE_INTERVAL_NOW,
  MAX_STEPPER_EMAIL_ADDRESS,
  MAX_STEPPER_OUTPUT_FORMATS,
  START_TIME_FORMAT,
  SEND_LINK,
} from "../../constants/schedulerConstants";
import { useTranslation } from "react-i18next";
import { IState } from "../../types/scheduleType";

interface InputDataInStepProps {
  error: string | undefined;
  value: string | undefined | null | number;
  title: string;
  dataName: string;
  className?: string;
}

interface InputDataInStepProps {
  error: string | undefined;
  value: string | undefined | null | number;
  title: string;
  dataName: string;
  className?: string;
}

export const InputDataInStep: FC<InputDataInStepProps> = ({
  error,
  value,
  title,
  dataName,
  className = "",
}) => {
  return (
    <>
      {error ? (
        <ErrorTemplate text={error} dataName={`${dataName}-err`} />
      ) : (
        <KeyValueTemplate
          title={title}
          value={value}
          dataName={dataName}
          className={className}
        />
      )}
    </>
  );
};

export const ScheduleStepUserInput = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const label = useSelector((state: any) => state.stepperState.label),
    description = useSelector((state: any) => state.stepperState.description),
    interval = useSelector(
      (state: any) => state.stepperState.recurrenceInterval,
    ),
    intervalUnit = useSelector(
      (state: any) => state.stepperState.recurrenceIntervalUnit,
    ),
    // intervalErr = useSelector((state: TAlertErrors) => state.alertErrors.recurrenceInterval),
    startDate = useSelector((state: any) => state.stepperState.startDate),
    startType = useSelector((state: any) => state.stepperState.startType),
    // startDateErr = useSelector((state: TAlertErrors) => state.alertErrors.startDate),
    // stepperIntervalErr = intervalErr ? i18n[`alert.stepper.${intervalErr}`] : intervalErr,
    // stepperStartDateErr = startDateErr ? i18n[`alert.stepper.${startDateErr}`] : startDateErr,
    time =
      startType === RECURRENCE_INTERVAL_DATE_TIME
        ? moment(startDate).format(START_TIME_FORMAT)
        : startDate,
    timeFrameValue = timeFrames.filter((item) => item.value === intervalUnit),
    timeFrameText =
      interval === RECURRENCE_INTERVAL_NOW
        ? timeFrameValue[0]?.textSingular?.toLowerCase()
        : timeFrameValue[0]?.textPlural?.toLowerCase();

  return (
    <>
      <InputDataInStep
        error={""}
        title={t("stepper.schedule.jobname.key")}
        value={label}
      />
      <InputDataInStep
        error={""}
        title={t("stepper.schedule.jobdescription.key")}
        value={description}
      />
      <InputDataInStep
        error={""}
        title={t("stepper.schedule.repeat.key")}
        value={`${interval} ${timeFrameText}`}
      />
      {startType === RECURRENCE_INTERVAL_DATE_TIME ? (
        <InputDataInStep
          error={""}
          title={t("stepper.schedule.start.key")}
          value={time}
        />
      ) : (
        <KeyValueTemplate
          title={t("stepper.schedule.start.key")}
          value={t("stepper.schedule.startnow.value")}
        />
      )}
    </>
  );
};

export const NotificationStepUserInput = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const mailNotificationSubject = useSelector(
      (state: any) => state.stepperState.subject,
    ),
    mailNotificationAddresses = useSelector(
      (state: any) => state.stepperState.address,
    ),
    resultSendType = useSelector(
      (state: any) => state.stepperState.resultSendType,
    ),
    // mailNotificationSubjectErr = useSelector((state: TAlertErrors) => state.alertErrors.subject),
    // mailNotificaitonfolderUriErr = useSelector((state: TAlertErrors) => state.alertErrors.folderURI),
    // mailNotificationAddressesErr = useSelector((state: TAlertErrors) => state.alertErrors.address),
    mailNotificationMessage = useSelector(
      (state: any) => state.stepperState.messageText,
    );
  // mailNotificationMessageErr = useSelector((state:TAlertErrors) => state.alertErrors.messageText),
  // stepperSubjectErr = mailNotificationSubjectErr ? i18n[`alert.stepper.${mailNotificationSubjectErr}`] : mailNotificationSubjectErr,
  // stepperAddressErr = mailNotificationAddressesErr ? i18n[`alert.stepper.${mailNotificationAddressesErr}`] : mailNotificationAddressesErr,
  // stepperMessageErr = mailNotificationMessageErr ? i18n[`alert.stepper.${mailNotificationMessageErr}`] : mailNotificationMessageErr,
  // stepperFolderUriErr = mailNotificaitonfolderUriErr ? i18n[`alert.stepper.${mailNotificaitonfolderUriErr}`] : mailNotificaitonfolderUriErr

  let address, reportionOptionValue;
  if (mailNotificationAddresses) {
    [address] = mailNotificationAddresses;
    if (mailNotificationAddresses.length > MAX_STEPPER_EMAIL_ADDRESS) {
      address = `${address} (+${mailNotificationAddresses.length - MAX_STEPPER_EMAIL_ADDRESS} ${t("schedule.more")})`;
    }
  }

  if (resultSendType) {
    reportionOptionValue = resultSendType === SEND_LINK ? "Link" : "Attachment";
  }
  return (
    <>
      <InputDataInStep
        error={""}
        title={t("stepper.notifications.recipients.key")}
        value={address}
      />
      <InputDataInStep
        error={""}
        title={t("stepper.notifications.subject.key")}
        value={mailNotificationSubject}
        className="jv-uTextBreak"
      />
      {mailNotificationMessage && (
        <InputDataInStep
          error={""}
          title={t("stepper.notifications.message.key")}
          value={mailNotificationMessage}
          className=" jv-uTextBreak jv-uTextTruncate3"
        />
      )}
      <InputDataInStep
        error={""}
        title={t("stepper.notifications.access.key")}
        value={reportionOptionValue}
      />
    </>
  );
};

export const OutputStepUserInput = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const fileName = useSelector(
      (state: any) => state.stepperState.baseOutputFilename,
    ),
    fileDescription = useSelector(
      (state: IState) =>
        state.scheduleInfo.repositoryDestination.outputDescription,
    ),
    formats = useSelector((state: any) => state.stepperState.outputFormat),
    // fileNameErr = useSelector((state: TAlertErrors) => state.alertErrors.baseOutputFilename),
    // formatsErr = useSelector((state: TAlertErrors) => state.alertErrors.outputFormat),
    outputTimezone = useSelector(
      (state: any) => state.stepperState.outputTimeZone,
    ),
    timezones = useSelector((state: any) => state.userTimeZones),
    currentTimezone = timezones.filter(
      (item: { code: string }) => item.code === outputTimezone,
    ),
    // stepperFileNameErr = fileNameErr ? i18n[`alert.stepper.${fileNameErr}`] : fileNameErr,
    // stepperFormatErr = formatsErr ? i18n[`alert.stepper.${formatsErr}`] : formatsErr,
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
      <InputDataInStep
        error={""}
        title={t("stepper.output.filename.key")}
        value={fileName}
        className="jv-uTextBreak"
      />
      <InputDataInStep
        error={""}
        title={t("stepper.output.description.key")}
        value={fileDescription}
        className="jv-uTextBreak"
      />
      <KeyValueTemplate
        title={t("stepper.output.timezone.key")}
        value={OutputTimeZone}
      />
      <InputDataInStep
        error={""}
        title={t("stepper.output.formats.key")}
        value={formatsToDisplay}
      />
    </>
  );
};

export const ParametersStepUserInput = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <KeyValueTemplate title={t("stepper.parameters.brand.key")} value="brand" />
  );
};
