import React, { useState } from "react";
import "../css/demoPages.css";
import "./tooltip.css";
import {
  JVButton,
  JVIconButton,
  JVTypography,
} from "@jaspersoft/jv-ui-components";
import { Tooltip } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. DEFAULT
 *
 *   2. MULTI-LINE
 *
 * -------------------------------
 *  last modified July 22, 2022
 * ------------------------------- */

export default {
  component: Tooltip,
  title: "Components/Tooltip/Component",
};

/* ----------------------- */
/*  1. DEFAULT TOOLTIP     */
/* ----------------------- */
export const Default = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Tooltip</h1>

      <div className="demoTooltip">
        {/* TODO: add Tooltip component here. */}
      </div>
    </>
  );
};
Default.storyName = "Default Tooltip";

/* -------------------------- */
/*  2. MULTI-LINE TOOLTIP     */
/* -------------------------- */
export const Html = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Tooltip – Multi-line</h1>

      <div className="demoTooltipMultiline">
        {/* TODO: add HTML tooltip component with multiple lines here. */}
      </div>
    </>
  );
};
Html.storyName = "Multi-line Tooltip";
