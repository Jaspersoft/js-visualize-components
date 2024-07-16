import React from "react";
import {
  JVCheckbox,
  JVCheckboxGroup,
  JVTextField,
  JVSelectItem,
} from "@jaspersoft/jv-ui-components";
import { useSelector } from "react-redux";
import { JVTypographyComponent } from "../../common/CommonComponents";

const Output = () => {
  const outputFormats = useSelector((state: any) => state.outputFormats);
  const userTimeZones = useSelector((state: any) => state.userTimeZones);
  return (
    <>
      <JVTypographyComponent text="Output File Options" />
      <div className="jv-mInputs mui">
        <JVTextField size="large" label="File name (required)" />
        <JVTextField size="large" label="Description" multiline rows={5} />
        <JVTextField size="large" label="Time zone (required)" select>
          {userTimeZones.map((item: { code: string; description: string }) => (
            <JVSelectItem key={item.code} value={item.code}>
              {item.code} - {item.description}
            </JVSelectItem>
          ))}
        </JVTextField>
        <JVCheckboxGroup size="large" title="Formats (required)">
          {outputFormats.map((format: any) => (
            <JVCheckbox key={format} value={format.id} label={format} />
          ))}
        </JVCheckboxGroup>
      </div>
    </>
  );
};

export default Output;
