import React from "react";
import "../css/demoPages.css";
import "./token.css";
import { Box, Button, IconButton, Icon, Paper } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. FIELD AND MEASURE TOKENS
 *      1a. Basic
 *      1b. Error State
 *      1c. Warning State
 *
 * -------------------------------
 *  last modified Mar 18, 2024
 * ------------------------------- */

export default {
  title: "Components/Token/Design",
};

/* ------------ */
/*  1. TOKEN    */
/* ------------ */
export const Token = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Token</h1>

      <div className={"demoWrapper demoToken"}>
        <div className="demoSize">
          <p className="demoSubtitle">Fields and Measures</p>

          {/* 1a.  Basic Token */}
          <p className="demoSubtitle-2">Basic Tokens</p>
          <Box className={"jv-mToken jv-mTokenField mui"}>
            {/* Optional expand/collapse toggle button
                        <div className={"jv-mToken-action jv-mToken-actionExpander mui"}>
                            <IconButton
                                aria-label="bold"
                                className={"jv-mButton jv-mButtonSmall mui"}
                            >
                                <span className="jv-mButton-icon jv-mIcon mui jv-caretDown"></span>
                            </IconButton>
                        </div> */}

            <div className={"jv-mToken-label mui"}>Recyclable Packaging</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <Box className={"jv-mToken jv-mTokenMeasure mui"}>
            {/* Optional expand/collapse toggle button
                        <div className={"jv-mToken-action jv-mToken-actionExpander mui"}>
                            <IconButton
                                aria-label="bold"
                                className={"jv-mButton jv-mButtonSmall mui"}
                                classes={{ label: "jv-mButton-icon jv-mIcon mui jv-caretDown"}}
                            >
                            </IconButton>
                        </div>*/}

            <div className={"jv-mToken-label mui"}>Sales % of Total</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <div className="demoSpacer16"> </div>

          <div className={"jv-mTokens jv-mTokensMeasures mui"}>
            <div className={"jv-mTokens-mover mui"}>
              <Icon className="jv-mIcon jv-dragHandleVertical mui" />
            </div>

            <div className={"jv-mTokens-content mui"}>
              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Store Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Unit Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Store Cost</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demoSize">
          <div className="demoSpacer16"> </div>

          {/* 1b.  Error State Token */}
          <p className="demoSubtitle-2">Error State</p>
          <Box className={"jv-mToken jv-mTokenField jv-hasError mui"}>
            {/* Optional expand/collapse toggle button
                        <div className={"jv-mToken-action jv-mToken-actionExpander mui"}>
                            <IconButton
                                aria-label="bold"
                                className={"jv-mButton jv-mButtonSmall mui"}
                                classes={{ label: "jv-mButton-icon jv-mIcon mui jv-caretDown"}}
                            >
                            </IconButton>
                        </div>*/}

            <div className={"jv-mToken-label mui"}>Recyclable Packaging</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <Box className={"jv-mToken jv-mTokenMeasure jv-hasError mui"}>
            {/* Optional expand/collapse toggle button
                        <div className={"jv-mToken-action jv-mToken-actionExpander mui"}>
                            <IconButton
                                aria-label="bold"
                                className={"jv-mButton jv-mButtonSmall mui"}
                                classes={{ label: "jv-mButton-icon jv-mIcon mui jv-caretDown"}}
                            >
                            </IconButton>
                        </div>*/}

            <div className={"jv-mToken-label mui"}>Sales % of Total</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <div className="demoSpacer16"> </div>

          <div className={"jv-mTokens jv-mTokensMeasures jv-hasError mui"}>
            <div className={"jv-mTokens-mover mui"}>
              <Icon className="jv-mIcon jv-dragHandleVertical mui" />
            </div>

            <div className={"jv-mTokens-content mui"}>
              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Store Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Unit Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Store Cost</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demoSize">
          <div className="demoSpacer16"> </div>

          {/* 1c.  Warning State Token */}
          <p className="demoSubtitle-2">Warning State</p>
          <Box className={"jv-mToken jv-mTokenField jv-hasWarning mui"}>
            <div className={"jv-mToken-label mui"}>Recyclable Packaging</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <Box className={"jv-mToken jv-mTokenMeasure jv-hasWarning mui"}>
            <div className={"jv-mToken-label mui"}>Sales % of Total</div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
              </IconButton>
            </div>
            <div className={"jv-mToken-action mui"}>
              <IconButton
                aria-label="bold"
                className={"jv-mButton jv-mButtonSmall mui"}
              >
                <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
              </IconButton>
            </div>
          </Box>

          <div className="demoSpacer16"> </div>

          <div className={"jv-mTokens jv-mTokensMeasures mui"}>
            <div className={"jv-mTokens-mover mui"}>
              <Icon className="jv-mIcon jv-dragHandleVertical mui" />
            </div>

            <div className={"jv-mTokens-content mui"}>
              <div className={"jv-mToken jv-mTokenMeasure jv-hasWarning  mui"}>
                <div className={"jv-mToken-label mui"}>Store Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Unit Sales</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>

              <div className={"jv-mToken jv-mTokenMeasure mui"}>
                <div className={"jv-mToken-label mui"}>Store Cost</div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                  </IconButton>
                </div>
                <div className={"jv-mToken-action mui"}>
                  <IconButton
                    aria-label="bold"
                    className={"jv-mButton jv-mButtonSmall mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Token.storyName = "Token";
