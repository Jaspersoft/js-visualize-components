import React, { useState } from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { allTabValidationError, createScheduleJob } from "../../actions/action";
// import {IState} from "../../types/scheduleType";

const SchedulerFooter = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const [isCreateBtnDisabled, setCreateBtnDisability] = useState(false);
  const dispatch = useDispatch();
  // const parametersTabLoading = useSelector((state: IState) => state.parametersTabLoading);
  //
  // useEffect(() => {
  //   const { isError, isLoaded } = parametersTabLoading;
  //   console.log(isError, isLoaded)
  //   if (isError ||  !isLoaded) {
  //     setCreateBtnDisability(true);
  //   } else {
  //     setCreateBtnDisability(false);
  //   }
  // }, [parametersTabLoading])

  const handleCreateScheduleAPI = (isError: boolean) => {
    const enableCreateButton = () => setCreateBtnDisability(false);
    if (isError) {
      enableCreateButton();
    } else {
      dispatch(createScheduleJob(enableCreateButton));
    }
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
        <JVButton variant="contained">{t("cancel.button")}</JVButton>
      </div>
    </>
  );
};

export default SchedulerFooter;
