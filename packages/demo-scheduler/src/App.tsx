/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useEffect, useState } from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeClient,
} from "@jaspersoft/jv-tools";
import {
  // renderScheduler,
  defaultSchedulerConfig,
} from "@jaspersoft/jv-scheduler";
import { JVButton } from "@jaspersoft/jv-ui-components";
import schedulerUIConfig from "./jv_sheduler_config";
import ReportPanel from "./report/ReportPanel";
import "./App.css";
import { Scheduler } from "./Scheduler";

const visualizeUrl = `${schedulerUIConfig.server}${schedulerUIConfig.contextPath}/client/visualize.js`;

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
  organization: "organization_1",
  locale: "en_US",
};

const resourceUri = "/public/Samples/Reports/07g.RevenueDetailReport";
function SchedulerApp() {
  const [visualize, setVisualize] = useState(
    null as { v: VisualizeClient } | null,
  );

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    loadVisualize().then((visualizeFactory: VisualizeFactory) => {
      visualizeFactory(
        {
          auth: { ...credentials },
        },
        (v: VisualizeClient) => {
          setVisualize({ v });
        },
        (e: any) => {
          console.log(String(e));
        },
      );
    });
    if (!schedulerUIConfig.events) {
      schedulerUIConfig.events = {};
    }
    if (schedulerUIConfig.events) {
      schedulerUIConfig.events.cancelBtnClick = () => {
        console.log("cancel button is clicked");
        setIsPanelOpen(false);
      };
      schedulerUIConfig.events.scheduleBtnClick = (
        isScheduleSuccessful,
        jobInfo,
      ) => {
        console.log("Schedule button clicked", isScheduleSuccessful, jobInfo);
        if (isScheduleSuccessful) setIsPanelOpen(false);
      };
      schedulerUIConfig.events.success = () => {
        console.log("Schedule panel rendered successfully");
      };
    }
  }, []);

  useEffect(() => {
    if (visualize === undefined) {
      return;
    }
    // uncomment below code to see working of scheduler using JS API
    // const schedulerElement = document.getElementById("sheduler");
    // if (visualize) {
    //   renderScheduler(
    //       visualize.v,
    //     resourceUri,
    //     schedulerElement as HTMLElement,
    //     schedulerUIConfig,
    //   );
    // }
  }, [visualize]);

  console.log("SchedulerConfig ", defaultSchedulerConfig);
  return (
    <>
      <div id="scheduler"></div>
      {visualize ? (
        <>
          <div id="header">
            <h1 className="flexItem pageHeader-title-text">
              Scheduler App
              <div className="pageHeader-subtitle-path">
                <span className="pageHeader-subtitle-path-label">
                  Schedule For:{" "}
                </span>
                <span className="pageHeader-subtitle-path-text">
                  {resourceUri}
                </span>
              </div>
            </h1>
            <JVButton
              id="scheduleBtn"
              disableElevation
              size="large"
              color="primary"
              variant="contained"
              onClick={() => setIsPanelOpen(true)}
            >
              Schedule
            </JVButton>
          </div>
          <div
            id="pageDimmer"
            className={`dimmer ${isPanelOpen ? "" : "hidden"}`}
            style={{ zIndex: 999 }}
          ></div>
          <ReportPanel vObject={visualize.v} resourceURI={resourceUri} />
          {isPanelOpen && (
            <Scheduler
              v={visualize.v}
              config={schedulerUIConfig}
              uri={resourceUri}
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default SchedulerApp;
