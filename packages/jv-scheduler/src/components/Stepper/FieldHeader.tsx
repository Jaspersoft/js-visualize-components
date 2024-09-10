import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

type StepDefaultMessage = {
  text: string;
};

export const FieldHeader = ({ text }: StepDefaultMessage) => {
  return (
    <JVTypography className="jv-uGrey-light jv-uMargin-b-01" variant="body1">
      {text}
    </JVTypography>
  );
};
