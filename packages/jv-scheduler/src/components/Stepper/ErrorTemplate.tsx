import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

export const ErrorTemplate = ({ text }: { text: string }) => {
  return (
    <JVTypography className="jv-mText jv-uMargin-b-01 jv-uColor-error">
      {text}
    </JVTypography>
  );
};
