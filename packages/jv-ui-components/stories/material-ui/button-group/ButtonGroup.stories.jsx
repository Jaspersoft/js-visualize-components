import "./buttonGroup.css";
import { ButtonGroup, IconButton, InputLabel } from "@mui/material";

/*----------------------------------
 *  TABLE OF CONTENTS
 *
 *  1. BUTTON GROUP
 *     1a. Small
 *     1b. Medium
 *     1c. Large
 *
 *  2. INLINE BUTTON GROUP
 *     2a. Small
 *     2b. Medium
 *     2c. Large
 * ----------------------------------
 *  last modified Mar 6, 2024
 * ---------------------------------- */

export default {
  component: ButtonGroup,
  title: "Components/Button Group/Design",
};

export const DefaultButtonGroup = () => (
  <>
    {/* ------------------ */}
    {/*  1. BUTTON GROUP   */}
    {/* ------------------ */}
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Button Group</h1>

    <div className={"demoWrapper demoButtonGroup"}>
      {/* 1a. Small Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Icon</div>
        <div className="demoSet">
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui jv-textATop"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>

      {/* 1b. Medium Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Icon</div>
        <div className="demoSet">
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>

      {/* 1c. Large Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Icon</div>
        <div className="demoSet">
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
          <div className="demoSpacer12"> </div>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="edit"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-edit"></span>
            </IconButton>
            <IconButton
              aria-label="view"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-view"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
    <div className={"demoHorizontalRule"}> </div>

    {/* --------------------------- */}
    {/* 2. INLINE BUTTON GROUP      */}
    {/* --------------------------- */}
    <div className={"demoWrapper demoButtonGroupInline"}>
      {/* 2a. Small Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Inline Icon</div>
        <div
          className={
            "jv-mInput jv-mInputSmall jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Style
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div
          className={
            "jv-mInput jv-mInputSmall jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Vertical Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div
          className={
            "jv-mInput jv-mInputSmall jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Horizontal Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSmall jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>

      {/* 2b. Medium Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Inline Icon</div>
        <div className={"jv-mInput jv-mInputInline jv-mInputButtons mui"}>
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Style
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div className={"jv-mInput jv-mInputInline jv-mInputButtons mui"}>
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Vertical Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div className={"jv-mInput jv-mInputInline jv-mInputButtons mui"}>
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Horizontal Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>

      {/* 2c. Large Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Inline Icon</div>
        <div
          className={
            "jv-mInput jv-mInputLarge jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Style
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="bold"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textBold"></span>
            </IconButton>
            <IconButton
              aria-label="italic"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textItalic"></span>
            </IconButton>
            <IconButton
              aria-label="underline"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textUnderline"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div
          className={
            "jv-mInput jv-mInputLarge jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Vertical Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align top"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textATop"></span>
            </IconButton>
            <IconButton
              aria-label="align middle"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textAMiddle"></span>
            </IconButton>
            <IconButton
              aria-label="align bottom"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textABottom"></span>
            </IconButton>
          </ButtonGroup>
        </div>
        <div
          className={
            "jv-mInput jv-mInputLarge jv-mInputInline jv-mInputButtons mui"
          }
        >
          <InputLabel id="label" className={"jv-mInput-label mui"}>
            Horizontal Alignment
          </InputLabel>
          <ButtonGroup
            className="jv-mButtongroup mui"
            variant="contained"
            disableElevation
            aria-label="icon button group contained"
          >
            <IconButton
              aria-label="align left"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textALeft"></span>
            </IconButton>
            <IconButton
              aria-label="align center"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textACenter"></span>
            </IconButton>
            <IconButton
              aria-label="align right"
              className={
                "jv-mButton jv-mButtonLarge jv-mButtonSecondary jv-MuiButton-contained jv-Mui-selected mui"
              }
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-textARight"></span>
            </IconButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
  </>
);
DefaultButtonGroup.storyName = "Button Group";

/*export const SizesAndColors = () => (
    <>
        <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </>
)
SizesAndColors.storyName = 'Sizes and Colors';*/

/*
export const Vertical = () => (
    <>
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
        >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
        >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="text"
        >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </>
)*/
