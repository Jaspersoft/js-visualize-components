import "../../../.storybook/styles/storybook-jv-ui.scss";
import "../css/demoPages.css";
import "./accordion.css";

import {
  JVAccordion,
  JVAccordionDetails,
  JVAccordionFull,
  JVAccordionSummary,
} from "@jaspersoft/jv-ui-components";
import { Accordion, Typography } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. BASIC ACCORDION
 *     1a. Small
 *     1b. Medium
 *     1c. Large
 *
 *  2. SHADED ACCORDION
 *     2a. Small
 *     sb. Medium
 *     2c. Large
 *
 * ------------------------------
 *  last modified July 22, 2022
 * ------------------------------ */

// const meta: Meta<typeof JVAccordion> = {
//   component: JVAccordion,
//   title: "Components/Accordion/Component",
// };
// export default meta;

export default {
  component: JVAccordion,
  title: "Components/Accordion/Component",
};

export const DefaultAccordion = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Accordion</h1>

      {/* ----------------------
       1. BASIC ACCORDION
       ---------------------- */}
      <div className="demoWrapper demoAccordion">
        {/* 1a. Small Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small</div>
          {/* TODO: Needs fixing. Shaded styling is currently attached to the "small" variation. Size and shaded variations are two different things.*/}
          <div>
            <JVAccordionFull
              id="axis2"
              size="small"
              summary={<Typography>Axis</Typography>}
            >
              <Typography>
                Accordions contain creation flows and allow lightweight editing
                of an element.
              </Typography>
            </JVAccordionFull>
            <JVAccordion size="small">
              <JVAccordionSummary
                size="small"
                aria-controls="title2-content"
                id="title2"
              >
                <Typography>Title</Typography>
              </JVAccordionSummary>
              <JVAccordionDetails className={"jr-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </JVAccordionDetails>
            </JVAccordion>
            <JVAccordion size="small">
              <JVAccordionSummary
                size="small"
                aria-controls="labels2-content"
                id="labels2"
              >
                <Typography>Labels</Typography>
              </JVAccordionSummary>
              <JVAccordionDetails>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </JVAccordionDetails>
            </JVAccordion>
          </div>
        </div>

        {/* 1b. Medium Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Medium</div>
          <div>
            <JVAccordionFull id="axis1" summary={<Typography>Axis</Typography>}>
              <Typography>
                Accordions contain creation flows and allow lightweight editing
                of an element.
              </Typography>
            </JVAccordionFull>
            <JVAccordion>
              <JVAccordionSummary aria-controls="title1-content" id="title1">
                <Typography>Title</Typography>
              </JVAccordionSummary>
              <JVAccordionDetails>
                <Typography>
                  Accordions contain creation flows and allow lightweight
                  editing of an element.
                </Typography>
              </JVAccordionDetails>
            </JVAccordion>
            <JVAccordion>
              <JVAccordionSummary aria-controls="labels1-content" id="labels1">
                <Typography>Labels</Typography>
              </JVAccordionSummary>
              <JVAccordionDetails>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </JVAccordionDetails>
            </JVAccordion>
          </div>
        </div>

        {/* 1b. Large Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Large</div>
          <div>{/* TODO: Add large accordion here */}</div>
        </div>
      </div>

      {/* ----------------------
       2. SHADED ACCORDION
       ---------------------- */}
      <div className="demoWrapper demoAccordion">
        {/* 2a. Small Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small Shaded</div>
          <div>{/* TODO: Add small shaded accordion here */}</div>
        </div>

        {/* 2b. Medium Shaded Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Medium Shaded</div>
          <div>{/* TODO: Add medium shaded accordion here */}</div>
        </div>

        {/* 2c. Large Shaded Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Large Shaded</div>
          <div>{/* TODO: Add large shaded accordion here */}</div>
        </div>
      </div>
    </>
  );
};
DefaultAccordion.storyName = "Accordion";
