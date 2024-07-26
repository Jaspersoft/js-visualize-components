import React from "react";
import { FieldHeader } from "./FieldHeader";
import { KeyValueTemplate } from "./KeyValueTemplate";
import { useTranslation } from "react-i18next";

export const ScheduleStepDefaultMessage = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <>
      <FieldHeader text={t("stepper.schedule.jobname.helpertext")} />
      <FieldHeader text={t("stepper.schedule.description.helpertext")} />
      <FieldHeader text={t("stepper.schedule.recurrence.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.schedule.repeat.key")}
        value="1 day"
      />
      <KeyValueTemplate title={t("stepper.schedule.start.key")} value="Now" />
    </>
  );
};

export const OutputStepDefaultMessage = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
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
    </>
  );
};

export const NotificationStepDefaultMessage = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <>
      <FieldHeader text={t("stepper.notifications.recipients.helpertext")} />
      <FieldHeader text={t("stepper.notifications.subject.helpertext")} />
      <FieldHeader text={t("stepper.notifications.message.helpertext")} />
      <FieldHeader text={t("stepper.notifications.access.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.notifications.access.key")}
        value="Link"
      />
    </>
  );
};

export const ParametersStepDefaultMessage = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <>
      <FieldHeader text={t("stepper.parameters.ic.helpertext")} />
      <KeyValueTemplate
        title={t("stepper.parameters.brand.key")}
        value="brands"
      />
    </>
  );
};