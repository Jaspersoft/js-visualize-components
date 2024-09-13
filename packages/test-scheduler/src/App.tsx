import React, { useEffect, useState } from "react";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
import { Scheduler, SchedulerUiJS } from "@jaspersoft/jv-scheduler";
import schedulerUIConfig from "./jv_sheduler_config";

const visualizeUrl = `${schedulerUIConfig.server}/client/visualize.js`;

const credentials: Authentication = {
  name: "superuser",
  password: "superuser",
};

function App() {
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
          console.log(v);
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
    console.log(visualize);
    const { resourceURI, ...rest } = schedulerUIConfig;
    const schedulerElement = document.getElementById("scheduler");
    if (schedulerElement) {
      console.log(schedulerElement);
      const schedulerPlugin = new SchedulerUiJS(visualize);
      schedulerPlugin.renderScheduler(
        resourceURI,
        document.getElementById("scheduler") as HTMLElement,
        rest,
      );
    }
  }, [visualize]);

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

export default App;
