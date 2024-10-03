// This line is necessary to setting up the styles
// refer to: https://v5.mui.com/material-ui/experimental-api/classname-generator/
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import "./App.css";
import {
  InputControlConfig,
  InputControls,
  renderInputControls,
} from "@jaspersoft/jv-input-controls";
import {
  Authentication,
  InputControlProperties,
  VisualizeClient,
  VisualizeFactory,
  visualizejsLoader,
} from "@jaspersoft/jv-tools";
import { useEffect, useState } from "react";
import ReportPanel from "./report/ReportPanel.tsx";

const credentials: Authentication = {
  name: "joeuser",
  password: "joeuser",
  organization: "organization_1",
};

const reportUri = "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report";
// const reportUri = "/public/Samples/Reports/RevenueDetailReport";
const singleSelectReportUri = "/public/Samples/Reports/9g.CustomerDetailReport";

const visualizeUrl =
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

function App() {
  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeClient } | null,
  );
  const [controlBuffer, setControlBuffer] =
    useState<InputControlProperties[]>();
  const [vReport, setVReport] = useState<any>();

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    console.log("Loading visualize.js...");
    loadVisualize()
      .then((visualizeFactory: VisualizeFactory) => {
        // Connecting to JRS.
        console.log("visualize.js loaded. Connecting to JRS...");
        visualizeFactory(
          {
            auth: {
              ...credentials,
              locale: "en_US",
            },
          },
          (v: VisualizeClient) => {
            console.log("Visualize client connected.");
            setVContainer({ v });
          },
          (e: any) => {
            console.log(String(e));
          },
        );
      })
      .catch((error: Error) => {
        console.log("Error loading visualize.js: ", error);
      });
  }, []);

  useEffect(() => {
    if (!vContainer || !vContainer.v) {
      return;
    }
    renderInputControls(
      vContainer.v,
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
        params: {
          column_boolean_1: ["false"],
          ProductFamily: ["Drink", "Food"],
        },
        events: {
          change: (ics, validationResult) => {
            console.log("validationResult => ", validationResult);
            console.log("ics => ", ics);
          },
        },
      },
    );

    renderInputControls(
      vContainer.v,
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

    const report = vContainer.v.report({
      resource: singleSelectReportUri,
      container: "#report-viewer",
    });
    setVReport(report);
  }, [vContainer]);

  const onClickSubmit = () => {
    if (vContainer?.v) {
      if (vReport) {
        vReport.params(controlBuffer).run();
      }
    }
  };

  const panelD: InputControlConfig = {
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
      <InputControls
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
