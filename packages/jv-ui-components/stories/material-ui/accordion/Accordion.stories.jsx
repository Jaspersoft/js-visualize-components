// workaround for live reloading issue for yarn run styles:watch
import "../css/demoPages.css";
import "./accordion.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

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
 *  last modified Mar 12, 2024
 * ------------------------------ */

export default {
  component: Accordion,
  title: "Components/Accordion/Design",
};

export const DefaultAccordion = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Accordion</h1>

      {/* ----------------------
                 1. BASIC ACCORDION
                ---------------------- */}
      <div className="demoWrapper demoAccordion">
        {/* 1a. Small Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small</div>
          <div>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* 1b. Medium Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Medium</div>
          <div>
            <Accordion className={"jv-mAccordion mui"} elevation={0} square>
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={"jv-mAccordion mui"} elevation={0} square>
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* 1c. Large Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Large</div>
          <div>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={"demoSpacer22"}> </div>

      {/* ----------------------
                 2. SHADED ACCORDION
                ---------------------- */}
      <div className="demoWrapper demoAccordion">
        {/* 2a. Small Shaded Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small Shaded</div>
          <div>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionSmall mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* 2b. Medium Shaded Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Medium Shaded</div>
          <div>
            <Accordion className={"jv-mAccordion mui"} elevation={0} square>
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={"jv-mAccordion mui"} elevation={0} square>
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* 2c. Large Shaded Accordion */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Large Shaded</div>
          <div>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="title-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="title-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              square
            >
              <AccordionSummary
                aria-controls="labels-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="labels-header"
              >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  The content of Accordions is mounted by default even if the
                  accordion is not expanded.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={"jv-mAccordion jv-mAccordionLarge mui"}
              elevation={0}
              expanded={true}
              square
            >
              <AccordionSummary
                aria-controls="axis-content"
                className={"jv-mAccordion-title jv-mAccordion-titleShaded mui"}
                classes={{
                  content: "jv-mAccordion-title-text mui",
                  expandIconWrapper: "jv-mAccordion-title-icon mui",
                }}
                expandIcon={<ChevronRightIcon />}
                id="axis-header"
              >
                <Typography>Expanded Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails className={"jv-mAccordion-body mui"}>
                <Typography>
                  An accordion is a lightweight container that may either stand
                  alone or be connected to a larger surface, such as a card.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
DefaultAccordion.storyName = "Accordion";
