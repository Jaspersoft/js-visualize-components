import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";
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
