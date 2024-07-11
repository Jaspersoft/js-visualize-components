import React from "react";
import {
  JVCheckbox,
  JVCheckboxGroup,
  JVTextField,
  JVTypography,
} from "@jaspersoft/jv-ui-components";
import { useSelector } from "react-redux";
import { JVTypographyComponent } from "../../common/CommonComponents";

const Output = () => {
  const outputFormats = useSelector((state: any) => state.outputFormats);
  const userTimeZones = useSelector((state: any) => state.userTimeZones);
  // console.log(outputFormats)
  return (
    <>
      <JVTypographyComponent text="Output File Options" />
      <div className="jv-mInputs mui">
        <JVTextField size="large" label="File name (required)" />
        <JVTextField size="large" label="Description" multiline rows={5} />
        <JVTextField size="large" label="Time zone (required)" select />
        <JVCheckboxGroup size="large" title="Formats (required)">
          <JVCheckbox value="pdf" label="PDF" />
        </JVCheckboxGroup>
      </div>
    </>
  );
};

export default Output;
