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
