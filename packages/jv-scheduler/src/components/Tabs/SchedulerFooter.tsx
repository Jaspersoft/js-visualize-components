import React from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";

const SchedulerFooter = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <>
      <div className="jv-mDrawer-footer mui">
        <JVButton color="primary" variant="contained">
          {t("create.schedule.button")}
        </JVButton>
        <JVButton variant="contained">{t("cancel.button")}</JVButton>
      </div>
    </>
  );
};

export default SchedulerFooter;
