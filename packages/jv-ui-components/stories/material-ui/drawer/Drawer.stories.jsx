import { Button, Drawer, IconButton, Typography } from "@mui/material";
import "./drawer.css";

/*  ------------------------------ */
/*    Table of Contents            */
/*                                 */
/*    01. LEFT DRAWER              */
/*                                 */
/*    02. RIGHT DRAWER             */
/*                                 */
/*  ------------------------------ */
/*  last modified Aug 5 2024      */
/*  ------------------------------ */

export default {
  component: Drawer,
  title: "Components/Drawer/Design",
};

/* ------------------- */
/* 01. LEFT DRAWER     */
/* ------------------- */
export const LeftDrawer = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Drawer - Left</h1>
      <Drawer
        anchor="left"
        className={"jv-mDrawer mui"}
        classes={{ paper: "demoDrawerSide" }} /* for demo only */
        elevation={4}
        open={true}
      >
        <div className="jv-mDrawer-header mui">
          <Typography className="jv-mDrawer-header-title mui" variant="h2">
            Drawer Title
          </Typography>
        </div>

        <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
          <Typography paragraph style={{ width: "400px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </div>

        <div className="jv-mDrawer-footer mui">
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary action</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary action</span>
          </Button>
        </div>
      </Drawer>
    </>
  );
};
LeftDrawer.storyName = "Left Drawer";

/* -------------------- */
/* 02. RIGHT DRAWER     */
/* -------------------- */
export const RightDrawer = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Drawer - Right</h1>
      <Drawer
        anchor="right"
        className={"jv-mDrawer mui"}
        classes={{ paper: "demoDrawerSide" }} /* for demo only */
        elevation={4}
        open={true}
      >
        <div className="jv-mDrawer-header mui">
          <Typography className="jv-mDrawer-header-title mui" variant="h2">
            Drawer Title
          </Typography>
          {/* optional close button */}
          <IconButton
            aria-label="close section"
            className={"jv-mButton jv-mButtonLarge jv-MuiButton-contained mui"}
            size="large"
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-searchClear"></span>
          </IconButton>
        </div>

        <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
          <Typography paragraph style={{ width: "400px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </div>

        <div className="jv-mDrawer-footer mui">
          <Button
            classes={{ label: "jv-mButton-label mui" }}
            className="jv-mButton jv-mButtonSmall jv-mButtonPrimary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Primary action</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Secondary action</span>
          </Button>
        </div>
      </Drawer>
    </>
  );
};
RightDrawer.storyName = "Right Drawer";
