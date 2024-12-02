/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
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

const CommonIcon = ({
  icon,
  className,
  dataName,
  ...rest
}: CommonIconProps) => {
  return (
    <JVIcon
      icon={icon}
      className={`jv-mStepper-icon ${className}`}
      data-name={dataName}
      {...rest}
    />
  );
};

export const StepIcon = (props: any) => {
  const { icon, ...rest } = props;
  return (
    <div>
      {icon === SUCCESS_STATE && (
        <CommonIcon
          icon="checkmarkRound"
          className="jv-uColor-success"
          dataName=""
          {...rest}
        />
      )}
      {icon === ERROR_STATE && (
        <CommonIcon
          icon="warningRound"
          className="jv-uColor-error"
          dataName=""
          {...rest}
        />
      )}
      {icon === INCOMPLETE_DEFAULT_STATE && (
        <CommonIcon
          icon="checkmarkRound"
          className="jv-uColor-incomplete"
          dataName=""
          {...rest}
        />
      )}
      {icon === INCOMPLETE_STATE && (
        <CommonIcon
          icon="circleSolid"
          className="jv-uColor-incomplete"
          dataName=""
          {...rest}
        />
      )}
    </div>
  );
};
