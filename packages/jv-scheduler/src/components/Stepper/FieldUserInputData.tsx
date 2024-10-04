/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React, { FC } from "react";
import { useSelector } from "react-redux";
import i18nScheduler from "../../i18n";
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
import { IState, translationProps } from "../../types/scheduleType";

interface InputDataInStepProps {
  error: string | undefined;
  value: string | undefined | null | number;
  title: string;
  className?: string;
}

export const InputDataInStep: FC<InputDataInStepProps> = ({
  error,
  value,
  title,
  className = "",
}) => {
  return (
    <>
      {error ? (
        <ErrorTemplate text={error} />
      ) : (
        <KeyValueTemplate title={title} value={value} className={className} />
      )}
    </>
  );
};

export const ScheduleStepUserInput = () => {
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
    startDate = useSelector((state: IState) => state.stepperState?.startDate),
    startType = useSelector((state: IState) => state.stepperState?.startType);

  const scheduleJobNameErr = useSelector(
      (state: IState) => state.scheduleErrors.scheduleJobName,
    ),
    scheduleJobDescriptionErr = useSelector(
      (state: IState) => state.scheduleErrors.scheduleJobDescription,
    ),
    intervalErr = useSelector(
      (state: IState) => state.scheduleErrors.recurrenceInterval,
    ),
    startDateErr = useSelector(
      (state: IState) => state.scheduleErrors.startDate,
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

  return (
    <>
      <InputDataInStep
        error={scheduleJobNameErr}
        title={t("stepper.schedule.jobname.key")}
        value={label}
      />
      <InputDataInStep
        error={scheduleJobDescriptionErr}
        title={t("stepper.schedule.jobdescription.key")}
        value={description}
      />
      <InputDataInStep
        error={intervalErr}
        title={t("stepper.schedule.repeat.key")}
        value={`${interval} ${timeFrameText}`}
      />
      {startType === RECURRENCE_INTERVAL_DATE_TIME ? (
        <InputDataInStep
          error={startDateErr}
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

  const mailNotificationAddressesErr = useSelector(
      (state: IState) => state.scheduleErrors.address,
    ),
    mailNotificationSubjectErr = useSelector(
      (state: IState) => state.scheduleErrors.subject,
    ),
    mailNotificationMessageErr = useSelector(
      (state: IState) => state.scheduleErrors.messageText,
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
      <InputDataInStep
        error={mailNotificationAddressesErr}
        title={t("stepper.notifications.recipients.key")}
        value={address}
      />
      <InputDataInStep
        error={mailNotificationSubjectErr}
        title={t("stepper.notifications.subject.key")}
        value={mailNotificationSubject}
        className="jv-uTextBreak"
      />
      {mailNotificationMessage && (
        <InputDataInStep
          error={mailNotificationMessageErr}
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

  const fileNameErr = useSelector(
      (state: IState) => state.scheduleErrors.baseOutputFilename,
    ),
    formatsErr = useSelector(
      (state: IState) => state.scheduleErrors.outputFormat,
    );

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
      <InputDataInStep
        error={fileNameErr}
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
        error={formatsErr}
        title={t("stepper.output.formats.key")}
        value={formatsToDisplay}
      />
    </>
  );
};

export const ParametersStepUserInput = () => {
  const parameters = useSelector(
    (state: IState) => state.scheduleInfo.source.parameters.parameterValues,
  );

  const parametersErr = useSelector(
    (state: IState) => state.scheduleErrors.parameters,
  );
  return (
    <>
      {parametersErr ? (
        <InputDataInStep
          error={parametersErr}
          value={""}
          title={"Parameters"}
        />
      ) : (
        parameters &&
        Object.keys(parameters).map((key) => {
          return (
            <KeyValueTemplate
              title={key}
              value={parameters[key].join(", ")}
              key={key}
            />
          );
        })
      )}
    </>
  );
};
