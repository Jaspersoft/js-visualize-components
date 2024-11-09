/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import "../css/demoPages.css";
import "./skeleton.css";
import { Skeleton, Stack, Box } from "@mui/material";

/*-----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. CHART SKELETON
 *
 *  2. TABLE SKELETON
 *
 *  3. INPUT SKELETONS
 *     3a. Text Input
 *     3b. Textarea
 *     3c. Switch
 *     3d. Checkbox
 *     3e. Checkbox Group
 *     3f. Radio Button
 *     3g. Radio Button Group
 *
 * -----------------------------
 *  last modified Nov 8, 2024
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
    </>
  );
};
SkeletonTable.storyName = "Skeleton - Table";

/* ----------------------- */
/*  3. INPUT SKELETONS     */
/* ----------------------- */
export const SkeletonInputs = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Skeleton - Inputs</h1>

      <div className="demoWrapper demoSkeleton">
        <div className="demoSize">
          {/* 3a. Text Input Skeleton */}
          <p className={"demoSubtitle"}>Text</p>
          <Box className="jv-mSkeleton jv-mSkeletonTextinput mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Skeleton
              className="jv-mSkeleton-input mui"
              variant="rectangular"
            />
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3b. Text Input Skeleton */}
          <p className={"demoSubtitle"}>Textarea</p>
          <Box className="jv-mSkeleton jv-mSkeletonTextarea mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Skeleton
              className="jv-mSkeleton-input mui"
              variant="rectangular"
            />
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3c. Switch Input Skeleton */}
          <p className={"demoSubtitle"}>Switch</p>
          <Box className="jv-mSkeleton jv-mSkeletonSwitch mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Skeleton
              className="jv-mSkeleton-input mui"
              variant="rectangular"
            />
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3d. Checkbox Input Skeleton */}
          <p className={"demoSubtitle"}>Checkbox</p>
          <Box className="jv-mSkeleton jv-mSkeletonCheckbox mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Skeleton
              className="jv-mSkeleton-input mui"
              variant="rectangular"
            />
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3e. Checkbox Group Skeleton */}
          <p className={"demoSubtitle"}>Checkbox Group</p>
          <Box className="jv-mSkeleton jv-mSkeletonCheckboxes mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Box className="jv-mSkeleton jv-mSkeletonCheckbox mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton
                className="jv-mSkeleton-input mui"
                variant="rectangular"
              />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonCheckbox mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton
                className="jv-mSkeleton-input mui"
                variant="rectangular"
              />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonCheckbox mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton
                className="jv-mSkeleton-input mui"
                variant="rectangular"
              />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonCheckbox mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton
                className="jv-mSkeleton-input mui"
                variant="rectangular"
              />
            </Box>
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3f. Radio Button Skeleton */}
          <p className={"demoSubtitle"}>Radio</p>
          <Box className="jv-mSkeleton jv-mSkeletonRadio mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Skeleton className="jv-mSkeleton-input mui" variant="circular" />
          </Box>

          <div className="demoSpacer48"></div>

          {/* 3g. Radio Button Group Skeleton */}
          <p className={"demoSubtitle"}>Radio Button Group</p>
          <Box className="jv-mSkeleton jv-mSkeletonRadios mui">
            <Skeleton className="jv-mSkeleton-label mui" />
            <Box className="jv-mSkeleton jv-mSkeletonRadio mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton className="jv-mSkeleton-input mui" variant="circular" />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonRadio mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton className="jv-mSkeleton-input mui" variant="circular" />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonRadio mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton className="jv-mSkeleton-input mui" variant="circular" />
            </Box>
            <Box className="jv-mSkeleton jv-mSkeletonRadio mui">
              <Skeleton className="jv-mSkeleton-label mui" />
              <Skeleton className="jv-mSkeleton-input mui" variant="circular" />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};
SkeletonInputs.storyName = "Skeleton - Inputs";
