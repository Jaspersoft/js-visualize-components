import InputControls from "@jaspersoft/jv-input-controls";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
import { useEffect, useState } from "react";
import ControlPanel from "./controls/ControlPanel.js";

export interface AppConfig {
  title: string;
}

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
  organization: "organization_1",
};

const reportUri = "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report";

const visualizeUrl =
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

export default function App(props: AppConfig) {
  const [visualizeFactoryContainer, setVisualizeFactoryContainer] = useState(
    null as { viz: VisualizeFactory } | null,
  );
  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeType } | null,
  );
  const [plugin, setPlugin] = useState<InputControls>();

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    loadVisualize().then((visualizeFactory: VisualizeFactory) => {
      setVisualizeFactoryContainer({ viz: visualizeFactory });
    });
  }, []);

  useEffect(() => {
    if (credentials && visualizeFactoryContainer) {
      new Promise<VisualizeType>((resolve, reject) => {
        visualizeFactoryContainer.viz(
          {
            auth: {
              name: credentials.name,
              password: credentials.password,
              organization: credentials.organization || null,
              locale: "en_US",
            },
          },
          resolve,
          reject,
        );
      })
        .then((v: VisualizeType) => {
          setVContainer({ v });
        })
        .catch((e: any) => {
          console.log(String(e));
        });
    }
  }, [visualizeFactoryContainer]);

  useEffect(() => {
    vContainer && setPlugin(new InputControls(vContainer.v));
  }, [vContainer]);

  useEffect(() => {
    if (plugin === undefined) {
      return;
    }
    plugin.renderControlPanel(
      reportUri,
      document.getElementById("controls-section") as HTMLElement,
      {
        success: () => {
          console.log("Controls rendered successfully");
        },
        error: (error) => {
          console.log("Error: ", error);
        },
        config: {
          singleValueDatetime: {
            type: "datetime",
          },
        },
      },
    );
  }, [plugin]);

  return <div id="controls-section"></div>;
}
