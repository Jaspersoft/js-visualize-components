import React from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../types/scheduleType";
import { createAlert } from "../../actions/action";

const SchedulerFooter = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const dispatch = useDispatch();

  const handleCreateSchedule = () => {
    dispatch(createAlert());
  };

  return (
    <>
      <div className="jv-mDrawer-footer mui">
        <JVButton
          color="primary"
          variant="contained"
          onClick={handleCreateSchedule}
        >
          {t("create.schedule.button")}
        </JVButton>
        <JVButton variant="contained">{t("cancel.button")}</JVButton>
      </div>
    </>
  );
};

export default SchedulerFooter;
