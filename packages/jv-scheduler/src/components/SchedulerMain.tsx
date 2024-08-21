import React, { useEffect } from "react";
import Tabs from "./Tabs/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { setInitialPluginState } from "../actions/action";
import Stepper from "./Stepper/Stepper";
import SchedulerFooter from "./Tabs/SchedulerFooter";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import SchedulerHeader from "./Tabs/SchedulerHeader";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { ErrorConfirmationDialog } from "./apiFailureError/ErrorConfirmationDialog";
import { IState } from "../types/scheduleType";

const SchedulerMain = ({ schedulerData, schedulerUIConfig }: any) => {
  const dispatch = useDispatch();
  const stepperConfig = useSelector(
    (state: IState) => state.stepperConfiguration,
  );

  useEffect(() => {
    dispatch(setInitialPluginState(schedulerData, schedulerUIConfig));
  }, []);
  // useEffect(() => {
  //
  //   const fetchData = async () => {
  //     const inputControls = await getInputControls();
  //     if (inputControls.error) {
  //       // handle error for input controls
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <JVStylesProvider>
        <div className="jv-lColumns">
          {stepperConfig?.show && (
            <div className="jv-lColumns-column jv-uWidth-300px jv-uOverflow-auto jv-uBackgroundGrey-04">
              <Stepper />
            </div>
          )}

          <div className="jv-lColumns-column  jv-uWidth-550px jv-uOverflow-auto">
            <SchedulerHeader />
            <Tabs />
            <SchedulerFooter />
          </div>
          <ErrorConfirmationDialog />
        </div>
      </JVStylesProvider>
    </>
  );
};
export default SchedulerMain;
