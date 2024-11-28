import {
  JVButton,
  JVCheckbox,
  JVCheckboxGroup,
  JVDrawer,
  JVIcon,
  JVSelectItem,
  JVRadioButton,
  JVRadioGroup,
  JVStep,
  JVStepper,
  JVTab,
  JVTabs,
  JVTextField,
  JVTypography,
} from "../../../material-ui";
import { ChangeEvent, useState } from "react";
import "./stepper.css";
import {
  ConditionTabProps,
  NotificationsTabProps,
  OutputTabProps,
  ScheduleTabProps,
  TabProps,
} from "./stepperUtils";
/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. STEPPER
 *
 *  2. STEPPER IN ALERT PANEL
 *
 * ----------------------------
 *  last modified Feb 1, 2023
 * ---------------------------- */

export default {
  component: JVStepper,
  title: "Components/Stepper/Component",
};

const DefaultMessage = (label: string) => {
  switch (label) {
    case "Condition":
      return (
        <>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Name the alert.
          </JVTypography>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Customize the condition or it will be set to the following:
          </JVTypography>

          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Condition:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>Equals</span>
          </JVTypography>
          <JVTypography variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Threshold:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>0</span>
          </JVTypography>
        </>
      );
    case "Schedule":
      return (
        <>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Customize the schedule or it will be set to the following:
          </JVTypography>

          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Repeat every:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>1 day</span>
          </JVTypography>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Starting:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>now</span>
          </JVTypography>
        </>
      );
    case "Notifications":
      return (
        <>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Specify recipients.
          </JVTypography>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Enter a subject.
          </JVTypography>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Add an optional message.
          </JVTypography>
        </>
      );
    case "Output":
      return (
        <>
          <JVTypography
            className="jv-uGrey-light jv-uMargin-b-01"
            variant="body1"
          >
            Customize the output or it will be set to the following:
          </JVTypography>

          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>File name:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              RevenueDetailReport
            </span>
          </JVTypography>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Time zone:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Pacific Standard Time
            </span>
          </JVTypography>
          <JVTypography variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Format:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>PDF</span>
          </JVTypography>
        </>
      );
    default:
      return "Unknown step";
  }
};

const ErrorText = () => (
  <JVTypography className={"jv-mText jv-uMargin-b-01 jv-uColor-error"}>
    Error
  </JVTypography>
);

const MessageBasedOnUser = (label: string) => {
  switch (label) {
    case "Condition":
      return (
        <>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Alert name:
            </span>
            <span
              className={"jv-uGrey-light jv-uMargin-l-01 jv-uTextBreak mui"}
            >
              Sales low
            </span>
          </JVTypography>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Condition:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>Equals</span>
          </JVTypography>
          <JVTypography variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Threshold:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>0</span>
          </JVTypography>
        </>
      );
    case "Schedule":
      return (
        <>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Repeat every:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>1 day</span>
          </JVTypography>
          <JVTypography variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Starting:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>now</span>
          </JVTypography>
        </>
      );
    case "Notifications":
      return (
        <>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>
              Recipients:
            </span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              rsmith@company.com (+1 more)
            </span>
          </JVTypography>
          <JVTypography variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Subject:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Attention: Low sales!
            </span>
          </JVTypography>
        </>
      );
    case "Output":
      return (
        <>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>File name:</span>
            <span
              className={"jv-uGrey-light jv-uMargin-l-01 jv-uTextBreak mui"}
            >
              RevenueDetailReport
            </span>
          </JVTypography>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Time zone:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>
              Pacific Standard Time
            </span>
          </JVTypography>
          <JVTypography className="jv-uMargin-b-01" variant="body1">
            <span className={"jv-uTextBold jv-uGrey-dark mui"}>Format:</span>
            <span className={"jv-uGrey-light jv-uMargin-l-01 mui"}>PDF</span>
          </JVTypography>
        </>
      );
    default:
      return "Unknown step";
  }
};

/* -------------- */
/*  1. STEPPER    */
/* -------------- */

export const SimpleStepper = () => {
  function getSteps() {
    return ["Condition", "Schedule", "Notifications", "Output"];
  }

  function IncompleteIcon() {
    return (
      <div>
        <JVIcon
          className={"jv-mStepper-icon jv-uColor-incomplete"}
          icon="circleSolid"
        />
      </div>
    );
  }

  const [activeStep, setActiveStep] = useState(0);
  const [visitedTab, setVisitedTab] = useState<number[]>([]);
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
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Stepper</h1>

      <div className={"demoWrapper demoStepper"}>
        <div className="demoSize">
          <JVStepper
            nonLinear
            orientation="vertical"
            activeStep={activeStep}
            connector={<></>}
          >
            {steps.map((label, index) => (
              <JVStep
                key={index}
                TypographyProps={{
                  title: label,
                  className: "jv-uGrey-dark jv-uText-lh-150 jv-uMargin-b-01",
                }}
                StepLabelProps={{
                  onClick: handleStep(index),
                  StepIconComponent: IncompleteIcon,
                }}
              >
                {activeStep === index &&
                  !visitedTab.includes(index) &&
                  DefaultMessage(label)}
                {visitedTab.includes(index) && MessageBasedOnUser(label)}
              </JVStep>
            ))}
          </JVStepper>
        </div>
      </div>
    </>
  );
};

SimpleStepper.storyName = "Stepper";

/* ---------------------------- */
/*  2. STEPPER IN ALERT PANEL   */
/* ---------------------------- */
const ConditionTab = (props: TabProps) => {
  return (
    <>
      <JVTypography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04">
        Alert Condition
      </JVTypography>

      <div className={"jv-mInputs mui"}>
        {/* Alert name */}
        <JVTextField
          size="large"
          id="outlined01"
          label="Alert name (required)"
          value={props.tabState?.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const obj = { name: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
        />
      </div>

      {/* Condition */}
      <div
        className={"jv-mControl jv-mControlFlexwidth jv-mControlCondition mui"}
      >
        <div className={"jv-mControl-operator mui"}>
          <JVTextField
            size="large"
            defaultValue="equals"
            id="select"
            label="Condition (required)"
            select
            value={props.tabState?.operator}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const obj = { operator: e.currentTarget.value };
              props.tabValuesChangeFn?.(obj);
            }}
          >
            <JVSelectItem value="equals">Equals</JVSelectItem>
            <JVSelectItem value="not equal">Not equal to</JVSelectItem>
            <JVSelectItem value="less than">Less than</JVSelectItem>
            <JVSelectItem value="greater than">Greater than</JVSelectItem>
            <JVSelectItem value="less than or equal to">
              Less than or equal to
            </JVSelectItem>
            <JVSelectItem value="greater than or equal to">
              Greater than or equal to
            </JVSelectItem>
          </JVTextField>
        </div>
        <div className={"jv-mControl-threshold mui"}>
          <JVTextField
            size="large"
            /*textFieldClassName={"jv-uWidth-100px"}*/
            id="outlined01"
            label="Threshold (required)"
            type="number"
            value={props.tabState?.thresholdValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
      <JVTypography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04">
        Report Options
      </JVTypography>
      <JVTypography className="jv-uMargin-b-09" variant="body1">
        The following selected report options will affect this alert.
      </JVTypography>

      <JVTypography className="jv-uTextBold jv-uMargin-tb-01" variant="body1">
        Product Family
      </JVTypography>
      <JVTypography
        className="jv-mTextLightest jv-uText-lh-145 jv-uMargin-b-04"
        variant="body1"
      >
        Food
      </JVTypography>

      <JVTypography className="jv-uTextBold jv-uMargin-tb-01" variant="body1">
        Product Name
      </JVTypography>
      <JVTypography
        className="jv-mTextLightest jv-uText-lh-145 jv-uMargin-b-04"
        variant="body1"
      >
        Ebony Asparagus, Ebony Beets, Ebony Cauliflower, Ebony Fresh Lima Beans,
        Hermanos Asparagus, Hermanos Beets, Hermanos Cauliflower, Hermanos Fresh
        Lima Beans, High Top Beets, High Top Cauliflower, High Top Fresh Lima
        Beans, Tell Tale Asparagus, Tell Tale Beets, Tell Tale Cauliflower, Tell
        Tale Fresh Lima Beans, Tri-State Asparagus, Tri-State Beets, Tri-State
        Cauliflower, Tri-State Fresh Lima Beans
      </JVTypography>
    </>
  );
};

const ScheduleTab = (props: TabProps) => {
  const [radioValue, setRadioValue] = useState("start-now");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setRadioValue(value);
  };

  return (
    <>
      <JVTypography className="jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04">
        Recurrence
      </JVTypography>
      <div
        className={"jv-mControl jv-mControlInterval jv-mControlFlexwidth mui"}
      >
        <JVTextField
          className={"jv-mControl-interval mui"}
          size="large"
          textFieldClassName={"jv-uWidth-140px"}
          type="number"
          id="outlined-number02"
          label="Interval (required)"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.tabState?.recurrenceInterval}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const obj = { recurrenceInterval: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
        />
        <JVTextField
          className={"jv-mControl-timeframe mui"}
          size="large"
          textFieldClassName={"jv-uWidth-175px"}
          defaultValue="minute"
          id="select"
          select
          label="Timeframe (required)"
        >
          <JVSelectItem value="minute">Minutes</JVSelectItem>
          <JVSelectItem value="hour">Hours</JVSelectItem>
          <JVSelectItem value="day">Days</JVSelectItem>
          <JVSelectItem value="week">Weeks</JVSelectItem>
        </JVTextField>
      </div>

      {/*            <JVTypography
                className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-t-05 jv-uMargin-b-02">
                Start Time
            </JVTypography>*/}
      <JVRadioGroup
        aria-label="gender"
        size="large"
        title="Start time (required)"
        RadioGroupProps={{
          name: "gender1",
          value: radioValue,
          onChange: handleChange,
        }}
      >
        <JVRadioButton label="Now" value="start-now" />
        <JVRadioButton
          label="Specific date and time"
          value="start-specific-time"
        />
      </JVRadioGroup>
      <div className="jv-uMargin-l-07 jv-uWidth-200px">
        <JVTextField
          textFieldClassName={"jv-mInputDatetime"}
          size={"large"}
          id="outlined03"
          type="datetime-local"
          InputLabelProps={{
            disableAnimation: true,
          }}
        />
      </div>
    </>
  );
};

const NotificationTab = (props: TabProps) => {
  return (
    <>
      <JVTypography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04">
        Email Notification
      </JVTypography>

      <div className={"jv-mInputs mui"}>
        {/* Send alert to */}
        <JVTextField
          size="large"
          helperText="Use commas to separate email addresses."
          id="outlined-helperText01"
          label="Send alert to (required)"
          value={props.tabState?.address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const obj = { address: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
        />

        {/* Subject */}
        <JVTextField
          size="large"
          id="outlined-helperText01"
          label="Subject (required)"
        />

        {/* Message */}
        <JVTextField
          size="large"
          id="outlined-textarea-static-03"
          multiline
          rows={5} // <--- this property sets fixed height
          label="Message"
        />
      </div>
    </>
  );
};

const OutputTab = (props: TabProps) => {
  return (
    <>
      <JVTypography className="jv-mText jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uMargin-b-04">
        Output Settings
      </JVTypography>

      <div className={"jv-mInputs mui"}>
        {/* File name */}
        <JVTextField
          size="large"
          id="outlined01"
          label="File name (required)"
          value={props.tabState?.fileName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const obj = { fileName: e.target.value };
            props.tabValuesChangeFn?.(obj);
          }}
        />

        {/* Time zone */}
        <div>
          <JVTextField
            size="large"
            defaultValue="pst"
            id="select"
            label="Time zone (required)"
            select
            variant="outlined"
          >
            <JVSelectItem value="pst">
              America/Los_Angeles - Pacific Standard Time
            </JVSelectItem>
            <JVSelectItem value="mst">
              America/Denver - Mountain Standard Time
            </JVSelectItem>
            <JVSelectItem value="cst">
              America/Chicago - Central Standard Time
            </JVSelectItem>
            <JVSelectItem value="est">
              America/New York - Pacific Standard Time
            </JVSelectItem>
            <JVSelectItem value="gmt">
              Europe/London - Greenwich Mean Time
            </JVSelectItem>
          </JVTextField>
        </div>

        {/* Formats */}
        <JVCheckboxGroup
          size="large"
          title="Formats (required)"
          FormGroupProps={{
            className: "jv-mInput-columns jv-mInput-columns2 mui",
          }}
        >
          <JVCheckbox name="CSV" label="CSV" />
          <JVCheckbox name="CSV metadata paginated" label="CSV metadata" />
          <JVCheckbox name="DOCX" label="DOCX" />
          <JVCheckbox name="Excel paginated" label="Excel (paginated)" />
          <JVCheckbox name="Excel" label="Excel" />
          <JVCheckbox name="HTML" label="HTML" />
          <JVCheckbox name="ODS" label="ODS" />
          <JVCheckbox name="ODT" label="ODT" />
          <JVCheckbox name="PDF" label="PDF" />
          <JVCheckbox name="RTF" label="RTF" />
          <JVCheckbox name="XLSX" label="XLSX" />
          <JVCheckbox name="XLSX (paginated)" label="XLSX (paginated)" />
          <JVCheckbox name="PPTX" label="PPTX" />
        </JVCheckboxGroup>
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
  const [conditionTabValues, setConditionTabValues] = useState({
    name: "",
    operator: "equals",
    thresholdValue: "0",
  });

  const [notificationTabValues, setNotificationTabValues] = useState({
    address: "",
  });

  const [scheduleTabValues, setScheduleTabValues] = useState({
    recurrenceInterval: "1",
  });

  const [outputTabValues, setOutputTabValues] = useState({
    fileName: "testFile",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [visitedTab, setVisitedTab] = useState<number[]>([]);
  const [tabState, setTabState] = useState([
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

  const setStepperState = (index: number, newState: string) => {
    setTabState((prevState) => {
      const state = [...prevState];
      state[index] = newState;
      return state;
    });
  };

  const handleChange = (event: ChangeEvent<{}>, newValue?: any) => {
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
      <JVDrawer
        anchor="right"
        className="demoDrawer" /* 'demoDrawer' classname is for demo only */
        classes={{ paperAnchorRight: "jv-uWidth-750px" }}
        open
      >
        <div className={"jv-lColumns"}>
          <div
            className={
              "jv-lColumns-column jv-uWidth-300px jv-uBackgroundGrey-04"
            }
          >
            <JVStepper
              nonLinear
              orientation="vertical"
              activeStep={activeStep}
              className={"jv-uMargin-tb-15 jv-uMargin-lr-08"}
              connector={<></>}
            >
              {steps.map((label, index) => {
                return label !== "Parameters" ? (
                  <JVStep
                    key={label}
                    TypographyProps={{
                      title: label,
                      className:
                        "jv-uGrey-dark jv-uText-lh-150 jv-uMargin-b-01",
                    }}
                    StepLabelProps={{
                      ...getIconState(tabState[index]),
                      StepIconComponent: StepStateIcon as any,
                    }}
                  >
                    {tabState[index] === "error" && <ErrorText />}
                    {activeStep === index &&
                      tabState[index] !== "error" &&
                      !visitedTab.includes(index) &&
                      DefaultMessage(label)}
                    {visitedTab.includes(index) &&
                      tabState[index] !== "error" &&
                      MessageBasedOnUser(label)}
                  </JVStep>
                ) : null;
              })}
            </JVStepper>
          </div>
          <div className={"jv-lColumns-column  jv-uWidth-450px"}>
            <div className="jv-mDrawer-header mui">
              <JVTypography
                className="jv-mDrawer-header-title mui"
                variant="h2"
              >
                Create Alert
              </JVTypography>
            </div>

            <div className="jv-mDrawer-subheader jv-mDrawer-subheaderPadded jv-uMargin-t-04 mui">
              <JVTabs
                value={value}
                onChange={handleChange}
                aria-label="small default tabs example"
              >
                <JVTab label="Condition" {...a11yProps(0)} />
                <JVTab label="Parameters" {...a11yProps(1)} />
                <JVTab label="Schedule" {...a11yProps(2)} />
                <JVTab label="Notifications" {...a11yProps(3)} />
                <JVTab label="Output" {...a11yProps(4)} />
              </JVTabs>
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
                      setNotificationTabValues((prevVal) => {
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
              <JVButton size="large" variant="contained" color="primary">
                Create alert
              </JVButton>
              <JVButton size="large" variant="contained">
                Cancel
              </JVButton>
            </div>
          </div>
        </div>
      </JVDrawer>
    </>
  );
};
AlertStepper.storyName = "Alert Stepper";
