import React, { useEffect, useState } from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { allTabValidationError, createScheduleJob } from "../../actions/action";
import { translationProps } from "../../types/scheduleType";
import { IState } from "../../types/scheduleType";
import i18nScheduler from "../../i18n";

const SchedulerFooter = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const [isCreateBtnDisabled, setCreateBtnDisability] = useState(false);
  const scheduleConfig = useSelector(
    (state: IState) => state.schedulerUIConfig,
  );
  const dispatch = useDispatch();
  const parametersTabLoading = useSelector(
    (state: IState) => state.parametersTabLoading,
  );

  useEffect(() => {
    const { isError, isLoaded } = parametersTabLoading;
    console.log(isError, isLoaded);
    if (isError || !isLoaded) {
      setCreateBtnDisability(true);
    } else {
      setCreateBtnDisability(false);
    }
  }, [parametersTabLoading]);

  const handleCreateScheduleAPI = (isError: boolean) => {
    const enableCreateButton = () => setCreateBtnDisability(false);
    if (isError) {
      enableCreateButton();
    } else {
      dispatch(createScheduleJob(enableCreateButton));
    }
    scheduleConfig?.handlers?.events?.onScheduleBtnClick?.();
  };
  const handleCreateSchedule = () => {
    setCreateBtnDisability(true);
    dispatch(allTabValidationError(handleCreateScheduleAPI));
  };

  return (
    <>
      <div className="jv-mDrawer-footer mui">
        <JVButton
          color="primary"
          variant="contained"
          disabled={isCreateBtnDisabled}
          onClick={handleCreateSchedule}
        >
          {t("create.schedule.button")}
        </JVButton>
        <JVButton
          variant="contained"
          onClick={() => scheduleConfig?.handlers?.events?.onCancelBtnClick?.()}
        >
          {t("cancel.button")}
        </JVButton>
      </div>
    </>
  );
};

export default SchedulerFooter;
