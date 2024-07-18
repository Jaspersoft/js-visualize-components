import React, { useState } from "react";
import {
  JVButton,
  JVRadioButton,
  JVRadioGroup,
  JVTextField,
} from "@jaspersoft/jv-ui-components";
import { JVTypographyComponent } from "../../../common/CommonComponents";
import { RepositoryTree } from "./RepositoryTree";

const Notifications = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [open, setOpen] = useState(false);
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <JVTypographyComponent text="Email Notification" />
      <div className="jv-mInputs mui">
        <JVTextField
          size="large"
          label="Send to (required)"
          helperText="Use commas to separate email addresses."
        />
        <JVTextField size="large" label="Subject (required)" />
        <JVTextField size="large" label="Message" multiline rows={5} />
        <JVRadioGroup title="Report/dashboard access (required)">
          <JVRadioButton
            value="option1"
            label="Include report/dashboard as repository link."
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
              onClick={() => {
                setOpen(true);
              }}
            >
              Browse...
            </JVButton>
          </div>

          <JVRadioButton
            value="option2"
            label="Include report/dashboard file as attachment."
            checked={selectedValue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
        </JVRadioGroup>
      </div>
      <RepositoryTree open={open} />
    </>
  );
};

export default Notifications;
