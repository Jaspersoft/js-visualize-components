import React from "react";
import { FieldHeader } from "./FieldHeader";
import { KeyValueTemplate } from "./KeyValueTemplate";

export const ScheduleStepDefaultMessage = () => {
  return (
    <>
      <FieldHeader text="Name the scheduled Job" />
      <KeyValueTemplate title="Repeat every:" value="1 day" />
      <KeyValueTemplate title="Starting:" value="Now" />
    </>
  );
};

export const OutputStepDefaultMessage = () => {
  return (
    <>
      <FieldHeader text="Customize the output or it will be set to the following:" />
      <KeyValueTemplate title="File name:" value="fileName" />
      <KeyValueTemplate title="Time zone:" value="timeZone" />
      <KeyValueTemplate title="Format:" value="format" />
    </>
  );
};

export const NotificationStepDefaultMessage = () => {
  return (
    <>
      <FieldHeader text="Specify recipients." />
      <FieldHeader text="Enter a subject." />
      <FieldHeader text="Add an optional message." />
      <KeyValueTemplate title="Report access:" value="Link" />
    </>
  );
};

export const ParametersStepDefaultMessage = () => {
  return (
    <>
      <FieldHeader text="Select the input control options for the report/dashboard." />
      <KeyValueTemplate title="Brand:" value="brands" />
    </>
  );
};
