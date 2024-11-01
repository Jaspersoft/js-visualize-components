import "../inputs/inputs.css";
import "./instructor.css";
import { JVInstructor, JVTextField } from "../../../material-ui";

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
 * -----------------------------
 *  last modified Mar 14, 2024
 * ----------------------------- */

export default {
  component: JVTextField,
  title: "Components/Instructor/Component",
};

{
  /* INSTRUCTOR */
}
export const Default = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Instructor</h1>

      {/* ------------
       1. SMALL
       ------------*/}
      {/* 1a. Small */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column small"}>
          <p className={"demoSubtitle"}>Small</p>
          <div className={"demoInstructorWrapper"}>
            <JVInstructor
              size="small"
              messageDescription="Here is an explanation of what you need to do to proceed. Use a small Instructor for spaces 400px or smaller in width."
              messageTitle="Message Title"
            />
          </div>
        </div>

        {/* 1a. Small, No Title */}
        <div className={"demoInstructor-Column small"}>
          <p className={"demoSubtitle"}>Small, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <JVInstructor
              size="small"
              messageDescription="Here is an explanation of what you need to do to proceed. Use a small Instructor for spaces 400px or smaller in width."
            />
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
            <JVInstructor
              messageDescription="Here is an explanation of what you need to do to proceed. Use a medium Instructor for spaces between 400 and 600px in width."
              messageTitle="Message Title"
            />
          </div>
        </div>

        {/* 2a. Medium, No Title */}
        <div className={"demoInstructor-Column medium"}>
          <p className={"demoSubtitle"}>Medium, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <JVInstructor messageDescription="Here is an explanation of what you need to do to proceed. Use a medium Instructor for spaces between 400 and 600px in width." />
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
            <JVInstructor
              size="large"
              messageDescription="Here is an explanation of what you need to do to proceed. Use a large Instructor for spaces wider than 600px."
              messageTitle="Message Title"
            />
          </div>
        </div>
      </div>

      {/* 3b. Large, No Title */}
      <div className={"demoInstructor-Row"}>
        <div className={"demoInstructor-Column large"}>
          <p className={"demoSubtitle"}>Large, No Title</p>
          <div className={"demoInstructorWrapper"}>
            <JVInstructor
              size="large"
              messageDescription="Here is an explanation of what you need to do to proceed. Use a large Instructor for spaces wider than 600px."
            />
          </div>
        </div>
      </div>
    </>
  );
};
Default.storyName = "Default";
