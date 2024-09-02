import React from "react";
import { Typography as JVTypography } from "@jaspersoft/jv-ui-components/material-ui/Typography/Typography";
import { useTranslation } from "react-i18next";

const SchedulerHeader = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <div className="jv-mDrawer-header mui">
      <JVTypography className="jv-mDrawer-header-title" variant="h2">
        {t("create.schedule.header")}
      </JVTypography>
    </div>
  );
};

export default SchedulerHeader;
