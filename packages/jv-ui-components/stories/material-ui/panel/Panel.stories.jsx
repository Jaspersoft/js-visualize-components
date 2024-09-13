import { useState } from "react";
import "../css/demoPages.css";
import "./panel.css";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

/*-----------------------------
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
 *  5. PANEL SECTION
 *
 * -----------------------------
 *  last modified Aug 5, 2024
 * ----------------------------- */

export default {
  component: Drawer,
  title: "Components/Panel/Design",
};

/* -------------------------- */
/*  1. LEFT DEFAULT PANEL     */
/* -------------------------- */
export const LeftAlign = () => {
  const [panelOpen1, setPanelOpen1] = useState(true);
  const [panelOpen2, setPanelOpen2] = useState(true);

  const handlePanelOpen1 = () => {
    setPanelOpen1(true);
  };

  const handlePanelClose1 = () => {
    setPanelOpen1(false);
  };

  const handlePanelOpen2 = () => {
    setPanelOpen2(true);
  };

  const handlePanelClose2 = () => {
    setPanelOpen2(false);
  };

  const drawerPaperStyles = {};

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Panel - Default Left</h1>
      <div className={"demoWrapper demoPanel"}>
        {/* This is Panel component */}
        <div style={{ display: "flex" }} aria-describedby="panel container">
          {/* Here collapsed panel names appears */}
          <div className="jv-mPanels jv-mPanelsLeft jv-mPanelsMinimized mui">
            <div className="jv-mPanel jv-mPanelLeft jv-mPanelMinimized mui">
              <div className="jv-mPanel-action mui">
                <IconButton
                  onClick={handlePanelOpen1}
                  aria-label="open panel"
                  className={
                    "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                  }
                >
                  <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                </IconButton>
              </div>

              <List
                disablePadding
                className="jv-mPanel-sections mui"
                onClick={handlePanelOpen1}
              >
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Fields</span>
                  </Button>
                </ListItem>
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Measures</span>
                  </Button>
                </ListItem>
              </List>
            </div>

            <div className="jv-mPanel jv-mPanelLeft jv-mPanelMinimized mui">
              <div className="jv-mPanel-action mui">
                <IconButton
                  onClick={handlePanelOpen1}
                  aria-label="open panel"
                  className={
                    "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                  }
                >
                  <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                </IconButton>
              </div>

              <List
                disablePadding
                className="jv-mPanel-sections mui"
                onClick={handlePanelOpen2}
              >
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Test 1</span>
                  </Button>
                </ListItem>
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Test 2</span>
                  </Button>
                </ListItem>
              </List>
            </div>
          </div>

          {/* Here two panels appear when they are expanded */}
          <div className="jv-mPanels jv-mPanelsLeft mui">
            {panelOpen1 && (
              <Drawer
                className="jv-mPanel jv-mPanelLeft mui"
                variant="persistent"
                anchor="left"
                open={panelOpen1}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-action mui">
                  {/* will need to create new icon for this button */}
                  <IconButton
                    onClick={handlePanelClose1}
                    aria-label="close panel"
                    className={
                      "jv-mPanel-action-button  jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                  </IconButton>
                </div>

                {/* List for Sub-panels */}
                <List disablePadding className="jv-mPanel-sections mui">
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="close section"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-cancel"></span>
                          </IconButton>
                        }
                        title="Fields"
                        disableTypography
                      />
                      <CardContent className="jv-mPanel-section-body mui">
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Filters can be defined at three levels: 1) in the
                          Domain Designer, 2) in the Data Chooser when creating
                          a view from a Domain, and 3) in the Ad Hoc Editor.
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="data level options"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                          </IconButton>
                        }
                        title="Measures"
                        disableTypography
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          When you add a field or dimension to a column or row,
                          a multi-level slider located at the top of the Filters
                          pane allows you to set the level of aggregation to use
                          for viewing the data. The number of fields or
                          dimensions in the row or column determines the number
                          of levels on the slider. Measures are not reflected in
                          the slider.
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                </List>
              </Drawer>
            )}
            {panelOpen2 && (
              <Drawer
                className="jv-mPanel jv-mPanelLeft mui"
                variant="persistent"
                anchor="left"
                open={panelOpen2}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-action mui">
                  <IconButton
                    onClick={handlePanelClose2}
                    aria-label="close panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                  </IconButton>
                </div>

                {/* List for Sub-panels */}
                <List disablePadding className="jv-mPanel-sections mui">
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="close section"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-cancel"></span>
                          </IconButton>
                        }
                        title="Test 1"
                        disableTypography
                      />

                      <CardContent>
                        <div className="jv-mInstructor jv-mInstructorSimple jv-mInstructorSmall mui">
                          <div className="jv-mInstructor-wrapper mui">
                            <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                            <Typography className="jv-mInstructor-title mui">
                              Message Title
                            </Typography>
                            <Typography className="jv-mInstructor-text mui">
                              Select a dashlet to show its settings.
                            </Typography>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ListItem>
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="options"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                          </IconButton>
                        }
                        title="Test 2"
                        disableTypography
                        /*titleTypographyProps={{variant: "h6", component: "h6"}}*/
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        ></Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                </List>
              </Drawer>
            )}
          </div>
        </div>

        {/* This is the main content */}
        <div className={"demoPanel-canvasLeft"}>
          <main></main>
        </div>
      </div>
    </>
  );
};

LeftAlign.storyName = "Default Left Panel";

/* --------------------------- */
/*  2. RIGHT DEFAULT PANEL     */
/* --------------------------- */
export const Default = () => {
  const [panelOpen1, setPanelOpen1] = useState(true);
  const [panelOpen2, setPanelOpen2] = useState(true);

  const handlePanelOpen1 = () => {
    setPanelOpen1(true);
  };

  const handlePanelClose1 = () => {
    setPanelOpen1(false);
  };

  const handlePanelOpen2 = () => {
    setPanelOpen2(true);
  };

  const handlePanelClose2 = () => {
    setPanelOpen2(false);
  };

  const drawerPaperStyles = {};

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Panel - Default Right</h1>
      <div className={"demoWrapper demoPanel"}>
        {/* This is the main content */}
        <div className={"demoPanel-canvasRight"}>
          <main></main>
        </div>

        {/* This is Panel component */}
        <div style={{ display: "flex" }} aria-describedby="panel container">
          {/* Here two panels appear when they are expanded */}
          <div className="jv-mPanels jv-mPanelsRight mui">
            {panelOpen1 && (
              <Drawer
                className="jv-mPanel jv-mPanelRight mui"
                variant="persistent"
                anchor="right"
                open={panelOpen1}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-action mui">
                  {/* will need to create new icon for this button */}
                  <IconButton
                    onClick={handlePanelClose1}
                    aria-label="close panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                  </IconButton>
                </div>

                {/* List for Sub-panels */}
                <List disablePadding className="jv-mPanel-sections mui">
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="close section"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-cancel"></span>
                          </IconButton>
                        }
                        title="Filters"
                        disableTypography
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Filters can be defined at three levels • in the Domain
                          Designer • in the Data Chooser when creating a view
                          from a Domain, and • in the Ad Hoc Editor.
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="data detail options"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                          </IconButton>
                        }
                        title="Data Detail"
                        disableTypography
                      />
                      <CardContent>
                        <div className="jv-mInstructor jv-mInstructorSimple jv-mInstructorSmall mui">
                          <div className="jv-mInstructor-wrapper mui">
                            <Icon className="jv-mInstructor-icon jv-mIcon jv-message mui" />
                            <Typography className="jv-mInstructor-title mui">
                              Message Title
                            </Typography>
                            <Typography className="jv-mInstructor-text mui">
                              Select a dashlet to show its settings.
                            </Typography>
                          </div>
                        </div>

                        {/*<Typography variant="body2" color="textSecondary" component="p">
                                                This impressive paella is a perfect party dish and a fun meal to cook
                                                together with your 2 guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                            </Typography>*/}
                      </CardContent>
                    </Card>
                  </ListItem>
                </List>
              </Drawer>
            )}
            {panelOpen2 && (
              <Drawer
                className="jv-mPanel jv-mPanelRight mui"
                variant="persistent"
                anchor="right"
                open={panelOpen2}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-action mui">
                  <IconButton
                    onClick={handlePanelClose2}
                    aria-label="close panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                  </IconButton>
                </div>

                {/* List for Sub-panels */}
                <List disablePadding className="jv-mPanel-sections mui">
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="close section"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-cancel"></span>
                          </IconButton>
                        }
                        title="Visualization Type"
                        disableTypography
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          The Visualization Selector lets you switch between Ad
                          Hoc view types, allowing you to choose the best way to
                          represent your information in the Ad Hoc view,
                          including • Table, which displays values corresponding
                          to the rows and columns in the data source • Crosstab,
                          which compares one or more values across multiple sets
                          of related fields • Column, which compares values
                          displayed as columns • Bar, which compares values
                          displayed as bars • Line, which compares values
                          displayed as points connected by lines • Area, which
                          compares values displayed as shaded areas • Spider,
                          which compares three or more values on a series of
                          spokes. Spider charts can use columns, lines, or areas
                          to display values • Dual- and Multi-Axis, which
                          display values using two or more measures • Time
                          Series, which compares time intervals displayed as
                          points connected by lines. The Time Series chart type
                          is only available for non-OLAP charts • Scatter, which
                          compares values as individual points arrayed across
                          both axes of a chart • Bubble, which compares three
                          measures displayed as circles of varying sizes arrayed
                          across both axes of a chart • Pie, which compares
                          values displayed as slices of a circular graph •
                          Range, which displays values as heat and tree maps.
                          Only the Heat Map chart is available for OLAP data
                          sources • Gauges, which displays values as a radial or
                          arc gauge, based on a defined minimum and maximum
                          measure setting.
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                  <ListItem disableGutters className="jv-mPanel-section mui">
                    <Card elevation={0}>
                      <CardHeader
                        className="jv-mPanel-section-header mui"
                        classes={{
                          content: "jv-mPanel-section-header-title mui",
                        }}
                        action={
                          <IconButton
                            aria-label="format visualization options"
                            className={"jv-mButton jv-MuiButton-contained mui"}
                          >
                            <span className="jv-mButton-icon jv-mIcon mui jv-kebab"></span>
                          </IconButton>
                        }
                        title="Format Visualization"
                        disableTypography
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          You can control some aspects of how data points, field
                          names and labels are displayed on your chart,
                          including • Whether data points are displayed •
                          Showing a measure name on charts including only a
                          single measure • Restricting the number of labels
                          displayed • Rotating the direction of label text •
                          Selecting the colors used by the chart • Defining how
                          gauges are displayed.
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                </List>
              </Drawer>
            )}
          </div>

          {/* Here collapsed panel names appears */}
          <div className="jv-mPanels jv-mPanelsRight jv-mPanelsMinimized jv-mPanelsStacked mui">
            <div className="jv-mPanel jv-mPanelRight jv-mPanelMinimized mui">
              <div className="jv-mPanel-action mui">
                <IconButton
                  onClick={handlePanelOpen1}
                  aria-label="open panel"
                  className={
                    "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                  }
                >
                  <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                </IconButton>
              </div>

              <List
                disablePadding
                className="jv-mPanel-sections mui"
                onClick={handlePanelOpen1}
              >
                {/*<ListItem disableGutters className="jv-mPanel-section mui">
                                <Button>Tab 3</Button>
                            </ListItem>*/}

                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Filters</span>
                  </Button>
                </ListItem>
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">Data Detail</span>
                  </Button>
                </ListItem>
              </List>
            </div>

            <div className="jv-mPanel jv-mPanelRight jv-mPanelMinimized mui">
              <div className="jv-mPanel-action mui">
                <IconButton
                  onClick={handlePanelOpen2}
                  aria-label="open panel"
                  className={
                    "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                  }
                >
                  <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                </IconButton>
              </div>

              <List
                disablePadding
                className="jv-mPanel-sections mui"
                onClick={handlePanelOpen2}
              >
                {/*<ListItem disableGutters className="jv-mPanel-section mui">
                                <Button>Tab 3</Button>
                            </ListItem>*/}

                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">
                      Visualization Type
                    </span>
                  </Button>
                </ListItem>
                <ListItem disableGutters className="jv-mPanel-section mui">
                  <Button classes={{ root: "jv-mPanel-section-action mui" }}>
                    <span className="jv-mButton-label mui">
                      Format Visualization
                    </span>
                  </Button>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Default.storyName = "Default Right Panel";

/* ------------------------- */
/*  3. LEFT FLUSH PANELS     */
/* ------------------------- */
export const LeftPanels = () => {
  const [panelOpen1, setPanelOpen1] = useState(true);
  const [panelOpen2, setPanelOpen2] = useState(true);

  const handlePanelOpen1 = () => {
    setPanelOpen1(true);
  };

  const handlePanelClose1 = () => {
    setPanelOpen1(false);
  };

  const handlePanelOpen2 = () => {
    setPanelOpen2(true);
  };

  const handlePanelClose2 = () => {
    setPanelOpen2(false);
  };

  const drawerPaperStyles = {};

  const [searchText, setSearchText] = useState("");
  const onClearBtnClick = () => {
    setSearchText("");
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Panels - Flush Left</h1>
      <div className={"demoWrapper demoAdhocPanel"}>
        {/* This is Panel component */}
        <div style={{ display: "flex" }} aria-describedby="panel container">
          {/* COLLAPSED PANELS */}
          {/* Data */}
          <div className="jv-mPanels jv-mPanelsLeft jv-mPanelsMinimized jv-mPanelsStacked mui">
            <div className="jv-mPanel jv-mPanelLeft jv-mPanelMinimized mui">
              <div className="jv-mPanel-header mui">
                <div className="jv-mPanel-header-action mui">
                  <IconButton
                    onClick={handlePanelOpen1}
                    aria-label="open panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                  </IconButton>
                </div>
                <Typography className="jv-mText jv-mPanel-header-title mui">
                  Data
                </Typography>
              </div>
            </div>

            {/* Build Visualization */}
            <div className="jv-mPanel jv-mPanelLeft jv-mPanelMinimized mui">
              <div className="jv-mPanel-header mui">
                <div className="jv-mPanel-header-action mui">
                  <IconButton
                    onClick={handlePanelOpen2}
                    aria-label="open panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                  </IconButton>
                </div>
                <Typography className="jv-mText jv-mPanel-header-title mui">
                  Build Visualization
                </Typography>
              </div>
            </div>
          </div>

          {/* EXAPANDED PANELS */}
          <div className="jv-mPanels jv-mPanelsLeft mui">
            {panelOpen1 && (
              <Drawer
                className="jv-mPanel jv-mPanelFlush jv-mPanelLeft mui"
                variant="persistent"
                anchor="left"
                open={panelOpen1}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-header mui">
                  <div className="jv-mPanel-header-action mui">
                    <IconButton
                      onClick={handlePanelClose1}
                      aria-label="close panel"
                      className={
                        "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                      }
                    >
                      <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                    </IconButton>
                  </div>
                  <Typography className="jv-mText jv-mPanel-header-title mui">
                    Data
                  </Typography>
                </div>

                {/* List for sections */}
                <div className={"jv-mPanel-body mui"}>
                  <List disablePadding className="jv-mPanel-sections mui">
                    <ListItem
                      disableGutters
                      className="jv-mPanel-section jv-mPanel-sectionPlain jv-mPanel-sectionFields mui"
                    >
                      {/* <p className={"demoText"}>section</p> for demo only */}
                    </ListItem>

                    <ListItem
                      disableGutters
                      className="jv-mPanel-section jv-mPanel-sectionPlain jv-mPanel-sectionMeasures mui"
                    >
                      {/* <p className={"demoText"}>section</p> for demo only */}
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            )}
            {panelOpen2 && (
              <Drawer
                className="jv-mPanel jv-mPanelFlush jv-mPanelLeft mui"
                variant="persistent"
                anchor="left"
                open={panelOpen2}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-header mui">
                  <div className="jv-mPanel-header-action mui">
                    <IconButton
                      onClick={handlePanelClose2}
                      aria-label="close panel"
                      className={
                        "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                      }
                    >
                      <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                    </IconButton>
                  </div>
                  <Typography className="jv-mText jv-mPanel-header-title mui">
                    Build Visualization
                  </Typography>
                </div>
              </Drawer>
            )}
          </div>

          {/* This is the main content */}
          <div className={"demoAdhocPanel-canvasLeft"}>
            <main></main>
          </div>
        </div>
      </div>
    </>
  );
};

LeftPanels.storyName = "Flush Left Panel";

/* ------------------------- */
/*  4. RIGHT FLUSH PANELS    */
/* ------------------------- */
export const RightPanels = () => {
  const [panelOpen1, setPanelOpen1] = useState(true);
  const [panelOpen2, setPanelOpen2] = useState(true);

  const handlePanelOpen1 = () => {
    setPanelOpen1(true);
  };

  const handlePanelClose1 = () => {
    setPanelOpen1(false);
  };

  const handlePanelOpen2 = () => {
    setPanelOpen2(true);
  };

  const handlePanelClose2 = () => {
    setPanelOpen2(false);
  };

  const drawerPaperStyles = {};

  const style1 = {
    backgroundColor: "#ffffff",
  };

  const [checked, setChecked] = useState(true);

  const handleChange = (_, checked) => {
    setChecked(checked);
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Ad Hoc Panels - Flush Right</h1>
      <div className={"demoWrapper demoAdhocPanel"}>
        {/* This is the main content */}
        <div className={"demoAdhocPanel-canvasRight"}>
          <main></main>
        </div>

        {/* This is Panel component */}
        <div style={{ display: "flex" }} aria-describedby="panel container">
          {/* EXAPANDED PANELS */}
          <div className="jv-mPanels jv-mPanelsRight mui">
            {panelOpen1 && (
              <Drawer
                className="jv-mPanel jv-mPanelFlush jv-mPanelRight mui"
                variant="persistent"
                anchor="right"
                open={panelOpen1}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-header mui">
                  <Typography className="jv-mText jv-mPanel-header-title mui">
                    Filters
                  </Typography>
                  <div className="jv-mPanel-header-action mui">
                    <IconButton
                      onClick={handlePanelClose1}
                      aria-label="close panel"
                      className={
                        "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                      }
                    >
                      <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                    </IconButton>
                  </div>
                </div>

                {/* List for sections */}

                <div className={"jv-mPanel-body mui"}>
                  <List disablePadding className="jv-mPanel-sections mui">
                    <ListItem
                      disableGutters
                      className="jv-mPanel-section jv-mPanel-sectionPlain mui"
                    >
                      <Card elevation={0} square={true}>
                        <CardContent className="jv-mPanel-section-body mui">
                          {/* section content will go here */}
                        </CardContent>
                      </Card>
                    </ListItem>
                  </List>
                </div>

                <div className="jv-mPanel-footer mui">
                  {/* optional panel footer */}
                </div>
              </Drawer>
            )}
            {panelOpen2 && (
              <Drawer
                className="jv-mPanel jv-mPanelFlush jv-mPanelRight mui"
                variant="persistent"
                anchor="right"
                open={panelOpen2}
                style={{ width: "270px" }}
                PaperProps={{ style: drawerPaperStyles }}
              >
                <div className="jv-mPanel-header mui">
                  <Typography className="jv-mText jv-mPanel-header-title mui">
                    Format Visualization
                  </Typography>
                  <div className="jv-mPanel-header-action mui">
                    <IconButton
                      onClick={handlePanelClose2}
                      aria-label="close panel"
                      className={
                        "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                      }
                    >
                      <span className="jv-mButton-icon jv-mIcon mui jv-caretRightLarge"></span>
                    </IconButton>
                  </div>
                </div>

                {/* List for Sub-panels */}
                <div className={"jv-mPanel-body mui"}>
                  <List disablePadding className="jv-mPanel-sections mui">
                    <ListItem
                      disableGutters
                      className="jv-mPanel-section jv-mPanel-sectionPlain jv-mPanel-sectionFields mui"
                    >
                      <Card elevation={0} square={true}>
                        <CardContent className="jv-mPanel-section-body mui"></CardContent>
                      </Card>
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            )}
          </div>

          {/* COLLAPSED PANELS */}
          <div className="jv-mPanels jv-mPanelsRight jv-mPanelsMinimized jv-mPanelsStacked mui">
            <div className="jv-mPanel jv-mPanelRight jv-mPanelMinimized mui">
              <div className="jv-mPanel-header mui">
                <div className="jv-mPanel-header-action mui">
                  <IconButton
                    onClick={handlePanelOpen1}
                    aria-label="open panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                  </IconButton>
                </div>
                <Typography className="jv-mText jv-mPanel-header-title mui">
                  Filters
                </Typography>
              </div>
            </div>

            <div className="jv-mPanel jv-mPanelRight jv-mPanelMinimized mui">
              <div className="jv-mPanel-header mui">
                <div className="jv-mPanel-header-action mui">
                  <IconButton
                    onClick={handlePanelOpen2}
                    aria-label="open panel"
                    className={
                      "jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                    }
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-caretLeftLarge"></span>
                  </IconButton>
                </div>
                <Typography className="jv-mText jv-mPanel-header-title mui">
                  Format Visualization
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
RightPanels.storyName = "Flush Right Panel";

/* -------------------- */
/*  5. PANEL SECTION    */
/* -------------------- */
export const panelSection = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Panel - Section</h1>
      <div className={"demoPanelSection"}>
        {/* Panel Section component*/}
        <List disablePadding className="jv-mPanel-sections mui">
          <ListItem disableGutters className="jv-mPanel-section mui">
            <Card elevation={0}>
              <CardHeader
                className="jv-mPanel-section-header mui"
                classes={{ content: "jv-mPanel-section-header-title mui" }}
                action={
                  <IconButton
                    aria-label="close section"
                    className={"jv-mButton jv-MuiButton-contained mui"}
                  >
                    <span className="jv-mButton-icon jv-mIcon mui jv-cancel"></span>
                  </IconButton>
                }
                title="Visualization Type"
                disableTypography
              />
              <CardContent>
                <div className={"demoPanel-vistypes"}></div>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </div>
    </>
  );
};

panelSection.storyName = "Panel Section";
