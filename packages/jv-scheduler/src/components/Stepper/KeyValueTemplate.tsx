import React, { FC } from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

interface KeyValueTemplateProps {
  title: string;
  value: string | undefined | null | number;
  dataName?: string;
  className?: string;
}

export const KeyValueTemplate: FC<KeyValueTemplateProps> = ({
  title,
  value,
  dataName,
  className,
}) => {
  return (
    <JVTypography className="jr-uMargin-b-01" variant="body1">
      <span className="jr-uTextBold jr-uGrey-dark mui">{title}</span>
      <span className="jr-uGrey-light jr-uMargin-l-01 mui">{value}</span>
    </JVTypography>
  );
};
