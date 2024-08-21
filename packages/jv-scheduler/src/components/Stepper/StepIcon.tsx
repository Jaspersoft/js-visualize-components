/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import { JVIcon } from "@jaspersoft/jv-ui-components";
import {
  ERROR_STATE,
  INCOMPLETE_DEFAULT_STATE,
  INCOMPLETE_STATE,
  SUCCESS_STATE,
} from "../../constants/schedulerConstants";

type CommonIconProps = {
  icon: string;
  className: string;
  dataName: string;
};

const CommonIcon = ({ icon, className, dataName }: CommonIconProps) => {
  return (
    <JVIcon
      icon={icon}
      className={`jr-mStepper-icon ${className}`}
      data-name={dataName}
    />
  );
};

export const StepIcon = (props: any) => {
  const { icon } = props;
  return (
    <div>
      {icon === SUCCESS_STATE && (
        <CommonIcon
          icon="checkmarkRound"
          className="jr-uColor-success"
          dataName=""
        />
      )}
      {icon === ERROR_STATE && (
        <CommonIcon
          icon="warningRound"
          className="jr-uColor-error"
          dataName=""
        />
      )}
      {icon === INCOMPLETE_DEFAULT_STATE && (
        <CommonIcon
          icon="checkmarkRound"
          className="jr-uColor-incomplete"
          dataName=""
        />
      )}
      {icon === INCOMPLETE_STATE && (
        <CommonIcon
          icon="circleSolid"
          className="jr-uColor-incomplete"
          dataName=""
        />
      )}
    </div>
  );
};
