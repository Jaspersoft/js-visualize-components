/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

export const ErrorTemplate = ({ text }: { text: string }) => {
  return (
    <JVTypography className="jv-mText jv-uMargin-b-01 jv-uColor-error">
      {text}
    </JVTypography>
  );
};
