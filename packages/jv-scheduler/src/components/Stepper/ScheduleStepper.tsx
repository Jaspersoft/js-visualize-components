import React from "react";
import { JVStep, JVStepper } from "@jaspersoft/jv-ui-components";
import { stepInfo } from "../../constants/schedulerConstants";

const ScheduleStepper = () => {
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
          ></JVStep>
        );
      })}
    </JVStepper>
  );
};

export default ScheduleStepper;
