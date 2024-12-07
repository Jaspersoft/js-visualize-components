import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import "../css/demoPages.css";
import "./progress.css";
import { useEffect, useState } from "react";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. SPINNER
 *     1a. Spinner
 *     1b. Spinner Centered
 *
 * ----------------------------
 *  last modified Dec 6, 2024
 * ---------------------------- */

export default {
  component: CircularProgress,
  title: "Components/Progress/Design",
};

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

/* -------------- */
/*  1. SPINNER    */
/* -------------- */
export const Circular = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Progress - Spinner</h1>

      <div className={"demoWrapper demoSpinner"}>
        {/* 1a. Spinner */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner</div>
          <div className="jv-mSpinner mui">
            <CircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <CircularProgress variant="indeterminate" size={28} thickness={4} />
          </div>
        </div>

        {/* 1b. Spinner Centered */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner Centered</div>
          <div className="jv-mSpinner jv-mSpinnerCenter mui">
            <CircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <CircularProgress variant="indeterminate" size={28} thickness={4} />
          </div>
        </div>

        {/*<div className="progressDemo">
                    <div className={"progressDemo-title"}>Circular Progress Loading with card</div>
                    <Card className="jv-mCard jv-mCardDashlet jv-uMargin-b-08 mui" variant="elevation" elevation="2">
                        <CardContent>
                            <CardHeader
                                className="jv-mCard-header jv-mCard-headerLarge mui"
                                classes={{title: "jv-mCard-header-title mui"}}
                                title="About JasperReports Server"
                            />
                            <div className="jv-mCard-body jv-mCard-bodyPadded mui">
                                <div className="jv-mSpinner jv-mSpinnerCenter mui">
                                    <CircularProgress
                                        variant="determinate"
                                        size={28}
                                        thickness={4}
                                        value={100}
                                    />
                                    <CircularProgress
                                        variant="indeterminate"
                                        size={28}
                                        thickness={4}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>*/}
      </div>
    </>
  );
};
Circular.storyName = "Circular Spinner";
