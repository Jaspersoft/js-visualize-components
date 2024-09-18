import {
  JVCircularProgress,
  JVLinearProgress,
} from "@jaspersoft/jv-ui-components";
import { useEffect, useState } from "react";
import "../css/demoPages.css";
import "./progress.css";

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
  component: JVCircularProgress,
  title: "Components/Progress/Component",
};

/* -------------- */
/*  1. SPINNER    */
/* -------------- */
export const Circular = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Progress - Spinner</h1>

      {/* 1a. Spinner */}
      <div className={"demoWrapper demoSpinner"}>
        {/* 1a. Spinner */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner</div>
          <div className="jv-mSpinner mui">
            <JVCircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <JVCircularProgress size={28} thickness={4} />
          </div>
        </div>

        {/* 1b. Spinner Centered */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Spinner Centered</div>
          <div className="jv-mSpinner jv-mSpinnerCenter mui">
            <JVCircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <JVCircularProgress
              variant="indeterminate"
              size={28}
              thickness={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};
Circular.storyName = "Spinner";

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
      <h1 className="demoType demoTypeComponent">Component</h1>
      <h1 className="demoTitle">Progress - Linear Bar</h1>

      <div className="demoWrapper demoLinear">
        <div className="demoSize">
          <div className="demoSubtitle">Linear Bar - Default</div>
          <p className={"demoCategoryTitle"}>Sizes</p>

          <p className={"demoItemTitle"}>Hairline</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarHairline"
            value={50}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Thin</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThin"
            value={50}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress variant="determinate" value={progress} />
          <div className="demoSpacer16"></div>
          <p className={"demoItemTitle"}>Thick</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThick"
            value={50}
          />
          <div className={"demoSpacer36"}></div>
          <p className={"demoCategoryTitle"}>Shape</p>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress variant="determinate" value={50} />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Rounded</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarRounded"
            value={50}
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Linear Bar - Safe</div>
          <p className={"demoCategoryTitle"}>Sizes</p>

          <p className={"demoItemTitle"}>Hairline</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarHairline"
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
            value={50}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Thin</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThin"
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
            value={50}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={progress}
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
          />
          <div className="demoSpacer16"></div>

          <p className={"demoItemTitle"}>Thick</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThick"
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
            value={40}
          />
          <div className={"demoSpacer36"}></div>

          <p className={"demoCategoryTitle"}>Shape</p>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={50}
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Rounded</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarRounded"
            classes={{ bar: "jv-mProgressbar-fillSafe" }}
            value={50}
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Linear Bar - Warning</div>
          <p className={"demoCategoryTitle"}>Sizes</p>

          <p className={"demoItemTitle"}>Hairline</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarHairline"
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
            value={90}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Thin</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThin"
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
            value={90}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={90}
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
          />
          <div className="demoSpacer16"></div>
          <p className={"demoItemTitle"}>Thick</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThick"
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
            value={90}
          />
          <div className={"demoSpacer36"}></div>

          <p className={"demoCategoryTitle"}>Shape</p>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={90}
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Rounded</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarRounded"
            classes={{ bar: "jv-mProgressbar-fillWarning" }}
            value={90}
          />
          <div className={"demoSpacer16"}></div>
        </div>

        <div className="demoSize">
          <div className="demoSubtitle">Linear Bar - Danger</div>
          <p className={"demoCategoryTitle"}>Sizes</p>

          <p className={"demoItemTitle"}>Hairline</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarHairline"
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
            value={100}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Thin</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThin"
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
            value={100}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={100}
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
          />
          <div className="demoSpacer16"></div>
          <p className={"demoItemTitle"}>Thick</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarThick"
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
            value={100}
          />
          <div className={"demoSpacer36"}></div>

          <p className={"demoCategoryTitle"}>Shape</p>

          <p className={"demoItemTitle"}>Default</p>
          <JVLinearProgress
            variant="determinate"
            value={100}
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
          />
          <div className={"demoSpacer16"}></div>

          <p className={"demoItemTitle"}>Rounded</p>
          <JVLinearProgress
            variant="determinate"
            className="jv-mProgressbarRounded"
            classes={{ bar: "jv-mProgressbar-fillDanger" }}
            value={100}
          />
          <div className={"demoSpacer16"}></div>
        </div>
      </div>
    </>
  );
};
Linear.storyName = "Linear Static Bar";
