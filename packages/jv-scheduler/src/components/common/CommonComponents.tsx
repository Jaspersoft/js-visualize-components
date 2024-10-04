/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import { JVTypography, JVTypographyProps } from "@jaspersoft/jv-ui-components";

type JVTypographyComponentType = JVTypographyProps & { text: string };

export const JVTypographyComponent = ({
  text,
  ...rest
}: JVTypographyComponentType) => {
  return (
    <JVTypography
      className="jv-mTextTitle jv-mTextXSmall jv-uTextBold jv-uColor-grey-medium jv-uMargin-b-04"
      variant="body1"
      {...rest}
    >
      {text}
    </JVTypography>
  );
};
