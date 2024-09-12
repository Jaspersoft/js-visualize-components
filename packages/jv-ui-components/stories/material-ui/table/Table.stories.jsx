import React from "react";
import "../css/demoPages.css";
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT TABLE
 *
 *  2. DENSE TABLE
 *
 * ----------------------------
 *  last modified July 19, 2022
 * ---------------------------- */

export default {
  title: "Components/Table/Design",
};

function createData(name, description, type, modified, protein) {
  return { name, description, type, modified, protein };
}

const rows = [
  createData(
    "01. Geographic Results by Segment Report",
    "",
    "Report Unit",
    "Oct 17, 2019 4:19 PM",
    4.0,
  ),
  createData(
    "02. Sales Mix by City Report",
    "",
    "Report Unit",
    "Aug 28, 2019 5:32 PM",
    4.3,
  ),
  createData(
    "03. Store Segment Performance Report",
    "",
    "Report Unit",
    "Oct 11, 2019 6:24 PM",
    6.0,
  ),
  createData(
    "04. Product Results by Store Type Report",
    "",
    "Report Unit",
    "Aug 28, 2019 5:55 PM",
    4.3,
  ),
  createData(
    "05. Accounts Report",
    "",
    "Report Unit",
    "Sep 20, 2021 2:01 AM",
    3.9,
  ),
];

/* ---------------------- */
/*  01. DEFAULT TABLE     */
/* ---------------------- */
export const table = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Table</h1>
      <div>
        <TableContainer component={"div"}>
          <Table
            className="jv-mTable mui"
            style={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className="jv-mTable-row jv-mTable-rowHeader mui">
                <TableCell className="jv-mTable-cell mui"></TableCell>
                <TableCell className="jv-mTable-cell mui">File name</TableCell>
                {/*<TableCell className="jv-mTable-cell mui">Description</TableCell>*/}
                <TableCell className="jv-mTable-cell mui">Type</TableCell>
                <TableCell className="jv-mTable-cell mui" align="right">
                  Last modified
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow className="jv-mTable-row mui" key={row.name}>
                  <TableCell className="jv-mTable-cell jv-mTable-cellFiletype mui">
                    <div className="jv-mTable-cell-icon jv-mTable-cell-iconGeneral mui"></div>
                  </TableCell>
                  <TableCell
                    className="jv-mTable-cell mui"
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  {/* <TableCell className="jv-mTable-cell mui">{row.description}</TableCell>*/}
                  <TableCell className="jv-mTable-cell mui">
                    {row.type}
                  </TableCell>
                  <TableCell className="jv-mTable-cell mui" align="right">
                    {row.modified}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

/* -------------------- */
/*  02. DENSE TABLE     */
/* -------------------- */
export const denseTable = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Table - Dense</h1>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow className="jv-mTable-row jv-mTable-rowHeader mui">
                <TableCell className="jv-mTable-cell mui">
                  Dessert (100g serving)
                </TableCell>
                <TableCell className="jv-mTable-cell mui" align="right">
                  Calories
                </TableCell>
                <TableCell className="jv-mTable-cell mui" align="right">
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell className="jv-mTable-cell mui" align="right">
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell className="jv-mTable-cell mui" align="right">
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell className="jv-mTable-cell mui" align="right">
                    {row.calories}
                  </TableCell>
                  <TableCell className="jv-mTable-cell mui" align="right">
                    {row.fat}
                  </TableCell>
                  <TableCell className="jv-mTable-cell mui" align="right">
                    {row.carbs}
                  </TableCell>
                  <TableCell className="jv-mTable-cell mui" align="right">
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
