import React, { useEffect, useState } from "react";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { ISchedulerUIConfig } from "../types/schedulerUIConfigTypes";
import { ConfigurationErrorHandling } from "./errorHandling/configurationErrorHandling";
import { getSchedulerData } from "../utils/configurationUtils";

const EntryPoint = (schedulerUIConfig: ISchedulerUIConfig) => {
  const { i18n } = useTranslation();
  const [isLoadComp, setIsLoadComp] = useState(false);
  const [schedulerData, setSchedulerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchedulerData(schedulerUIConfig);
        setSchedulerData(response);
        setIsLoadComp(true);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    i18n.changeLanguage(schedulerUIConfig.locale || "en");
  }, [schedulerUIConfig.locale]);

  return (
    <>
      {schedulerData.error ? (
        <ConfigurationErrorHandling />
      ) : (
        isLoadComp && (
          <ReduxProvider store={store}>
            <SchedulerMain
              schedulerUIConfig={schedulerUIConfig}
              schedulerData={schedulerData}
            />
          </ReduxProvider>
        )
      )}
    </>
  );
};

export default EntryPoint;
