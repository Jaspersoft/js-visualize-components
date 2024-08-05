import React, { useEffect } from "react";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { ConfigurationErrorHandling } from "./errorHandling/configurationErrorHandling";
import { getSchedulerData } from "../utils/configurationUtils";

const EntryPoint = (schedulerUIConfig: ISchedulerUIConfig) => {
  const { i18n } = useTranslation();

  const schedulerData = getSchedulerData(schedulerUIConfig);

  useEffect(() => {
    i18n.changeLanguage(schedulerUIConfig.locale || "en");
  }, [schedulerUIConfig.locale]);

  return (
    <>
      {schedulerData.error ? (
        <ConfigurationErrorHandling />
      ) : (
        <ReduxProvider store={store}>
          <SchedulerMain
            schedulerUIConfig={schedulerUIConfig}
            schedulerData={schedulerData}
          />
        </ReduxProvider>
      )}
    </>
  );
};

export default EntryPoint;
