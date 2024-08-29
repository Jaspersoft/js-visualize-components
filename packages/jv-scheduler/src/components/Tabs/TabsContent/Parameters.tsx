import React, { useEffect, useState } from "react";
// import InputControls from "@jaspersoft/jv-input-controls";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Parameters = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const visualize = useSelector((state: any) => state.visualize);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );
  const [plugin, setPlugin] = useState<any>();

  console.log(resourceUri);
  useEffect(() => {
    // setPlugin(new InputControls(visualize.v))
  }, [visualize]);

  useEffect(() => {
    if (plugin === undefined) {
      return;
    }
    // plugin.renderControlPanel(
    //     resourceUri,
    //     document.getElementById("parametersTab") as HTMLElement,
    //     {
    //       success: () => {
    //         console.log("Basic controls rendered successfully");
    //       },
    //       error: (error) => {
    //         console.log("Error when rendering the Basic controls: ", error);
    //       }
    //     },
    // );
    // plugin.renderControlPanel(
    //     singleSelectReportUri,
    //     document.getElementById("select-controls-section") as HTMLElement,
    //     {
    //       success: () => {
    //         console.log("Select controls rendered successfully");
    //       },
    //       error: (error) => {
    //         console.log("Error when rendering the Select controls: ", error);
    //       },
    //       events: {
    //         change: (ics) => {
    //           console.log("single select ics => ", ics);
    //         },
    //       },
    //     },
    // );
  }, [plugin]);

  return (
    <div id="parametersTab">
      <JVTypographyComponent text={t("parameters.title")} />
    </div>
  );
};

export default Parameters;
