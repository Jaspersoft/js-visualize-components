import "../css/demoPages.css";
import "./badge.css";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, Typography } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC BADGE
 *
 *   2. DOT BADGE
 *
 * -------------------------------
 *  last modified Oct 24, 2022
 * ------------------------------- */

export default {
  component: Badge,
  title: "Components/Badge/Design",
};

/* ----------------- */
/*  1. BASIC BADGE   */
/* ----------------- */
export const BasicBadge = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Badge</h1>

      <div className={"demoWrapper"}>
        <div>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </div>
      </div>
    </>
  );
};
BasicBadge.storyName = "Basic";

/* ----------------- */
/*  2. DOT BADGE     */
/* ----------------- */
export const Dotbadge = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Badge – Dot</h1>

      <div className={"demoWrapper"}>
        <div>
          <Badge color="secondary" variant="dot">
            <MailIcon />
          </Badge>
          <Badge color="secondary" variant="dot">
            <Typography>Typography</Typography>
          </Badge>
        </div>
      </div>
    </>
  );
};
Dotbadge.storyName = "Dot";
