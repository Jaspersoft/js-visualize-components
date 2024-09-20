import "../css/demoPages.css";
import "./message.css";
import {
  JVMessage,
  JVTypography,
  JVList,
  JVListItem,
  JVListItemText,
  JVIcon,
  JVIconButton,
  JVButton,
} from "@jaspersoft/jv-ui-components";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT MESSAGE
 *
 *  2. POPUP MESSAGE
 *
 * ----------------------------
 *  last modified Apr 1, 2024
 * ---------------------------- */

export default {
  title: "Components/Message/Component",
};

/* ---------------------- */
/*  1. DEFAULT MESSAGE    */
/* ---------------------- */
export const Message = () => {
  return (
    <>
      <h1 className="demoType demoTypeComponent">Component</h1>
      <h1 className="demoTitle">Message</h1>

      <div className="demoWrapper demoMessage">
        {/* ERROR MESSAGES */}
        <div className="demoSize">
          <p className="demoSubtitle">Error</p>

          {/* 1a. Static Error message */}
          <p className="demoSubtitle-2">Static</p>
          <JVMessage
            type="error"
            isCardHeader
            cardHeaderProps={{
              isHeaderPadded: true,
              avatar: (
                <JVIcon
                  className="jv-uColor-error"
                  size="large"
                  icon="warningRound"
                />
              ),
              action: (
                <JVIconButton
                  aria-label="close"
                  icon="cancel"
                  className="jv-uColor-error jv-mButton-iconSmaller"
                />
              ),
              title: (
                <JVTypography
                  className="jv-mText jv-mTextTitle jv-uColor-error jv-uTextBold"
                  variant="h3"
                >
                  Error
                </JVTypography>
              ),
            }}
          >
            <JVTypography variant="body1">
              A network error is preventing the following fields from loading:
            </JVTypography>

            <JVList
              className="jv-mList jv-uMargin-tb-02"
              isBulleted
              disablePadding
            >
              <JVListItem className="jv-mList-item">
                <JVListItemText
                  className="jv-mList-item-text"
                  primary="Time zone"
                />
              </JVListItem>
              <JVListItem className="jv-mList-item">
                <JVListItemText
                  className="jv-mList-item-text"
                  primary="Formats"
                />
              </JVListItem>
            </JVList>
            <JVTypography variant="body1">
              You can try reloading these fields. If the network error persists,
              you will be unable to save this alert.
            </JVTypography>
            <JVButton
              size="large"
              className="jv-mButtonError jv-uMargin-t-04"
              disableElevation
              variant="contained"
            >
              Retry
            </JVButton>
          </JVMessage>

          <div className="demoSpacer16" />

          {/* 1b. Error message with drop shadow */}
          <p className="demoSubtitle-2">Shadow</p>
          {/* TODO: add Shadow Error Message component here */}

          <div className="demoSpacer16" />

          {/* 1c. Error message with outline */}
          <p className="demoSubtitle-2">Outlined</p>
          <div className="demoVariant">
            {/* TODO: add Outlined Error Message component here */}
          </div>
        </div>

        {/* WARNING MESSAGES */}
        <div className="demoSize">
          <p className="demoSubtitle">Warning</p>

          {/* 1a. Static Warning message */}
          <p className="demoSubtitle-2">Static</p>
          <JVMessage
            type="warning"
            cardHeaderProps={{
              isHeaderPadded: true,
              avatar: (
                <JVIcon
                  className="jv-uColor-warning"
                  size="large"
                  icon="warningRound"
                />
              ),
              action: (
                <JVIconButton
                  aria-label="close"
                  icon="cancel"
                  className="jv-mButton-iconSmaller jv-uColor-warning"
                />
              ),
              title: (
                <JVTypography
                  className="jv-mText jv-mTextTitle jv-uColor-warning jv-uTextBold"
                  variant="h3"
                >
                  Warning
                </JVTypography>
              ),
            }}
          >
            <JVTypography className="jv-uMargin-b-04" variant="body1">
              Look out for that thing that could happen.
            </JVTypography>

            <JVTypography variant="body1">
              You can continue, but things might not be quite right.
            </JVTypography>
          </JVMessage>

          <div className="demoSpacer16" />

          {/* 2b. Error message with drop shadow */}
          <p className="demoSubtitle-2">Shadow</p>
          {/* TODO: add Shadow Warning Message component here */}

          <div className="demoSpacer16" />

          {/* 2c. Error message with outline */}
          <p className="demoSubtitle-2">Outlined</p>
          <div className="demoVariant">
            {/* TODO: add Outlined Warning Message component here */}
          </div>
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
  return (
    <>
      <h1 className="demoType demoTypeComponent">Design</h1>
      <h1 className="demoTitle">Message - Popup</h1>

      <div className="demoWrapper demoMessagePopup">
        {/* Popup Message component goes here */}
      </div>
    </>
  );
};
PopupMessage.storyName = "Popup Message";
