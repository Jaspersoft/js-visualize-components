import { useEffect, useState } from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeClient,
} from "@jaspersoft/jv-tools";
import {
  // renderScheduler,
  SchedulerConfig,
} from "@jaspersoft/jv-scheduler";
import { JVButton } from "@jaspersoft/jv-ui-components";
import schedulerUIConfig from "./jv_sheduler_config";
import ReportPanel from "./report/ReportPanel";
import "./App.css";
import { Scheduler } from "./Scheduler";

const visualizeUrl = `${schedulerUIConfig.server}/client/visualize.js`;

const credentials: Authentication = {
  name: "superuser",
  password: "superuser",
};

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
    //     schedulerElement as HTMLElement,
    //     visualize,
    //     schedulerUIConfig,
    //   );
    // }
  }, [visualize]);

  console.log(SchedulerConfig, "SchedulerConfig");
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
                  {schedulerUIConfig.resourceURI}
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
          <ReportPanel
            vObject={visualize.v}
            resourceURI={schedulerUIConfig.resourceURI}
          />
          {isPanelOpen && (
            <Scheduler
              visualize={visualize}
              schedulerUIConfig={schedulerUIConfig}
              isPanelOpen={isPanelOpen}
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
