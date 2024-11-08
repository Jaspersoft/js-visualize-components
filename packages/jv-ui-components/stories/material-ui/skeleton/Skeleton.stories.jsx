/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import "../css/demoPages.css";
import { Skeleton, Stack, Box } from "@mui/material";

/*-----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. CHART SKELETON
 *
 *  2. TABLE SKELETON
 *
 * -----------------------------
 *  last modified Nov 7, 2024
 * ----------------------------- */

export default {
  component: Skeleton,
  title: "Components/Skeleton/Design",
};

/* ---------------------- */
/*  1. CHART SKELETON     */
/* ---------------------- */
export const SkeletonChart = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Skeleton - Chart</h1>

      <div className="demoWrapper demoSkeleton">
        <div className="demoSize">
          {/* set desired dimensions on jv-mSkeleton */}
          <Box
            className="jv-mSkeleton jv-mSkeletonChart mui"
            sx={{ height: 400, width: 800 }}
          >
            <Box className="jv-mSkeleton-bars mui">
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
              />
            </Box>

            <Box className="jv-mSkeleton-background mui">
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
                animation={false}
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
                animation={false}
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
                animation={false}
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
                animation={false}
              />
              <Skeleton
                className="jv-mSkeleton-bars-bar mui"
                variant="rectangular"
                animation={false}
              />
            </Box>

            <Box className="jv-mSkeleton-grid mui">
              <Skeleton
                className="jv-mSkeleton-grid-line mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-grid-line mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-grid-line mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-grid-line mui"
                variant="rectangular"
              />
              <Skeleton
                className="jv-mSkeleton-grid-line mui"
                variant="rectangular"
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};
SkeletonChart.storyName = "Skeleton - Chart";

/* ---------------------- */
/*  2. TABLE SKELETON     */
/* ---------------------- */
export const SkeletonTable = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Skeleton - Table</h1>

      <div className="demoWrapper demoSkeleton">
        <div className="demoSize">
          <Box sx={{ width: 800 }}>
            {/* table skeleton must go inside a container that has an defined width */}
            <Skeleton
              className="jv-mSkeleton jv-mSkeletonTable mui"
              component="table"
              variant="rectangular"
            >
              <Skeleton
                className="jv-mSkeleton-header-row mui"
                component="tr"
                variant="rectangular"
              >
                <Skeleton
                  className="jv-mSkeleton-header-cell mui"
                  component="th"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-header-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-header-cell mui"
                  component="th"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-header-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-header-cell mui"
                  component="th"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-header-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-header-cell mui"
                  component="th"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-header-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-header-cell mui"
                  component="th"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-header-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>

              {/* YOU CAN ADD AS MANY ROWS TO THE BODY AS YOU WANT */}
              {/* odd rows have animation=false */}
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
                animation={false}
              >
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
              >
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>

              {/* odd rows have animation=false */}
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
                animation={false}
              >
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
              >
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>

              {/* odd rows have animation=false */}
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
                animation={false}
              >
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
              >
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>

              {/* odd rows have animation=false */}
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
                animation={false}
              >
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  animation={false}
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>
              <Skeleton
                className="jv-mSkeleton-body-row mui"
                component="tr"
                variant="rectangular"
              >
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
                <Skeleton
                  className="jv-mSkeleton-body-cell mui"
                  component="td"
                  variant="rectangular"
                >
                  <Skeleton
                    className="jv-mSkeleton-body-cell-content mui"
                    component="span"
                    variant="rectangular"
                  />
                </Skeleton>
              </Skeleton>
            </Skeleton>
          </Box>
        </div>
      </div>
    </>
  );
};
SkeletonTable.storyName = "Skeleton - Table";
