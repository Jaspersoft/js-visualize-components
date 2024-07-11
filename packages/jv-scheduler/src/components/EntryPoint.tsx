import React, { useEffect } from "react";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";

type EntryPointProps = { lang: string };
const EntryPoint = (schedulerUIConfig: ISchedulerUIConfig) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(schedulerUIConfig.locale || "en");
  }, [schedulerUIConfig.locale]);

  return (
    <ReduxProvider store={store}>
      <SchedulerMain />
    </ReduxProvider>
  );
};

export default EntryPoint;
