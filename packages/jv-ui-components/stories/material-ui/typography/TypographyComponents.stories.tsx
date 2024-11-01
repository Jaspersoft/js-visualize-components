import React from "react";
import "./typography.css";
import { JVTypography, JVLink } from "../../../material-ui";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. HEADER TEXT (FOR H1-H6)
 *
 *   2. TITLE TEXT (FOR ANY HTML ELEMENT)
 *
 *   3. BODY TEXT
 *
 *   4. LINK TEXT
 *
/* -------------------------------
 *  last modified July 22, 2022
 * ------------------------------- */

export default {
  component: JVTypography,
  title: "Components/Typography/Component",
};

export const General = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Typography</h1>

      {/* -------------------------------
                 1. HEADER TEXT (For h1-h6)
                ------------------------------- */}
      <div className={"demoWrapper demoTypography"}>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Header Text</div>
          <div className={"demoSize-description"}>For h1-h6 elements only</div>
          <JVTypography variant="h1">h1. Heading (24px)</JVTypography>
          <JVTypography variant="h2">h2. Heading (20px)</JVTypography>
          <JVTypography variant="h3">h3. Heading (18px)</JVTypography>
          <JVTypography variant="h4">h4. Heading (16px)</JVTypography>
          <JVTypography variant="h5">h5. Heading (14px)</JVTypography>
          <JVTypography variant="h6">h6. Heading (semibold, 13px)</JVTypography>
        </div>

        {/* --------------------------------------
                 2. TITLE TEXT (For any HTML element)
                -------------------------------------- */}
        {/*<div className="demoSize"></div>*/}

        {/* ----------------
                 3. BODY TEXT
                ---------------- */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Body Text</div>
          <div className={"demoSize-description"}>
            For paragraph element only
          </div>
          <JVTypography variant="body2">
            body2 (12px) - Smallest body text that is used in small spaces such
            as Properties panels. In Material UI this is the 'body2' variant.
          </JVTypography>
          <JVTypography variant="body1">
            body1 (13px) - Standard body text that is used in most places. In
            Material UI this is the 'body1' variant.
          </JVTypography>
          <JVTypography variant="body3">
            Large (14px) - Serve all your users and customers from a single
            instance, making it much easier for administrators to manage
            distribution and access to content and data.
          </JVTypography>
          <JVTypography variant="body4">
            Extra Large (16px) - Serve all your users and customers from a
            single instance, making it much easier for administrators to manage
            distribution and access to content and data.
          </JVTypography>
        </div>
      </div>
    </>
  );
};

export const TextLink = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Typography – Link Text</h1>

      {/* ----------------
                 4. LINK TEXT
                ---------------- */}
      <div className={"demoWrapper demoTypography"}>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small Body Text (12px)</div>
          {/* always underlined */}
          <JVTypography variant="body2">
            <JVLink href="#" underline="always">
              Always underlined
            </JVLink>
          </JVTypography>
          <JVTypography variant="body2">
            <JVLink href="#" underline="hover">
              Underlined on hover
            </JVLink>
          </JVTypography>

          <div className={"demoSpacer12"}> </div>

          {/* underlined on hover */}
          <JVTypography variant="body2">
            <JVLink color="theme" href="#" underline="always">
              Always underlined - theme color
            </JVLink>
          </JVTypography>
          <JVTypography variant="body2">
            <JVLink color="theme" href="#" underline="hover">
              Underlined on hover - theme color
            </JVLink>
          </JVTypography>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Default Body Text (13px)</div>
          {/* always underlined */}
          <JVTypography variant="body1">
            <JVLink href="#" underline="always">
              Always underlined
            </JVLink>
          </JVTypography>
          <JVTypography variant="body1">
            <JVLink href="#" underline="hover">
              Underlined on hover
            </JVLink>
          </JVTypography>

          <div className={"demoSpacer12"}> </div>

          {/* underlined on hover */}
          <JVTypography variant="body1">
            <JVLink color="theme" href="#" underline="always">
              Always underlined - theme color
            </JVLink>
          </JVTypography>
          <JVTypography variant="body1">
            <JVLink color="theme" href="#" underline="hover">
              Underlined on hover - theme color
            </JVLink>
          </JVTypography>
        </div>
      </div>
    </>
  );
};
TextLink.storyName = "Link";
