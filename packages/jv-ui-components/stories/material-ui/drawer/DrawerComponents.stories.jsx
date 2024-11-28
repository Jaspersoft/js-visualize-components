import { JVButton, JVDrawer, JVTypography } from "../../../material-ui";
/*  ------------------------------  */
/*    Table of Contents             */
/*                                  */
/*    01. LEFT DRAWER               */
/*                                  */
/*    02. RIGHT DRAWER              */
/*                                  */
/*  ------------------------------  */
/*  last modified July 26, 2022     */
/*  ------------------------------  */

export default {
  component: JVDrawer,
  title: "Components/Drawer/Component",
};

/* ------------------- */
/* 01. LEFT DRAWER     */
/* ------------------- */
export const LeftDrawer = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Drawer - Left</h1>
      <JVDrawer
        anchor="left"
        open={true}
        classes={{ paper: "demoDrawerSide" }} /* for demo only */
      >
        <div className="jv-mDrawer-header mui">
          <JVTypography className="jv-mDrawer-header-title mui" variant="h2">
            Drawer Title
          </JVTypography>
        </div>

        <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
          <JVTypography paragraph style={{ width: "400px" }}>
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
          </JVTypography>
        </div>

        <div className="jv-mDrawer-footer mui">
          <JVButton
            color="primary"
            disableElevation
            size="large"
            variant="contained"
          >
            Primary action
          </JVButton>
          <JVButton disableElevation size="large" variant="contained">
            Secondary action
          </JVButton>
        </div>
      </JVDrawer>
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
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Drawer - Right</h1>
      <JVDrawer
        anchor="right"
        open={true}
        classes={{ paper: "demoDrawerSide" }} /* for demo only */
      >
        <div className="jv-mDrawer-header mui">
          <JVTypography className="jv-mDrawer-header-title mui" variant="h2">
            Drawer Title
          </JVTypography>
        </div>

        <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
          <JVTypography paragraph style={{ width: "400px" }}>
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
          </JVTypography>
        </div>

        <div className="jv-mDrawer-footer mui">
          <JVButton
            color="primary"
            disableElevation
            size="large"
            variant="contained"
          >
            Primary action
          </JVButton>
          <JVButton disableElevation size="large" variant="contained">
            Secondary action
          </JVButton>
        </div>
      </JVDrawer>
    </>
  );
};
RightDrawer.storyName = "Right Drawer";
