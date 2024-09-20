import { useState, useCallback } from "react";
import "../css/demoPages.css";
import "./panel.css";
import _ from "underscore";
import {
  JVTypography,
  JVCollapsiblePanel,
  JVIconButton,
  JVSubPanel,
  JVFlushPanel,
} from "@jaspersoft/jv-ui-components";
import { Snackbar } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. LEFT DEFAULT
 *
 *  2. RIGHT DEFAULT
 *
 *  3. LEFT FLUSH
 *
 *  4. RIGHT FLUSH
 *
 *  5. CLICK HANDLERS
 *
 * ----------------------------
 *  last modified Mar 28, 2023
 * ---------------------------- */

export default {
  component: JVCollapsiblePanel,
  title: "Components/Panel/Component",
};

const SubPanelContent = `We won't
    dispute that Guillaume Sorrieu's bouillabaisse, from L'Épuisette, in Marseille,
    is the best of the best, but where does that leave the home cook with no access
    to fresh seafood from the Mediterranean?
`;

const panels = [
  {
    width: 350,
    id: "visualizationFormatType",
    subPanels: [
      {
        label: "Visualization Type",
        id: "visualizationType",
        height: 120,
        scrollPos: 1000,
        slots: {
          headerAction: (
            <JVIconButton
              data-name="visualizationType-menu"
              icon="kebab"
              variant="contained"
              color="default"
            />
          ),
        },
        content: (
          <JVTypography variant="body2" color="textSecondary" paragraph>
            {new Array(100).fill(SubPanelContent)}
          </JVTypography>
        ),
      },
    ],
  },
];

/* -------------------------- */
/*  1. LEFT DEFAULT PANEL     */
/* -------------------------- */
export const LeftPanel = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onResize = useCallback(
    _.debounce((...args) => {
      setMessage("onResize " + JSON.stringify(args));
      setOpen(true);
    }, 0),
    [],
  );

  const onResizeStart = useCallback(
    _.debounce((...args) => {
      setMessage("onResizeStart " + JSON.stringify(args));
      setOpen(true);
    }, 0),
    [],
  );

  const onResizeStop = useCallback(
    _.debounce((...args) => {
      setMessage("onResizeStop " + JSON.stringify(args));
      setOpen(true);
    }, 0),
    [],
  );

  const onExpansionStateChanged = useCallback(
    _.debounce((...args) => {
      setMessage("onExpansionStateChanged " + JSON.stringify(args));
      setOpen(true);
    }, 0),
    [],
  );

  const onScrollStateChanged = useCallback(
    _.debounce((...args) => {
      const state = "onScrollStateChanged " + JSON.stringify(args);
      console.log(state);

      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const wrapperProps = {
    style: { display: "flex" },
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Panel - Default Left</h1>
      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        <JVCollapsiblePanel
          anchor="left"
          panels={panels}
          onScroll={onScrollStateChanged}
          onResize={onResize}
          onResizeStart={onResizeStart}
          onResizeStop={onResizeStop}
          onExpansionStateChanged={onExpansionStateChanged}
          wrapperProps={wrapperProps}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={handleCloseSnackbar}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
        {/* This is the main content */}
        <div className={"demoPanel-canvasLeft"}>
          <main>
            {/* <JVTypography variant="body3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </JVTypography>
                        <JVTypography variant="body3">
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </JVTypography>*/}
          </main>
        </div>
      </div>
    </>
  );
};

LeftPanel.storyName = "Default Left Panel";

/* --------------------------- */
/*  2. RIGHT DEFAULT PANEL     */
/* --------------------------- */
export const RightPanel = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const getMaxWidth = useCallback(() => {
    return window.innerWidth - 500;
  }, []);

  const onResize = useCallback(
    _.debounce((...args) => {
      const state = "onResize " + JSON.stringify(args);
      console.log(state);
      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const onResizeStart = useCallback(
    _.debounce((...args) => {
      const state = "onResizeStart " + JSON.stringify(args);
      console.log(state);

      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const onResizeStop = useCallback(
    _.debounce((...args) => {
      const state = "onResizeStop " + JSON.stringify(args);
      console.log(state);

      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const onExpansionStateChanged = useCallback(
    _.debounce((...args) => {
      const state = "onExpansionStateChanged " + JSON.stringify(args);
      console.log(state);

      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const onScrollStateChanged = useCallback(
    _.debounce((...args) => {
      const state = "onScrollStateChanged " + JSON.stringify(args);
      console.log(state);

      setMessage(state);
      setOpen(true);
    }, 0),
    [],
  );

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const wrapperProps = {
    "data-name": "CollapsiblePanel",
    style: { display: "flex" },
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Panel - Default Right</h1>
      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={handleCloseSnackbar}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
        {/* This is the main content */}
        <div className={"demoPanel-canvasRight"}>
          <main>
            {/*<JVTypography variant="body3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </JVTypography>
                        <JVTypography variant="body3">
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </JVTypography>*/}
          </main>
        </div>

        <JVCollapsiblePanel
          maxWidth={getMaxWidth}
          anchor="right"
          panels={panels}
          onScroll={onScrollStateChanged}
          onResize={onResize}
          onResizeStart={onResizeStart}
          onResizeStop={onResizeStop}
          onExpansionStateChanged={onExpansionStateChanged}
          wrapperProps={wrapperProps}
        />
      </div>
    </>
  );
};

RightPanel.storyName = "Default Right Panel";

/* ------------------------ */
/*  3. LEFT FLUSH PANEL     */
/* ------------------------ */
export const LeftFlush = () => {
  const wrapperProps = {
    "data-name": "CollapsiblePanel",
    style: { display: "flex" },
  };
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Panel - Flush Left</h1>
      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        <JVFlushPanel
          anchor="left"
          panels={panels}
          wrapperProps={wrapperProps}
        />
        <div className={"demoPanel-canvasRight"}>
          <main>
            <JVTypography variant="body3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </JVTypography>
            <JVTypography variant="body3">
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </JVTypography>
          </main>
        </div>
      </div>
    </>
  );
};
LeftFlush.storyName = "Flush Left Panel";

/* ------------------------- */
/*  4. RIGHT FLUSH PANEL     */
/* ------------------------- */
export const RightFlush = () => {
  const wrapperProps = {
    "data-name": "CollapsiblePanel",
    style: { display: "flex" },
  };
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Panel - Flush Right</h1>
      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        <div className={"demoPanel-canvasRight"}>
          <main>
            <JVTypography variant="body3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </JVTypography>
            <JVTypography variant="body3">
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </JVTypography>
          </main>
        </div>
        <JVFlushPanel
          wrapperProps={wrapperProps}
          anchor="right"
          panels={panels}
        />
      </div>
    </>
  );
};

RightFlush.storyName = "Flush Right Panel";

/* ---------------------- */
/*  5. CLICK HANDLERS     */
/* ---------------------- */
const clickStoryPanels = [
  {
    id: "panel1",
    subPanels: [
      {
        label: "SubPanel 1",
        id: "subPanel11",
        content: (
          <JVTypography variant="body2" color="textSecondary" paragraph>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </JVTypography>
        ),
      },
      {
        label: "SubPanel 2",
        id: "subPanel12",
        content: (
          <JVTypography variant="body2" color="textSecondary" paragraph>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </JVTypography>
        ),
      },
    ],
  },
];

export const OnClick = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onExpand = useCallback(({ id, type }) => {
    console.log("expand", id, type);
    if (id === "panel1") {
      setMessage("Block expanding");
      setOpen(true);
      return false;
    }
  }, []);

  const onCollapse = useCallback(({ id, type }) => {
    console.log("collapse", id, type);
    if (id === "subPanel11") {
      setMessage("Block collapsing");
      setOpen(true);

      return false;
    }
  }, []);

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const wrapperProps = {
    "data-name": "CollapsiblePanel",
    style: { display: "flex" },
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Panel - Click Handlers</h1>
      <div style={{ display: "flex", height: "calc(100vh - 140px)" }}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          onClose={handleCloseSnackbar}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
        {/* This is the main content */}
        <div className={"demoPanel-canvasClick"}>
          <main>
            {/*<JVTypography variant="body3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </JVTypography>
                        <JVTypography variant="body3">
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </JVTypography>*/}
          </main>
        </div>

        <JVCollapsiblePanel
          anchor="right"
          panels={clickStoryPanels}
          onExpandClick={onExpand}
          onCollapseClick={onCollapse}
          wrapperProps={wrapperProps}
        />
      </div>
    </>
  );
};

OnClick.storyName = "Panel Click Handlers";
