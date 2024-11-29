/*
 *  Copyright © 2024. Cloud Software Group, Inc.
 *  This file is subject to the license terms contained
 *  in the license file that is distributed with this file.
 */

import "./App.css";
import { renderInputControls } from "@jaspersoft/jv-input-controls";
import {
  Authentication,
  InputControlProperties,
  useVisualize,
  VisualizeGenericError,
} from "@jaspersoft/jv-tools";
import { useEffect, useState } from "react";
import ReportPanel from "./report/ReportPanel.tsx";

const myAuth: Authentication = {
  name: "joeuser2",
  password: "joeuser",
  organization: "organization_1",
  locale: "en_US",
};

const reportUri = "/public/Samples/Reports/07g.RevenueDetailReport";
const singleSelectReportUri = "/public/Samples/Reports/9g.CustomerDetailReport";

const visualizeUrl =
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";

const errorCallback = (errorCaught: Error | VisualizeGenericError) => {
  console.log("check the error! ", errorCaught);
};

function App() {
  const vContainer = useVisualize(visualizeUrl, myAuth, { errorCallback });
  const [controlBuffer, setControlBuffer] =
    useState<InputControlProperties[]>();
  const [vReport, setVReport] = useState<any>();

  useEffect(() => {
    if (!vContainer || !vContainer.v) {
      return;
    }
    renderInputControls(
      vContainer.v,
      reportUri,
      document.getElementById("input-controls-container") as HTMLElement,
      {
        success: () => {
          console.log("Input controls rendered successfully");
        },
        error: (error) => {
          console.log("Error rendering input controls: ", error);
        },
        typeConfig: {
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
          column_string_1: [
            "This is a predefined text different than the stored in the server",
          ],
          id_1: ["99"],
          column_date_1: ["2009-03-02"],
          column_timestamp_1: ["2014-03-02T10:00:00"],
          column_time_1: ["14:00:00"],
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

  return (
    <>
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
                <div id="input-controls-container"></div>
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
