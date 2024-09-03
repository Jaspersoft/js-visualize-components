/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import { Typography as JVTypography } from "@jaspersoft/jv-ui-components/material-ui/Typography/Typography";

export const ErrorTemplate = ({ text }: { text: string }) => {
  return (
    <JVTypography className="jr-mText jr-uMargin-b-01 jr-uColor-error">
      {text}
    </JVTypography>
  );
};
