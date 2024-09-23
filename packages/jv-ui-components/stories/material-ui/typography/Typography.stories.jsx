import React from "react";
import "./typography.css";
import { Typography, Link, Icon } from "@mui/material";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. GENERAL
 *      1a. Header text (for h1-h6 elements)
 *      1b. Title text (for any HTML element)
 *      1c. Body text
 *
 *   2. LINKS
 *      2a. Small text
 *      2b. Default text
 *
 *   3. MESSAGE
 *
 *   4. FILTER STATEMENT
 *
/* -------------------------------
 *  last modified Feb 12, 2024
 * ------------------------------- */

export default {
  component: Typography,
  title: "Components/Typography/Design",
};

export const General = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Typography</h1>

      {/* --------------------------
                 1. HEADER / TITLE TEXT
                -------------------------- */}
      <div className={"demoWrapper demoTypography"}>
        {/* 1a. Header text (for h1-h6 elements) */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Header Text</div>
          <div className={"demoSize-description"}>For h1-h6 elements only</div>
          <Typography className="jv-mText mui" variant="h1">
            h1. Heading (24px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle mui" variant="h2">
            h2. Heading (20px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle mui" variant="h3">
            h3. Heading (18px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle mui" variant="h4">
            h4. Heading (16px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle mui" variant="h5">
            h5. Heading (14px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle mui" variant="h6">
            h6. Heading (semibold, 13px)
          </Typography>
        </div>

        {/* 1b. Title text (for any HTML element) */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Title Text</div>
          <div className={"demoSize-description"}>
            Can be used on any HTML element
          </div>
          <Typography className="jv-mText jv-mTextTitle mui jv-mTextJumbo">
            Jumbo (24px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextXLarge mui">
            Extra Large (22px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextLarge mui">
            Large (20px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextMedium mui">
            Medium (18px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextSmall mui">
            Small (16px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextXSmall mui">
            Extra Small (14px)
          </Typography>
          <Typography className="jv-mText jv-mTextTitle jv-mTextTiny mui">
            Tiny (semibold, 13px)
          </Typography>
        </div>

        {/* 1c. Body text */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Body Text</div>
          <div className={"demoSize-description"}>
            For paragraph element only
          </div>
          {/*<div className={"demoSpacer36"}> </div>*/}

          <Typography className="jv-mText mui" variant="body2">
            Small (12px) - Smaller body text that is used in small spaces such
            as Properties panels. In Material UI this is the 'body2' variant.
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            Default (13px) - Standard body text that is used in most places. In
            Material UI this is the 'body1' variant.
          </Typography>
          <Typography className="jv-mText jv-mTextLarge mui">
            Large (14px) - Serve all your users and customers from a single
            instance, making it much easier for administrators to manage
            distribution and access to content and data.
          </Typography>
          <Typography className="jv-mText jv-mTextXLarge mui">
            Extra Large (16px) - Serve all your users and customers from a
            single instance, making it much easier for administrators to manage
            distribution and access to content and data.
          </Typography>
        </div>
      </div>
    </>
  );
};

export const TextLink = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Typography - Link Text</h1>

      {/* ----------------
                 2. LINK TEXT
                ---------------- */}
      <div className={"demoWrapper demoTypography"}>
        {/* 2a. Small text */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small Body Text (12px)</div>

          {/* default color */}
          <Typography className="jv-mText mui" variant="body2">
            <Link className="jv-mLink mui" href="#" underline="always">
              Always underlined
            </Link>
          </Typography>

          <Typography className="jv-mText mui" variant="body2">
            <Link className="jv-mLink mui" href="#" underline="hover">
              Underlined on hover
            </Link>
          </Typography>
          <div className={"demoSpacer12"}> </div>

          {/* theme color */}
          <Typography className="jv-mText mui" variant="body2">
            <Link
              className="jv-mLink jv-mLinkTheme mui"
              href="#"
              underline="always"
            >
              Always underlined - theme color
            </Link>
          </Typography>
          <Typography className="jv-mText mui" variant="body2">
            <Link
              className="jv-mLink jv-mLinkTheme mui"
              href="#"
              underline="hover"
            >
              Underlined on hover - theme color
            </Link>
          </Typography>
        </div>

        {/* 2b. Default text */}
        <div className="demoSize">
          <div className={"demoSubtitle"}>Default Body Text (13px)</div>

          {/* default color */}
          <Typography className="jv-mText mui" variant="body1">
            <Link className="jv-mLink mui" href="#" underline="always">
              Always underlined
            </Link>
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            <Link className="jv-mLink mui" href="#" underline="hover">
              Underlined on hover
            </Link>
          </Typography>
          <div className={"demoSpacer12"}> </div>

          {/* theme color */}
          <Typography className="jv-mText mui" variant="body1">
            <Link
              className="jv-mLink jv-mLinkTheme mui"
              href="#"
              underline="always"
            >
              Always underlined - theme color
            </Link>
          </Typography>

          <Typography className="jv-mText mui" variant="body1">
            <Link
              className="jv-mLink jv-mLinkTheme mui"
              href="#"
              underline="hover"
            >
              Underlined on hover - theme color
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};
TextLink.storyName = "Link";

export const Message = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Typography - Message Text</h1>

      {/* --------------
                 3. MESSAGE
                -------------- */}
      <div className={"demoWrapper demoTypography"}>
        <div className="demoSize">
          <div className={"demoSubtitle"}>Small Body Text (12px)</div>
          <Typography className="jv-mText jv-mTextMessage mui" variant="body2">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Basic message with small text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextTheme mui"
            variant="body2"
          >
            <Icon className="jv-mIcon jv-infoRound mui" />
            Themed message with small text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextWarning mui"
            variant="body2"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Warning message with small text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextError mui"
            variant="body2"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Error message with small text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextError mui"
            variant="body2"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Long error message with small text that wraps to a second line.
          </Typography>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Default Body Text (13px)</div>
          <Typography className="jv-mText jv-mTextMessage mui" variant="body1">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Basic message with default text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextTheme mui"
            variant="body1"
          >
            <Icon className="jv-mIcon jv-infoRound mui" />
            Themed message with default text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextWarning mui"
            variant="body1"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Warning message with default text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextError mui"
            variant="body1"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Error message with default text.
          </Typography>

          <Typography
            className="jv-mText jv-mTextMessage jv-mTextError mui"
            variant="body1"
          >
            <Icon className="jv-mIcon jv-warningRound mui" />
            Long error message with default text that wraps to a second line.
          </Typography>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Large Body Text (14px)</div>
          <Typography className="jv-mText jv-mTextLarge jv-mTextMessage mui">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Basic message with large text.
          </Typography>

          <Typography className="jv-mText jv-mTextLarge jv-mTextMessage jv-mTextTheme mui">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Themed message with large text.
          </Typography>

          <Typography className="jv-mText jv-mTextLarge jv-mTextMessage jv-mTextWarning mui">
            <Icon className="jv-mIcon jv-warningRound mui" />
            Warning message with large text.
          </Typography>

          <Typography className="jv-mText jv-mTextLarge jv-mTextMessage jv-mTextError mui">
            <Icon className="jv-mIcon jv-warningRound mui" />
            Error message with large body text.
          </Typography>

          <Typography className="jv-mText jv-mTextLarge jv-mTextMessage jv-mTextError mui">
            <Icon className="jv-mIcon jv-warningRound mui" />
            Long error message with large text that wraps to a second line.
          </Typography>
        </div>

        <div className="demoSize">
          <div className={"demoSubtitle"}>Extra Large Body Text (16px)</div>
          <Typography className="jv-mText jv-mTextXLarge jv-mTextMessage mui">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Basic message with extra large text.
          </Typography>

          <Typography className="jv-mText jv-mTextXLarge jv-mTextMessage jv-mTextTheme mui">
            <Icon className="jv-mIcon jv-infoRound mui" />
            Themed message with extra large text.
          </Typography>

          <Typography className="jv-mText jv-mTextXLarge jv-mTextMessage jv-mTextWarning mui">
            <Icon className="jv-mIcon jv-warningRound mui" />
            Warning message with extra large text.
          </Typography>

          <Typography className="jv-mText jv-mTextXLarge jv-mTextMessage jv-mTextError mui">
            <Icon className="jv-mIcon jv-warningRound mui" />
            Error message with extra large text.
          </Typography>
        </div>
      </div>
    </>
  );
};
Message.storyName = "Message";

export const FilterStatement = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Typography - Filter Statement</h1>

      {/* ---------------------------
                 4. FILTER STATEMENT TEXT
                --------------------------- */}
      <div className={"demoWrapper demoTypographyFilter"}>
        {/* 2a. Small text */}
        <div className="demoSize">
          {/*<div className={"demoSubtitle"}>Xxxxx</div>*/}
          <Typography className="jv-mText jv-mTextFilter mui">
            <span className="jv-mText-descriptor mui">Executions for all</span>
            <span className="jv-mText-value mui">scheduled dashboards</span>
            <span className="jv-mText-descriptor mui">that were</span>
            <span className="jv-mText-value mui">completed</span>
            <span className="jv-mText-descriptor mui">within the</span>
            <span className="jv-mText-value mui">last 3 days</span>
          </Typography>
        </div>
      </div>
    </>
  );
};
FilterStatement.storyName = "Filter Statement";
