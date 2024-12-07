import { JVCircularProgress, JVLinearProgress } from "../../../material-ui";
import { useEffect, useState } from "react";
import "../css/demoPages.css";
import "./progress.css";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. SPINNER
 *     1a. Spinner
 *     1b. Spinner Centered
 *
 * ----------------------------
 *  last modified Dec 6, 2024
 * ---------------------------- */

export default {
  component: JVCircularProgress,
  title: "Components/Progress/Component",
};

/* -------------- */
/*  1. SPINNER    */
/* -------------- */
export const Circular = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Progress - Spinner</h1>

      {/* 1a. Spinner */}
      <div className={"demoWrapper demoSpinner"}>
        {/* 1a. Spinner */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner</div>
          <div className="jv-mSpinner mui">
            <JVCircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <JVCircularProgress size={28} thickness={4} />
          </div>
        </div>

        {/* 1b. Spinner Centered */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner Centered</div>
          <div className="jv-mSpinner jv-mSpinnerCenter mui">
            <JVCircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <JVCircularProgress
              variant="indeterminate"
              size={28}
              thickness={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};
Circular.storyName = "Spinner";
