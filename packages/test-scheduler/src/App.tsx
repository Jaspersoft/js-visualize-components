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
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
  organization: "organization_1",
};

function App() {
  const [visualize, setVisualize] = useState(
    null as { v: VisualizeType } | null,
  );

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    loadVisualize().then((visualizeFactory: VisualizeFactory) => {
      new Promise<VisualizeType>((resolve, reject) => {
        visualizeFactory(
          {
            auth: { ...credentials },
          },
          resolve,
          reject,
        );
      })
        .then((v: VisualizeType) => {
          setVisualize({ v });
          console.log(v);
        })
        .catch((e: any) => {
          console.log(String(e));
        });
    });
  }, []);

  return visualize ? (
    <Scheduler {...schedulerUIConfig} />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
