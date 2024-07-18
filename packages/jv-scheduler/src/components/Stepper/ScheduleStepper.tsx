import React from "react";
import { JVStep, JVStepper } from "@jaspersoft/jv-ui-components";
import {
  NOTIFICATIONS_TAB,
  OUTPUT_TAB,
  PARAMETERS_TAB,
  stepInfo,
} from "../../constants/schedulerConstants";
import {
  NotificationStepDefaultMessage,
  OutputStepDefaultMessage,
  ParametersStepDefaultMessage,
  ScheduleStepDefaultMessage,
} from "./DefaultData";

const ScheduleStepper = () => {
  const DefaultOrMessageBasedOnUserInput = (
    currentTab: string,
    defaultMsg?: boolean,
  ) => {
    switch (currentTab) {
      case PARAMETERS_TAB: {
        return <ParametersStepDefaultMessage />;
      }
      case OUTPUT_TAB: {
        return <OutputStepDefaultMessage />;
      }
      case NOTIFICATIONS_TAB: {
        return <NotificationStepDefaultMessage />;
      }
      default: {
        return <ScheduleStepDefaultMessage />;
      }
    }
  };
  return (
    <JVStepper
      nonLinear
      orientation="vertical"
      className="jv-uMargin-tb-15 jv-uMargin-lr-08"
    >
      {stepInfo.map((item, index, arr) => {
        return (
          <JVStep
            key={item.name}
            TypographyProps={{
              title: item.title,
              className: "jv-uGrey-dark jv-uText-lh-150 jv-uMargin-b-01",
            }}
          >
            {DefaultOrMessageBasedOnUserInput(arr[index].name, true)}
          </JVStep>
        );
      })}
    </JVStepper>
  );
};

export default ScheduleStepper;
