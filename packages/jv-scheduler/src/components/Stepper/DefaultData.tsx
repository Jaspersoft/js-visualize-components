import React from "react";
import { FieldHeader } from "./FieldHeader";
import { KeyValueTemplate } from "./KeyValueTemplate";
import { useTranslation } from "react-i18next";
import { translationProps } from "../../types/scheduleType";
import i18nScheduler from "../../i18n";

export const ScheduleStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  return (
    <>
      <FieldHeader text={t("stepper.schedule.jobname.helpertext")} />
      <FieldHeader text={t("stepper.schedule.description.helpertext")} />
      <FieldHeader text={t("stepper.schedule.recurrence.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.schedule.repeat.key")}
        value="1 day"
      />
      <KeyValueTemplate
        title={t("stepper.schedule.start.key")}
        value={t("stepper.schedule.startnow.value")}
      />
    </>
  );
};

export const OutputStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  return (
    <>
      <FieldHeader text={t("stepper.output.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.output.filename.key")}
        value="fileName"
      />
      <KeyValueTemplate
        title={t("stepper.output.timezone.key")}
        value="timeZone"
      />
      <KeyValueTemplate
        title={t("stepper.output.formats.key")}
        value="format"
      />
      <FieldHeader text={t("stepper.output.description.helpertext")} />
    </>
  );
};

export const NotificationStepDefaultMessage = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  return (
    <>
      <FieldHeader text={t("stepper.notifications.recipients.helpertext")} />
      <FieldHeader text={t("stepper.notifications.subject.helpertext")} />
      <FieldHeader text={t("stepper.notifications.message.helpertext")} />
      <FieldHeader text={t("stepper.notifications.access.helpertext")} />
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
