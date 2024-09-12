import "../css/demoPages.css";
import "./message.css";
import {
  JVButton,
  JVIcon,
  JVIconButton,
  JVList,
  JVListItem,
  JVListItemText,
  JVMessage,
  JVTypography,
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
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Message</h1>

      <div className="demoWrapper demoMessage">
        <JVMessage
          type="error"
          isCardHeader={true}
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
                labelProps={{
                  labelClasses: "jv-uColor-error jv-mButton-iconSmaller",
                }}
                icon="cancel"
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
          cardContentProps={{
            isPadded: true,
          }}
        >
          <JVTypography variant="body1">
            A network error is preventing the following fields from loading:
          </JVTypography>

          <JVList
            className={"jv-mList jv-uMargin-tb-02"}
            isBulleted={true}
            disablePadding={true}
          >
            <JVListItem className={"jv-mList-item"}>
              <JVListItemText
                className={"jv-mList-item-text"}
                primary="Time zone"
              />
            </JVListItem>
            <JVListItem className={"jv-mList-item"}>
              <JVListItemText
                className={"jv-mList-item-text"}
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
      </div>

      <div className="demoWrapper demoMessage">
        <JVMessage
          type="warning"
          isCardHeader={true}
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
                labelProps={{
                  labelClasses: "jv-uColor-warning jv-mButton-iconSmaller",
                }}
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
          cardContentProps={{
            isPadded: true,
          }}
        >
          <JVTypography className="jv-uMargin-b-04" variant="body1">
            Look out for that thing that could happen.
          </JVTypography>

          <JVTypography variant="body1">
            You can continue, but things might not be quite right.
          </JVTypography>
        </JVMessage>
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
      <h1 className={"demoType demoTypeComponent"}>Design</h1>
      <h1 className={"demoTitle"}>Message - Popup</h1>

      <div className="demoWrapper demoMessagePopup">
        {/* Popup Message component goes here */}
      </div>
    </>
  );
};
PopupMessage.storyName = "Popup Message";
