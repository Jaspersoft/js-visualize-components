import React, { useEffect, useState } from "react";
import { JVStep, JVStepper } from "@jaspersoft/jv-ui-components";
import {
  ERROR_STATE,
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  PARAMETERS_TAB,
  SCHEDULE_TAB,
  stepInfo,
  stepperSteps,
  SUCCESS_STATE,
  tabsStateDefaultState,
} from "../../constants/schedulerConstants";
import {
  NotificationStepDefaultMessage,
  OutputStepDefaultMessage,
  ParametersStepDefaultMessage,
  ScheduleStepDefaultMessage,
} from "./DefaultData";

import {
  NotificationStepUserInput,
  OutputStepUserInput,
  ParametersStepUserInput,
  ScheduleStepUserInput,
} from "./FieldUserInputData";
import { useSelector } from "react-redux";
import { StepIcon } from "./StepIcon";

const DefaultOrMessageBasedOnUserInput = (
  currentTab: string,
  defaultMsg?: boolean,
) => {
  switch (currentTab) {
    case SCHEDULE_TAB:
      return defaultMsg ? (
        <ScheduleStepDefaultMessage />
      ) : (
        <ScheduleStepUserInput />
      );
    case PARAMETERS_TAB:
      return defaultMsg ? (
        <ParametersStepDefaultMessage />
      ) : (
        <ParametersStepUserInput />
      );
    case NOTIFICATIONS_TAB:
      return defaultMsg ? (
        <NotificationStepDefaultMessage />
      ) : (
        <NotificationStepUserInput />
      );
    default:
      return defaultMsg ? (
        <OutputStepDefaultMessage />
      ) : (
        <OutputStepUserInput />
      );
  }
};

const getIconState = (type: string) => {
  return { icon: type };
};

const StepStateIcon = (props: any) => {
  return <StepIcon {...props} />;
};

const Stepper = () => {
  const [iconState, setIconState] = useState({ ...tabsStateDefaultState });

  const activeStep = useSelector((state: any) => state.currentActiveTab);
  const visitedTabs = useSelector((state: any) => state.visitedTabs);
  const visibleSteps = useSelector(
    (state: any) => state.tabsConfiguration.stepsToShow,
  );

  const {
    label,
    description,
    address,
    subject,
    messageText,
    recurrenceInterval,
    recurrenceIntervalUnit,
    startDate,
    baseOutputFilename,
    outputFormat,
    folderURI,
    baseOutputFileDescription,
  } = useSelector((state: any) => state.scheduleErrors || {});

  const setIconStateOnChange = (tabName: string, tabState: string) => {
    setIconState((prevState) => {
      return { ...prevState, [tabName]: tabState };
    });
  };

  useEffect(() => {
    if (visitedTabs.includes(NOTIFICATIONS_TAB)) {
      const tabState =
        address || subject || messageText || folderURI
          ? ERROR_STATE
          : SUCCESS_STATE;
      setIconStateOnChange(NOTIFICATIONS_TAB, tabState);
    }
  }, [address, subject, messageText, folderURI, visitedTabs]);

  useEffect(() => {
    if (visitedTabs.includes(SCHEDULE_TAB)) {
      const tabState =
        recurrenceIntervalUnit ||
        recurrenceInterval ||
        startDate ||
        label ||
        description
          ? ERROR_STATE
          : SUCCESS_STATE;
      setIconStateOnChange(SCHEDULE_TAB, tabState);
    }
  }, [
    recurrenceInterval,
    label,
    description,
    recurrenceIntervalUnit,
    startDate,
    visitedTabs,
  ]);

  useEffect(() => {
    if (visitedTabs.includes(OUTPUT_TAB)) {
      const tabState =
        baseOutputFilename || outputFormat || baseOutputFileDescription
          ? ERROR_STATE
          : SUCCESS_STATE;
      setIconStateOnChange(OUTPUT_TAB, tabState);
    }
  }, [
    baseOutputFilename,
    baseOutputFileDescription,
    outputFormat,
    visitedTabs,
  ]);
  useEffect(() => {
    setIconStateOnChange(PARAMETERS_TAB, SUCCESS_STATE);
  }, [visitedTabs]);

  return (
    <JVStepper
      nonLinear
      orientation="vertical"
      activeStep={stepperSteps[activeStep]}
      className="jr-uMargin-tb-15 jr-uMargin-lr-08"
    >
      {visibleSteps.map((item: any, index: number, arr: any) => {
        const isDefaultMsg =
          activeStep === arr[index].name &&
          !visitedTabs.includes(arr[index].name);
        return (
          <JVStep
            key={item.name}
            TypographyProps={{
              title: item.title,
              dataName: item.title,
              className: "jr-uGrey-dark jr-uText-lh-150 jr-uMargin-b-01",
            }}
            StepLabelProps={{
              ...getIconState(iconState[arr[index].name]),
              StepIconComponent: StepStateIcon,
            }}
            data-name={`${item.name}Stepper`}
          >
            {isDefaultMsg &&
              DefaultOrMessageBasedOnUserInput(arr[index].name, true)}
            {visitedTabs.includes(arr[index].name) &&
              DefaultOrMessageBasedOnUserInput(arr[index].name)}
          </JVStep>
        );
      })}
    </JVStepper>
  );
};

export default Stepper;
