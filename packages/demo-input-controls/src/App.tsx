import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
// This line is necessary to setting up the styles
// refer to: https://v5.mui.com/material-ui/experimental-api/classname-generator/
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import "./App.css";
import {
  BaseInputControlProps,
  InputControlPanelConfig,
  InputControls,
  InputControlsPanel,
} from "@jaspersoft/jv-input-controls";
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
import { useEffect, useState } from "react";
import ReportPanel from "./report/ReportPanel.tsx";

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
  organization: "organization_1",
};

const reportUri = "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report";
const singleSelectReportUri = "/public/Samples/Reports/9g.CustomerDetailReport";

const visualizeUrl =
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

function App() {
  const [visualizeFactoryContainer, setVisualizeFactoryContainer] = useState(
    null as { viz: VisualizeFactory } | null,
  );
  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeType } | null,
  );
  const [plugin, setPlugin] = useState<InputControls>();
  const [controlBuffer, setControlBuffer] = useState<BaseInputControlProps[]>();
  const [vReport, setVReport] = useState<any>();
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
    if (vContainer && vContainer.v) {
      setPlugin(new InputControls(vContainer.v));
      const report = vContainer.v.report({
        resource: singleSelectReportUri,
        container: "#report-viewer",
      });
      setVReport(report);
    }
  }, [vContainer]);

  useEffect(() => {
    if (plugin === undefined) {
      return;
    }
    plugin.renderControlPanel(
      reportUri,
      document.getElementById("basic-controls-section") as HTMLElement,
      {
        success: () => {
          console.log("Basic controls rendered successfully");
        },
        error: (error) => {
          console.log("Error when rendering the Basic controls: ", error);
        },
        config: {
          singleValueDatetime: {
            type: "default", // even if it isn't provided, this will be the default component
          },
          singleValueTime: {
            type: "default", // even if it isn't provided, this will be the default component
          },
          singleValueDate: {
            type: "default", // even if it isn't provided, this will be the default component
          },
        },
        events: {
          change: (ics, validationResult) => {
            console.log("validationResult => ", validationResult);
            console.log("ics => ", ics);
          },
        },
      },
    );
    plugin.renderControlPanel(
      singleSelectReportUri,
      document.getElementById("select-controls-section") as HTMLElement,
      {
        success: () => {
          console.log("Select controls rendered successfully");
        },
        error: (error) => {
          console.log("Error when rendering the Select controls: ", error);
        },
        events: {
          change: (ics: any) => {
            console.log("single select ics => ", ics);
            setControlBuffer(ics);
          },
        },
      },
    );
  }, [plugin]);

  const onClickSubmit = () => {
    if (vContainer?.v) {
      if (vReport) {
        vReport.params(controlBuffer).run();
      }
    }
  };

  const panelD: InputControlPanelConfig = {
    config: { bool: { type: "switch" } },
    events: {
      change: (ics: any, vs: any) => {
        console.log("NEW ICS!! ", ics);
        if (vs) console.log("Validations: ", vs);
      },
    },
  };

  return (
    <>
      <InputControlsPanel
        vObject={vContainer?.v}
        uri={reportUri}
        panelDef={panelD}
      />
      <div id="controls-demo-page">
        <div className="jv-lColumns">
          <div className="jv-lColumns-column jr-uWidth-300px">
            <div className="jv-mPanel mui">
              <div className="jv-mPanel-header jv-uPadding-lr-04 mui">
                <h4 className="jr-mText jr-mPanel-header-title mui">
                  Filter Report
                </h4>
              </div>

              <div className="jv-mPanel-body jv-uPadding-04 mui">
                <div id="basic-controls-section"></div>
                <div id="select-controls-section"></div>
              </div>

              <div className="jv-mPanel-footer jv-uPadding-lr-04 mui">
                <button id="change" type="button" onClick={onClickSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="jv-lColumns-column jv-lColumns-columnMajor">
            <ReportPanel
              vObject={vContainer?.v}
              reportUri={reportUri}
              controlState={controlBuffer}
            ></ReportPanel>
            <div id="report-viewer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
