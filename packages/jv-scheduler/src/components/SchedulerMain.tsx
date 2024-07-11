import React, { useEffect } from "react";
import Tabs from "./Tabs/Tabs";
import { useDispatch } from "react-redux";
import { getInputControls } from "../services/schedulerServices";
import { getUserTimeZones, getOutputFormats } from "../actions/action";
import ScheduleStepper from "./Stepper/ScheduleStepper";
import SchedulerFooter from "./Tabs/SchedulerFooter";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import SchedulerHeader from "./Tabs/SchedulerHeader";

const SchedulerMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTimeZones());
    dispatch(getOutputFormats());

    const fetchData = async () => {
      const inputControls = await getInputControls();
      if (inputControls.error) {
        // handle error for input controls
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <JVStylesProvider>
        <div className="jv-lColumns">
          <div className="jv-lColumns-column jv-uWidth-300px jv-uOverflow-auto jv-uBackgroundGrey-04">
            <ScheduleStepper />
          </div>
          <div className="jv-lColumns-column  jv-uWidth-550px jv-uOverflow-auto">
            <SchedulerHeader />
            <Tabs />
            <SchedulerFooter />
          </div>
        </div>
      </JVStylesProvider>
    </>
  );
};
export default SchedulerMain;
