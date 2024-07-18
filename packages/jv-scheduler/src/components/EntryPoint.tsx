import React, { useEffect } from "react";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";

const EntryPoint = (schedulerUIConfig: ISchedulerUIConfig) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(schedulerUIConfig.locale || "en");
  }, [schedulerUIConfig.locale]);

  return (
    <ReduxProvider store={store}>
      <SchedulerMain {...schedulerUIConfig} />
    </ReduxProvider>
  );
};

export default EntryPoint;
