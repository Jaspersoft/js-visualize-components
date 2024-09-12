import React from "react";
import "./tooltip.css";
import { Button, Tooltip, Typography } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. DEFAULT
 *
 *   2. MULTI-LINE
 *
 * -------------------------------
 *  last modified July 20, 2022
 * ------------------------------- */

export default {
  component: Tooltip,
  title: "Components/Tooltip/Design",
};

/* ----------------------- */
/*  1. DEFAULT TOOLTIP     */
/* ----------------------- */
export const Default = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Tooltip</h1>

      <div className={"demoTooltip"}>
        <div className={"demoTooltip-itemRight"}>
          <Tooltip
            title="This beta feature has not been comprehensively tested and may not be fully stable; it is not yet supported or warranted. Please reach out to us at js-product-team@tibco.com to report issues or share your feedback."
            interactive
            arrow
            /*open*/
            placement={"right"}
            leaveDelay={1000}
            leaveTouchDelay={1000}
            classes={{ tooltip: "jv-mTooltip mui" }}
          >
            <Button>Arrow + Interactive, right</Button>
          </Tooltip>
        </div>

        <div className={"demoTooltip-itemLeft"}>
          <Tooltip
            title="This beta feature has not been comprehensively tested and may not be fully stable; it is not yet supported or warranted. Please reach out to us at js-product-team@tibco.com to report issues or share your feedback."
            interactive
            arrow
            /*open*/
            placement={"left"}
            leaveDelay={1000}
            leaveTouchDelay={1000}
            classes={{ tooltip: "jv-mTooltip mui" }}
          >
            <Button>Arrow + Interactive, left</Button>
          </Tooltip>
        </div>
        <div className={"demoTooltip-itemTopBottom"}>
          <Tooltip
            title="Short tooltip"
            arrow
            open
            classes={{ tooltip: "jv-mTooltip mui" }}
            placement={"top"}
          >
            <Button>Arrow, top</Button>
          </Tooltip>
          <Tooltip
            title="Short tooltip"
            arrow
            open
            classes={{ tooltip: "jv-mTooltip mui" }}
            placement={"bottom"}
          >
            <Button>Arrow, bottom</Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
Default.storyName = "Default Tooltip";

/* -------------------------- */
/*  2. MULTI-LINE TOOLTIP     */
/* -------------------------- */
export const Html = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Tooltip – Multi-line</h1>
      <div className={"demoTooltipMultiline"}>
        <Tooltip
          classes={{ tooltip: "jv-mTooltip mui" }}
          interactive
          arrow
          open
          title={
            <React.Fragment>
              {/*<Typography color="inherit">Tooltip with HTML</Typography>*/}
              <Typography
                className="jv-mText jv-mTooltip-title mui"
                variant="body2"
              >
                Name
              </Typography>
              <Typography
                className="jv-mText jv-mTooltip-text mui"
                variant="body2"
              >
                05. Accounts Report
              </Typography>
              <Typography
                className="jv-mText jv-mTooltip-title mui"
                variant="body2"
              >
                Path
              </Typography>
              <Typography
                className="jv-mText jv-mTooltip-text mui"
                variant="body2"
              >
                /public/Samples/Reports/AllAccounts
              </Typography>
            </React.Fragment>
          }
        >
          <Button>HTML + Interactive Tooltip</Button>
        </Tooltip>
      </div>
    </>
  );
};
Html.storyName = "Multi-line Tooltip";
