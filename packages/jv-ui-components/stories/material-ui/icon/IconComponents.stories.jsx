import "./icon.css";
import { JVIcon } from "../../../material-ui";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. ALL ICONS
 *
 *  2. SIZES
 *     2a. Small
 *     2b. Medium
 *     2c. Large
 *
 * ----------------------------
 *  last modified Apr 17, 2023
 * ---------------------------- */

export default {
  component: JVIcon,
  title: "Components/Icon/Component",
};

const icons = [
  "arrowDown",
  "arrowUp",
  "arrowDoubleLeft",
  "arrowDoubleRight",
  "arrowLeft",
  "arrowRight",
  "arrowToLeft",
  "arrowToRight",
  "arrowToBottom",
  "arrowToTop",
  "arrowClosed",
  "arrowOpen",
  "bookmark",
  "calendar",
  "cancel",
  "cancelRound",
  "calculatedField",
  "calculatedFieldAdd",
  "caretDown",
  "caretUp",
  "caretLeft",
  "caretRight",
  "caretDownLarge",
  "caretUpLarge",
  "caretLeftLarge",
  "caretRightLarge",
  "chartColumn",
  "checkmark",
  "checkmarkRound",
  "circleSolid",
  "clock",
  "code",
  "createWorkspace",
  "crosstab",
  "database",
  "delete",
  "domain",
  "download",
  "dragHandleHorizontal",
  "dragHandleVertical",
  "edit",
  "export",
  "file",
  "fileOpen",
  "filter",
  "folder",
  "gear",
  "gears",
  "grid",
  "hamburger",
  "hashtag",
  "home",
  "imageALeft",
  "imageACenter",
  "imageARight",
  "imageATop",
  "imageAMiddle",
  "imageABottom",
  "import",
  "info",
  "infoRound",
  "inputControl",
  "invert",
  "join",
  "joinFull",
  "joinInner",
  "joinLeft",
  "joinRight",
  "kebab",
  "lineArrow",
  "lineDots",
  "link",
  "linkExternal",
  "list",
  "loading",
  "maximize",
  "meatball",
  "message",
  "minimize",
  "minus",
  "minusSquare",
  "operatorAdd",
  "operatorAnd",
  "operatorColon",
  "operatorDivide",
  "operatorEqual",
  "operatorGreaterEqual",
  "operatorGreaterThan",
  "operatorIn",
  "operatorLessEqual",
  "operatorLessThan",
  "operatorMultiply",
  "operatorNot",
  "operatorNotEqual",
  "operatorOr",
  "operatorParenLeft",
  "operatorParenRight",
  "operatorPercent",
  "operatorSubtract",
  "plus",
  "plusSquare",
  "properties",
  "query",
  "redo",
  "refresh",
  "save",
  "search",
  "searchClear",
  "slideIn",
  "slideOut",
  "sort",
  "star",
  "starOutline",
  "stop",
  "swap",
  "switch",
  "table",
  "textALeft",
  "textACenter",
  "textARight",
  "textAJustify",
  "textATop",
  "textAMiddle",
  "textABottom",
  "textAStretch",
  "textBold",
  "textItalic",
  "textUnderline",
  "textStrikethrough",
  "textRotate0",
  "textRotate90",
  "textRotate180",
  "textRotate270",
  "treeHorizontal",
  "treeVertical",
  "undo",
  "undoAll",
  "unlink",
  "upload",
  "view",
  "warning",
  "warningRound",
  "wrench",
  "zoomIn",
  "zoomOut",
];

/* ----------------
 *  1. ALL ICONS
 * ---------------- */
export const Default = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Icon</h1>

    <div className={"demoWrapper demoIcon"}>
      <ul className="demoIcon-grid">
        {icons.map((icon) => (
          <li key={icon} className="demoIcon-grid-column">
            <div className="demoIcon-icon">
              <JVIcon icon={icon} />
              <span className="demoIcon-icon-label">{icon}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
);

/* ----------------
 *  2. ICON SIZES
 * ---------------- */
export const Sizes = () => (
  <>
    <h1 className={"demoType demoTypeComponent"}>Component</h1>
    <h1 className={"demoTitle"}>Icon - Sizes</h1>

    <div className={"demoWrapper demoIcon"}>
      {/* 2a. Small Icons */}
      <div className={"demoSubtitle"}>Small (16px)</div>
      <div className="demoSize demoSizeSmall">
        {icons.map((icon) => (
          <div className="iconWrapper" key={icon}>
            <JVIcon icon={icon} size="small" />
          </div>
        ))}
      </div>

      {/* 2b. Medium Icons */}
      <div className={"demoSubtitle"}>Medium/Default (18px)</div>
      <div className="demoSize demoSizeMedium">
        {icons.map((icon) => (
          <div className="iconWrapper" key={icon}>
            <JVIcon icon={icon} />
          </div>
        ))}
      </div>

      {/* 2c. Large Icons */}
      <div className={"demoSubtitle"}>Large (20px)</div>
      <div className="demoSize demoSizeLarge">
        {icons.map((icon) => (
          <div className="iconWrapper" key={icon}>
            <JVIcon icon={icon} size="large" />
          </div>
        ))}
      </div>
    </div>
  </>
);
