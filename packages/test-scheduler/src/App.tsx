import React, { useEffect, useState } from "react";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
import { Scheduler } from "@jaspersoft/jv-scheduler";
import schedulerUIConfig from "./jv_sheduler_config";

const visualizeUrl =
  "https://localhost:8443/jasperserver-pro/client/visualize.js";

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
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

  return visualize ? (
    <Scheduler {...schedulerUIConfig} />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
