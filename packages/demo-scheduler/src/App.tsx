import { useEffect, useState } from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
import {
  Scheduler,
  SchedulerUiJS,
  SchedulerConfig,
} from "@jaspersoft/jv-scheduler";
import schedulerUIConfig from "./jv_sheduler_config";

const visualizeUrl = `${schedulerUIConfig.server}/client/visualize.js`;

const credentials: Authentication = {
  name: "superuser",
  password: "superuser",
};

function SchedulerApp() {
  const [visualize, setVisualize] = useState(
    null as { v: VisualizeType } | null,
  );

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    loadVisualize().then((visualizeFactory: VisualizeFactory) => {
      visualizeFactory(
        {
          auth: { ...credentials },
        },
        (v: VisualizeType) => {
          setVisualize({ v });
        },
        (e: any) => {
          console.log(String(e));
        },
      );
    });
  }, []);

  useEffect(() => {
    if (visualize === undefined) {
      return;
    }
    const schedulerElement = document.getElementById("scheduler");
    if (schedulerElement && visualize) {
      SchedulerUiJS(
        schedulerElement as HTMLElement,
        visualize,
        schedulerUIConfig,
      );
    }
  }, [visualize]);

  console.log(SchedulerConfig, "SchedulerConfig");
  return (
    <>
      <div id="scheduler"></div>
      {visualize ? (
        <Scheduler
          schedulerUIConfig={schedulerUIConfig}
          visualize={visualize}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default SchedulerApp;
