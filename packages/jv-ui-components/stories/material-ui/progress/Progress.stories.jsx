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
 *  2. LINEAR
 *
 * ----------------------------
 *  last modified Sep 15, 2023
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

/* -------------- */
/*  2. LINEAR     */
/* -------------- */
export const Linear = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Progress - Linear Bar</h1>

      <div className={"demoWrapper demoLinear"}>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Fill - Default</div>
          <p className={"demoCategoryTitle"}>Sizes</p>
          <p className={"demoItemTitle"}>Hairline</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarHairline mui"
            }
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={progress}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thin</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThin mui"
            }
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={50}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={50}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thick</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThick mui"
            }
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={50}
            variant="determinate"
          />
          <div className={"demoSpacer36"}></div>
          <p className={"demoCategoryTitle"}>Shape</p>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={50}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Rounded</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarRounded mui"
            }
            classes={{ bar: "jv-mProgressbar-fill mui" }}
            value={progress}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Fill - Safe</div>
          <p className={"demoCategoryTitle"}>Sizes</p>
          <p className={"demoItemTitle"}>Hairline</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarHairline mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={progress}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thin</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThin mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={40}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={40}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thick</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThick mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={40}
            variant="determinate"
          />
          <div className={"demoSpacer36"}></div>
          <p className={"demoCategoryTitle"}>Shape</p>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={40}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Rounded</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarRounded mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillSafe mui",
            }}
            value={progress}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Fill - Warning</div>
          <p className={"demoCategoryTitle"}>Sizes</p>
          <p className={"demoItemTitle"}>Hairline</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarHairline mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thin</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThin mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thick</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThick mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer36"}></div>
          <p className={"demoCategoryTitle"}>Shape</p>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Rounded</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarRounded mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillWarning mui",
            }}
            value={90}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Fill - Danger</div>
          <p className={"demoCategoryTitle"}>Sizes</p>
          <p className={"demoItemTitle"}>Hairline</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarHairline mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thin</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThin mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Thick</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarThick mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer36"}></div>
          <p className={"demoCategoryTitle"}>Shape</p>
          <p className={"demoItemTitle"}>Default</p>
          <LinearProgress
            className={"jv-mProgressbar jv-mProgressbarStatic mui"}
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
          <p className={"demoItemTitle"}>Rounded</p>
          <LinearProgress
            className={
              "jv-mProgressbar jv-mProgressbarStatic jv-mProgressbarRounded mui"
            }
            classes={{
              bar: "jv-mProgressbar-fill jv-mProgressbar-fillDanger mui",
            }}
            value={100}
            variant="determinate"
          />
          <div className={"demoSpacer16"}></div>
        </div>
      </div>
    </>
  );
};
Linear.storyName = "Linear Bar";
