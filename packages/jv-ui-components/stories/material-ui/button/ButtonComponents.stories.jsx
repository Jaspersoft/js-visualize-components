import "../css/demoPages.css";
import "./button.css";
import { Grid } from "@mui/material";
import {
  JVButton,
  JVDivider,
  JVIcon,
  JVIconButton,
  JVToolbar,
} from "../../../material-ui";

/* --------------------------------------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. CONTAINED BUTTONS
 *      1a. Small
 *      1b. Medium
 *      1c. Large
 *
 *   2. ICON BUTTONS
 *      2a. Small Plain
 *      2b. Small Contained
 *      2c. Medium Plain
 *      2d. Medium Contained
 *      2e. Large Plain
 *      2f. Large Contained
 *
 *   3. PLAIN TEXT BUTTONS
 *      3a. Small
 *      3b. Medium
 *      3c. Large
 *
 *   4. COMBINATION BUTTONS
 *      4a. Small
 *      4b. Medium
 *      4c. Large
 *      4d. Small Contained
 *      4e. Medium Contained
 *      4f. Large Contained
 *
 * --------------------------------------------------------------
 *  last modified Dec 6, 2024
 * -------------------------------------------------------------- */

export default {
  component: JVButton,
  title: "Components/Button/Component",
};

/* ----------------------- */
/*  1. PRIORITY BUTTONS    */
/* ----------------------- */
/* Priority buttons use the MUI "contained" variant */

export const ContainedButton = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Button – Contained</h1>

    <div className="demoWrapper demoButtons">
      {/* 1a. Small Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <JVButton size="small" variant="contained">
            Secondary
          </JVButton>
          <JVButton size="small" disabled variant="contained">
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary" size="small" variant="contained">
            Primary
          </JVButton>
          <JVButton color="primary" disabled size="small" variant="contained">
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error" size="small" variant="contained">
            Error
          </JVButton>
          <JVButton color="error" disabled size="small" variant="contained">
            Error Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="warning" size="small" variant="contained">
            Warning
          </JVButton>
          <JVButton color="warning" size="small" disabled variant="contained">
            Warning Disabled
          </JVButton>
        </div>
      </div>

      {/* 1b. Medium Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <JVButton variant="contained">Secondary</JVButton>
          <JVButton disabled variant="contained">
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary" variant="contained">
            Primary
          </JVButton>
          <JVButton color="primary" disabled variant="contained">
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error" variant="contained">
            Error
          </JVButton>
          <JVButton color="error" disabled variant="contained">
            Error Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="warning" variant="contained">
            Warning
          </JVButton>
          <JVButton color="warning" disabled variant="contained">
            Warning Disabled
          </JVButton>
        </div>
      </div>

      {/* 1c. Large Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <JVButton size="large" variant="contained">
            Secondary
          </JVButton>
          <JVButton disabled size="large" variant="contained">
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary" size="large" variant="contained">
            Primary
          </JVButton>
          <JVButton color="primary" size="large" disabled variant="contained">
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error" size="large" variant="contained">
            Error
          </JVButton>
          <JVButton color="error" size="large" disabled variant="contained">
            Error Disabled
          </JVButton>
        </div>
        <div className="forms">
          <JVButton color="warning" size="large" variant="contained">
            Warning
          </JVButton>
          <JVButton color="warning" size="large" disabled variant="contained">
            Warning Disabled
          </JVButton>
        </div>
      </div>
    </div>
  </>
);
ContainedButton.storyName = "Contained Button";

/* -------------------- */
/*  2. ICON BUTTONS     */
/* -------------------- */
export const IconButton = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Button – Icon</h1>

    <div className={"demoWrapper demoIconButtons"}>
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        {/* 2a. Small Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton size="small" icon="textBold" aria-label="bold" />
            <JVIconButton size="small" icon="textItalic" aria-label="italic" />
            <JVIconButton
              size="small"
              icon="textUnderline"
              aria-label="underline"
            />
            <JVIconButton size="small" icon="textATop" aria-label="align top" />
            <JVIconButton
              size="small"
              icon="textAMiddle"
              aria-label="align middle"
            />
            <JVIconButton
              size="small"
              icon="textABottom"
              aria-label="align bottom"
            />
            <JVIconButton size="small" icon="filter" aria-label="filter" />
            <JVIconButton size="small" icon="list" aria-label="list view" />
            <JVIconButton size="small" icon="view" aria-label="view" />
            <JVIconButton size="small" icon="download" aria-label="download" />
            <JVIconButton size="small" icon="export" aria-label="export" />
            <JVIconButton
              size="small"
              icon="treeHorizontal"
              aria-label="tree view"
            />
          </div>
        </div>

        {/* 2b. Small Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton
              size="small"
              icon="textBold"
              aria-label="bold"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="textItalic"
              aria-label="italic"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="textUnderline"
              aria-label="underline"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="textATop"
              aria-label="align top"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="textAMiddle"
              aria-label="align middle"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="textABottom"
              aria-label="align bottom"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="filter"
              aria-label="filter"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="list"
              aria-label="list view"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="view"
              aria-label="view"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="download"
              aria-label="download"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="export"
              aria-label="export"
              variant="contained"
            />
            <JVIconButton
              size="small"
              icon="treeHorizontal"
              aria-label="tree view"
              variant="contained"
            />
          </div>
        </div>
      </div>

      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>

        {/* 2c. Medium Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton icon="textBold" aria-label="bold" />
            <JVIconButton icon="textItalic" aria-label="italic" />
            <JVIconButton icon="textUnderline" aria-label="underline" />
            <JVIconButton icon="textATop" aria-label="align top" />
            <JVIconButton icon="textAMiddle" aria-label="align middle" />
            <JVIconButton icon="textABottom" aria-label="align bottom" />
            <JVIconButton icon="filter" aria-label="filter" />
            <JVIconButton icon="list" aria-label="list view" />
            <JVIconButton icon="view" aria-label="view" />
            <JVIconButton icon="download" aria-label="download" />
            <JVIconButton icon="export" aria-label="export" />
            <JVIconButton icon="treeHorizontal" aria-label="tree view" />
          </div>
        </div>

        {/* 2d. Medium Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton
              icon="textBold"
              aria-label="bold"
              variant="contained"
            />
            <JVIconButton
              icon="textItalic"
              aria-label="italic"
              variant="contained"
            />
            <JVIconButton
              icon="textUnderline"
              aria-label="underline"
              variant="contained"
            />
            <JVIconButton
              icon="textATop"
              aria-label="align top"
              variant="contained"
            />
            <JVIconButton
              icon="textAMiddle"
              aria-label="align middle"
              variant="contained"
            />
            <JVIconButton
              icon="textABottom"
              aria-label="align bottom"
              variant="contained"
            />
            <JVIconButton
              icon="filter"
              aria-label="filter"
              variant="contained"
            />
            <JVIconButton
              icon="list"
              aria-label="list view"
              variant="contained"
            />
            <JVIconButton icon="view" aria-label="view" variant="contained" />
            <JVIconButton
              icon="download"
              aria-label="download"
              variant="contained"
            />
            <JVIconButton
              icon="export"
              aria-label="export"
              variant="contained"
            />
            <JVIconButton
              icon="treeHorizontal"
              aria-label="tree view"
              variant="contained"
            />
          </div>
        </div>
      </div>

      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>

        {/* 2e. Large Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton size="large" icon="textBold" aria-label="bold" />
            <JVIconButton size="large" icon="textItalic" aria-label="italic" />
            <JVIconButton
              size="large"
              icon="textUnderline"
              aria-label="underline"
            />
            <JVIconButton size="large" icon="textATop" aria-label="align top" />
            <JVIconButton
              size="large"
              icon="textAMiddle"
              aria-label="align middle"
            />
            <JVIconButton
              size="large"
              icon="textABottom"
              aria-label="align bottom"
            />
            <JVIconButton size="large" icon="filter" aria-label="filter" />
            <JVIconButton size="large" icon="list" aria-label="list view" />
            <JVIconButton size="large" icon="view" aria-label="view" />
            <JVIconButton size="large" icon="download" aria-label="download" />
            <JVIconButton size="large" icon="export" aria-label="export" />
            <JVIconButton
              size="large"
              icon="treeHorizontal"
              aria-label="tree view"
            />
          </div>
        </div>

        {/* 2f. Large Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <JVIconButton
              size="large"
              icon="textBold"
              aria-label="bold"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="textItalic"
              aria-label="italic"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="textUnderline"
              aria-label="underline"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="textATop"
              aria-label="align top"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="textAMiddle"
              aria-label="align middle"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="textABottom"
              aria-label="align bottom"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="filter"
              aria-label="filter"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="list"
              aria-label="list view"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="view"
              aria-label="view"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="download"
              aria-label="download"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="export"
              aria-label="export"
              variant="contained"
            />
            <JVIconButton
              size="large"
              icon="treeHorizontal"
              aria-label="tree view"
              variant="contained"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

/* -------------------- */
/*  3. TEXT BUTTONS     */
/* -------------------- */
export const TextButton = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Button – Plain Text</h1>

    <div className="demoWrapper demoButtons">
      {/* 3a. Small Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <JVButton size="small">Secondary</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton size="small" disabled>
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary" size="small">
            Primary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="primary" disabled size="small">
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error" size="small">
            Error
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="error" disabled size="small">
            Error Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="warning" size="small">
            Warning
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="warning" size="small" disabled>
            Warning Disabled
          </JVButton>
        </div>
      </div>

      {/* 3b. Medium Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <JVButton>Secondary</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton disabled>Secondary Disabled</JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary">Primary</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="primary" disabled>
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error">Error</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="error" disabled>
            Error Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="warning">Warning</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="warning" disabled>
            Warning Disabled
          </JVButton>
        </div>
      </div>

      {/* 3c. Large Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <JVButton size="large">Secondary</JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton disabled size="large">
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="primary" size="large">
            Primary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="primary" size="large" disabled>
            Primary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="error" size="large">
            Error
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="error" size="large" disabled>
            Error Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton color="warning" size="large">
            Warning
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton color="warning" size="large" disabled>
            Warning Disabled
          </JVButton>
        </div>
      </div>
    </div>
  </>
);
TextButton.storyName = "Plain Text Button";

/* --------------------------
 *  4. COMBINATION BUTTONS
 * -------------------------- */
export const CombinationButton = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Button – Combination</h1>

    <div className="demoWrapper demoButtons">
      {/* 4a. Small Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <JVButton
            size="small"
            startIcon={<JVIcon className="jv-mButton-icon" icon="edit" />}
          >
            Secondary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            size="small"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="edit" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            color="primary"
            size="small"
            startIcon={<JVIcon className="jv-mButton-icon" icon="clock" />}
          >
            Primary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            color="primary"
            disabled
            size="small"
            startIcon={<JVIcon className="jv-mButton-icon" icon="clock" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>

      {/* 4b. Medium Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <JVButton
            startIcon={<JVIcon className="jv-mButton-icon" icon="filter" />}
          >
            Secondary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="filter" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            color="primary"
            startIcon={<JVIcon className="jv-mButton-icon" icon="save" />}
          >
            Primary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            color="primary"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="save" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>

      {/* 4c. Large Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <JVButton
            size="large"
            startIcon={<JVIcon className="jv-mButton-icon" icon="download" />}
          >
            Secondary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            size="large"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="download" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            color="primary"
            size="large"
            startIcon={<JVIcon className="jv-mButton-icon" icon="plus" />}
          >
            Primary
          </JVButton>
          <div className="demoSpacer8"> </div>
          <JVButton
            color="primary"
            size="large"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="plus" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>
    </div>

    <div className="demoWrapper demoButtons">
      {/* 4d. Small Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Contained</div>
        <div className="demoSet">
          <JVButton
            size="small"
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="edit" />}
          >
            Secondary
          </JVButton>
          <JVButton
            size="small"
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="edit" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            color="primary"
            size="small"
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="clock" />}
          >
            Primary
          </JVButton>
          <JVButton
            color="primary"
            size="small"
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="clock" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>

      {/* 4e. Medium Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Contained</div>
        <div className="demoSet">
          <JVButton
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="filter" />}
          >
            Secondary
          </JVButton>
          <JVButton
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="filter" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            color="primary"
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="save" />}
          >
            Primary
          </JVButton>
          <JVButton
            color="primary"
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="save" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>

      {/* 4f. Large Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Contained</div>
        <div className="demoSet">
          <JVButton
            size="large"
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="download" />}
          >
            Secondary
          </JVButton>
          <JVButton
            size="large"
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="download" />}
          >
            Secondary Disabled
          </JVButton>
        </div>
        <div className="demoSet">
          <JVButton
            size="large"
            color="primary"
            className="jv-mButtonCombo"
            variant="contained"
            startIcon={<JVIcon className="jv-mButton-icon" icon="plus" />}
          >
            Primary
          </JVButton>
          <JVButton
            size="large"
            color="primary"
            className="jv-mButtonCombo"
            variant="contained"
            disabled
            startIcon={<JVIcon className="jv-mButton-icon" icon="plus" />}
          >
            Primary Disabled
          </JVButton>
        </div>
      </div>
    </div>
  </>
);
CombinationButton.storyName = "Combination Button";
