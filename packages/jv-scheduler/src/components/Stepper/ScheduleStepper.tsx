import React from "react";
import { JVStep, JVStepper } from "@jaspersoft/jv-ui-components";
import {
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  PARAMETERS_TAB,
  SCHEDULE_TAB,
  stepInfo,
  stepperSteps,
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

const ScheduleStepper = () => {
  const activeStep = useSelector((state: any) => state.currentActiveTab);
  const visitedTabs = useSelector((state: any) => state.visitedTabs);

  return (
    <JVStepper
      nonLinear
      orientation="vertical"
      activeStep={stepperSteps[activeStep]}
      className="jr-uMargin-tb-15 jr-uMargin-lr-08"
    >
      {stepInfo.map((item, index, arr) => {
        const isDefaultMsg = !visitedTabs.includes(arr[index].name);
        return (
          <JVStep
            key={item.name}
            TypographyProps={{
              title: item.title,
              dataName: item.title,
              className: "jr-uGrey-dark jr-uText-lh-150 jr-uMargin-b-01",
            }}
            // StepLabelProps={{
            //   ...getIconState(iconState[arr[index].name]),
            //   StepIconComponent: StepStateIcon,
            // }}
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

export default ScheduleStepper;
