import "../inputs/inputs.css";
import "../css/demoPages.css";
import "./instructor.css";
import { Icon, TextField, Typography } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. SMALL
 *     1a. Small
 *     1b. Small, No Title
 *
 *  2. MEDIUM
 *     2a. Medium
 *     2b. Medium, No Title
 *
 *  3. LARGE
 *     1a. Large
 *     1b. Large, No Title
 *
 * ----------------------------
 *  last modified July 22, 2022
 * ---------------------------- */

export default {
  component: TextField,
  title: "Components/Instructor/Design",
};

export const Default = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Instructor</h1>

      {/* ------------
       1. SMALL
       ------------*/}
      {/* 1a. Small */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column small"}>
          <p className={"demoSubtitle"}>Small</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor jv-mInstructorSmall mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a small Instructor for spaces 400px or smaller in width.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* 1a. Small, No Title */}
        <div className={"demoInstructor-Column small"}>
          <p className={"demoSubtitle"}>Small, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor jv-mInstructorSimple jv-mInstructorSmall mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a small Instructor for spaces 400px or smaller in width.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------
       2. MEDIUM
       ------------*/}
      {/* 2a. Medium */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column medium"}>
          <p className={"demoSubtitle"}>Medium</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a medium Instructor for spaces between 400 and 600px in width.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* 2a. Medium, No Title */}
        <div className={"demoInstructor-Column medium"}>
          <p className={"demoSubtitle"}>Medium, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor jv-mInstructorSimple mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a medium Instructor for spaces between 400 and 600px in width.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------
       3. LARGE
       ------------*/}
      {/* 3a. Large */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column large"}>
          <p className={"demoSubtitle"}>Large</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor jv-mInstructorLarge mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a large Instructor for spaces wider than 600px.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3b. Large, No Title */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column large"}>
          <p className={"demoSubtitle"}>Large, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <div className="jv-mInstructor jv-mInstructorSimple jv-mInstructorLarge mui">
              <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                <Typography className="jv-mInstructor-title mui">
                  Message Title
                </Typography>
                <Typography className="jv-mInstructor-text mui">
                  Here is an explanation of what you need to do to proceed. Use
                  a large Instructor for spaces wider than 600px.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Default.storyName = "Default";
