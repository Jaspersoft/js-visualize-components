/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

export const ErrorTemplate = ({
  text,
  dataName,
}: {
  text: string;
  dataName: string;
}) => {
  return (
    <JVTypography
      className="jr-mText jr-uMargin-b-01 jr-uColor-error"
      data-name={dataName}
    >
      {text}
    </JVTypography>
  );
};