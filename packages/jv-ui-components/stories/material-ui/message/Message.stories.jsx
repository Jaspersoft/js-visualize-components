import { useRef, useState, useEffect } from "react";
import "../css/demoPages.css";
import "./message.css";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popper,
  Typography,
} from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT MESSAGE
 *     1a. Error Static
 *     1b. Error, Drop Shadow
 *     1c. Error, Outline
 *     1d. Warning Static
 *     1e. Warning, Drop Shadow
 *     1f. Warning, Outline
 *
 *  2. POPUP MESSAGE
 *
 * ----------------------------
 *  last modified Mar 21, 2024
 * ---------------------------- */

/* ---------------------- */
/*  1. DEFAULT MESSAGE    */
/* ---------------------- */
export const Message = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Message</h1>

      <div className="demoWrapper demoMessage">
        {/* ERROR MESSAGES */}
        <div className="demoSize">
          <p className="demoSubtitle">Error</p>

          {/* 1a. Static Error message */}
          <p className="demoSubtitle-2">Static</p>
          <Card className={"jv-mMessage jv-mMessageError mui"} elevation={0}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui" />
              }
              /* static messages do not have a close button */
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
                classes={{ label: "jv-mButton-label mui" }}
                className="jv-mButton jv-mButtonLarge jv-mButtonError jv-uMargin-t-04 mui"
                disableElevation
                size="large"
                variant="contained"
              >
                Retry
              </Button>
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          {/* 1b. Error message with drop shadow */}
          <p className="demoSubtitle-2">Shadow</p>
          <Card className={"jv-mMessage jv-mMessageError mui"} elevation={2}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui" />
              }
              action={
                <IconButton
                  aria-label="close"
                  className={"jv-mButton mui"}
                  classes={{
                    label:
                      "jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-error mui jv-cancel",
                  }}
                ></IconButton>
              }
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
                Use for error messages that have a close button in the upper
                right.
              </Typography>
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          {/* 1c. Error message with outline */}
          <p className="demoSubtitle-2">Outlined</p>
          <div className="demoVariant">
            <Card
              className={"jv-mMessage jv-mMessageError mui"}
              variant="outlined"
            >
              <CardHeader
                className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
                avatar={
                  <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-error mui" />
                }
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
                  Use for static error messages that appear on a light grey
                  background.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* WARNING MESSAGES */}
        <div className="demoSize">
          <p className="demoSubtitle">Warning</p>

          {/* 2a. Static Warning message */}
          <p className="demoSubtitle-2">Static</p>
          <Card className={"jv-mMessage jv-mMessageWarning mui"} elevation={0}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-warning mui" />
              }
              /* static messages do not have a close button */
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
                A static message does not have a close button in the upper
                right.
              </Typography>

              <Typography className="jv-mText mui" variant="body1">
                Use a warning message to alert user to a potential non-critical
                issue.
              </Typography>
              {/*<Button
                            classes={{ label: "jv-mButton-label mui"}}
                            className="jv-mButton jv-mButtonLarge jv-mButtonWarning jv-uMargin-t-04 mui"
                            disableElevation
                            size="large"
                            variant="contained"
                        >
                            Continue
                        </Button>*/}
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          {/* 2b. Warning message with drop shadow */}
          <p className="demoSubtitle-2">Shadow</p>
          <Card className={"jv-mMessage jv-mMessageWarning mui"} elevation={2}>
            <CardHeader
              className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
              avatar={
                <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-warning mui" />
              }
              action={
                <IconButton
                  aria-label="close"
                  className={"jv-mButton mui"}
                  classes={{
                    label:
                      "jv-mButton-icon jv-mButton-iconSmaller jv-mIcon jv-uColor-warning mui jv-cancel",
                  }}
                ></IconButton>
              }
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
              <Typography className="jv-mText mui" variant="body1">
                Use for messages that have a close button in the upper right.
              </Typography>
            </CardContent>
          </Card>

          <div className="demoSpacer16"></div>

          {/* 1b. Error message with outline */}
          <p className="demoSubtitle-2">Outlined</p>
          <div className="demoVariant">
            <Card
              className={"jv-mMessage jv-mMessageWarning mui"}
              variant="outlined"
            >
              <CardHeader
                className={"jv-mMessage-header jv-mMessage-headerPadded mui"}
                avatar={
                  <Icon className="jv-mIcon jv-mIconLarge jv-warningRound jv-uColor-warning mui" />
                }
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
                <Typography className="jv-mText mui" variant="body1">
                  Use for static warning messages that appear on a light grey
                  background.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
Message.storyName = "Default Message";

export default {
  title: "Components/Message/Design",
  component: Message,
};

/* -------------------- */
/*  2. POPUP MESSAGE    */
/* -------------------- */
export const PopupMessage = () => {
  const [arrowRef, setArrowRef] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [anchorEl1, setAnchorEl1] = useState(null);
  const ref = useRef(null);

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
          className="jv-mListbox jv-uFlexfit-row-item jv"
          style={{ width: "100%", height: "360px" }}
          ref={ref}
        >
          <div className="jv-mListbox-list jv-isInvalid jv">
            <ul className="jv-mTree jv" role="tree" aria-label="">
              <li
                className="jv-mTree-leaf jv-mTree-leaf-1 jv-isSelected jv-isInvalid jv"
                role="treeitem"
              >
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">Audit Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">ExampleVDS</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">Foodmart Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">Foodmart Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">
                  Jasperserver Repository SQL data source
                </p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">JServer Jdbc Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">JServer JNDI Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">myDS_alltypes</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">Profile Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">
                  Report Monitoring Data Source
                </p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">SugarCRM Data Source</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">SugarCRM Data Source JNDI</p>
              </li>
              <li className="jv-mTree-leaf jv-mTree-leaf-1 jv" role="treeitem">
                <div className="jv-mTree-iconContainer jv">
                  <span className="jv-mTree-icon jv-mTree-iconDatasource jv"></span>
                </div>
                <p className="jv-mTree-label jv">
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
