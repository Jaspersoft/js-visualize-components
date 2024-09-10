import "../css/demoPages.css";
import "./avatar.css";
import { Avatar } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. XXXXXX
 *
 *  2. XXXXXX
 *
 * ------------------------------
 *  last modified Mar 10, 2023
 * ------------------------------ */

export default {
  component: Avatar,
  title: "Components/Avatar/Component",
};

export const DefaultAccordion = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Avatar</h1>

      {/* ----------------------
                 1. BASIC ACCORDION
                ---------------------- */}
      <div className="demoWrapper demoAccordion"></div>
    </>
  );
};
