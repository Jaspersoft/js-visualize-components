import React from "react";
import { Typography as JVTypography } from "@jaspersoft/jv-ui-components/material-ui/Typography/Typography";

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
