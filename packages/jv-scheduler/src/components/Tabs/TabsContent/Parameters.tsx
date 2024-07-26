import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useTranslation } from "react-i18next";

const Parameters = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <>
      <JVTypographyComponent text={t("parameters.title")} />
    </>
  );
};

export default Parameters;
