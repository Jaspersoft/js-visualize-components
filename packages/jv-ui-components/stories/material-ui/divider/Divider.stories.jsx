import "../inputs/inputs.css";
import "./divider.css";
import {
  ButtonGroup,
  Divider,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. HORIZONTAL
 *
 *  2. VERTICAL
 *
 * ----------------------------
 *  last modified Mar 6, 2024
 * ---------------------------- */

export default {
  component: Divider,
  title: "Components/Divider/Design",
};

export const divider = () => (
  <>
    {/* -------------------------
     1. HORIZONTAL DIVIDER
     ------------------------- */}
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Divider</h1>

    <div className={"demoWrapper demoDivider"}>
      <div className={"demoSize"}>
        <div className={"demoSubtitle"}>Horizontal Divider</div>
        <div className={"jv-mInputs jv-mInputsSmall mui"}>
          <TextField
            className={
              "jv-mInput jv-mInputText jv-mInputSmall jv-mInputNarrow jv-mInputInline mui"
            }
            id="outlinedNarrow02"
            label="Text Narrow"
            variant="outlined"
            InputLabelProps={{
              classes: { root: "jv-mInput-label mui" },
              disableAnimation: true,
            }}
            InputProps={{
              classes: { input: "jv-mInput-text mui" },
            }}
          />

          <Divider
            component="div"
            classes={{ root: "jv-mInputs-divider mui" }}
          />

          <div className={"jv-mInputs-group mui"}>
            <div className={"jv-mInputs-group-item mui"}>
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
            </div>
            <div className={"jv-mInputs-group-item mui"}>
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
          </div>

          <Divider
            component="div"
            classes={{ root: "jv-mInputs-divider mui" }}
          />
        </div>
      </div>

      {/* ----------------------
       2. VERTICAL DIVIDER
       ---------------------- */}
      <div className={"demoSize"}>
        <div className={"demoSubtitle"}>Vertical Divider</div>

        <div className="jv-mToolbar-toolset mui">
          <IconButton
            aria-label="schedule"
            className={"jv-mButton jv-mButtonToolbar mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-clock"></span>
          </IconButton>

          <Divider
            orientation="vertical"
            component="div"
            classes={{ root: "jv-mToolbar-divider mui" }}
          />

          <IconButton
            aria-label="undo"
            className={"jv-mButton jv-mButtonToolbar mui"}
          >
            <span className="jv-mButton-icon jv-mIcon mui jv-undo"></span>
          </IconButton>
        </div>

        {/*<Divider orientation="vertical" component="div" classes={{root: "jv-mToolbar-divider mui"}} />*/}
      </div>
    </div>
  </>
);
