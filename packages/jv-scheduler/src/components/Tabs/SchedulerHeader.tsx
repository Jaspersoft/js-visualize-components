import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";
import { translationProps } from "../../types/scheduleType";
import i18nScheduler from "../../i18n";

const SchedulerHeader = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  return (
    <div className="jv-mDrawer-header mui">
      <JVTypography className="jv-mDrawer-header-title" variant="h2">
        {t("create.schedule.header")}
      </JVTypography>
    </div>
  );
};

export default SchedulerHeader;
