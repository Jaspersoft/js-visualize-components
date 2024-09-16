import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { ConfigurationErrorHandling } from "./errorHandling/configurationErrorHandling";
import { getSchedulerData } from "../utils/configurationUtils";
import { SchedulerConfigProps } from "../types/scheduleType";

type SchedulerProps = {
  visualize: {};
  schedulerUIConfig: SchedulerConfigProps;
};

export class SchedulerUiJS {
  private viz: any;

  constructor(vizjs: any) {
    this.viz = vizjs;
  }

  renderScheduler(uri: string, container: HTMLElement, config?: any) {
    const rootElement = container;
    if (!rootElement) {
      throw new Error("Root element not found");
    } else {
      const schedulerRoot = createRoot(rootElement);
      schedulerRoot.render(
        <EntryPoint
          visualize={this.viz}
          schedulerUIConfig={{ ...config, resourceURI: uri }}
        />,
      );
    }
  }
}

const EntryPoint = (props: SchedulerProps) => {
  const { i18n } = useTranslation();
  const [isLoadComp, setIsLoadComp] = useState(false);
  const [schedulerData, setSchedulerData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchedulerData(props.schedulerUIConfig);
        setSchedulerData(response);
        setIsLoadComp(true);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    i18n.changeLanguage(props.schedulerUIConfig.locale || "en");
  }, [props.schedulerUIConfig.locale]);

  return (
    <>
      {schedulerData.error ? (
        <ConfigurationErrorHandling />
      ) : (
        isLoadComp && (
          <ReduxProvider store={store}>
            <SchedulerMain
              schedulerUIConfig={props.schedulerUIConfig}
              schedulerData={schedulerData}
              visualize={props.visualize}
            />
          </ReduxProvider>
        )
      )}
    </>
  );
};

export default EntryPoint;
