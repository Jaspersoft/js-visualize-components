import React from "react";
import "../../../.storybook/styles/storybook-jasper-ui.scss";
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
        <Box className={"jr-mListbox jr-uMargin-b-05 mui"}>
          <div className={"jr-mListbox-label mui"}>Default label</div>
          <Paper
            variant="outlined"
            square
            className={"jr-mListbox-content jr-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer20"}></div>

        <Box className={"jr-mListbox jr-uMargin-b-05 mui"}>
          <div className={"jr-mListbox-label jr-mListbox-labelSmall mui"}>
            Small label
          </div>
          <Paper
            variant="outlined"
            square
            className={"jr-mListbox-content jr-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer16"}></div>

        <p className="demoSubtitle-2">Error State</p>
        <Box className={"jr-mListbox jr-hasError jr-uMargin-b-05 mui"}>
          <div className={"jr-mListbox-label mui"}>Default label</div>
          <Icon className="jr-mIcon jr-mIconSmall jr-warningRound mui" />
          <Paper
            variant="outlined"
            square
            className={"jr-mListbox-content jr-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>

        <div className={"demoSpacer20"}></div>

        <Box className={"jr-mListbox jr-hasError jr-uMargin-b-05 mui"}>
          <div className={"jr-mListbox-label jr-mListbox-labelSmall mui"}>
            Small label
          </div>
          <Icon className="jr-mIcon jr-mIconSmall jr-warningRound mui" />
          <Paper
            variant="outlined"
            square
            className={"jr-mListbox-content jr-uPadding-01 mui"}
            elevation={0}
          ></Paper>
        </Box>
      </div>
    </>
  );
};
ListboxBasic.storyName = "Listbox";
