import "../css/demoPages.css";
import "./dropArea.css";
import { Paper } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC DROP AREA
 *
 * -------------------------------
 *  last modified Sep 12, 2023
 * ------------------------------- */

export default {
  title: "Components/Drop Area/Design",
};

/* ---------------------- */
/*  1. BASIC DROP AREA    */
/* ---------------------- */
export const DropArea = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Drop Area</h1>

      <div className={"demoWrapper demoDroparea"}>
        <div className="demoSubtitle">States</div>

        <div className="demoDescription-title">Default</div>
        <div className="demoDescription">Can accept draggable objects</div>
        <Paper className="jv-mDroparea mui" square elevation={0}>
          {/*<div className="jv-mDroparea-label mui">Default</div>*/}
          <div className="jv-mDroparea-label mui">
            Drag a <span className={"jv-uColor-field"}>field</span> or{" "}
            <span className={"jv-uColor-measure"}>measure</span> here
          </div>
        </Paper>

        <div className={"demoSpacer28"}></div>

        <div className="demoDescription-title">Active</div>
        <div className="demoDescription">
          Can accept the object currently being dragged
        </div>
        <Paper className="jv-mDroparea mui jv-isActive" square elevation={0}>
          {/*<div className="jv-mDroparea-label mui">Active</div>*/}
          <div className="jv-mDroparea-label mui">
            Drag a <span className={"jv-uColor-field"}>field</span> or{" "}
            <span className={"jv-uColor-measure"}>measure</span> here
          </div>
        </Paper>

        <div className={"demoSpacer28"}></div>

        <div className="demoDescription-title">Hovered</div>
        <div className="demoDescription">
          Draggable object is currently hovered over drop area
        </div>
        <Paper className="jv-mDroparea mui jv-isHovered" square elevation={0}>
          {/*<div className="jv-mDroparea-label mui">Hovered</div>*/}
          <div className="jv-mDroparea-label mui">
            Drop <span className={"jv-uColor-field"}>field</span> or{" "}
            <span className={"jv-uColor-measure"}>measure</span> here
          </div>
        </Paper>

        <div className={"demoSpacer28"}></div>

        <div className="demoDescription-title">Disabled</div>
        <div className="demoDescription">Can't accept draggable objects</div>
        <Paper className="jv-mDroparea jv-isDisabled mui" square elevation={0}>
          <div className="jv-mDroparea-label mui">Drop area label</div>
        </Paper>
      </div>
    </>
  );
};
DropArea.storyName = "Drop Area";
