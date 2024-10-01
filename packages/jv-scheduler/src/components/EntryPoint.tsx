import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import i18nScheduler from "../i18n";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { getSchedulerData } from "../utils/configurationUtils";
import { SchedulerConfigProps } from "../types/scheduleType";

type SchedulerProps = {
  visualize: {};
  schedulerUIConfig: SchedulerConfigProps;
};

export function renderScheduler(
  container: HTMLElement,
  vizjs: {},
  config: SchedulerConfigProps,
) {
  const rootElement = container;
  if (!rootElement) {
    return config.events?.error?.({
      "container.not.found": "Root element is not found",
    });
  } else {
    const schedulerRoot = createRoot(rootElement);
    schedulerRoot.render(
      <EntryPoint visualize={vizjs} schedulerUIConfig={{ ...config }} />,
    );
  }
}

const EntryPoint = (props: SchedulerProps) => {
  const { i18n } = useTranslation(undefined, {
    i18n: i18nScheduler,
  });
  const [isLoadComp, setIsLoadComp] = useState(false);
  const [schedulerData, setSchedulerData] = useState<any>({});
  const { schedulerUIConfig, visualize } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchedulerData(props.schedulerUIConfig);
        setSchedulerData(response);
        if (response.error) {
          schedulerUIConfig.events?.error?.(response.error);
        } else {
          schedulerUIConfig.events?.success?.();
        }
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
      {!schedulerData.error && isLoadComp && (
        <ReduxProvider store={store}>
          <SchedulerMain
            schedulerUIConfig={schedulerUIConfig}
            schedulerData={schedulerData}
            visualize={visualize}
          />
        </ReduxProvider>
      )}
    </>
  );
};

export default EntryPoint;
