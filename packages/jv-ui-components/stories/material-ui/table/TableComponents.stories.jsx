import React, { useState } from "react";
import "../css/demoPages.css";
import "./table.css";
import {
  JVPaper,
  JVTable,
  JVTableContainer,
  JVTableHead,
  JVTableBody,
  JVTableCell,
  JVTableRow,
  JVTablePagination,
  JVTableSortLabel,
  JVCollapse,
  JVSwitch,
  JVIconButton,
} from "@jaspersoft/jv-ui-components";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT TABLE
 *
 *  2. DENSE TABLE
 *
 * ----------------------------
 *  last modified July 22, 2022
 * ---------------------------- */

export default {
  title: "Components/Table/Component",
};

/* ---------------------- */
/*  01. DEFAULT TABLE     */
/* ---------------------- */
export const table = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Table</h1>
      <div></div>
    </>
  );
};

/* -------------------- */
/*  02. DENSE TABLE     */
/* -------------------- */
export const denseTable = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Table - Dense</h1>
      <div></div>
    </>
  );
};
