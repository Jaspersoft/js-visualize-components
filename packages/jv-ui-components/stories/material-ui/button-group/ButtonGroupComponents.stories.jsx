import {
  JVButtonGroup,
  JVIconButton,
  JVLabeledButtonGroup,
} from "../../../material-ui";
import "./buttonGroup.css";

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
 *  last modified July 25, 2022
 * ---------------------------------- */

export default {
  component: JVButtonGroup,
  title: "Components/Button Group/Component",
};

export const ButtonGroup = () => (
  <>
    {/* -------------------- */}
    {/* 1. BUTTON GROUP      */}
    {/* -------------------- */}
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Button Group</h1>

    <div className={"demoWrapper demoButtonGroup"}>
      {/* 1a. Small Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Icon</div>
        <div className="demoSet">
          <JVButtonGroup size="small" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textBold"
              aria-label="bold"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textItalic"
              aria-label="italic"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textUnderline"
              selected
              aria-label="underline"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup size="small" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textATop"
              selected
              aria-label="align top"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textAMiddle"
              aria-label="align middle"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textABottom"
              aria-label="align bottom"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup size="small" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textALeft"
              aria-label="align left"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textACenter"
              aria-label="align center"
            />
            <JVIconButton
              variant="contained"
              size={"small"}
              icon="textARight"
              selected
              aria-label="align right"
            />
          </JVButtonGroup>
        </div>
      </div>

      {/* 1b. Medium Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Icon</div>
        <div className="demoSet">
          <JVButtonGroup aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              icon="textBold"
              selected
              aria-label="bold"
            />
            <JVIconButton
              variant="contained"
              icon="textItalic"
              selected
              aria-label="italic"
            />
            <JVIconButton
              variant="contained"
              icon="textUnderline"
              aria-label="underline"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              icon="textATop"
              aria-label="align top"
            />
            <JVIconButton
              variant="contained"
              icon="textAMiddle"
              selected
              aria-label="align middle"
            />
            <JVIconButton
              variant="contained"
              icon="textABottom"
              aria-label="align bottom"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              icon="textALeft"
              aria-label="align left"
            />
            <JVIconButton
              variant="contained"
              icon="textACenter"
              selected
              aria-label="align center"
            />
            <JVIconButton
              variant="contained"
              icon="textARight"
              aria-label="align right"
            />
          </JVButtonGroup>
        </div>
      </div>

      {/* 1c. Large Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Icon</div>
        <div className="demoSet">
          <JVButtonGroup size="large" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textBold"
              aria-label="bold"
            />
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textItalic"
              aria-label="italic"
            />
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textUnderline"
              aria-label="underline"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup size="large" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textATop"
              aria-label="align top"
            />
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textAMiddle"
              aria-label="align middle"
            />
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="textABottom"
              selected
              aria-label="align bottom"
            />
          </JVButtonGroup>
          <div className="demoSpacer12"></div>
          <JVButtonGroup size="large" aria-label="icon button group contained">
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="edit"
              selected
              aria-label="align left"
            />
            <JVIconButton
              variant="contained"
              size={"large"}
              icon="view"
              aria-label="align center"
            />
          </JVButtonGroup>
        </div>
      </div>
    </div>

    <div className={"demoHorizontalRule"}></div>

    {/* --------------------------- */}
    {/* 2. INLINE BUTTON GROUP      */}
    {/* --------------------------- */}
    <div className={"demoWrapper demoButtonGroupInline"}>
      {/* 2a. Small Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Small Inline Icon</div>
        <JVLabeledButtonGroup
          id="style"
          label="Style"
          size="small"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textBold"
            aria-label="bold"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textItalic"
            aria-label="italic"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textUnderline"
            selected
            aria-label="underline"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="valign"
          label="Vertical Alignment"
          size="small"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textATop"
            selected
            aria-label="align top"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textAMiddle"
            aria-label="align middle"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textABottom"
            aria-label="align bottom"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="halignment"
          label="Horizontal Alignment"
          size="small"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textALeft"
            aria-label="align left"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textACenter"
            aria-label="align center"
          />
          <JVIconButton
            variant="contained"
            size={"small"}
            icon="textARight"
            selected
            aria-label="align right"
          />
        </JVLabeledButtonGroup>
      </div>

      {/* 2b. Medium Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Medium Inline Icon</div>
        <JVLabeledButtonGroup
          id="style1"
          label="Style"
          aria-label="icon button group contained"
        >
          <JVIconButton variant="contained" icon="textBold" aria-label="bold" />
          <JVIconButton
            variant="contained"
            icon="textItalic"
            aria-label="italic"
          />
          <JVIconButton
            variant="contained"
            icon="textUnderline"
            selected
            aria-label="underline"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="valign1"
          label="Vertical Alignment"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            icon="textATop"
            selected
            aria-label="align top"
          />
          <JVIconButton
            variant="contained"
            icon="textAMiddle"
            aria-label="align middle"
          />
          <JVIconButton
            variant="contained"
            icon="textABottom"
            aria-label="align bottom"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="halignment1"
          label="Horizontal Alignment"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            icon="textALeft"
            aria-label="align left"
          />
          <JVIconButton
            variant="contained"
            icon="textACenter"
            aria-label="align center"
          />
          <JVIconButton
            variant="contained"
            icon="textARight"
            selected
            aria-label="align right"
          />
        </JVLabeledButtonGroup>
      </div>

      {/* 2c. Large Inline Button Group */}
      <div className="demoSize">
        <div className={"demoSubtitle"}>Large Inline Icon</div>
        <JVLabeledButtonGroup
          id="style2"
          label="Style"
          size="large"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textBold"
            aria-label="bold"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textItalic"
            aria-label="italic"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textUnderline"
            selected
            aria-label="underline"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="valign2"
          label="Vertical Alignment"
          size="large"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textATop"
            selected
            aria-label="align top"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textAMiddle"
            aria-label="align middle"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textABottom"
            aria-label="align bottom"
          />
        </JVLabeledButtonGroup>
        <JVLabeledButtonGroup
          id="halignment2"
          label="Horizontal Alignment"
          size="large"
          aria-label="icon button group contained"
        >
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textALeft"
            aria-label="align left"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textACenter"
            aria-label="align center"
          />
          <JVIconButton
            variant="contained"
            size={"large"}
            icon="textARight"
            selected
            aria-label="align right"
          />
        </JVLabeledButtonGroup>
      </div>
    </div>
  </>
);
