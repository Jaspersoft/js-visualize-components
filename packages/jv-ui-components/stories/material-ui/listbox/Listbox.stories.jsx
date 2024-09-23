import "../css/demoPages.css";
import "./listbox.css";
import { Box, Icon, Paper } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC LISTBOX
 *
 * -------------------------------
 *  last modified Sep 20, 2023
 * ------------------------------- */

export default {
  title: "Components/Listbox/Design",
};

/* -------------------- */
/*  1. BASIC LISTBOX    */
/* -------------------- */
export const ListboxBasic = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Listbox</h1>

      <div className={"demoWrapper demoListbox"}>
        <p className="demoSubtitle">Basic Listbox</p>
        <p className="demoSubtitle-2">Sizes</p>
        <Box className={"jv-mListbox jv-uMargin-b-05 mui"}>
          <div className={"jv-mListbox-label mui"}>Default label</div>
          <Paper
            variant="outlined"
            square
            className={"jv-mListbox-content jv-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer20"}></div>

        <Box className={"jv-mListbox jv-uMargin-b-05 mui"}>
          <div className={"jv-mListbox-label jv-mListbox-labelSmall mui"}>
            Small label
          </div>
          <Paper
            variant="outlined"
            square
            className={"jv-mListbox-content jv-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer16"}></div>

        <p className="demoSubtitle-2">Error State</p>
        <Box className={"jv-mListbox jv-hasError jv-uMargin-b-05 mui"}>
          <div className={"jv-mListbox-label mui"}>Default label</div>
          <Icon className="jv-mIcon jv-mIconSmall jv-warningRound mui" />
          <Paper
            variant="outlined"
            square
            className={"jv-mListbox-content jv-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer20"}></div>

        <Box className={"jv-mListbox jv-hasError jv-uMargin-b-05 mui"}>
          <div className={"jv-mListbox-label jv-mListbox-labelSmall mui"}>
            Small label
          </div>
          <Icon className="jv-mIcon jv-mIconSmall jv-warningRound mui" />
          <Paper
            variant="outlined"
            square
            className={"jv-mListbox-content jv-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>
      </div>
    </>
  );
};
ListboxBasic.storyName = "Listbox";
