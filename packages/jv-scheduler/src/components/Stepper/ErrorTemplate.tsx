/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
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
