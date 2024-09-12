import React, { useState } from "react";
import "./stepper.css";
import {
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  RadioGroup,
  Radio,
  Stepper,
  StepLabel,
  Step,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { JVIcon } from "@jaspersoft/jv-ui-components";
import {
  TabProps,
  ConditionTabProps,
  ScheduleTabProps,
  NotificationsTabProps,
  OutputTabProps,
} from "./stepperUtils";

/*-----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. BASIC STEPPER
 *
 *  2. STEPPER IN ALERT PANEL
 *
 * -----------------------------
 *  last modified Mar 7, 2024
 * ----------------------------- */

export default {
  component: Stepper,
  title: "Components/Stepper/Design",
};

const DefaultMessage = (label: string) => {
  switch (label) {
    case "Condition":
      return (
        <>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Name the alert.
          </Typography>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Customize the condition or it will be set to the following:
          </Typography>

          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Condition:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>Equals</span>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Threshold:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>0</span>
          </Typography>
        </>
      );
    case "Schedule":
      return (
        <>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Customize the schedule or it will be set to the following:
          </Typography>

          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Repeat every:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>1 day</span>
          </Typography>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Starting:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>Now</span>
          </Typography>
        </>
      );
    case "Notifications":
      return (
        <>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Specify recipients.
          </Typography>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Enter a subject.
          </Typography>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Add an optional message.
          </Typography>
        </>
      );
    case "Output":
      return (
        <>
          <Typography
            className="jv-mText jv-uGrey-light jv-uMargin-b-01 mui"
            variant="body1"
          >
            Customize the output or it will be set to the following:
          </Typography>

          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>File name:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              RevenueDetailReport
            </span>
          </Typography>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Time zone:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              America/Los_Angeles - Pacific Standard Time
            </span>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Format:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>PDF</span>
          </Typography>
        </>
      );
    default:
      return "Unknown step";
  }
};

const ErrorText = () => (
  <Typography className={"jv-mText mui jv-uColor-error"}>Error</Typography>
);

const MessageBasedOnUser = (label: string) => {
  switch (label) {
    case "Condition":
      return (
        <>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Alert name:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Sales low
            </span>
          </Typography>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Condition:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>Equals</span>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Threshold:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>0</span>
          </Typography>
        </>
      );
    case "Schedule":
      return (
        <>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Repeat every:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>1 day</span>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Starting:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>now</span>
          </Typography>
        </>
      );
    case "Notifications":
      return (
        <>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Recipients:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              rsmith@company.com (+1 more)
            </span>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Subject:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Attention: Low sales!
            </span>
          </Typography>
        </>
      );
    case "Output":
      return (
        <>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>File name:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              RevenueDetailReport
            </span>
          </Typography>
          <Typography className="jv-mText jv-uMargin-b-01 mui" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Time zone:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Pacific Standard Time
            </span>
          </Typography>
          <Typography
            className="jv-mText jv-uMargin-b-01 mui mui"
            variant="body1"
          >
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Format:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>PDF</span>
          </Typography>
        </>
      );
    default:
      return "Unknown step";
  }
};

/* -------------------- */
/*  1. BASIC STEPPER    */
/* -------------------- */
export const SimpleStepper = () => {
  function getSteps() {
    return ["Condition", "Schedule", "Notifications", "Output"];
  }

  function IncompleteIcon() {
    return (
      <div>
        <JVIcon
          className={"jv-mStepper-icon jv-uColor-incomplete mui"}
          icon="circleSolid"
        />
      </div>
    );
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [visitedTab, setVisitedTab] = React.useState<number[]>([]);
  const handleStep = (step: number) => () => {
    setActiveStep((prevstep) => {
      if (!visitedTab.includes(prevstep)) {
        setVisitedTab((prevState) => {
          return [...prevState, prevstep];
        });
      }
      return step;
    });
  };

  const steps = getSteps();
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Stepper</h1>

      <div className={"demoWrapper demoStepper"}>
        <div className="demoSize">
          <Stepper
            nonLinear
            orientation="vertical"
            activeStep={activeStep}
            className={"jv-mStepper mui"}
            connector={<></>}
          >
            {steps.map((label, index) => (
              <Step className={"jv-mStepper-step mui"} key={index}>
                <StepLabel
                  onClick={handleStep(index)}
                  StepIconComponent={IncompleteIcon}
                >
                  <Typography className="jv-mText jv-mTextTitle jv-mTextSmall jv-uText-lh-150 jv-uGrey-dark jv-uMargin-b-01 mui">
                    {label}
                  </Typography>
                  {activeStep === index &&
                    !visitedTab.includes(index) &&
                    DefaultMessage(label)}
                  {visitedTab.includes(index) && MessageBasedOnUser(label)}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </>
  );
};
SimpleStepper.storyName = "Stepper";

/* ------------------------------ */
/*  2. STEPPER IN ALERT PANEL     */
/* ------------------------------ */
const ConditionTab = (props: TabProps) => {
  return (
    <>
      <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04 mui">
        Alert Condition
      </Typography>

      <div className={"jv-mInputs mui"}>
        {/* Alert name */}
        <TextField
          className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
          id="outlined01"
          label="Alert name (required)"
          variant="outlined"
          value={props.tabState?.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const obj = { name: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
        />
      </div>

      {/* Condition */}
      <div
        className={"jv-mControl jv-mControlFlexwidth jv-mControlCondition mui"}
      >
        <div className={"jv-mControl-operator mui"}>
          <TextField
            className={
              "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
            }
            defaultValue="equals"
            id="select"
            label="Condition (required)"
            select
            variant="outlined"
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              disableAnimation: true,
            }}
            SelectProps={{
              classes: { root: "jv-mInput-select mui" },
            }}
            value={props.tabState?.operator}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const obj = { operator: e.currentTarget.value };
              props.tabValuesChangeFn?.(obj);
            }}
          >
            <MenuItem className={"jv-mInput-select-item mui"} value="equals">
              Equals
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="not equal">
              Not equal to
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="less than">
              Less than
            </MenuItem>
            <MenuItem
              className={"jv-mInput-select-item mui"}
              value="greater than"
            >
              Greater than
            </MenuItem>
            <MenuItem
              className={"jv-mInput-select-item mui"}
              value="less than or equal to"
            >
              Less than or equal to
            </MenuItem>
            <MenuItem
              className={"jv-mInput-select-item mui"}
              value="greater than or equal to"
            >
              Greater than or equal to
            </MenuItem>
          </TextField>
        </div>
        <div className={"jv-mControl-threshold mui"}>
          <TextField
            className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
            id="outlined01"
            label="Threshold (required)"
            variant="outlined"
            type="number"
            value={props.tabState?.thresholdValue}
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              disableAnimation: true,
            }}
            InputProps={{
              classes: { input: "jv-mInput-text mui" },
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const obj = { thresholdValue: e.currentTarget.value };
              props.tabValuesChangeFn?.(obj);
            }}
          />
        </div>
      </div>
    </>
  );
};

const ParametersTab = () => {
  return (
    <>
      <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04 mui">
        Report Options
      </Typography>
      <Typography className="jv-mText jv-uMargin-b-09 mui" variant="body1">
        The following selected report options will affect this alert.
      </Typography>

      <Typography
        className="jv-mText jv-uTextBold jv-uMargin-tb-01 mui"
        variant="body1"
      >
        Product Family
      </Typography>
      <Typography
        className="jv-mText jv-mTextLightest jv-uText-lh-145 jv-uMargin-b-04 mui"
        variant="body1"
      >
        Food
      </Typography>

      <Typography
        className="jv-mText jv-uTextBold jv-uMargin-tb-01 mui"
        variant="body1"
      >
        Product Name
      </Typography>
      <Typography
        className="jv-mText jv-mTextLightest jv-uText-lh-145 jv-uMargin-b-04 mui"
        variant="body1"
      >
        Ebony Asparagus, Ebony Beets, Ebony Cauliflower, Ebony Fresh Lima Beans,
        Hermanos Asparagus, Hermanos Beets, Hermanos Cauliflower, Hermanos Fresh
        Lima Beans, High Top Beets, High Top Cauliflower, High Top Fresh Lima
        Beans, Tell Tale Asparagus, Tell Tale Beets, Tell Tale Cauliflower, Tell
        Tale Fresh Lima Beans, Tri-State Asparagus, Tri-State Beets, Tri-State
        Cauliflower, Tri-State Fresh Lima Beans
      </Typography>
    </>
  );
};

const ScheduleTab = (props: TabProps) => {
  const [radioValue, setRadioValue] = useState("start-now");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setRadioValue(value);
  };

  return (
    <>
      <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04 mui">
        Recurrence
      </Typography>
      <div
        className={"jv-mControl jv-mControlInterval jv-mControlFlexwidth mui"}
      >
        <div className={"jv-mControl-interval mui"}>
          <TextField
            className={
              "jv-mInput jv-mInputText jv-uWidth-140px jv-mInputLarge mui"
            }
            type="number"
            id="outlined-number02"
            variant="outlined"
            label="Interval (required)"
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              shrink: true,
              disableAnimation: true,
            }}
            InputProps={{
              classes: { input: "jv-mInput-text mui" },
            }}
            value={props.tabState?.recurrenceInterval}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const obj = { recurrenceInterval: e.target.value };
              props.tabValuesChangeFn?.(obj);
            }}
          />
          {/*<FormHelperText
                                className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
                                The interval must be equal to or greater than 1 for minutes and 15 for seconds.
                            </FormHelperText>*/}
        </div>
        <div className={"jv-mControl-timeframe mui"}>
          <TextField
            className={
              "jv-mInput jv-mInputLarge jv-mInputText jv-uWidth-175px jv-mInputSelect mui"
            }
            defaultValue="minute"
            id="select"
            select
            variant="outlined"
            label="Timeframe (required)"
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              disableAnimation: true,
            }}
            SelectProps={{
              classes: { root: "jv-mInput-select mui" },
            }}
          >
            <MenuItem className={"jv-mInput-select-item mui"} value="minute">
              Minutes
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="hour">
              Hours
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="day">
              Days
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="week">
              Weeks
            </MenuItem>
          </TextField>
        </div>
      </div>

      {/*            <Typography
                className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-t-05 jv-uMargin-b-02 mui">
                Start Time
            </Typography>*/}
      <FormControl
        component="fieldset"
        className="jv-mInput jv-mInputLarge jv-mInputRadio mui"
      >
        <FormLabel component="legend" className="jv-mInput-label mui">
          Start time (required)
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={radioValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="start-now"
            control={
              <Radio
                color="primary"
                classes={{ root: "jv-mInput-radio-button mui" }}
              />
            }
            label="Now"
            className="jv-mInput-radio mui"
            classes={{ label: "jv-mInput-radio-label mui" }}
          />
          <FormControlLabel
            value="start-specific-time"
            control={
              <Radio
                color="primary"
                classes={{ root: "jv-mInput-radio-button mui" }}
              />
            }
            label="Specific date and time"
            className="jv-mInput-radio mui"
            classes={{ label: "jv-mInput-radio-label mui" }}
          />
        </RadioGroup>
      </FormControl>
      <div className="jv-uMargin-l-07 jv-uWidth-200px">
        <TextField
          className={
            "jv-mInput jv-mInputLarge jv-mInputText jv-mInputDatetime mui"
          }
          id=""
          type="datetime-local"
          variant="outlined"
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
        />
      </div>
    </>
  );
};

const NotificationTab = (props: TabProps) => {
  return (
    <>
      <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04 mui">
        Email Notification
      </Typography>

      <div className={"jv-mInputs mui"}>
        {/* Send alert to */}
        <TextField
          className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
          helperText="Use commas to separate email addresses."
          id="outlined-helperText01"
          label="Send alert to (required)"
          variant="outlined"
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          value={props.tabState?.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const obj = { address: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
          FormHelperTextProps={{
            classes: { root: "jv-mInput-helper mui" },
          }}
        />

        {/* Subject */}
        <TextField
          className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
          helperText=""
          id="outlined-helperText01"
          label="Subject (required)"
          variant="outlined"
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
          FormHelperTextProps={{
            classes: { root: "jv-mInput-helper mui" },
          }}
        />

        {/* Message */}
        <TextField
          className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
          id="outlined-textarea-static-03"
          multiline
          rows={5} // <--- this property sets fixed height
          label="Message"
          variant="outlined"
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
        />
      </div>
    </>
  );
};

const OutputTab = (props: TabProps) => {
  return (
    <>
      <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04 mui">
        Output Settings
      </Typography>

      <div className={"jv-mInputs mui"}>
        {/* File name */}
        <TextField
          className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
          id="outlined01"
          label="File name (required)"
          variant="outlined"
          InputLabelProps={{
            classes: { root: "jv-mInput-label mui" },
            disableAnimation: true,
          }}
          value={props.tabState?.fileName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const obj = { fileName: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
          InputProps={{
            classes: { input: "jv-mInput-text mui" },
          }}
        />

        {/* Time zone */}
        <div>
          <TextField
            className={
              "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
            }
            defaultValue="pst"
            id="select"
            label="Time zone (required)"
            select
            variant="outlined"
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              disableAnimation: true,
            }}
            SelectProps={{
              classes: { root: "jv-mInput-select mui" },
            }}
          >
            <MenuItem className={"jv-mInput-select-item mui"} value="pst">
              America/Los_Angeles - Pacific Standard Time
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="mst">
              America/Denver - Mountain Standard Time
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="cst">
              America/Chicago - Central Standard Time
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="est">
              America/New York - Pacific Standard Time
            </MenuItem>
            <MenuItem className={"jv-mInput-select-item mui"} value="gmt">
              Europe/London - Greenwich Mean Time
            </MenuItem>
          </TextField>
        </div>

        {/* Formats */}
        <FormControl
          component="fieldset"
          className="jv-mInput jv-mInputLarge jv-mInputCheckbox mui"
        >
          <FormLabel component="legend" className="jv-mInput-label mui">
            Formats (required)
          </FormLabel>
          <FormGroup className="jv-mInput-columns jv-mInput-columns2 mui">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="CSV"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="CSV"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="CSV metadata paginated"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="CSV metadata"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="DOCX"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="DOCX"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="Excel paginated"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="Excel (paginated)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="Excel"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="Excel"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="HTML"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="ODS"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="ODS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="ODT"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="ODT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="PDF"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="PDF"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="RTF"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="RTF"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="XLSX"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="XLSX"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="XLSX paginated"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="XLSX (paginated)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  classes={{ root: "jv-mInput-checkbox-check mui" }}
                  name="PPTX"
                />
              }
              className="jv-mInput-checkbox mui"
              classes={{ label: "jv-mInput-checkbox-label mui" }}
              label="PPTX"
            />
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};

const validate = (field: string | number | undefined) => {
  return !field;
};

/* -------------------------------- */
/*  Start: Stepper in Alert Panel   */
/* -------------------------------- */
export const AlertStepper = () => {
  const [value, setValue] = useState(0);
  const [conditionTabValues, setConditionTabValues] = React.useState({
    name: "",
    operator: "equals",
    thresholdValue: "0",
  });

  const [notificationTabValues, setnotificationTabValues] = React.useState({
    address: "",
  });

  const [scheduleTabValues, setScheduleTabValues] = React.useState({
    recurrenceInterval: "1",
  });

  const [outputTabValues, setOutputTabValues] = React.useState({
    fileName: "testFile",
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [visitedTab, setVisitedTab] = React.useState<number[]>([]);
  const [tabState, setTabState] = React.useState([
    "incomplete",
    "",
    "incompleteDefaults",
    "incomplete",
    "incompleteDefaults",
  ]);
  const getSteps = () => {
    return ["Condition", "Parameters", "Schedule", "Notifications", "Output"];
  };

  const StateIcon = (props: { icon: string }) => {
    const { icon } = props;
    return (
      <div>
        {icon === "success" && (
          <JVIcon
            icon="checkmarkRound"
            className={"jv-mStepper-icon jv-uColor-success mui"}
          />
        )}
        {icon === "error" && (
          <JVIcon
            icon="warningRound"
            className={"jv-mStepper-icon jv-uColor-error mui"}
          />
        )}
        {icon === "incompleteDefaults" && (
          <JVIcon
            icon="checkmarkRound"
            className={"jv-mStepper-icon jv-uColor-incomplete mui"}
          />
        )}
        {icon === "incomplete" && (
          <JVIcon
            icon="circleSolid"
            className={"jv-mStepper-icon jv-uColor-incomplete mui"}
          />
        )}
      </div>
    );
  };

  const setStepperState = (index: number, newstate: string) => {
    setTabState((prevState) => {
      const state = [...prevState];
      state[index] = newstate;
      return state;
    });
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (value === 0) {
      const err = validate(conditionTabValues.name);
      if (err) {
        setStepperState(0, "error");
      } else {
        setStepperState(0, "success");
      }
    } else if (value === 2) {
      const recVal = scheduleTabValues.recurrenceInterval;
      const err = validate(recVal);
      if (err) {
        setStepperState(2, "error");
      } else {
        setStepperState(2, "success");
      }
    } else if (value === 3) {
      const err = validate(notificationTabValues.address);
      if (err) {
        setStepperState(3, "error");
      } else {
        setStepperState(3, "success");
      }
    } else if (value === 4) {
      const err = validate(outputTabValues.fileName);
      if (err) {
        setStepperState(4, "error");
      } else {
        setStepperState(4, "success");
      }
    }

    if (!visitedTab.includes(value)) {
      setVisitedTab((prevState) => {
        return [...prevState, value];
      });
    }
    setActiveStep(newValue);
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const StepStateIcon = (props: { icon: string }) => {
    return <StateIcon {...props} />;
  };

  const getIconState = (type: string) => {
    switch (type) {
      case "success":
        return { icon: "success" };
      case "error":
        return { icon: "error" };
      case "incompleteDefaults":
        return { icon: "incompleteDefaults" };
      case "incomplete":
        return { icon: "incomplete" };
      default:
        return { icon: "" };
    }
  };
  const steps = getSteps();

  /* ---------------- */
  /*  Start: Markup   */
  /* ---------------- */
  return (
    <>
      <Drawer
        anchor="right"
        className="jv-mDrawer mui demoDrawer" /* 'demoDrawer' classname is for demo only */
        classes={{ paperAnchorRight: "jv-uWidth-750px" }}
        elevation={6}
        open
      >
        <div className={"jv-lColumns"}>
          <div
            className={
              "jv-lColumns-column jv-uWidth-300px jv-uBackgroundGrey-04"
            }
          >
            <Stepper
              nonLinear
              orientation="vertical"
              activeStep={activeStep}
              className={"jv-mStepper jv-uMargin-tb-15 jv-uMargin-lr-08 mui"}
              connector={<></>}
            >
              {steps.map((label, index) => {
                return label !== "Parameters" ? (
                  <Step className={"jv-mStepper-step mui"} key={label}>
                    <StepLabel
                      {...getIconState(tabState[index])}
                      StepIconComponent={StepStateIcon as any}
                    >
                      <Typography className="jv-mText jv-mTextTitle jv-mTextSmall jv-uGrey-dark jv-uText-lh-150 jv-uMargin-b-01 mui">
                        {label}
                      </Typography>
                      {tabState[index] === "error" && <ErrorText />}
                      {activeStep === index &&
                        tabState[index] !== "error" &&
                        !visitedTab.includes(index) &&
                        DefaultMessage(label)}
                      {visitedTab.includes(index) &&
                        tabState[index] !== "error" &&
                        MessageBasedOnUser(label)}
                    </StepLabel>
                  </Step>
                ) : null;
              })}
            </Stepper>
          </div>
          <div className={"jv-lColumns-column  jv-uWidth-450px"}>
            <div className="jv-mDrawer-header mui">
              <Typography className="jv-mDrawer-header-title mui" variant="h2">
                Create Alert
              </Typography>
            </div>

            <div className="jv-mDrawer-subheader jv-mDrawer-subheaderPadded jv-uMargin-t-04 mui">
              <Tabs
                className={"jv-mTabs jv-mTabsMedium mui"}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                aria-label="small default tabs example"
              >
                <Tab
                  className={"jv-mTab mui"}
                  label="Condition"
                  {...a11yProps(0)}
                />
                <Tab
                  className={"jv-mTab mui"}
                  label="Parameters"
                  {...a11yProps(1)}
                />
                <Tab
                  className={"jv-mTab mui"}
                  label="Schedule"
                  {...a11yProps(2)}
                />
                <Tab
                  className={"jv-mTab mui"}
                  label="Notifications"
                  {...a11yProps(3)}
                />
                <Tab
                  className={"jv-mTab mui"}
                  label="Output"
                  {...a11yProps(4)}
                />
              </Tabs>
            </div>

            <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
              <div className="jv-mDrawer-body-content jv-mDrawer-body-contentPadded mui">
                {value === 0 && (
                  <ConditionTab
                    tabValuesChangeFn={(newVal: ConditionTabProps) => {
                      setConditionTabValues((prevVal) => {
                        return { ...prevVal, ...newVal };
                      });
                    }}
                    tabState={conditionTabValues}
                  />
                )}
                {value === 1 && <ParametersTab />}
                {value === 2 && (
                  <ScheduleTab
                    tabValuesChangeFn={(newVal: ScheduleTabProps) => {
                      setScheduleTabValues((prevVal) => {
                        return { ...prevVal, ...newVal };
                      });
                    }}
                    tabState={scheduleTabValues}
                  />
                )}
                {value === 3 && (
                  <NotificationTab
                    tabValuesChangeFn={(newVal: NotificationsTabProps) => {
                      setnotificationTabValues((prevVal) => {
                        return { ...prevVal, ...newVal };
                      });
                    }}
                    tabState={notificationTabValues}
                  />
                )}
                {value === 4 && (
                  <OutputTab
                    tabValuesChangeFn={(newVal: OutputTabProps) => {
                      setOutputTabValues((prevVal) => {
                        return { ...prevVal, ...newVal };
                      });
                    }}
                    tabState={outputTabValues}
                  />
                )}
              </div>
            </div>

            <div className="jv-mDrawer-footer mui">
              <Button
                className="jv-mButton jv-mButtonSmall jv-mButtonPrimary mui"
                disableElevation
                size="large"
                variant="contained"
              >
                <span className="jv-mButton-label mui">Create alert</span>
              </Button>
              <Button
                className="jv-mButton jv-mButtonSecondary mui"
                disableElevation
                size="large"
                variant="contained"
              >
                <span className="jv-mButton-label mui">Cancel</span>
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
AlertStepper.storyName = "Alert Stepper";
