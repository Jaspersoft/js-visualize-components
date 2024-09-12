import React, { useState } from "react";
import "../css/demoPages.css";
import "./toolbar.css";
import {
  JVToolbar,
  JVIconButton,
  JVTextField,
  JVDivider,
  JVTypography,
  JVInputAdornment,
  JVIcon,
} from "@jaspersoft/jv-ui-components";

/* ------------------------------
 *  TABLE OF CONTENTS
 * ------------------------------
 *
 *   1. WRAPABLE, PADDED TOOLBAR
 *
 *   2. SHADED, PADDED TOOLBAR
 *
 * ------------------------------
 *  last modified July 22, 2022
 * ------------------------------ */

export default {
  component: JVToolbar,
  title: "Components/Toolbar/Component",
};

export const Toolbar = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleCancel = () => {
    setValue("");
  };

  const [searchText, setSearchText] = useState("");
  const onClearBtnClick = () => {
    setSearchText("");
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Toolbar</h1>

      {/* -------------------------------- *
       *  1.  WRAPABLE, PADDED TOOLBAR   *
       * -------------------------------- */}
      <div className="demoWrapper demoToolbar">
        <p className={"demoSubtitle"}>Wrapable + Padded Toolbar</p>
        <div className="demoToolbarWrapper">
          <JVToolbar
            className="jv-mToolbarWrapable jv-mToolbarPadded"
            disableGutters={true}
          >
            <div className="jv-mToolbar-toolset mui">
              <JVTypography className="jv-mText jv-mTextFilter mui">
                <span className="jv-mText-descriptor mui">
                  Executions for all
                </span>
                <span className="jv-mText-value mui">scheduled dashboards</span>
                <span className="jv-mText-descriptor mui">that were</span>
                <span className="jv-mText-value mui">completed</span>
                <span className="jv-mText-descriptor mui">within the</span>
                <span className="jv-mText-value mui">last 3 days</span>
              </JVTypography>
            </div>
            <div className="jv-mToolbar-toolset jv-mToolbar-toolsetRight mui">
              {/* Search */}
              <JVTextField
                placeholder="Search"
                size={"large"}
                textFieldClassName={"jv-mInputSearch jv-uWidth-300px"}
                id="search02"
                variant="outlined"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <JVInputAdornment
                      position="end"
                      className={"jv-mInputSearch-adornment"}
                    >
                      {searchText.length > 0 && (
                        <JVIconButton
                          icon="searchClear"
                          color="default"
                          aria-label="searchClear"
                          tabIndex={0}
                          onClick={onClearBtnClick}
                        />
                      )}
                      <JVIcon icon="search" tabIndex={-1} />
                    </JVInputAdornment>
                  ),
                }}
                InputLabelProps={{
                  classes: { root: "jv-Mui-focused" },
                  disableAnimation: true,
                }}
              />

              <JVIconButton
                aria-label="bold"
                className={"jv-mButtonToolbar jv-uMargin-l-02"}
                icon={"download"}
              />
            </div>
          </JVToolbar>
        </div>
      </div>

      <div className="demoSpacer48"></div>

      {/* ----------------------------- *
       *  2.  SHADED, PADDED TOOLBAR   *
       * ----------------------------- */}
      <div className="demoWrapper demoToolbar">
        <p className={"demoSubtitle"}>Shaded + Padded Toolbar</p>

        <div className="demoToolbarWrapper">
          <JVToolbar
            className="jv-mToolbarPadded jv-mToolbarShaded"
            disableGutters={true}
          >
            <div className="jv-mToolbar-toolset mui">
              <JVIconButton
                aria-label="bold"
                className={"jv-mButtonToolbar jv-mButtonDropdown"}
                icon={"save"}
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

              <JVIconButton
                aria-label="bold"
                className={"jv-mButtonToolbar"}
                icon={"undoAll"}
              />

              <JVIconButton
                aria-label="bold"
                className={"jv-mButtonToolbar"}
                icon={"redo"}
              />

              <JVDivider
                orientation="vertical"
                component="div"
                classes={{ root: "jv-mToolbar-divider mui" }}
              />
            </div>

            <div className="jv-mToolbar-toolset jv-mToolbar-toolsetRight mui">
              {/* Search */}
              <JVTextField
                placeholder="Search"
                size={"large"}
                textFieldClassName={"jv-mInputSearch jv-uWidth-300px"}
                id="search02"
                variant="outlined"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <JVInputAdornment
                      position="end"
                      className={"jv-mInputSearch-adornment"}
                    >
                      {searchText.length > 0 && (
                        <JVIconButton
                          icon="searchClear"
                          color="default"
                          aria-label="searchClear"
                          tabIndex={0}
                          onClick={onClearBtnClick}
                        />
                      )}
                      <JVIcon icon="search" tabIndex={-1} />
                    </JVInputAdornment>
                  ),
                }}
                InputLabelProps={{
                  classes: { root: "jv-Mui-focused" },
                  disableAnimation: true,
                }}
              />
            </div>
          </JVToolbar>
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
