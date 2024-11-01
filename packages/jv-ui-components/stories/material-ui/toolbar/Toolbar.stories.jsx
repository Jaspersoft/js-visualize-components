import { JVIcon, JVInputAdornment } from "../../../material-ui";
import {
  Divider,
  IconButton,
  TextField,
  Toolbar as MuiToolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/demoPages.css";
import "./toolbar.css";

/* ------------------------------
 *  TABLE OF CONTENTS
 * ------------------------------
 *
 *   1. WRAPABLE + PADDED TOOLBAR
 *
 *   2. SHADED + PADDED TOOLBAR
 *
 * ------------------------------
 *  last modified Apr 1, 2024
 * ----------------------------- */

export default {
  component: MuiToolbar,
  title: "Components/Toolbar/Design",
};

/* 1. DESIGNER TOOLBAR */
export const Toolbar = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleCancel = () => {
    setValue("");
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Toolbar</h1>

      {/* -------------------------------- *
       *  1.  WRAPABLE, PADDED TOOLBAR   *
       * -------------------------------- */}
      <div className="demoWrapper demoToolbar">
        <p className={"demoSubtitle"}>Wrapable + Padded Toolbar</p>
        <div className="demoToolbarWrapper">
          <MuiToolbar
            className="jv-mToolbar jv-mToolbarWrapable jv-mToolbarPadded mui"
            disableGutters={true}
          >
            <div className="jv-mToolbar-toolset mui">
              <Typography className="jv-mText jv-mTextFilter mui">
                <span className="jv-mText-descriptor mui">
                  Executions for all
                </span>
                <span className="jv-mText-value mui">scheduled dashboards</span>
                <span className="jv-mText-descriptor mui">that were</span>
                <span className="jv-mText-value mui">completed</span>
                <span className="jv-mText-descriptor mui">within the</span>
                <span className="jv-mText-value mui">last 3 days</span>
              </Typography>
            </div>

            <div className="jv-mToolbar-toolset jv-mToolbar-toolsetRight mui">
              {/* Search */}
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputSearch jv-mInputLarge jv-uWidth-300px mui"
                }
                variant="outlined"
                placeholder="Search"
                type="search"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  endAdornment: (
                    <JVInputAdornment
                      position="end"
                      className={"jv-mInputSearch-adornment"}
                    >
                      <JVIcon icon="search" />
                    </JVInputAdornment>
                  ),
                }}
              />

              <IconButton
                aria-label="download"
                className={"jv-mButton jv-mButtonToolbar jv-uMargin-l-02 mui"}
                size="large"
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-download"></span>
              </IconButton>
            </div>
          </MuiToolbar>
        </div>
      </div>

      <div className="demoSpacer48"></div>

      {/* ----------------------------- *
       *  2. SHADED, PADDED TOOLBAR    *
       * ----------------------------- */}
      <div className="demoWrapper demoToolbar">
        <p className={"demoSubtitle"}>Shaded + Padded Toolbar</p>

        <div className="demoToolbarWrapper">
          <MuiToolbar
            className="jv-mToolbar jv-mToolbarPadded jv-mToolbarShaded mui"
            disableGutters={true}
          >
            <div className="jv-mToolbar-toolset mui">
              <IconButton
                aria-label="bold"
                className={
                  "jv-mButton jv-mButtonToolbar jv-mButtonDropdown mui"
                }
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-save"></span>
              </IconButton>

              <Divider
                orientation="vertical"
                component="div"
                classes={{ root: "jv-mToolbar-divider mui" }}
              />

              <IconButton
                aria-label="bold"
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

            <div className="jv-mToolbar-toolset jv-mToolbar-toolsetRight mui">
              {/* Search */}
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputSearch jv-mInputLarge jv-uWidth-300px mui"
                }
                variant="outlined"
                placeholder="Search"
                type="search"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  endAdornment: (
                    <JVInputAdornment
                      position="end"
                      className={"jv-mInputSearch-adornment"}
                    >
                      <JVIcon icon="search" />
                    </JVInputAdornment>
                  ),
                }}
              />
            </div>
          </MuiToolbar>
        </div>
      </div>
    </>
  );
};

Toolbar.storyName = "Toolbar";

/* 2. X1 TOOLBAR
export const X1Toolbar = () => {
    const [value, setValue] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleCancel = () => {
        setValue('');
    }

    return (
        <>
            <p>placeholder</p>
        </>
    );
}
X1Toolbar.storyName = 'X1 Toolbar'; */
