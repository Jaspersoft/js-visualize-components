import React, { useState } from "react";
import {
  JVButton,
  JVRadioButton,
  JVRadioGroup,
  JVTextField,
  JVTypography,
} from "@jaspersoft/jv-ui-components";

const Notifications = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <JVTypography variant="h6">Email Notification</JVTypography>
      <div className="jv-mInputs mui">
        <JVTextField
          size="large"
          label="Send alert to (required)"
          helperText="Use commas to separate email addresses."
        />
        <JVTextField size="large" label="Subject (required)" />
        <JVTextField size="large" label="Message" multiline rows={5} />
        <JVRadioGroup title="Report access (required)">
          <JVRadioButton
            value="option1"
            label="Include report as repository link."
            checked={selectedValue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />

          <div className="jv-mInput jv-mInputBrowse jv-mInputLarge jv-uMargin-l-07 mui">
            <JVTextField
              label="Repository URI"
              disabled={selectedValue !== "option1"}
              value="/path/"
            />
            <JVButton
              variant="contained"
              size="large"
              disabled={selectedValue !== "option1"}
            >
              Browse...
            </JVButton>
          </div>

          <JVRadioButton
            value="option2"
            label="Include report file as attachment."
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
        </JVRadioGroup>
      </div>
    </>
  );
};

export default Notifications;
