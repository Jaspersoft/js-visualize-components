import "../css/demoPages.css";
import "./badge.css";
import { JVBadge, JVTypography } from "@jaspersoft/jv-ui-components";
import MailIcon from "@mui/icons-material/Mail";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC BADGE
 *
 *   2. DOT BADGE
 *
 * -------------------------------
 *  last modified Nov 2, 2022
 * ------------------------------- */

export default {
  component: JVBadge,
  title: "Components/Badge/Component",
};

/* ----------------- */
/*  1. BASIC BADGE   */
/* ----------------- */
export const Basicbadge = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Badge</h1>

      <div className={"demoWrapper"}>
        <div>
          <JVBadge badgeContent={4} color="primary">
            <MailIcon />
          </JVBadge>
          <JVBadge badgeContent={4} color="secondary">
            <MailIcon />
          </JVBadge>
          <JVBadge badgeContent={4} color="error">
            <MailIcon />
          </JVBadge>
        </div>
      </div>
    </>
  );
};
Basicbadge.storyName = "Basic";

/* ----------------- */
/*  2. DOT BADGE     */
/* ----------------- */
export const Dotbadge = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Badge - Dot</h1>

      <div className={"demoWrapper"}>
        <div>
          <JVBadge color="secondary" variant="dot">
            <MailIcon />
          </JVBadge>
          <JVBadge color="secondary" variant="dot">
            <JVTypography>Typography</JVTypography>
          </JVBadge>
        </div>
      </div>
    </>
  );
};
Dotbadge.storyName = "Dot";
