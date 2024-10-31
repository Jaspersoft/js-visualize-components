/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import "../css/demoPages.css";
import { JVBox, JVSkeleton, JVStack } from "../../../material-ui";

export default {
  component: JVSkeleton,
  title: "Components/Skeleton/Component",
};

export const DefaultSkeleton = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Skeleton</h1>

      <div className="demoWrapper demoSkeleton">
        <div className="demoSize">
          <div className={"demoSubtitle"}>Variants</div>
          <JVStack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <JVSkeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <JVSkeleton variant="circular" width={40} height={40} />
            <JVSkeleton variant="rectangular" width={210} height={60} />
            <JVSkeleton variant="rounded" width={210} height={60} />
          </JVStack>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Animations</div>
          <JVBox sx={{ width: 300 }}>
            <JVSkeleton />
            <JVSkeleton animation="wave" />
            <JVSkeleton animation={false} />
          </JVBox>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Color</div>
          <JVBox
            sx={{
              bgcolor: "#121212",
              p: 8,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <JVSkeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={118}
            />
          </JVBox>
        </div>
      </div>
    </>
  );
};
DefaultSkeleton.storyName = "Skeleton";
