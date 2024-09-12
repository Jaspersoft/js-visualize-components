import React, { useState } from "react";
import "../css/demoPages.css";
import "./tabs.css";
import { Tabs, Tab } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. DEFAULT
 *      1a. Small
 *      1b. Medium
 *      1c. Large
 *
 *   2. CLASSIC
 *
 *   3. VERTICAL
 *
/* -------------------------------
 *  last modified Mar 7, 2024
 * ------------------------------- */

export default {
  component: Tabs,
  title: "Components/Tabs/Design",
};

/* ------------------ */
/*  1. DEFAULT TABS   */
/* ------------------ */
export const Simple = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Tabs</h1>

      {/* 1a. Small Default Tabs */}
      <div className={"demoWrapper demoTab"}>
        <div class="demoSize">
          <div className="demoSubtitle">Small</div>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsSmall mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              aria-label="small default tabs example"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Appearance"
                {...a11yProps(0)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Borders"
                {...a11yProps(1)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Style"
                {...a11yProps(2)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                {...a11yProps(3)}
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer16"}></div>
        </div>

        {/* 1b. Medium Default Tabs */}
        <div className="demoSize">
          <div className="demoSubtitle">Medium</div>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsMedium mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              aria-label="medium default tabs example"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Appearance"
                {...a11yProps(0)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Borders"
                {...a11yProps(1)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Style"
                {...a11yProps(2)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                {...a11yProps(3)}
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer16"}></div>
        </div>

        {/* 1c. Large Default Tabs */}
        <div className="demoSize">
          <div className="demoSubtitle">Large</div>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsLarge mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              aria-label="large default tabs example"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Appearance"
                {...a11yProps(0)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Borders"
                {...a11yProps(1)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Style"
                {...a11yProps(2)}
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                {...a11yProps(3)}
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer16"}></div>
        </div>
      </div>
    </>
  );
};
Simple.storyName = "Default";

/* ------------------ */
/*  2. CLASSIC TABS   */
/* ------------------ */
export const Classic = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Tabs - Classic</h1>

      <div className={"demoWrapper demoTab"}>
        <div className="demoSize">
          <div className="demoSubtitle">Small</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsSmall mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer24"}></div>

          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsSmall mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer8"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Medium</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsMedium mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /*classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer24"}></div>

          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsMedium mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer8"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Large</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsLarge mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer24"}></div>

          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <Tabs
              className={"jv-mTabs jv-mTabsClassic jv-mTabsLarge mui"}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Edit"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Source"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Preview"
              />
              <Tab
                /* classes={{ wrapper: "jv-mTab-label mui"}} v5 removed the label child element */
                className={"jv-mTab mui"}
                label="Disabled"
                disabled
              />
            </Tabs>
          </div>
          <div className={"demoSpacer8"}></div>
        </div>
      </div>
    </>
  );
};
Classic.storyName = "Classic";

/* ------------------- */
/*  3. VERTICAL TABS   */
/* ------------------- */
/*
export const Vertical = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className="tabDemo">
                <Paper style={{width: "200px"}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                    >
                        <Tab label="Item One"/>
                        <Tab label="Item Two" disabled/>
                        <Tab label="Item Three"/>
                        <Tab label="Item Four"/>
                        <Tab label="Item Five"/>
                        <Tab label="Item Six"/>
                        <Tab label="Item Seven"/>
                    </Tabs>
                </Paper>
            </div>
        </>
    )
}*/
