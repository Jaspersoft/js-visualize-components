import React from "react";
import { FieldHeader } from "./FieldHeader";
import { KeyValueTemplate } from "./KeyValueTemplate";

export const ScheduleStepDefaultMessage = () => {
  return (
    <>
      <FieldHeader text={"Name the scheduled Job"} />
      <KeyValueTemplate title="Repeat every:" value="1 day" />
      <KeyValueTemplate title="Starting:" value="Now" />
    </>
  );
};
