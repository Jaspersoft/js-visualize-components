import React, { useState, useEffect } from "react";
import "../css/demoPages.css";
import "./message.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popover,
  Popper,
  Typography,
  ClickAwayListener,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT MESSAGE
 *     1a. Error
 *     1b. Warning
 *
 *  2. POPUP MESSAGE
 *
 * ----------------------------
 *  last modified Mar 19, 2024
 * ---------------------------- */

export default {
  title: "Components/Message/Design",
  component: Message,
};

/* ---------------------- */
/*  1. DEFAULT MESSAGE    */
/* ---------------------- */
export const Message = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Message</h1>

      <div className="demoWrapper demoMessage">
        {/* 1a. Warning message */}
        <div className="demoSize">
          <Card className={"jv-mMessage jv-mMessageError mui"} elevation={0}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui" />
              }
              action={
                <IconButton aria-label="close" className={"jv-mButton mui"}>
                  <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-error mui jv-cancel"></span>
                </IconButton>
              } /* not needed now, but we should allow this header action container to hold an optional close button */
              classes={{
                avatar: "jv-mMessage-header-icon mui",
                content: "jv-mMessage-header-title mui",
                action: "jv-mMessage-header-action mui",
              }}
              title={
                <Typography
                  className="jv-mText jv-mTextTitle jv-uColor-error jv-uTextBold mui"
                  variant="h3"
                >
                  Error
                </Typography>
              }
            />
            <CardContent
              className={"jv-mMessage-body jv-mMessage-bodyPadded mui"}
            >
              <Typography className="jv-mText mui" variant="body1">
                A network error is preventing the following fields from loading:
              </Typography>

              <List
                className={"jv-mList jv-mListBulleted jv-uMargin-tb-02 mui"}
                disablePadding={true}
              >
                <ListItem className={"jv-mList-item mui"}>
                  <ListItemText
                    className={"jv-mList-item-text mui"}
                    primary="Time zone"
                  />
                </ListItem>
                <ListItem className={"jv-mList-item mui"}>
                  <ListItemText
                    className={"jv-mList-item-text mui"}
                    primary="Formats"
                  />
                </ListItem>
              </List>

              <Typography className="jv-mText mui" variant="body1">
                You can try reloading these fields. If the network error
                persists, you will be unable to save this alert.
              </Typography>
              <Button
                className="jv-mButton jv-mButtonLarge jv-mButtonError jv-uMargin-t-04 mui"
                disableElevation
                size="large"
                variant="contained"
              >
                <span className="jv-mButton-label mui">Retry</span>
              </Button>
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          <Card
            className={"jv-mMessage jv-mMessageOutline jv-mMessageError mui"}
            elevation={0}
          >
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui" />
              }
              action={
                <IconButton aria-label="close" className={"jv-mButton mui"}>
                  <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-error mui jv-cancel"></span>
                </IconButton>
              } /* not needed now, but we should allow this header action container to hold an optional close button */
              classes={{
                avatar: "jv-mMessage-header-icon mui",
                content: "jv-mMessage-header-title mui",
                action: "jv-mMessage-header-action mui",
              }}
              title={
                <Typography
                  className="jv-mText jv-mTextTitle jv-uColor-error jv-uTextBold mui"
                  variant="h3"
                >
                  Error
                </Typography>
              }
            />
            <CardContent
              className={"jv-mMessage-body jv-mMessage-bodyPadded mui"}
            >
              <Typography
                className="jv-mText jv-uMargin-b-04 mui"
                variant="body1"
              >
                Error message with optional outline.{" "}
              </Typography>
              <Typography className="jv-mText mui" variant="body1">
                Use for messages that appear on light grey backgrounds to add
                contrast.
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* 1b. Error message */}
        <div className="demoSize">
          <Card className={"jv-mMessage jv-mMessageWarning mui"} elevation={0}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-warning mui" />
              }
              action={
                <IconButton aria-label="close" className={"jv-mButton mui"}>
                  <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-warning mui jv-cancel"></span>
                </IconButton>
              } /* not needed now, but we should allow this header action container to hold an optional close button */
              classes={{
                avatar: "jv-mMessage-header-icon mui",
                content: "jv-mMessage-header-title mui",
                action: "jv-mMessage-header-action mui",
              }}
              title={
                <Typography
                  className="jv-mText jv-mTextTitle jv-uColor-warning jv-uTextBold mui"
                  variant="h3"
                >
                  Warning
                </Typography>
              }
            />
            <CardContent
              className={"jv-mMessage-body jv-mMessage-bodyPadded mui"}
            >
              <Typography
                className="jv-mText jv-uMargin-b-04 mui"
                variant="body1"
              >
                Look out for that thing that could happen.
              </Typography>

              <Typography className="jv-mText mui" variant="body1">
                You can continue, but things might not be quite right.
              </Typography>
              {/*<Button
                        className="jv-mButton jv-mButtonLarge jv-mButtonWarning jv-uMargin-t-04 mui"
                        disableElevation
                        size="large"
                        variant="contained"
                    >
                        <span className="jv-mButton-label mui">Continue</span>
                    </Button>*/}
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          <Card
            className={"jv-mMessage jv-mMessageOutline jv-mMessageWarning mui"}
            elevation={0}
          >
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-warning mui" />
              }
              action={
                <IconButton aria-label="close" className={"jv-mButton mui"}>
                  <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-warning mui jv-cancel"></span>
                </IconButton>
              } /* not needed now, but we should allow this header action container to hold an optional close button */
              classes={{
                avatar: "jv-mMessage-header-icon mui",
                content: "jv-mMessage-header-title mui",
                action: "jv-mMessage-header-action mui",
              }}
              title={
                <Typography
                  className="jv-mText jv-mTextTitle jv-uColor-warning jv-uTextBold mui"
                  variant="h3"
                >
                  Warning
                </Typography>
              }
            />
            <CardContent
              className={"jv-mMessage-body jv-mMessage-bodyPadded mui"}
            >
              <Typography
                className="jv-mText jv-uMargin-b-04 mui"
                variant="body1"
              >
                Warning message with optional outline.{" "}
              </Typography>
              <Typography className="jv-mText mui" variant="body1">
                Use for messages that appear on light grey backgrounds to add
                contrast.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
Message.storyName = "Default Message";

/* -------------------- */
/*  2. POPUP MESSAGE    */
/* -------------------- */
export const PopupMessage = () => {
  const [arrowRef, setArrowRef] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const ref = React.useRef(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  useEffect(() => {
    // console.log(ref.current)
    if (ref.current) {
      setAnchorEl1(ref.current);
    }
  }, [ref]);

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Message - Popup</h1>

      <div className="demoWrapper demoMessagePopup">
        <div
          className="jv-mListbox jv-uFlexfit-row-item jr"
          style={{ width: "100%", height: "360px" }}
          ref={ref}
        >
          <div className="jv-mListbox-list jv-isInvalid jr">
            <ul className="jv-mTree jr" role="tree" aria-label="">
              <li
                className="jv-mTree-leaf jv-mTree-leaf-1 jv-isSelected jv-isInvalid jr"
                role="treeitem"
              >
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">Audit Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">ExampleVDS</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">Foodmart Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">Foodmart Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">
                  Jasperserver Repository SQL data source
                </p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">JServer Jdbc Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">JServer JNDI Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">myDS_alltypes</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">Profile Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">
                  Report Monitoring Data Source
                </p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">SugarCRM Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">SugarCRM Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jr" role="treeitem">
                <div className="jv-mTree-iconContainer jr">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jr"></span>
                </div>
                <p className="jv-mTree-label jr">
                  SugarCRM-Foodmart Virtual Data Source
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Popper
          placement="left"
          open={true}
          className="jv-mPopper jv-mPopperError jv-uWidth-300px mui" /* utility width class is for demo only */
          anchorEl={anchorEl1}
          modifiers={[
            {
              name: "flip",
              enabled: true,
            },
            {
              name: "preventOverflow",
              enabled: true,
              // options: {
              //     altAxis: true,
              //     altBoundary: true,
              //     tether: true,
              //     rootBoundary: 'document',
              //     padding: 8,
              // },
            },
            {
              name: "arrow",
              enabled: true,
              options: {
                element: arrowRef,
              },
            },
          ]}
        >
          {/*<span className="arrow" ref={setArrowRef} />*/}

          <div className={"jv-mPopper-message mui"}>
            <div className={"jv-mPopper-message-sidebar mui"}>
              <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-white mui" />
            </div>

            <div className={"jv-mPopper-message-body mui"}>
              <Card
                className={"jv-mMessage jv-mMessageError mui"}
                elevation={0}
              >
                <CardHeader
                  className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
                  /*avatar={
                                    <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui"/>
                                }*/
                  action={
                    <IconButton aria-label="close" className={"jv-mButton mui"}>
                      <span className="jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-error mui jv-cancel"></span>
                    </IconButton>
                  } /* not needed now, but we should allow this header action container to hold an optional close button */
                  classes={{
                    avatar: "jv-mMessage-header-icon mui",
                    content: "jv-mMessage-header-title mui",
                    action: "jv-mMessage-header-action mui",
                  }}
                  title={
                    <Typography
                      className="jv-mText jv-mTextTitle jv-uColor-error jv-uTextBold mui"
                      variant="h3"
                    >
                      Error
                    </Typography>
                  }
                />
                <CardContent
                  className={"jv-mMessage-body jv-mMessage-bodyPadded mui"}
                >
                  <Typography
                    className="jv-mText jv-uMargin-b-04 mui"
                    variant="body1"
                  >
                    Something didn't go as expected.
                  </Typography>

                  <Typography className="jv-mText mui" variant="body1">
                    You can close this error message and try the operation
                    again.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Popper>
      </div>
    </>
  );
};
PopupMessage.storyName = "Popup Message";