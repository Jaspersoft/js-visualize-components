import React, { useEffect } from "react";
import Tabs from "./Tabs/Tabs";
import { useDispatch } from "react-redux";
import { getInputControls } from "../services/schedulerServices";
import {
  getUserTimeZones,
  getOutputFormats,
  setSechedulerUIConfig,
  setTabsVisibility,
} from "../actions/action";
import ScheduleStepper from "./Stepper/ScheduleStepper";
import SchedulerFooter from "./Tabs/SchedulerFooter";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import SchedulerHeader from "./Tabs/SchedulerHeader";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { getTabsConfig, getTabsToShow } from "../utils/configurationUtils";
import { tabsDefaultOrder } from "../constants/schedulerConstants";

const SchedulerMain = (schedulerUIConfig: ISchedulerUIConfig) => {
  const dispatch = useDispatch();

  const setTabsConfig = () => {
    const tabsToShow = getTabsConfig(schedulerUIConfig);
    dispatch(setTabsVisibility(tabsToShow));
  };

  useEffect(() => {
    dispatch(setSechedulerUIConfig(schedulerUIConfig));
    dispatch(getUserTimeZones());
    dispatch(getOutputFormats());

    setTabsConfig();

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
