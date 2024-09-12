import React from "react";
import "../../../.storybook/styles/storybook-jasper-ui.scss";
import "../css/demoPages.css";
import "./listbox.css";
import { Box, Paper } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. Basic
 *
 * -------------------------------
 *  last modified May 3, 2023
 * ------------------------------- */

export default {
  title: "Components/Listbox/Component",
};

/* -------------------- */
/*  1. BASIC LISTBOX    */
/* -------------------- */
export const Listbox = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Listbox</h1>

      <div className={"demoWrapper demoListbox"}>components go here</div>
    </>
  );
};
Listbox.storyName = "Listbox";
