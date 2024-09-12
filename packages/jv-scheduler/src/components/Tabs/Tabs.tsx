import React, { ChangeEvent, useEffect, useState } from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";
import Schedule from "../Tabs/TabsContent/Schedule";
import Parameters from "../Tabs/TabsContent/Parameters";
import Output from "../Tabs/TabsContent/Output";
import Notifications from "./TabsContent/notifications/Notifications";
import {
  currentTabValidationError,
  setCurrentActiveTab,
  setVisitedTab,
} from "./../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { PARAMETERS_TAB } from "../../constants/schedulerConstants";
import { IState } from "../../types/scheduleType";

const Tabs = () => {
  const dispatch = useDispatch<any>();
  const visitedTabs = useSelector(
    (state: Pick<IState, "visitedTabs">) => state.visitedTabs,
  );
  const visibleTabs = useSelector(
    (state: IState) => state.tabsConfiguration.tabsToShow,
  );
  const currentActiveTab = useSelector(
    (state: Pick<IState, "currentActiveTab">) => state.currentActiveTab,
  );
  // const parametersTabLoading = useSelector((state: IState) => state.parametersTabLoading);
  // const [disableTabs, setDisableTabs] = useState(!parametersTabLoading.isLoaded);

  // useEffect(() => {
  //   debugger;
  //   setDisableTabs(!parametersTabLoading.isLoaded);
  // }, [parametersTabLoading.isLoaded])

  const handleVisitedTabs = () => {
    if (!visitedTabs.includes(currentActiveTab)) {
      dispatch(setVisitedTab([...visitedTabs, currentActiveTab]));
    }
  };
  const handleStateChange = (newValue: string | undefined) => () => {
    handleVisitedTabs();
    if (newValue) {
      dispatch(setCurrentActiveTab(newValue));
    }
  };
  const handleTabsErrors = (newValue: string | undefined) => {
    dispatch(currentTabValidationError(handleStateChange(newValue)));
  };
  const handleChange = (event: ChangeEvent<{}>, newValue?: string) => {
    if (currentActiveTab !== PARAMETERS_TAB) {
      handleTabsErrors(newValue);
    } else {
      handleStateChange(newValue)();
    }
  };

  return (
    <>
      <div className="jv-mDrawer-subheader jv-uMargin-t-04 jv-mDrawer-subheaderPadded mui">
        <JVTabs
          value={currentActiveTab}
          aria-label="navigationPanel"
          size="large"
          onChange={handleChange}
        >
          {visibleTabs?.map((item: any) => {
            return (
              <JVTab
                key={item.key}
                label={item.label}
                value={item.value}
                // disabled={disableTabs}
                data-name={`schedule-${item.label}-button-tab`}
              />
            );
          })}
        </JVTabs>
      </div>
      <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
        {currentActiveTab === "schedule" && <Schedule />}
        {currentActiveTab === "parameters" && <Parameters />}
        {currentActiveTab === "notifications" && <Notifications />}
        {currentActiveTab === "output" && <Output />}
      </div>
    </>
  );
};
export default Tabs;
