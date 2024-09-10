import React, { FC } from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

interface KeyValueTemplateProps {
  title: string;
  value: string | undefined | null | number;
  className?: string | undefined;
  dataName?: string | undefined;
}

export const KeyValueTemplate: FC<KeyValueTemplateProps> = ({
  title,
  value,
  dataName = "",
  className = "",
}) => {
  return (
    <JVTypography
      className={`jv-uMargin-b-01 ${className}`}
      variant="body1"
      data-name={dataName}
    >
      <span className="jv-uTextBold jv-uGrey-dark mui">{title}</span>
      <span className="jv-uGrey-light jv-uMargin-l-01 mui">{value}</span>
    </JVTypography>
  );
};
