import "../css/demoPages.css";
import "./dropArea.css";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. Xxxxx
 *
 *   2. Xxxxx
 *
 * -------------------------------
 *  last modified May 3, 2023
 * ------------------------------- */

export default {
  title: "Components/Drop Area/Component",
};

/* ---------------------- */
/*  1. BASIC DROP AREA    */
/* ---------------------- */
export const DropArea = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Drop Area</h1>

      <div className={"demoWrapper demoDroparea"}>components go here</div>
    </>
  );
};
DropArea.storyName = "Drop Area";
