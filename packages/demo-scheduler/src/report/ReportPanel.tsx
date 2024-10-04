/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
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
