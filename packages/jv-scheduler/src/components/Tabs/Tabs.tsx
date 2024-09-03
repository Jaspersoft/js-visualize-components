import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";
import Schedule from "../Tabs/TabsContent/Schedule";
import Parameters from "../Tabs/TabsContent/Parameters";
import Output from "../Tabs/TabsContent/Output";
import Notifications from "./TabsContent/notifications/Notifications";
import {
  currentTabValidationError,
  currentTabValidator,
  setCurrentActiveTab,
  setVisitedTab,
} from "./../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import {
  defaultTabsToShow,
  PARAMETERS_TAB,
} from "../../constants/schedulerConstants";
import { IState } from "../../types/scheduleType";

function CustomTabPanel(props: any) {
  const { children, value, currentActive, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== currentActive}
      id={`simple-tabpanel-${currentActive}`}
      aria-labelledby={`simple-tab-${currentActive}`}
      {...other}
    >
      {value === currentActive && children}
    </div>
  );
}

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
                data-name={`schedule-${item.label}-button-tab`}
              />
            );
          })}
        </JVTabs>
      </div>
      <div className="jr-mDrawer-body jr-mDrawer-bodyPadded mui">
        <CustomTabPanel value="schedule" currentActive={currentActiveTab}>
          <Schedule />
        </CustomTabPanel>
        <CustomTabPanel value="parameters" currentActive={currentActiveTab}>
          <Parameters />
        </CustomTabPanel>
        <CustomTabPanel value="notifications" currentActive={currentActiveTab}>
          <Notifications />
        </CustomTabPanel>
        <CustomTabPanel value="output" currentActive={currentActiveTab}>
          <Output />
        </CustomTabPanel>
      </div>
    </>
  );
};
export default Tabs;
