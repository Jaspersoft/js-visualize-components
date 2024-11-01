import "../inputs/inputs.css";
import { JVDivider, JVIconButton, JVTextField } from "../../../material-ui";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. HORIZONTAL
 *
 *  2. VERTICAL
 *
 * ----------------------------
 *  last modified July 25, 2022
 * ---------------------------- */

export default {
  component: JVDivider,
  title: "Components/Divider/Component",
};

export const divider = () => {
  return (
    <>
      {/* -------------------------
                 1. HORIZONTAL DIVIDER
                ------------------------- */}
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Divider</h1>

      <div className={"demoWrapper demoDivider"}>
        <div className={"demoSize"}>
          <div className={"demoSubtitle"}>Horizontal Divider</div>
          <div className={"jv-mInputs jv-mInputsSmall mui"}>
            <JVTextField
              size="small"
              width="narrow"
              inline
              id="outlinedNarrow02"
              label="Text Narrow"
            />
            <JVDivider />
            <JVTextField
              size="small"
              width="narrow"
              inline
              id="outlinedNarrow02"
              label="Text Narrow"
            />
          </div>
        </div>

        {/* -----------------------
                     2. VERTICAL DIVIDER
                    ----------------------- */}
        <div className={"demoSize"}>
          <div className={"demoSubtitle"}>Vertical Divider</div>

          <div className="jv-mToolbar-toolset mui">
            <JVIconButton
              aria-label="bold"
              className={"jv-mButtonToolbar"}
              icon={"clock"}
            />

            <JVDivider
              orientation="vertical"
              component="div"
              classes={{ root: "jv-mToolbar-divider mui" }}
            />

            <JVIconButton
              aria-label="bold"
              className={"jv-mButtonToolbar"}
              icon={"undo"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
