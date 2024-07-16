import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

type StepDefaultMessage = {
  text: string;
};

export const FieldHeader = ({ text }: StepDefaultMessage) => {
  return (
    <JVTypography className="jr-uGrey-light jr-uMargin-b-01" variant="body1">
      {text}
    </JVTypography>
  );
};
