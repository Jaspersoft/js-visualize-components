import React, { useState } from "react";
import "../css/demoPages.css";
import "./tabs.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. DEFAULT
 *
 *   2. CLASSIC
 *
 *   3. VERTICAL
 *
/* -----------------------------
 *  last modified July 22, 2022
 * ----------------------------- */

export default {
  component: JVTabs,
  title: "Components/Tabs/Component",
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
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Tabs</h1>

      <div className={"demoWrapper demoTab"}>
        <div class="demoSize">
          <div className="demoSubtitle">Small</div>
          <div>
            <JVTabs
              size={"small"}
              value={value}
              onChange={handleChange}
              aria-label="large default tabs example"
            >
              <JVTab label="Appearance" {...a11yProps(0)} />
              <JVTab label="Borders" {...a11yProps(1)} />
              <JVTab label="Style" {...a11yProps(2)} />
              <JVTab label="Disabled" {...a11yProps(3)} disabled />
            </JVTabs>
          </div>
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Medium</div>
          <div>
            <JVTabs
              value={value}
              onChange={handleChange}
              aria-label="large default tabs example"
            >
              <JVTab label="Appearance" {...a11yProps(0)} />
              <JVTab label="Borders" {...a11yProps(1)} />
              <JVTab label="Style" {...a11yProps(2)} />
              <JVTab label="Disabled" {...a11yProps(3)} disabled />
            </JVTabs>
          </div>
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Large</div>
          <div>
            <JVTabs
              size={"large"}
              value={value}
              onChange={handleChange}
              aria-label="large default tabs example"
            >
              <JVTab label="Appearance" {...a11yProps(0)} />
              <JVTab label="Borders" {...a11yProps(1)} />
              <JVTab label="Style" {...a11yProps(2)} />
              <JVTab label="Disabled" {...a11yProps(3)} disabled />
            </JVTabs>
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
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Tabs - Classic</h1>

      <div className="demoWrapper demoTab">
        <div className="demoSize">
          <div className="demoSubtitle">Small</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <JVTabs
              size="small"
              className={"jv-mTabsClassic"}
              value={value}
              onChange={handleChange}
              textColor="primary"
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
          </div>

          <div className={"demoSpacer24"}></div>
          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <JVTabs
              size="small"
              className="jv-mTabsClassic"
              value={value}
              onChange={handleChange}
              textColor="primary"
              centered
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
          </div>

          <div className={"demoSpacer8"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Medium</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <JVTabs
              className={"jv-mTabsClassic"}
              value={value}
              onChange={handleChange}
              textColor="primary"
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
          </div>
          <div className={"demoSpacer24"}></div>

          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <JVTabs
              className={"jv-mTabsClassic"}
              value={value}
              onChange={handleChange}
              textColor="primary"
              centered
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
          </div>
          <div className={"demoSpacer8"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Large</div>
          <h4 className="demoSubtitle-2">Left Aligned</h4>
          <div>
            <JVTabs
              size={"large"}
              className={"jv-mTabsClassic"}
              value={value}
              onChange={handleChange}
              textColor="primary"
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
          </div>
          <div className={"demoSpacer24"}></div>

          <h4 className="demoSubtitle-2">Centered</h4>
          <div>
            <JVTabs
              size={"large"}
              className={"jv-mTabsClassic"}
              value={value}
              onChange={handleChange}
              textColor="primary"
              centered
            >
              <JVTab label="Edit" />
              <JVTab label="Source" />
              <JVTab label="Preview" />
              <JVTab label="Disabled" disabled />
            </JVTabs>
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
                    <JVTabs
                        value={value}
                        onChange={handleChange}
                        orientation="vertical"
                        variant="scrollable"
                    >
                        <JVTab label="Item One"/>
                        <JVTab label="Item Two" disabled/>
                        <JVTab label="Item Three"/>
                        <JVTab label="Item Four"/>
                        <JVTab label="Item Five"/>
                        <JVTab label="Item Six"/>
                        <JVTab label="Item Seven"/>
                    </JVTabs>
                </Paper>
            </div>
        </>
    )
}*/
