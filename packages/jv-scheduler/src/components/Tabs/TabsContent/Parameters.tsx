import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

const Parameters = () => {
  return (
    <>
      <JVTypography variant="h6">Report Options</JVTypography>
      <JVTypography className="jv-mText jv-uMargin-b-09">
        The following selected report options will affect this schedule.
      </JVTypography>
      <JVTypography variant="h6">ProductFamily</JVTypography>
      <JVTypography
        className="jv-mTextLightest jv-reportOption-value jv-uText-lh-145 jv-uMargin-b-04"
        variant="body1"
      >
        This is some product family
      </JVTypography>
    </>
  );
};

export default Parameters;
