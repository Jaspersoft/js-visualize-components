import { BaseInputControlProps } from "@jaspersoft/jv-input-controls";
import { VisualizeType } from "@jaspersoft/jv-tools";
import { useEffect, useState } from "react";

interface ReportPanelProps {
  reportUri?: string;
  vObject?: VisualizeType;
  controlState?: BaseInputControlProps[];
}

export default function ReportPanel(props: ReportPanelProps) {
  const [vizReport, setVizReport] = useState();

  useEffect(() => {
    var report = props.vObject?.report({
      resource: props.reportUri || "",
      container: "#report-viewer",
      events: {
        reportCompleted: function (status: any) {},
      },
    });
    setVizReport(report as any);
  }, []);

  if (vizReport && props.controlState) {
    (vizReport as any).params(props.controlState).run();
  }

  return <div id="report-viewer"></div>;
}
