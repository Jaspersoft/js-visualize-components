import React from "react";
import "../css/demoPages.css";
import "./token.css";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC TOKEN
 *
 *   2. Xxxxx
 *
 * -------------------------------
 *  last modified May 8, 2023
 * ------------------------------- */

export default {
  title: "Components/Token/Component",
};

/* ----------------- */
/*  1. BASIC TOKEN   */
/* ----------------- */
export const Token = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Token</h1>
    </>
  );
};
Token.storyName = "Token";
