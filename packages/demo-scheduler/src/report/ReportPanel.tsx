import { VisualizeClient } from "@jaspersoft/jv-tools";
import { useEffect } from "react";

interface ReportPanelProps {
  resourceURI?: string;
  vObject?: VisualizeClient;
}

export default function ReportPanel(props: ReportPanelProps) {
  useEffect(() => {
    props.vObject?.report({
      resource: props.resourceURI || "",
      container: "#report-viewer",
    });
  }, []);

  return <div id="report-viewer"></div>;
}
