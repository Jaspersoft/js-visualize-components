import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";
import Schedule from "../Tabs/TabsContent/Schedule";
import Parameters from "../Tabs/TabsContent/Parameters";
import Output from "../Tabs/TabsContent/Output";
import Notifications from "./TabsContent/notifications/Notifications";
import {
  currentTabValidator,
  setCurrentActiveTab,
  setVisitedTab,
} from "./../../actions/action";
import { useDispatch, useSelector } from "react-redux";

export const tabParameters = [
  {
    key: "schedule",
    label: "Schedule",
    value: "schedule",
  },
  {
    key: "parameters",
    label: "Parameters",
    value: "parameters",
  },
  {
    key: "notifications",
    label: "Notifications",
    value: "notifications",
  },
  {
    key: "output",
    label: "Output",
    value: "output",
  },
];

export const Tabs = () => {
  const dispatch = useDispatch<any>();
  const visitedTabs = useSelector((state: any) => state.visitedTabs);
  const currentActiveTab = useSelector((state: any) => state.currentActiveTab);

  const handleChange = (event: ChangeEvent<{}>, newValue?: string) => {
    if (!visitedTabs.includes(currentActiveTab)) {
      dispatch(setVisitedTab([...visitedTabs, currentActiveTab]));
    }
    dispatch(currentTabValidator(newValue));
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
          {tabParameters.map((item) => {
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
        {currentActiveTab === "schedule" && <Schedule />}
        {currentActiveTab === "parameters" && <Parameters />}
        {currentActiveTab === "notifications" && <Notifications />}
        {currentActiveTab === "output" && <Output />}
      </div>
    </>
  );
};
export default Tabs;
