import "../css/demoPages.css";
import "./button.css";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Toolbar as MuiToolbar,
} from "@mui/material";

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
 *      2b. Small Plain with Icon Size Variations
 *      2c. Small Contained
 *      2d. Small Contained with Icon Size Variations
 *      2e. Medium Plain
 *      2f. Medium Plain with Icon Size Variations
 *      2g. Medium Contained
 *      2h. Medium Contained with Icon Size Variations
 *      2i. Large Plain
 *      2j. Large Plain with Icon Size Variations
 *      2k. Large Contained
 *      2l. Large Contained with Icon Size Variations
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
 *   5. MENU BUTTONS
 *
 *   6. TOOLBAR BUTTONS
 *
 * --------------------------------------------------------------
 *  File last modified Mar 8, 2024
 * -------------------------------------------------------------- */

export default {
  component: Button,
  title: "Components/Button/Design",
};

/* -------------------------
 *  1. CONTAINED BUTTONS
 * ------------------------- */
/* Contained buttons use the MUI "contained" variant */

export const ContainedButton = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Contained</h1>

    <div className={"demoWrapper demoButtons"}>
      {/* 1a. Small Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>

          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
            disabled
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonPrimary mui"
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonPrimary mui"
            disabled
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonError mui"
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonError mui"
            disabled
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonWarning mui"
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSmall jv-mButtonWarning mui"
            disabled
            disableElevation
            size="small"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning Disabled</span>
          </Button>
        </div>
      </div>

      {/* 1b. Medium Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            disabled
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disabled
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonError mui"
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonError mui"
            disabled
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonWarning mui"
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonWarning mui"
            disabled
            disableElevation
            size="medium"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning Disabled</span>
          </Button>
        </div>
      </div>

      {/* 1c. Large Contained Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonSecondary mui"
            disabled
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonPrimary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonPrimary mui"
            disabled
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonError mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonError mui"
            disabled
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonWarning mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonLarge jv-mButtonWarning mui"
            disabled
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Warning Disabled</span>
          </Button>
        </div>
      </div>
    </div>
  </>
);
ContainedButton.storyName = "Contained Button";

/* -------------------
 *  2. ICON BUTTONS
 * ------------------- */
export const IconButtons = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Icon</h1>

    <div className={"demoWrapper demoIconButtons"}>
      <div className={"demoSize"}>
        <div className={"demoSubtitle"}>Small</div>
        {/* 2a. Small Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={"jv-mButton jv-mButtonSmall mui"}
              size="large"
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonSmall mui"}
              size="large"
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={"jv-mButton jv-mButtonSmall mui"}
              size="large"
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="list"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="export"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton
              aria-label="tree view"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2b. Small Plain Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>

        {/* 2c. Small Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="list view"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="export"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton
              aria-label="tree view"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2d. Small Contained Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmal jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>
      </div>

      <div className={"demoSize"}>
        <div className={"demoSubtitle"}>Medium</div>

        {/* 2e. Medium Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <IconButton aria-label="bold" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton a ria-label="italic" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton aria-label="underline" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton aria-label="align top" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton aria-label="align middle" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton aria-label="align bottom" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton aria-label="align left" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton aria-label="align center" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton aria-label="align right" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton aria-label="filter" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton aria-label="list view" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton aria-label="view" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton aria-label="download" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton aria-label="export" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton aria-label="tree view" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2f. Medium Plain Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton aria-label="bold" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton aria-label="bold" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton aria-label="bold" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton aria-label="align top" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton aria-label="align top" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton aria-label="align top" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton aria-label="align left" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton aria-label="align left" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton aria-label="align left" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton aria-label="filter" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton aria-label="filter" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton aria-label="filter" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton aria-label="download" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton aria-label="download" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton aria-label="download" className={"jv-mButton mui"}>
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>

        {/* 2g. Medium Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui  jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="list view"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="export"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton
              aria-label="tree view"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2h. Medium Contained Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>
      </div>

      <div className={"demoSize"}>
        <div className={"demoSubtitle"}>Large</div>
        {/* 2i. Large Plain Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonLarge mui"}
              classes={{ label: "jv-mButton-icon jv-mIcon mui jv-textATop" }}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="list view"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="export"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton
              aria-label="tree view"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2j. Large Plain Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Plain Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={"jv-mButton jv-mButtonLarge mui"}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>

        {/* 2k. Large Contained Icon Button */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="list view"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-list"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="export"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-export"></span>
            </IconButton>
            <IconButton
              aria-label="tree view"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-treeHorizontal"></span>
            </IconButton>
          </div>
        </div>

        {/* 2l. Large Contained Icon Button with Icon Size Variations */}
        <div className="demoSet">
          <p className={"demoSet-subtitle"}>Contained Icon Size Variations</p>
          <div className={"demoSet-buttons"}>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
              classes={{
                label:
                  "jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold",
              }}
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="filter"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-filter"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmall jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon mui jv-download"></span>
            </IconButton>
            <IconButton
              aria-label="download"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mButton-iconSmallest jv-mIcon mui jv-download"></span>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  </>
);
IconButtons.storyName = "Icon Button";

/* --------------------
 *  3. TEXT BUTTONS
 * -------------------- */
export const TextButton = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Plain Text</h1>

    <div className="demoWrapper demoButtons">
      {/* 3a. Small Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <Button className="jv-mButton mui" size="small">
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"></div>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disabled
            size="small"
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonPrimary mui" size="small">
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disabled
            size="small"
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonError mui" size="small">
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonError mui"
            disabled
            size="small"
          >
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonWarning mui" size="small">
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonWarning mui"
            disabled
            size="small"
          >
            <span className="jv-mButton-label mui"> Warning Disabled</span>
          </Button>
        </div>
      </div>

      {/* 3b. Medium Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <Button className="jv-mButton mui">
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button className="jv-mButton jv-mButtonSecondary mui" disabled>
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonPrimary mui">
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button className="jv-mButton jv-mButtonPrimary mui" disabled>
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonError mui">
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button className="jv-mButton jv-mButtonError mui" disabled>
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonWarning mui">
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button className="jv-mButton jv-mButtonWarning mui" disabled>
            <span className="jv-mButton-label mui">Warning Disabled</span>
          </Button>
        </div>
      </div>

      {/* 3c. Large Plain Text Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <Button className="jv-mButton mui" size="large">
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disabled
            size="large"
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonPrimary mui" size="large">
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disabled
            size="large"
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonError mui" size="large">
            <span className="jv-mButton-label mui">Error</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonError mui"
            disabled
            size="large"
          >
            <span className="jv-mButton-label mui">Error Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button className="jv-mButton jv-mButtonWarning mui" size="large">
            <span className="jv-mButton-label mui">Warning</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonWarning mui"
            disabled
            size="large"
          >
            <span className="jv-mButton-label mui">Warning Disabled</span>
          </Button>
        </div>
      </div>
    </div>
  </>
);
TextButton.storyName = "Plain Text Button";

/* --------------------------
 *  4. COMBINATION BUTTONS
 * -------------------------- */
export const combinationButton = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Combination</h1>

    <div className="demoWrapper demoButtons">
      {/* 4a. Small Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            size="small"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-edit mui" />}
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            size="small"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-edit mui" />}
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            size="small"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-clock mui" />
            }
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            size="small"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-clock mui" />
            }
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
      </div>

      {/* 4b. Medium Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-filter mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-filter mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-save mui" />}
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-save mui" />}
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
      </div>

      {/* 4c. Large Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            size="large"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-download mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            size="large"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-download mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            size="large"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui" />}
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <div className="demoSpacer8"> </div>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            size="large"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui" />}
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
        {/*<div className="demoSet">
                    <Button
                        className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
                        size="large"
                        endIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui"/>}
                    >
                        <span className="jv-mButton-label mui">Create</span>
                    </Button>
                    <div className='demoSpacer8'> </div>
                    <Button
                        className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
                        disabled
                        size="large"
                        endIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui"/>}
                    >
                        <span className="jv-mButton-label mui">Create Disabled</span>
                    </Button>
                </div>*/}
      </div>
    </div>

    <div className="demoWrapper demoButtons">
      {/* 4d. Small Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Contained</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            size="small"
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-edit mui" />}
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            size="small"
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-edit mui" />}
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            size="small"
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-clock mui" />
            }
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            size="small"
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-clock mui" />
            }
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
      </div>

      {/* 4e. Medium Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Contained</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-filter mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-filter mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-save mui" />}
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-save mui" />}
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
      </div>

      {/* 4f. Large Contained Combination Button */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Contained</div>
        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            size="large"
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-download mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonSecondary mui"
            disabled
            size="large"
            variant="contained"
            startIcon={
              <div className="jv-mButton-icon jv-mIcon jv-download mui" />
            }
          >
            <span className="jv-mButton-label mui">Secondary Disabled</span>
          </Button>
        </div>

        <div className="demoSet">
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            size="large"
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui" />}
          >
            <span className="jv-mButton-label mui">Primary</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonCombo jv-mButtonPrimary mui"
            disabled
            size="large"
            variant="contained"
            startIcon={<div className="jv-mButton-icon jv-mIcon jv-plus mui" />}
          >
            <span className="jv-mButton-label mui">Primary Disabled</span>
          </Button>
        </div>
      </div>
    </div>
  </>
);

/* -----------------------
 *   5. MENU BUTTONS
 * ----------------------- */
export const menuButton = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Menu</h1>

    <div className="demoWrapper demoMenuButtons">
      <Grid
        container
        className="jv-uHeight-100pc"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className="jv-uHeight-100pc">
          <IconButton
            aria-label="home"
            className="jv-mButton jv-mButtonMenu mui"
            size="medium"
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-home"></span>
          </IconButton>
          <Button className="jv-mButton jv-mButtonMenu mui" size="medium">
            <span className="jv-mButton-label mui">Library</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonMenu jv-mButtonDropdown mui"
            size="medium"
          >
            <span className="jv-mButton-label mui">View</span>
          </Button>
        </Grid>
        <Grid item className="jv-uHeight-100pc">
          <Button
            className="jv-mButton jv-mButtonMenu jv-mButtonDropdown mui"
            size="medium"
          >
            <span className="jv-mButton-label mui">Learning Resources</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonMenu jv-mButtonDropdown mui"
            size="medium"
          >
            <span className="jv-mButton-label jv-uTextExtraBold mui">
              Username
            </span>
          </Button>
        </Grid>
      </Grid>
    </div>
  </>
);

/* -----------------------
 *   6. TOOLBAR BUTTONS
 * ----------------------- */
export const toolbarButton = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button – Toolbar</h1>

    <div className="demoWrapper demoToolbarButtons">
      <MuiToolbar
        className="jv-mToolbar jv-mToolbarPadded jv-mToolbarShaded mui"
        disableGutters={true}
      >
        <div className="jv-mToolbar-toolset mui">
          <IconButton
            aria-label="bold"
            className={"jv-mButton jv-mButtonToolbar jv-mButtonDropdown mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-save"></span>
          </IconButton>

          <Divider
            orientation="vertical"
            component="div"
            classes={{ root: "jv-mToolbar-divider mui" }}
          />

          <IconButton
            aria-label="undo"
            className={"jv-mButton jv-mButtonToolbar mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-undo"></span>
          </IconButton>

          <IconButton
            aria-label="bold"
            className={"jv-mButton jv-mButtonToolbar mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-undoAll"></span>
          </IconButton>

          <IconButton
            aria-label="bold"
            className={"jv-mButton jv-mButtonToolbar mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-redo"></span>
          </IconButton>

          <Divider
            orientation="vertical"
            component="div"
            classes={{ root: "jv-mToolbar-divider mui" }}
          />
        </div>
      </MuiToolbar>
    </div>
  </>
);
