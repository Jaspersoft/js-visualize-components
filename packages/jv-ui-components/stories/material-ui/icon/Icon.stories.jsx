import "./icon.css";
import { Icon } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. ALL ICONS
 *     1a. A - D
 *     1b. E - H
 *     1c. I - L
 *     1d. M - P
 *     1e. Q - T
 *     1f. U - Z
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
  component: Icon,
  title: "Components/Icon/Design",
};

/* ----------------
 *  1. ALL ICONS
 * ---------------- */
export const Default = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Icon</h1>

    <div className={"demoWrapper demoIcon"}>
      <ul className="demoIcon-grid">
        {/* 1a.  All Icons, A - D */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowDown mui" />
            <span className="demoIcon-icon-label">arrowDown</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowUp mui" />
            <span className="demoIcon-icon-label">arrowUp</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowDoubleLeft mui" />
            <span className="demoIcon-icon-label">arrowDoubleLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowDoubleRight mui" />
            <span className="demoIcon-icon-label">arrowDoubleRight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowLeft mui" />
            <span className="demoIcon-icon-label">arrowLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowRight mui" />
            <span className="demoIcon-icon-label">arrowRight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowToLeft mui" />
            <span className="demoIcon-icon-label">arrowToLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowToRight mui" />
            <span className="demoIcon-icon-label">arrowToRight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowToBottom mui" />
            <span className="demoIcon-icon-label">arrowToBottom</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowToTop mui" />
            <span className="demoIcon-icon-label">arrowToTop</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowClosed mui" />
            <span className="demoIcon-icon-label">arrowClosed</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-arrowOpen mui" />
            <span className="demoIcon-icon-label">arrowOpen</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-bookmark mui" />
            <span className="demoIcon-icon-label">bookmark</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-calendar mui" />
            <span className="demoIcon-icon-label">calendar</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-cancel mui" />
            <span className="demoIcon-icon-label">cancel</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-cancelRound mui" />
            <span className="demoIcon-icon-label">cancelRound</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-calculatedField mui" />
            <span className="demoIcon-icon-label">calculatedField</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-calculatedFieldAdd mui" />
            <span className="demoIcon-icon-label">calculatedFieldAdd</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretDown mui" />
            <span className="demoIcon-icon-label">caretDown</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretUp mui" />
            <span className="demoIcon-icon-label">caretUp</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretLeft mui" />
            <span className="demoIcon-icon-label">caretLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretRight mui" />
            <span className="demoIcon-icon-label">caretRight</span>
          </div>
        </li>

        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretDownLarge mui" />
            <span className="demoIcon-icon-label">caretDownLarge</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretUpLarge mui" />
            <span className="demoIcon-icon-label">caretUpLarge</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretLeftLarge mui" />
            <span className="demoIcon-icon-label">caretLeftLarge</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-caretRightLarge mui" />
            <span className="demoIcon-icon-label">caretRightLarge</span>
          </div>
        </li>

        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-chartColumn mui" />
            <span className="demoIcon-icon-label">chartColumn</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-checkmark mui" />
            <span className="demoIcon-icon-label">checkmark</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-checkmarkRound mui" />
            <span className="demoIcon-icon-label">checkmarkRound</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-circleSolid mui" />
            <span className="demoIcon-icon-label">circleSolid</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-clock mui" />
            <span className="demoIcon-icon-label">clock</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-code mui" />
            <span className="demoIcon-icon-label">code</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-createWorkspace mui" />
            <span className="demoIcon-icon-label">createWorkspace</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-crosstab mui" />
            <span className="demoIcon-icon-label">crosstab</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-database mui" />
            <span className="demoIcon-icon-label">database</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-delete mui" />
            <span className="demoIcon-icon-label">delete</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-domain mui" />
            <span className="demoIcon-icon-label">domain</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-download mui" />
            <span className="demoIcon-icon-label">download</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-dragHandleHorizontal mui" />
            <span className="demoIcon-icon-label">dragHandleHorizontal</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-dragHandleVertical mui" />
            <span className="demoIcon-icon-label">dragHandleVertical</span>
          </div>
        </li>

        {/* 1b. All Icons, E - H */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-edit mui" />
            <span className="demoIcon-icon-label">edit</span>
          </div>
        </li>
        {/*                <li className="demoIcon-grid-column">
                    <div className="demoIcon-icon">
                        <Icon className="jv-mIcon jv-exit mui"/>
                        <span className="demoIcon-icon-label">exit</span>
                    </div>
                </li>*/}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-export mui" />
            <span className="demoIcon-icon-label">export</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-file mui" />
            <span className="demoIcon-icon-label">file</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-fileOpen mui" />
            <span className="demoIcon-icon-label">fileOpen</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-filter mui" />
            <span className="demoIcon-icon-label">filter</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-folder mui" />
            <span className="demoIcon-icon-label">folder</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-gear mui" />
            <span className="demoIcon-icon-label">gear</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-gears mui" />
            <span className="demoIcon-icon-label">gears</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-grid mui" />
            <span className="demoIcon-icon-label">grid</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-hamburger mui" />
            <span className="demoIcon-icon-label">hamburger</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-hashtag mui" />
            <span className="demoIcon-icon-label">hashtag</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-home mui" />
            <span className="demoIcon-icon-label">home</span>
          </div>
        </li>

        {/* 1c. All Icons, I - L */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageALeft mui" />
            <span className="demoIcon-icon-label">imageALeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageACenter mui" />
            <span className="demoIcon-icon-label">imageACenter</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageARight mui" />
            <span className="demoIcon-icon-label">imageARight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageATop mui" />
            <span className="demoIcon-icon-label">imageATop</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageAMiddle mui" />
            <span className="demoIcon-icon-label">imageAMiddle</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-imageABottom mui" />
            <span className="demoIcon-icon-label">imageABottom</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-import mui" />
            <span className="demoIcon-icon-label">import</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-info mui" />
            <span className="demoIcon-icon-label">info</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-infoRound mui" />
            <span className="demoIcon-icon-label">infoRound</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-inputControl mui" />
            <span className="demoIcon-icon-label">inputControl</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-invert mui" />
            <span className="demoIcon-icon-label">invert</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-join mui" />
            <span className="demoIcon-icon-label">join</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-joinFull mui" />
            <span className="demoIcon-icon-label">joinFull</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-joinInner mui" />
            <span className="demoIcon-icon-label">joinInner</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-joinLeft mui" />
            <span className="demoIcon-icon-label">joinLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-joinRight mui" />
            <span className="demoIcon-icon-label">joinRight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-kebab mui" />
            <span className="demoIcon-icon-label">kebab</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-lineArrow mui" />
            <span className="demoIcon-icon-label">lineArrow</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-lineDots mui" />
            <span className="demoIcon-icon-label">lineDots</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-link mui" />
            <span className="demoIcon-icon-label">link</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-linkExternal mui" />
            <span className="demoIcon-icon-label">linkExternal</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-list mui" />
            <span className="demoIcon-icon-label">list</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-loading mui" />
            <span className="demoIcon-icon-label">loading</span>
          </div>
        </li>

        {/* 1d. All Icons, M - P */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-maximize mui" />
            <span className="demoIcon-icon-label">maximize</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-meatball mui" />
            <span className="demoIcon-icon-label">meatball</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-message mui" />
            <span className="demoIcon-icon-label">message</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-minimize mui" />
            <span className="demoIcon-icon-label">minimize</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-minus mui" />
            <span className="demoIcon-icon-label">minus</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-minusSquare mui" />
            <span className="demoIcon-icon-label">minusSquare</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-notifications mui" />
            <span className="demoIcon-icon-label">notifications</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-notificationsAdd mui" />
            <span className="demoIcon-icon-label">notificationsAdd</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorAdd mui" />
            <span className="demoIcon-icon-label">operatorAdd</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorAnd mui" />
            <span className="demoIcon-icon-label">operatorAnd</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorColon mui" />
            <span className="demoIcon-icon-label">operatorColon</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorDivide mui" />
            <span className="demoIcon-icon-label">operatorDivide</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorEqual mui" />
            <span className="demoIcon-icon-label">operatorEqual</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorGreaterEqual mui" />
            <span className="demoIcon-icon-label">operatorGreaterEqual</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorGreaterThan mui" />
            <span className="demoIcon-icon-label">operatorGreaterThan</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorIn mui" />
            <span className="demoIcon-icon-label">operatorIn</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorLessEqual mui" />
            <span className="demoIcon-icon-label">operatorLessEqual</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorLessThan mui" />
            <span className="demoIcon-icon-label">operatorLessThan</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorMultiply mui" />
            <span className="demoIcon-icon-label">operatorMultiply</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorNot mui" />
            <span className="demoIcon-icon-label">operatorNot</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorNotEqual mui" />
            <span className="demoIcon-icon-label">operatorNotEqual</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorOr mui" />
            <span className="demoIcon-icon-label">operatorOr</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorParenLeft mui" />
            <span className="demoIcon-icon-label">operatorParenLeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorParenRight mui" />
            <span className="demoIcon-icon-label">operatorParenRight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorPercent mui" />
            <span className="demoIcon-icon-label">operatorPercent</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-operatorSubtract mui" />
            <span className="demoIcon-icon-label">operatorSubtract</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-plus mui" />
            <span className="demoIcon-icon-label">plus</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-plusSquare mui" />
            <span className="demoIcon-icon-label">plusSquare</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-properties mui" />
            <span className="demoIcon-icon-label">properties</span>
          </div>
        </li>

        {/* 1e. All Icons, Q - T */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-query mui" />
            <span className="demoIcon-icon-label">query</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-redo mui" />
            <span className="demoIcon-icon-label">redo</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-refresh mui" />
            <span className="demoIcon-icon-label">refresh</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-save mui" />
            <span className="demoIcon-icon-label">save</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-search mui" />
            <span className="demoIcon-icon-label">search</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-searchClear mui" />
            <span className="demoIcon-icon-label">searchClear</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-slideIn mui" />
            <span className="demoIcon-icon-label">slideIn</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-slideOut mui" />
            <span className="demoIcon-icon-label">slideOut</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-sort mui" />
            <span className="demoIcon-icon-label">sort</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-star mui" />
            <span className="demoIcon-icon-label">star</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-starOutline mui" />
            <span className="demoIcon-icon-label">starOutline</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-stop mui" />
            <span className="demoIcon-icon-label">stop</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-swap mui" />
            <span className="demoIcon-icon-label">swap</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-switch mui" />
            <span className="demoIcon-icon-label">switch</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-table mui" />
            <span className="demoIcon-icon-label">table</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textALeft mui" />
            <span className="demoIcon-icon-label">textALeft</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textACenter mui" />
            <span className="demoIcon-icon-label">textACenter</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textARight mui" />
            <span className="demoIcon-icon-label">textARight</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textAJustify mui" />
            <span className="demoIcon-icon-label">textAJustify</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textATop mui" />
            <span className="demoIcon-icon-label">textATop</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textAMiddle mui" />
            <span className="demoIcon-icon-label">textAMiddle</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textABottom mui" />
            <span className="demoIcon-icon-label">textABottom</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textAStretch mui" />
            <span className="demoIcon-icon-label">textAStretch</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textBold mui" />
            <span className="demoIcon-icon-label">textBold</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textItalic mui" />
            <span className="demoIcon-icon-label">textItalic</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textUnderline mui" />
            <span className="demoIcon-icon-label">textUnderline</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textStrikethrough mui" />
            <span className="demoIcon-icon-label">textStrikethrough</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textRotate0 mui" />
            <span className="demoIcon-icon-label">textRotate0</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textRotate90 mui" />
            <span className="demoIcon-icon-label">textRotate90</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textRotate180 mui" />
            <span className="demoIcon-icon-label">textRotate180</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-textRotate270 mui" />
            <span className="demoIcon-icon-label">textRotate270</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-treeVertical mui" />
            <span className="demoIcon-icon-label">treeVertical</span>
          </div>
        </li>

        {/* 1f. All Icons, U - Z */}
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-undo mui" />
            <span className="demoIcon-icon-label">undo</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-undoAll mui" />
            <span className="demoIcon-icon-label">undoAll</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-unlink mui" />
            <span className="demoIcon-icon-label">unlink</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-upload mui" />
            <span className="demoIcon-icon-label">upload</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-view mui" />
            <span className="demoIcon-icon-label">view</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-warning mui" />
            <span className="demoIcon-icon-label">warning</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-warningRound mui" />
            <span className="demoIcon-icon-label">warningRound</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-wrench mui" />
            <span className="demoIcon-icon-label">wrench</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-zoomIn mui" />
            <span className="demoIcon-icon-label">zoomIn</span>
          </div>
        </li>
        <li className="demoIcon-grid-column">
          <div className="demoIcon-icon">
            <Icon className="jv-mIcon jv-zoomOut mui" />
            <span className="demoIcon-icon-label">zoomOut</span>
          </div>
        </li>
      </ul>
    </div>
  </>
);

/* ----------------
 *  2. ICON SIZES
 * ---------------- */
export const Sizes = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Icon - Sizes</h1>

    <div className={"demoWrapper demoIcon"}>
      {/* 2a. Small Icons */}
      <div className={"demoSubtitle"}>Small (16px)</div>
      <div className="demoSize demoSizeSmall">
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowDoubleLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowDoubleRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowToLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowToRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowToBottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowToTop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowClosed mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-arrowOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-bookmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-calendar mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-cancel mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-cancelRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-calculatedField mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-calculatedFieldAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretDownLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretUpLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretLeftLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-caretRightLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-chartColumn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-checkmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-checkmarkRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-circleSolid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-clock mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-code mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-createWorkspace mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-crosstab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-database mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-delete mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-domain mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-download mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-dragHandleHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-dragHandleVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-edit mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-export mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-file mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-fileOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-filter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-folder mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-gear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-gears mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-grid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-hamburger mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-hashtag mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-home mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-imageABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-import mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-info mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-infoRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-inputControl mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-invert mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-join mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-joinFull mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-joinInner mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-joinLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-joinRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-kebab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-lineArrow mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-lineDots mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-link mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-linkExternal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-list mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-loading mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-maximize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-meatball mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-message mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-minimize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-minus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-minusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-notifications mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-notificationsAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorAnd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorColon mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorDivide mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorGreaterEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorGreaterThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorLessEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorLessThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorMultiply mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorNot mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorNotEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorOr mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorParenLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorParenRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorPercent mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-operatorSubtract mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-plus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-plusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-properties mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-query mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-redo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-refresh mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-save mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-search mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-searchClear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-slideIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-slideOut mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-sort mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-star mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-starOutline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-stop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-swap mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-switch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-table mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textAJustify mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textAStretch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textBold mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textItalic mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textUnderline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textStrikethrough mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textRotate0 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textRotate90 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textRotate180 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-textRotate270 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-treeHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-treeVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-undo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-undoAll mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-unlink mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-upload mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-view mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-warning mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-warningRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-wrench mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-zoomIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconSmall jv-zoomOut mui" />
        </div>
      </div>

      {/* 2b. Medium Icons */}
      <div className={"demoSubtitle"}>Medium/Default (18px)</div>
      <div className="demoSize demoSizeMedium">
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowDoubleLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowDoubleRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowToLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowToRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowToBottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowToTop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowClosed mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-arrowOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-bookmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-calendar mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-calculatedField mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-calculatedFieldAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-cancel mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-cancelRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretDownLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretUpLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretLeftLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-caretRightLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-chartColumn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-checkmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-checkmarkRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-circleSolid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-clock mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-code mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-createWorkspace mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-crosstab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-database mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-delete mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-domain mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-download mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-dragHandleHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-dragHandleVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-edit mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-export mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-file mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-fileOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-filter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-folder mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-gear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-gears mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-grid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-hamburger mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-hashtag mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-home mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-imageABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-import mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-info mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-infoRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-inputControl mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-invert mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-join mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-joinFull mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-joinInner mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-joinLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-joinRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-kebab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-lineArrow mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-lineDots mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-link mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-linkExternal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-list mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-loading mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-maximize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-meatball mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-message mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-minimize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-minus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-minusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-notifications mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-notificationsAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorAnd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorColon mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorDivide mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorGreaterEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorGreaterThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorLessEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorLessThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorMultiply mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorNot mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorNotEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorOr mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorParenLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorParenRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorPercent mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-operatorSubtract mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-plus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-plusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-properties mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-query mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-redo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-refresh mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-save mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-search mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-searchClear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-slideIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-slideOut mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-sort mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-star mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-starOutline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-stop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-swap mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-switch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-table mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textAJustify mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textAStretch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textBold mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textItalic mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textUnderline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textStrikethrough mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textRotate0 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textRotate90 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textRotate180 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-textRotate270 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-treeHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-treeVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-undo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-undoAll mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-unlink mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-upload mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-view mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-warning mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-warningRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-wrench mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-zoomIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-zoomOut mui" />
        </div>
      </div>

      {/* 2c. Large Icons */}
      <div className={"demoSubtitle"}>Large (20px)</div>
      <div className="demoSize demoSizeLarge">
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowDoubleLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowDoubleRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowToLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowToRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowToBottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowToTop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowClosed mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-arrowOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-bookmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-calendar mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-calculatedField mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-calculatedFieldAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-cancel mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-cancelRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretDown mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretUp mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretDownLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretUpLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretLeftLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-caretRightLarge mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-chartColumn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-checkmark mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-checkmarkRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-circleSolid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-clock mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-code mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-createWorkspace mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-crosstab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-database mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-delete mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-domain mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-download mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-dragHandleHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-dragHandleVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-edit mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-export mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-file mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-fileOpen mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-filter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-folder mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-gear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-gears mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-grid mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-hamburger mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-hashtag mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-home mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-imageABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-import mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-info mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-infoRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-inputControl mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-invert mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-join mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-joinFull mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-joinInner mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-joinLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-joinRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-kebab mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-lineArrow mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-lineDots mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-link mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-linkExternal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-list mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-loading mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-maximize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-meatball mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-message mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-minimize mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-minus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-minusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-notifications mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-notificationsAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorAdd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorAnd mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorColon mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorDivide mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorGreaterEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorGreaterThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorLessEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorLessThan mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorMultiply mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorNot mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorNotEqual mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorOr mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorParenLeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorParenRight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorPercent mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-operatorSubtract mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-plus mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-plusSquare mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-properties mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-query mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-redo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-refresh mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-save mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-search mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-searchClear mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-slideIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-slideOut mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-sort mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-star mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-starOutline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-stop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-swap mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-switch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-table mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textALeft mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textACenter mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textARight mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textAJustify mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textATop mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textAMiddle mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textABottom mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textAStretch mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textBold mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textItalic mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textUnderline mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textStrikethrough mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textRotate0 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textRotate90 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textRotate180 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-textRotate270 mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-treeHorizontal mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-treeVertical mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-undo mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-undoAll mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-unlink mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-upload mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-view mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-warning mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-warningRound mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-wrench mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-zoomIn mui" />
        </div>
        <div className="iconWrapper">
          <Icon className="jv-mIcon jv-mIconLarge jv-zoomOut mui" />
        </div>
      </div>
    </div>
  </>
);
