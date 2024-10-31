/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import "../css/demoPages.css";
import { Skeleton, Stack, Box } from "@mui/material";

export default {
  component: Skeleton,
  title: "Components/Skeleton/Design",
};

export const DefaultSkeleton = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Skeleton</h1>

      <div className="demoWrapper demoSkeleton">
        <div className="demoSize">
          <div className={"demoSubtitle"}>Variants</div>
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        </div>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Animations</div>
          <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </div>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Color</div>
          <Box
            sx={{
              bgcolor: "#121212",
              p: 8,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={118}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

DefaultSkeleton.storyName = "Skeleton";
