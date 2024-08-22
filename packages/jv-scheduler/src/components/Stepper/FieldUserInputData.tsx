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
  const label = useSelector(
      (state: IState) => state.stepperState?.scheduleJobName,
    ),
    description = useSelector(
      (state: IState) => state.stepperState?.scheduleJobDescription,
    ),
    scheduleJobNameErr = useSelector(
      (state: IState) => state.scheduleErrors.scheduleJobName,
    ),
    scheduleJobDescriptionErr = useSelector(
      (state: IState) => state.scheduleErrors.scheduleJobDescription,
    ),
    intervalErr = useSelector(
      (state: IState) => state.scheduleErrors.recurrenceInterval,
    ),
    interval = useSelector(
      (state: IState) => state.stepperState?.recurrenceInterval,
    ),
    intervalUnit = useSelector(
      (state: IState) => state.stepperState?.recurrenceIntervalUnit,
    ),
    // intervalErr = useSelector((state: TAlertErrors) => state.alertErrors.recurrenceInterval),
    startDate = useSelector((state: IState) => state.stepperState?.startDate),
    startType = useSelector((state: IState) => state.stepperState?.startType),
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
        error={scheduleJobNameErr}
        title={t("stepper.schedule.jobname.key")}
        value={label}
        dataName=""
      />
      <InputDataInStep
        error={scheduleJobDescriptionErr}
        title={t("stepper.schedule.jobdescription.key")}
        value={description}
        dataName=""
      />
      <InputDataInStep
        error={intervalErr}
        title={t("stepper.schedule.repeat.key")}
        value={`${interval} ${timeFrameText}`}
        dataName=""
      />
      {startType === RECURRENCE_INTERVAL_DATE_TIME ? (
        <InputDataInStep
          error={""}
          title={t("stepper.schedule.start.key")}
          value={time}
          dataName=""
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
      (state: IState) => state.stepperState?.subject,
    ),
    mailNotificationAddresses = useSelector(
      (state: IState) => state.stepperState?.address,
    ),
    resultSendType = useSelector(
      (state: IState) => state.stepperState?.resultSendType,
    ),
    mailNotificationAddressesErr = useSelector(
      (state: IState) => state.scheduleErrors.address,
    ),
    mailNotificationSubjectErr = useSelector(
      (state: IState) => state.scheduleErrors.subject,
    ),
    mailNotificationMessageErr = useSelector(
      (state: IState) => state.scheduleErrors.messageText,
    ),
    mailNotificationMessage = useSelector(
      (state: IState) => state.stepperState?.messageText,
    );
  // mailNotificationMessageErr = useSelector((state:TAlertErrors) => state.alertErrors.messageText),
  // stepperSubjectErr = mailNotificationSubjectErr ? i18n[`alert.stepper.${mailNotificationSubjectErr}`] : mailNotificationSubjectErr,
  // stepperAddressErr = mailNotificationAddressesErr ? i18n[`alert.stepper.${mailNotificationAddressesErr}`] : mailNotificationAddressesErr,
  // stepperMessageErr = mailNotificationMessageErr ? i18n[`alert.stepper.${mailNotificationMessageErr}`] : mailNotificationMessageErr,
  // stepperFolderUriErr = mailNotificaitonfolderUriErr ? i18n[`alert.stepper.${mailNotificaitonfolderUriErr}`] : mailNotificaitonfolderUriErr

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
      <InputDataInStep
        error={mailNotificationAddressesErr}
        title={t("stepper.notifications.recipients.key")}
        value={address}
        dataName=""
      />
      <InputDataInStep
        error={mailNotificationSubjectErr}
        title={t("stepper.notifications.subject.key")}
        value={mailNotificationSubject}
        className="jv-uTextBreak"
        dataName=""
      />
      {mailNotificationMessage && (
        <InputDataInStep
          error={mailNotificationMessageErr}
          title={t("stepper.notifications.message.key")}
          value={mailNotificationMessage}
          className=" jv-uTextBreak jv-uTextTruncate3"
          dataName=""
        />
      )}
      <InputDataInStep
        error={""}
        title={t("stepper.notifications.access.key")}
        value={reportionOptionValue}
        dataName=""
      />
    </>
  );
};

export const OutputStepUserInput = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const fileName = useSelector(
      (state: IState) => state.stepperState?.baseOutputFilename,
    ),
    fileDescription = useSelector(
      (state: IState) =>
        state.scheduleInfo.repositoryDestination.outputDescription,
    ),
    formats = useSelector((state: IState) => state.stepperState?.outputFormat),
    fileNameErr = useSelector(
      (state: IState) => state.scheduleErrors.baseOutputFilename,
    ),
    formatsErr = useSelector(
      (state: IState) => state.scheduleErrors.outputFormat,
    ),
    outputTimezone = useSelector(
      (state: IState) => state.stepperState?.outputTimeZone,
    ),
    timezones = useSelector((state: IState) => state.userTimeZones),
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
        error={fileNameErr}
        title={t("stepper.output.filename.key")}
        value={fileName}
        className="jv-uTextBreak"
        dataName=""
      />
      <InputDataInStep
        error={""}
        title={t("stepper.output.description.key")}
        value={fileDescription}
        className="jv-uTextBreak"
        dataName=""
      />
      <KeyValueTemplate
        title={t("stepper.output.timezone.key")}
        value={OutputTimeZone}
      />
      <InputDataInStep
        error={formatsErr}
        title={t("stepper.output.formats.key")}
        value={formatsToDisplay}
        dataName=""
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
