/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React, { useEffect, useState } from "react";
import { VisualizeClient } from "@jaspersoft/jv-tools";
import { createRoot } from "react-dom/client";
import i18nScheduler from "../i18n";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";
import { getSchedulerData } from "../utils/configurationUtils";
import { SchedulerConfig } from "../types/scheduleType";

export type SchedulerProps = {
  v: VisualizeClient;
  config: SchedulerConfig;
  uri: string;
};

export function renderScheduler(
  v: VisualizeClient,
  uri: string,
  container: HTMLElement,
  config: SchedulerConfig,
) {
  const rootElement = container;
  if (!rootElement) {
    return config.events?.error?.({
      "container.not.found": "Root element is not found",
    });
  } else {
    const schedulerRoot = createRoot(rootElement);
    schedulerRoot.render(<EntryPoint v={v} config={config} uri={uri} />);
  }
}

const EntryPoint = (props: SchedulerProps) => {
  const { i18n } = useTranslation(undefined, {
    i18n: i18nScheduler,
  });
  const [isLoadComp, setIsLoadComp] = useState(false);
  const [schedulerData, setSchedulerData] = useState<any>({});
  const { config, v, uri } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchedulerData({
          ...config,
          server: v.server,
          resourceURI: uri,
        });
        setSchedulerData(response);
        if (response.error) {
          config.events?.error?.(response.error);
        } else {
          config.events?.success?.();
        }
        setIsLoadComp(true);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(config.locale || "en");
  }, [config.locale]);

  return (
    <>
      {!schedulerData.error && isLoadComp && (
        <ReduxProvider store={store}>
          <SchedulerMain
            schedulerUIConfig={{ ...config, server: v.server }}
            schedulerData={schedulerData}
            visualize={v}
            uri={uri}
          />
        </ReduxProvider>
      )}
    </>
  );
};

export default EntryPoint;
