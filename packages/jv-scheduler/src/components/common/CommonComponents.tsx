import React from "react";
import { Typography as JVTypography } from "@jaspersoft/jv-ui-components/material-ui/Typography/Typography";
import { TypographyProps as JVTypographyProps } from "@jaspersoft/jv-ui-components/material-ui/Typography/Typography";

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
