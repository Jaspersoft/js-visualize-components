import {
  JVButton,
  JVCheckbox,
  JVCheckboxGroup,
  JVColorPicker,
  JVFormError,
  JVFormHelper,
  JVIcon,
  JVIconButton,
  JVInputAdornment,
  JVPaper,
  JVRadioButton,
  JVRadioGroup,
  JVSelectItem,
  JVSwitch,
  JVTextField,
  JVTypography,
} from "@jaspersoft/jv-ui-components";
// this grid component is used for proper alignment of all variations of input in storybook. That's why directly imported from the
// material-ui.
import { Grid } from "@mui/material";
import { useState } from "react";
import "../css/demoPages.css";
import "./inputs.css";

/* ---------------------------------------------
 *    TABLE OF CONTENTS
 * ---------------------------------------------
 *
 *   01. BROWSE
 *       01a. Small
 *       01b. Medium
 *       01c. Large
 *
 *   02. CHECKBOX
 *       02a. Small
 *       02b. Medium
 *       02c. Large
 *
 *   03. DATE/TIME
 *       03a. Small
 *       03b. Small Inline
 *       03c. Small No Label
 *       03d. Small Range
 *       03e. Medium
 *       03f. Medium Inline
 *       03g. Medium No Label
 *       03h. Medium Range
 *       03i. Large
 *       03j. Large Inline
 *       03k. Large No Label
 *       03l. Large Range
 *       03m. Error Validation
 *       03n. Error Validation Inline
 *       03o. Error Validation No Label
 *       03p. Error Validation Range
 *
 *   04. RADIO
 *       04a. Small
 *       04b. Medium
 *       04c. Large
 *
 *   05. SELECT
 *       05a. Small
 *       05b. Small w/Helper + Error
 *       05c. Small Inline
 *       05d. Small Inline w/Helper + Error
 *       05e. Medium
 *       05f. Medium w/Helper + Error
 *       05g. Medium Inline
 *       05h. Medium Inline w/Helper + Error
 *       05i. Large
 *       05j. Large w/Helper + Error
 *       05k. Large Inline Select
 *       05l. Large Inline w/Helper + Error
 *
 *   06. SWITCH
 *       06a. Small Inline, Label First
 *       06b. Small Inline Disabled, Label First
 *       06c. Small Inline, Label Last
 *       06d. Small Inline Disabled, Label Last
 *       06e. Small No Label
 *       06f. Medium Inline, Label First
 *       06g. Medium Inline Disabled, Label First
 *       06h. Medium Inline, Label Last
 *       06i. Medium Inline Disabled, Label Last
 *       06j. Medium No Label
 *       06k. Large Inline, Label First
 *       06l. Large Inline Disabled, Label First
 *       06m. Large Inline, Label Last
 *       06n. Large Inline Disabled, Label Last
 *       06o. Large No Label
 *
 *   07. TEXT
 *       07a. Small Text Variations
 *       07b. Small Search
 *       07c. Small Number Variations
 *       07d. Small Textarea Variations
 *       07e. Small Error States
 *       07f. Default Text Variations
 *       07g. Default Search
 *       07h. Default Number Variations
 *       07i. Default Textarea Variations
 *       07j. Default Error States
 *       07k. Large Text Variations
 *       07l. Large Search
 *       07m. Large Number Variations
 *       07n. Large Textarea Variations
 *       07o. Large Error States
 *       07p. Small Inline Text Variations
 *       07q. Small Inline Number Variations
 *       07r. Small Inline Textarea Variations
 *       07o. Small Inline Error States
 *
 *   08. COLOR
 *       08a. Small Color
 *       08b. Medium Color
 *       08c. Large Color
 *       08d. Small Inline Color
 *       08e. Medium Inline Color
 *       08f. Large Inline Color
 *
 *   09. REFRESH
 *
 *   10. COMBINATIONS
 *
 *  --------------------------------------------
 *    Last modified Apr 1, 2023
 *  -------------------------------------------- */

export default {
  component: JVTextField,
  title: "Components/Inputs/Component",
};

/* -------------- */
/* 01. BROWSE     */
/* -------------- */
export const InputBrowse = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Browse</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 01a. Small Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <div className="jv-mInput jv-mInputBrowse mui">
            <JVTextField
              label={"URL/repository URI"}
              id={"textFieldId1"}
              value={""}
              size="small"
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />

            <JVButton disableElevation size="small" variant="contained">
              Browse...
            </JVButton>
          </div>
          <JVFormHelper
            id="select-inline-helper-error"
            text="Web address must start with http or https"
          />
          <JVFormError
            id="select-inline-helper-error-error-text"
            text="Error Message."
          />
        </div>

        {/* 01b. Medium Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <div className="jv-mInput jv-mInputBrowse mui">
            <JVTextField
              label={"URL/repository URI"}
              id={"textFieldId2"}
              value={""}
              size="medium"
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />

            <JVButton disableElevation size="medium" variant="contained">
              Browse...
            </JVButton>
          </div>
          <JVFormHelper
            id="select-inline-helper-error"
            text="Web address must start with http or https"
          />
          <JVFormError
            id="select-inline-helper-error-error-text"
            text="Error Message."
          />
        </div>

        {/* 01c. Large Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <div className="jv-mInput jv-mInputBrowse mui">
            <JVTextField
              label={"URL/repository URI"}
              id={"textFieldId3"}
              value={""}
              size="large"
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />

            <JVButton disableElevation size="large" variant="contained">
              Browse...
            </JVButton>
          </div>
          <JVFormHelper
            id="select-inline-helper-error"
            text="Web address must start with http or https"
          />
          <JVFormError
            id="select-inline-helper-error-error-text"
            text="Error Message."
          />
        </div>
      </div>
    </>
  );
};
InputBrowse.storyName = "Browse";

/* ---------------- */
/* 02. CHECKBOX     */
/* ---------------- */
export const InputCheckbox = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Checkbox</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 02a. Small Checkbox*/}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <JVCheckboxGroup
            size="small"
            title="Assign responsibility"
            helperText="Hint text"
            errorMessage="Error Message."
          >
            <JVCheckbox
              label="Gilad Gray"
              CheckboxProps={{
                checked: gilad,
                name: "gilad",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Jason Killian"
              CheckboxProps={{
                checked: jason,
                name: "jason",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Antpoine Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd"
              CheckboxProps={{
                checked: antoine,
                name: "antoine",
                onChange: handleChange,
              }}
            />
          </JVCheckboxGroup>
        </div>

        {/* 02b. Medium Checkbox*/}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <JVCheckboxGroup title="Assign responsibility" helperText="Hint text">
            <JVCheckbox
              label="Gilad Gray"
              CheckboxProps={{
                checked: gilad,
                name: "gilad",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Jason Killian"
              CheckboxProps={{
                checked: jason,
                name: "jason",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Antpoine Llyorc"
              CheckboxProps={{
                checked: antoine,
                name: "antoine",
                onChange: handleChange,
              }}
            />
          </JVCheckboxGroup>
        </div>

        {/* 02c. Large Checkbox */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <JVCheckboxGroup
            size="large"
            title="Assign responsibility"
            helperText="Hint text"
          >
            <JVCheckbox
              label="Gilad Gray"
              CheckboxProps={{
                checked: gilad,
                name: "gilad",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Jason Killian"
              CheckboxProps={{
                checked: jason,
                name: "jason",
                onChange: handleChange,
              }}
            />
            <JVCheckbox
              label="Antpoine Llyorc"
              CheckboxProps={{
                checked: antoine,
                name: "antoine",
                onChange: handleChange,
              }}
            />
          </JVCheckboxGroup>
        </div>
      </div>
    </>
  );
};
InputCheckbox.storyName = "Checkbox";

/* ------------------ */
/* 03. DATE/TIME      */
/* ------------------ */
export const inputDatetime = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Date/Time</h1>

      <div className={"demoWrapper demoInput"}>
        {/* SMALL DATE/TIME */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>

          {/* 03a. Small Date/Time */}
          <p className={"demoSubtitle-2"}>Basic</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            size="small"
            id=""
            label="Date"
            type="date"
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size="small"
            id=""
            label="Time"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            size="small"
            id=""
            label="Datetime"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03b. Small Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            inline
            size={"small"}
            id=""
            label="Date inline"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size={"small"}
            inline
            id=""
            label="Time inline"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            inline
            size={"small"}
            id=""
            label="Datetime inline"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03c. Small No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            size={"small"}
            id=""
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size={"small"}
            id=""
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            size={"small"}
            id=""
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03d. Small Date/Time Range */}
          <p className={"demoSubtitle-2"}>Range</p>
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"small"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                size={"small"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"small"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                size={"small"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* date range only */}
          <div className={"jv-mControl jv-mControlRange jv-uWidth-125px mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"small"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"small"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* datetime range */}
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                size={"small"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                size={"small"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* MEDIUM DATE/TIME */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>

          {/* 03e. Medium Date/Time */}
          <p className={"demoSubtitle-2"}>Basic</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            id=""
            label="Date"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            id=""
            label="Time"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            id=""
            label="Datetime"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03f. Medium Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            inline
            id=""
            label="Date inline"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            inline
            id=""
            label="Time inline"
            type="time"
            variant="outlined"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            inline
            id=""
            label="Datetime inline"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03g. Medium No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            id=""
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            id=""
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            id=""
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03h. Medium Date/Time Range */}
          <p className={"demoSubtitle-2"}>Range</p>
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* date range only */}
          <div className={"jv-mControl jv-mControlRange jv-uWidth-125px mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* datetime range */}
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* LARGE DATE/TIME */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>

          {/* 03i. Large Date/Time */}
          <p className={"demoSubtitle-2"}>Basic</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            size={"large"}
            id=""
            label="Date"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size={"large"}
            id=""
            label="Time"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            size={"large"}
            id=""
            label="Datetime"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03j. Large Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            inline
            size={"large"}
            id=""
            label="Date inline"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size={"large"}
            inline
            id=""
            label="Time inline"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            inline
            size={"large"}
            id=""
            label="Datetime inline"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03k. Large No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            size={"large"}
            id=""
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            size={"large"}
            id=""
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            size={"large"}
            id=""
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03l. Large Range Date/Time */}
          <p className={"demoSubtitle-2"}>Range</p>
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"large"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                size={"large"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"large"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                size={"large"}
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* date range only */}
          <div className={"jv-mControl jv-mControlRange jv-uWidth-125px mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"large"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"large"}
                id=""
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* datetime range */}
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                size={"large"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                size={"large"}
                id=""
                type="datetime-local"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
        </div>

        {/* ERROR VALIDATION DATE/TIME */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Error Validation</p>

          {/* 03i. Error Validation Date/Time */}
          <p className={"demoSubtitle-2"}>Basic</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            error={"You have made an error."}
            helperText="You can have helper text here."
            id=""
            label="Date"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            error={"You have made an error."}
            id=""
            label="Time"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            error={"You have made an error."}
            helperText="You can have helper text here."
            id=""
            label="Datetime"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03n. Error Validation Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            error={"This is an error message for an inline date input."}
            id=""
            inline
            label="Date inline"
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            error={
              "This error is a separate component outside its related text field."
            }
            inline
            helperText="helper text can go here."
            id=""
            label="Time inline"
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            error={"This is an error message for an inline datetime input."}
            id=""
            inline
            label="Datetime inline"
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03o. Error Validation No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <JVTextField
            textFieldClassName={"jv-mInputDate"}
            error={"Error message for date input."}
            id=""
            type="date"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputTime"}
            error={"Error message for time input."}
            id=""
            type="time"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <JVTextField
            textFieldClassName={"jv-mInputDatetime"}
            error={"Error message for datetime input."}
            id=""
            type="datetime-local"
            InputLabelProps={{
              disableAnimation: true,
            }}
          />
          <div className="demoSpacer8"> </div>

          {/* 03p. Error Validation Range Date/Time */}
          <p className={"demoSubtitle-2"}>Range</p>
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                error="Error message for date input."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                error="Error message for time input."
                id=""
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                error="Error message for date input."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                id=""
                type="time"
                error="Error message for time input."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* date range only */}
          <div className={"jv-mControl jv-mControlRange jv-uWidth-125px mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                error="Error message."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                error="Error message."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"> </div>
          {/* datetime range */}
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                error="Error message for datetime input."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <JVTypography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </JVTypography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                error="Error message for datetime input."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
inputDatetime.storyName = "Date/Time";

/* -------------- */
/*  04. RADIO     */
/* -------------- */
export const inputRadio = () => {
  const [value, setValue] = useState("female");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Radio Buttons</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 04a. Small Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <JVRadioGroup
            aria-label="gender"
            size="small"
            title="Gender"
            RadioGroupProps={{
              name: "gender1",
              value: value,
              onChange: handleChange,
            }}
          >
            <JVRadioButton label="Female" value="female" />
            <JVRadioButton label="Male" value="male" />
            <JVRadioButton label="Other" value="other" />
            <JVRadioButton
              label="(Disabled option)"
              value="disabled"
              disabled
            />
          </JVRadioGroup>
          <JVFormHelper id="select-inline-helper-error" text="Hint text" />
        </div>

        {/* 04b. Medium Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <JVRadioGroup
            aria-label="gender"
            title="Gender"
            RadioGroupProps={{
              name: "gender1",
              value: value,
              onChange: handleChange,
            }}
          >
            <JVRadioButton label="Female" value="female" />
            <JVRadioButton label="Male" value="male" />
            <JVRadioButton label="Other" value="other" />
            <JVRadioButton
              label="(Disabled option)"
              value="disabled"
              disabled
            />
          </JVRadioGroup>
          <JVFormHelper id="select-inline-helper-error" text="Hint text" />
        </div>

        {/* 04c. Large Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <JVRadioGroup
            aria-label="gender"
            name="gender1"
            size="large"
            title="Gender"
            RadioGroupProps={{
              name: "gender1",
              value: value,
              onChange: handleChange,
            }}
          >
            <JVRadioButton label="Female" value="female" />
            <JVRadioButton label="Male" value="male" />
            <JVRadioButton label="Other" value="other" />
            <JVRadioButton
              label="(Disabled option)"
              value="disabled"
              disabled
            />
          </JVRadioGroup>
          <JVFormHelper id="select-inline-helper-error" text="Hint text" />
        </div>
      </div>
    </>
  );
};
inputRadio.storyName = "Radio Buttons";

/* -------------- */
/*  05. SELECT    */
/* -------------- */
export const inputSelect = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Select</h1>

      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInput"}>
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Small</p>

            <p className={"demoSubtitle-2"}>Basic</p>
            {/* 05a. Small Select */}
            <JVTextField
              size="small"
              defaultValue="bottom"
              id="select"
              label="Normal"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05b. Small Select with Helper + Error */}
            <JVTextField
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              size="small"
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Helper and error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
            <div className="demoSpacer12"> </div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05c. Small Inline Select */}
            <JVTextField
              size="small"
              inline
              defaultValue="bottom"
              id="select-inline"
              label="Inline"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05d. Small Inline Select w/ Helper + Error */}
            <JVTextField
              inline
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              size="small"
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Inline with Helper and Error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Medium</p>

            {/* 05e. Medium Select */}
            <p className={"demoSubtitle-2"}>Basic</p>
            <JVTextField
              defaultValue="bottom"
              id="select"
              label="Normal"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05f. Medium Select w/Helper + Error */}
            <JVTextField
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Helper and error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
            <div className="demoSpacer12"> </div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05g. Medium Inline Select */}
            <JVTextField
              inline
              defaultValue="bottom"
              id="select"
              label="Standard Inline"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05h. Medium Inline Select w/Helper + Error  */}
            <JVTextField
              inline
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Standard Inline with Helper and error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Large</p>

            <p className={"demoSubtitle-2"}>Basic</p>
            {/* 05i. Large Select */}
            <JVTextField
              size="large"
              defaultValue="bottom"
              id="select"
              label="Large"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05j. Large Select w/ Helper + Error */}
            <JVTextField
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              size="large"
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Large with Helper and Error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
            <div className="demoSpacer12"> </div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05k. Large Inline Select */}
            <JVTextField
              size="large"
              inline
              defaultValue="bottom"
              id="select"
              label="Large Inline"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>

            {/* 05l. Large Inline Select w/Helper + Error */}
            <JVTextField
              inline
              error="This error is a separate component outside its related text field."
              helperText={"Helper text"}
              size="large"
              defaultValue="bottom"
              id="select-inline-helper-error"
              label="Large Inline with Helper and error"
              select
            >
              <JVSelectItem value="top">Top</JVSelectItem>
              <JVSelectItem value="bottom">Bottom</JVSelectItem>
              <JVSelectItem value="right">Right</JVSelectItem>
              <JVSelectItem value="left">Left</JVSelectItem>
              <JVSelectItem value="none">None</JVSelectItem>
            </JVTextField>
          </div>
        </div>
      </form>
    </>
  );
};
inputSelect.storyName = "Select";

/* -------------- */
/*  06. SWITCH    */
/* -------------- */
export const inputSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (_, checked) => {
    setChecked(checked);
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Switch</h1>

      <div className={"demoWrapper demoInput"}>
        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Small</p>

          {/* 06a. Small Inline Switch, Label First */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <JVSwitch
            size="small"
            checked={checked}
            label="Label first"
            name="checkedB"
            onChange={handleChange}
          />
          <JVSwitch
            size="small"
            checked={checked}
            label="Small inline switch control with label first and label wraps to multiple lines"
            name="checkedB"
            onChange={handleChange}
          />

          {/* 06b. Small Inline Disabled Switch, Label First */}
          <JVSwitch
            disabled
            size="small"
            checked={false}
            label="Label first disabled"
            name="checkedB"
            onChange={handleChange}
          />

          {/* 06c. Small Inline Switch, Label Last */}
          {/* TODO: add component here */}

          {/* 06d. Small Inline Disabled Switch, Label Last */}
          {/* TODO: add component here */}

          <div className="demoSpacer8"> </div>
          <p className={"demoSubtitle-2"}>No Label</p>

          {/* 06e. Small No Label */}
          <JVSwitch
            checked={true}
            noLabel
            size="small"
            name="checkedB"
            labelPlacement="end"
            onChange={handleChange}
          />
          <div className="demoSpacer8"> </div>
        </div>

        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Medium</p>
          <p className={"demoSubtitle-2"}>Inline</p>

          {/* 06f. Medium Inline Switch, Label First */}
          <JVSwitch
            checked={checked}
            label="Label first"
            name="checkedA"
            onChange={handleChange}
          />
          <JVSwitch
            checked={checked}
            label="Medium inline switch with label first and label wraps to multiple lines"
            name="checkedA"
            onChange={handleChange}
          />

          {/* 06g. Medium Inline Disabled Switch, Label First */}
          <JVSwitch
            disabled
            checked={true}
            label="Label first disabled"
            name="checkedA"
            onChange={handleChange}
          />

          {/* 06h. Medium Inline Switch, Label Last */}
          {/* TODO: add component here */}

          {/* 06i. Medium Inline Disabled Switch, Label Last */}
          {/* TODO: add component here */}

          <div className="demoSpacer8"> </div>
          <p className={"demoSubtitle-2"}>No Label</p>

          {/* 06j. Medium No Label Switch */}
          <JVSwitch
            checked={true}
            noLabel
            name="checkedB"
            labelPlacement="end"
            onChange={handleChange}
          />
          <div className="demoSpacer8"> </div>
        </div>

        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Large</p>
          {/* TODO: Add large switch components */}

          {/* 06k. Large Inline Switch, Label First */}

          {/* 06l. Large Inline Disabled, Label First */}

          {/* 06m. Large Inline, Label Last */}

          {/* 06n. Large Inline Disabled, Label Last */}

          {/* 06o. Large No Label */}
        </div>
      </div>
    </>
  );
};
inputSwitch.storyName = "Switch";

/* -------------- */
/*  07. TEXT      */
/* -------------- */
export const inputText = () => {
  const [searchText, setSearchText] = useState("");
  const onClearBtnClick = () => {
    setSearchText("");
  };
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Text</h1>
      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInputText"}>
          {/* SMALL TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <JVPaper>
                <p className={"demoSubtitle"}>Small</p>
                <div className={"demoSizeWrapper"}>
                  {/* Column 1 Small Text */}
                  {/* 07a. Small Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* small text */}
                    <JVTextField
                      WrapperProps={{ "data-name": "test" }}
                      size="small"
                      id="outlined01"
                      label="Text"
                    />

                    {/* small text narrow */}
                    <JVTextField
                      WrapperProps={{ "data-name": "test" }}
                      size="small"
                      width="narrow"
                      id="outlined-narrow01"
                      label="Text narrow"
                    />

                    {/* small text, read-only */}
                    <JVTextField
                      size="small"
                      defaultValue="Hello World"
                      id="outlined-read-only-input02"
                      label="Read only"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    {/* small text + helper */}
                    <JVTextField
                      size="small"
                      helperText="Web address must start with http or https start with http or https"
                      id="outlined-helperText01"
                      label="Text with Helper"
                    />
                    <div className="demoSpacer12"> </div>

                    {/* inline contained */}
                    <JVTextField
                      size="small"
                      id="labelContainedTextField"
                      label="Inline contained text"
                      placeholder="All"
                      variant="outlined"
                      inline
                      onChange={(e) => setText(e.target.value)}
                      labelContained
                      InputLabelProps={{
                        disableAnimation: true,
                        shrink: true,
                      }}
                    />
                    <div className="demoSpacer12"> </div>
                  </div>

                  {/* Column 2 Small Text */}
                  <div className={"demoSize"}>
                    {/* small text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <JVTextField
                      size={"small"}
                      defaultValue="Hello World"
                      disabled
                      id="outlined-disabled02"
                      label="Disabled"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className="demoSpacer14"> </div>

                    {/* 07b. Small Search */}
                    <p className={"demoSubtitle-2"}>Search</p>
                    <JVTextField
                      placeholder="Search"
                      textFieldClassName={"jv-mInputSearch mui"}
                      id="search02"
                      size="small"
                      variant="outlined"
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      InputProps={{
                        classes: { input: "jv-mInput-text mui" },
                        endAdornment: (
                          <JVInputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment"}
                          >
                            {searchText.length > 0 && (
                              <JVIconButton
                                icon="searchClear"
                                color="default"
                                aria-label="searchClear"
                                tabIndex={0}
                                onClick={onClearBtnClick}
                              />
                            )}
                            <JVIcon icon="search" tabIndex={-1} />
                          </JVInputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-Mui-focused" },
                        disableAnimation: true,
                      }}
                    />

                    <div className="demoSpacer22"> </div>

                    {/* 07c. Small Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* small number */}
                    <JVTextField
                      size={"small"}
                      id="outlined-number02"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                        disableAnimation: true,
                      }}
                    />
                    {/* small number, narrow */}
                    <JVTextField
                      size={"small"}
                      width={"narrow"}
                      id="outlined-numberNarrow02"
                      label="Number narrow"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                        disableAnimation: true,
                      }}
                    />
                  </div>

                  {/* Column 3 Small Text  */}
                  {/* 07d. Small Textarea Variations */}
                  {/* small textarea */}
                  <div className={"demoSize"}>
                    {/* textarea, constant height */}
                    {/* (type and hit enter to increase height) */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <JVTextField
                        size="small"
                        id="outlined-textarea-static-03"
                        multiline
                        rows={5} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}> </div>
                    {/* small textarea, auto height */}
                    <div>
                      <JVTextField
                        /*error*/
                        size="small"
                        id="outlined-textarea-dynamic-03"
                        multiline
                        rowsMax={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                      />
                      {/*<FormHelperText
                                                className={"jv-mInput-error mui"} id="outlined-helperErrorText034-error-text">
                                                This error is a separate component outside its related text field.
                                            </FormHelperText>*/}
                    </div>
                    <div className={"demoSpacer8"}> </div>
                    {/* small textarea, read-only */}
                    <div>
                      <JVTextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        size="small"
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={2} // <--- this property sets fixed height
                        label="Text Area read only"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* Column 4 Small Text */}
                  {/* 07e. Small Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* Text + Error
                                        <JVTextField
                                            size="small"
                                            error="You have made an error"
                                            // helperText="You have made an error"
                                            id="outlined-error01"
                                            label="Text with Error"
                                        /> */}

                    {/* Text + Empty Error
                                        <JVTextField
                                            size="small"
                                            error
                                            id="outlined-error0122"
                                            label="Text with an empty Error"
                                        />*/}

                    {/* Text + Hint + Error */}
                    <JVTextField
                      size="small"
                      error="This error is a separate component outside its related text field."
                      helperText="You can have helper text or error text, but not both"
                      id="outlined-helperErrorText01"
                      label="Text with Helper and Error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* small number, error state */}
                    <JVTextField
                      size={"small"}
                      error
                      id="outlined-numberError02"
                      label="Number with error"
                      type="number"
                      helperText={"Number must be between 0 and 100"}
                      InputLabelProps={{
                        shrink: true,
                        disableAnimation: true,
                      }}
                      InputProps={{
                        "aria-describedby": "outlined-numberError02-error-text",
                      }}
                    />
                    <div className="demoSpacer8"> </div>

                    {/* small textarea, error state */}
                    <JVTextField
                      error={"You have made an error"}
                      size={"small"}
                      id="outlined-textarea-dynamic-03"
                      multiline
                      rows={2}
                      label="Text Area with error"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                  </div>
                </div>
              </JVPaper>
            </Grid>
          </Grid>

          {/* MEDIUM TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <JVPaper>
                <p className={"demoSubtitle"}>Medium</p>
                <div className={"demoSizeWrapper"}>
                  {/* Column 1 Medium Text */}
                  {/* 07f. Medium Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* medium text */}
                    <JVTextField id="" label="Text" />

                    {/* medium text narrow */}
                    <JVTextField
                      width="narrow"
                      id="outlined-narrow03"
                      label="Text narrow"
                    />

                    {/* medium text, read-only */}
                    <JVTextField
                      defaultValue="Hello World"
                      id="outlined-read-only-input03"
                      label="Read only"
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    {/* medium text + helper */}
                    <JVTextField
                      helperText="Web address must start with http or https start with http or https"
                      id="outlined-helperText03"
                      label="Text with helper"
                    />
                    <div className="demoSpacer12"> </div>

                    {/* medium inline contained */}
                    <JVTextField
                      inline
                      labelContained
                      id="outlined02"
                      label="Inline contained text"
                      placeholder="All"
                      onChange={(e) => setText(e.target.value)}
                      InputLabelProps={{
                        disableAnimation: true,
                        shrink: true,
                      }}
                    />
                    <div className="demoSpacer12"> </div>
                  </div>

                  {/* column 2 Medium Text*/}
                  <div className={"demoSize"}>
                    {/* medium text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <JVTextField
                      defaultValue="Hello World"
                      disabled
                      id="outlined-disabled03"
                      label="Disabled"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className="demoSpacer14"> </div>

                    {/* 07g. medium Search */}
                    {/*<FormControl className={"jv-mControlSearch mui"}>*/}
                    <p className={"demoSubtitle-2"}>Search</p>
                    <JVTextField
                      placeholder="Search"
                      textFieldClassName={"jv-mInputSearch mui"}
                      id="search02"
                      variant="outlined"
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      InputProps={{
                        classes: { input: "jv-mInput-text mui" },
                        endAdornment: (
                          <JVInputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment"}
                          >
                            {searchText.length > 0 && (
                              <JVIconButton
                                icon="searchClear"
                                color="default"
                                aria-label="searchClear"
                                tabIndex={0}
                                onClick={onClearBtnClick}
                              />
                            )}
                            <JVIcon icon="search" tabIndex={-1} />
                          </JVInputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-Mui-focused" },
                        disableAnimation: true,
                      }}
                    />
                    {/*</FormControl>*/}
                    <div className="demoSpacer22"> </div>

                    {/* 07h. medium Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* medium number */}
                    <JVTextField
                      id="outlined-number03"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    {/* medium number, narrow */}
                    <JVTextField
                      id="outlined-numberNarrow02"
                      label="Number narrow"
                      type="number"
                      width={"narrow"}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        disableAnimation: true,
                      }}
                    />
                  </div>

                  {/* Column 3 Medium Text  */}
                  {/* 07i. Medium Textarea Variations */}
                  {/* medium textarea */}
                  <div className={"demoSize"}>
                    {/* Text Area with constant height */}
                    {/* type and hit enter to increase height */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <JVTextField
                      id="outlined-textarea-static-03"
                      multiline
                      rows={5} // <--- this property sets fixed height
                      label="Text Area fixed height"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className={"demoSpacer8"}> </div>

                    {/* medium textarea, auto height */}
                    <JVTextField
                      id="outlined-textarea-dynamic-03"
                      multiline
                      rowsMax={4}
                      label="Text Area auto height"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className={"demoSpacer8"}> </div>

                    {/* medium textarea, read-only */}
                    <JVTextField
                      id="outlined-textarea-static-03"
                      defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                      multiline
                      rows={2} // <--- this property sets fixed height
                      label="Text Area read only"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>

                  {/* Column 4 medium Text  */}
                  {/* 07j. Medium Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* medium Text + Error */}
                    <JVTextField
                      error="You have made an error"
                      // helperText="You have made an error"
                      id="outlined-error03"
                      label="Text with error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* medium Text + Empty Error
                                        <JVTextField
                                            error
                                            id="outlined-error0122"
                                            label="Text with an empty Error"
                                        /> */}

                    {/* medium text + helper + error */}
                    <JVTextField
                      error="This error is a separate component outside its related text field."
                      helperText="You can have helper text or error text, but not both"
                      id="outlined-helperErrorText03"
                      label="Text with helper and error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* medium number, error state */}
                    <JVTextField
                      error
                      id="outlined-numberError02"
                      label="Number with error"
                      type="number"
                      helperText={"Number must be between 0 and 100"}
                      InputLabelProps={{
                        shrink: true,
                        disableAnimation: true,
                      }}
                      InputProps={{
                        "aria-describedby": "outlined-numberError02-error-text",
                      }}
                    />
                    <div className="demoSpacer8"> </div>

                    {/* medium textarea, error state */}
                    <JVTextField
                      error={"You have made an error"}
                      id="outlined-textarea-dynamic-03"
                      multiline
                      rows={2}
                      label="Text Area with error"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                  </div>
                </div>
              </JVPaper>
            </Grid>
          </Grid>

          {/* LARGE TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <JVPaper>
                <p className={"demoSubtitle"}>Large</p>

                <div className={"demoSizeWrapper"}>
                  {/* column 1 Large Text */}
                  {/* 07k. Large Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* large text */}
                    <JVTextField
                      WrapperProps={{ "data-name": "test" }}
                      size="large"
                      id="outlined01"
                      label="Text"
                    />

                    {/* large text, narrow */}
                    <JVTextField
                      WrapperProps={{ "data-name": "test" }}
                      size="large"
                      width="narrow"
                      id="outlined-narrow01"
                      label="Text narrow"
                    />

                    {/* Read Only */}
                    <JVTextField
                      size="large"
                      defaultValue="Hello World"
                      id="outlined-read-only-input01"
                      label="Read Only"
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    {/* large text + helper */}
                    <JVTextField
                      size="large"
                      helperText="Web address must start with http or https start with http or https"
                      id="outlined-helperText01"
                      label="Text with Helper"
                    />
                    <div className="demoSpacer12"> </div>

                    {/* large text - inline contained */}
                    <JVTextField
                      size="large"
                      inline
                      labelContained
                      id="outlined02"
                      label="Inline contained text"
                      placeholder="All"
                      InputLabelProps={{
                        disableAnimation: true,
                        shrink: true,
                      }}
                    />
                    <div className="demoSpacer12"> </div>
                  </div>

                  {/* Column 2 Large Text  */}
                  <div className={"demoSize"}>
                    {/* large text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <JVTextField
                      size={"large"}
                      defaultValue="Hello World"
                      disabled
                      id="outlined-disabled01"
                      label="Disabled"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className="demoSpacer14"> </div>

                    {/* 07l. Large Search */}
                    {/*<FormControl className={"jv-mControlSearch jv-mControlLarge mui"}>*/}
                    <p className={"demoSubtitle-2"}>Search</p>
                    <JVTextField
                      placeholder="Search"
                      size={"large"}
                      textFieldClassName={"jv-mInputSearch"}
                      id="search02"
                      variant="outlined"
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: (
                          <JVInputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment"}
                          >
                            {searchText.length > 0 && (
                              <JVIconButton
                                icon="searchClear"
                                color="default"
                                aria-label="searchClear"
                                tabIndex={0}
                                onClick={onClearBtnClick}
                              />
                            )}
                            <JVIcon icon="search" tabIndex={-1} />
                          </JVInputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-Mui-focused" },
                        disableAnimation: true,
                      }}
                    />
                    {/*</FormControl>*/}
                    <div className="demoSpacer12"> </div>

                    <div className="demoSearchGlobal">
                      <JVTextField
                        size={"large"}
                        textFieldClassName={
                          "jv-mInputSearch jv-mInputSearchGlobal"
                        }
                        id="search02m"
                        variant="outlined"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                        InputProps={{
                          endAdornment: (
                            <JVInputAdornment
                              position="end"
                              className={"jv-mInputSearch-adornment"}
                            >
                              {searchText.length > 0 && (
                                <JVIconButton
                                  icon="searchClear"
                                  color="default"
                                  aria-label="searchClear"
                                  tabIndex={0}
                                  onClick={onClearBtnClick}
                                />
                              )}
                              <JVIcon icon="search" tabIndex={-1} />
                            </JVInputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          classes: { root: "jv-Mui-focused" },
                          disableAnimation: true,
                        }}
                      />
                    </div>

                    <div className="demoSpacer22"> </div>

                    {/* 07m. Large Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* large number */}
                    <JVTextField
                      size="large"
                      id="outlined-number01"
                      label="Number"
                      type="number"
                    />

                    {/* large number, narrow */}
                    <JVTextField
                      size="large"
                      width="narrow"
                      id="outlined-numberNarrow01"
                      label="Number narrow"
                      type="number"
                    />
                  </div>

                  {/* Column 3 Large Text */}
                  {/* 07n. Large Textarea Variations */}
                  {/* large textarea */}
                  <div className={"demoSize"}>
                    {/* Text Area with constant height */}
                    {/* (type and hit enter to increase height) */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <JVTextField
                      id="outlined-textarea-static-03"
                      size={"large"}
                      multiline
                      rows={5} // <--- this property sets fixed height
                      label="Text Area fixed height"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className={"demoSpacer8"}> </div>

                    {/* large textarea, auto height */}
                    <JVTextField
                      /*error*/
                      id="outlined-textarea-dynamic-03"
                      size={"large"}
                      multiline
                      rowsMax={4}
                      label="Text Area auto height"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                    <div className={"demoSpacer8"}> </div>

                    {/* default textarea, read-only */}
                    <JVTextField
                      id="outlined-textarea-static-03"
                      size={"large"}
                      defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                      multiline
                      rows={2} // <--- this property sets fixed height
                      label="Text Area read only"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>

                  {/* Column 4 Large Text  */}
                  {/* 07o. Large Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* Text + Error */}
                    <JVTextField
                      size="large"
                      error="You have made an error"
                      // helperText="You have made an error"
                      id="outlined-error01"
                      label="Text with Error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* large text + empty error
                                        <JVTextField
                                            size="large"
                                            error
                                            id="outlined-error0122"
                                            label="Text with an empty Error"
                                        />
                                        <div className="demoSpacer8"> </div> */}

                    {/* large text + helper + error */}
                    <JVTextField
                      size="large"
                      error="This error is a separate component outside its related text field."
                      helperText="You can have helper text or error text, but not both"
                      id="outlined-helperErrorText01"
                      label="Text with Helper and Error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* Number + Error */}
                    <JVTextField
                      size="large"
                      error="Number must be between 0 and 100"
                      type="number"
                      id="outlined-numberError02"
                      label="Number with Error"
                    />
                    <div className="demoSpacer8"> </div>

                    {/* large textarea with error */}
                    <JVTextField
                      error
                      helperText={" You have made an error"}
                      id="outlined-textarea-dynamic-03"
                      size={"large"}
                      multiline
                      rows={2}
                      label="Text Area with error"
                      variant="outlined"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                  </div>
                </div>
              </JVPaper>
            </Grid>
          </Grid>

          {/* INLINE TEXT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <JVPaper>
                <p className={"demoSubtitle"}>Small Inline</p>
                <div className={"demoSizeWrapper"}>
                  {/* Column 1 Small Inline Text */}
                  {/* 07p. Small Inline Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* small inline text */}
                    <JVTextField
                      size="small"
                      inline
                      id="outlined02"
                      label="Text"
                    />

                    {/* small inline text + long label + helper */}
                    <JVTextField
                      size="small"
                      inline
                      helperText="Helper text that has many words and ends up being multiple lines long"
                      id="outlined-helperText02"
                      label="Text input with wordy label that runs to three lines long"
                    />

                    {/* small inline text narrow */}
                    <JVTextField
                      size="small"
                      width="narrow"
                      inline
                      id="outlinedNarrow02"
                      label="Text Narrow"
                    />

                    {/* small inline text, read-only */}
                    <JVTextField
                      size="small"
                      inline
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      id="outlined-read-only-input02"
                      label="Read Only"
                    />
                  </div>

                  {/* Column 2 - Small Inline Text */}
                  <div className={"demoSize"}>
                    {/* small inline text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <JVTextField
                      defaultValue="Hello World"
                      size="small"
                      inline
                      disabled
                      id="outlined-disabled02"
                      label="Disabled"
                    />
                    <div className="demoSpacer14"> </div>

                    {/* 07q. Small Inline Number Variations */}
                    {/* small inline number */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    <JVTextField
                      size="small"
                      inline
                      type="number"
                      id="outlined-number02"
                      label="Number"
                    />

                    {/* small inline number narrow */}
                    <JVTextField
                      size="small"
                      width="narrow"
                      inline
                      type="number"
                      id="outlined-number02"
                      label="Number Narrow"
                    />
                  </div>

                  {/* Column 3 - Small Inline Text  */}
                  {/* 07r. Small Inline Textarea Variations */}
                  {/* small inline textarea */}
                  <div className={"demoSize"}>
                    {/* textarea, constant height */}
                    {/* (type and hit enter to increase height) */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <JVTextField
                        size="small"
                        inline
                        id="outlined-textarea-static-03"
                        multiline
                        rows={5} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}> </div>

                    {/* small textarea, auto height */}
                    <div>
                      <JVTextField
                        /*error*/
                        size="small"
                        inline
                        id="outlined-textarea-dynamic-03"
                        multiline
                        rowsMax={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                      />
                      {/*<FormHelperText
                                                className={"jv-mInput-error mui"} id="outlined-helperErrorText034-error-text">
                                                This error is a separate component outside its related text field.
                                            </FormHelperText>*/}
                    </div>
                    <div className={"demoSpacer8"}> </div>

                    {/* small textarea, read-only */}
                    <div>
                      <JVTextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        size="small"
                        inline
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={2} // <--- this property sets fixed height
                        label="Text Area read only"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* Column 4 - Small Inline Text  */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* Number + Error */}
                    <JVTextField
                      size="small"
                      inline
                      error="Number must be between 0 and 100"
                      type="number"
                      id="outlined-numberError02"
                      label="Number with Error"
                    />
                    <div className="demoSpacer14"> </div>

                    {/* Text + Helper + Error */}
                    <JVTextField
                      size="small"
                      inline
                      helperText="You can have helper text or error text, but not both"
                      error="This error is a separate component outside its related text field. I'd need to find a way to have red outline on input box. Will this work?"
                      id="outlined-helperErrorText02"
                      label="Helper and Error"
                    />
                  </div>
                </div>
              </JVPaper>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};
inputText.storyName = "Text Field";

/* --------------- */
/*  08. COLOR      */
/* --------------- */
export const inputColor = () => {
  const [colors, setColors] = useState([
    "rgba(47,126,216,1)",
    "#d2e9fd",
    "rgba(0,0,0,0)",
    "#FFFFFF",
  ]);

  const handleColorChange = (index, color) => {
    const newColors = colors.slice(0);
    newColors[index] = color;
    setColors(newColors);
  };

  const handleChange = (index, event) => {
    handleColorChange(event.target.value);
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Color</h1>
      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInput"}>
          {/* 08a. Small Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Small</p>
            <JVColorPicker
              size="small"
              id="smallDefault"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Small Default"
            />

            <JVColorPicker
              error="Error: You entered an invalid color value"
              size="small"
              id="smallLight"
              value={colors[1]}
              onColorChange={(color) => handleColorChange(1, color)}
              onChange={handleChange.bind(null, 1)}
              label="Small Light"
            />

            <JVColorPicker
              error="Error: You entered an invalid color value"
              size="small"
              id="smallTransparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Small Transparent"
            />

            <JVColorPicker
              disabled={true}
              size="small"
              id="smallDisabled"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Small Disabled"
            />

            <JVColorPicker
              InputProps={{ readOnly: true }}
              size="small"
              id="smallReadonly"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Small Readonly"
            />
          </div>

          {/* 08b. Medium Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Medium</p>

            <JVColorPicker
              id="default"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Default"
            />
            <JVColorPicker
              id="light"
              value={colors[1]}
              onColorChange={(color) => handleColorChange(1, color)}
              onChange={handleChange.bind(null, 1)}
              label="Light"
            />
            <JVColorPicker
              error="Error: You entered an invalid color value"
              id="transparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Transparent"
            />
          </div>

          {/* 08c. Large Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Large</p>
            <JVColorPicker
              size="large"
              id="largeDefault"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Large Default"
            />

            <JVColorPicker
              size="large"
              id="largeLight"
              value={colors[1]}
              onColorChange={(color) => handleColorChange(1, color)}
              onChange={handleChange.bind(null, 1)}
              label="Large Light"
            />

            <JVColorPicker
              error="Error: You entered an invalid color value"
              size="large"
              id="largeTransparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Large Transparent"
            />
          </div>

          {/* 08d. Small Inline Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Small Inline</p>
            <JVColorPicker
              inline
              size="small"
              id="smallInlineDefault"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Small Inline Default"
            />

            <JVColorPicker
              inline
              size="small"
              id="smallInlineLight"
              value={colors[3]}
              onColorChange={(color) => handleColorChange(3, color)}
              onChange={handleChange.bind(null, 3)}
              label="Small Inline Light"
            />

            <JVColorPicker
              inline
              error="Error: You entered an invalid color value"
              size="small"
              id="smallInlineTransparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Small Inline Transparent"
            />
          </div>

          {/* 08e. Medium Inline Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Medium Inline</p>
            <JVColorPicker
              inline
              id="mediumInlineDefault"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Medium Inline Default"
            />

            <JVColorPicker
              inline
              id="mediumInlineLight"
              value={colors[3]}
              onColorChange={(color) => handleColorChange(3, color)}
              onChange={handleChange.bind(null, 3)}
              label="Medium Inline Light"
            />

            <JVColorPicker
              inline
              error="Error: You entered an invalid color value"
              id="mediumInlineTransparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Medium Inline Transparent"
            />
          </div>

          {/* 08f. Large Inline Color */}
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Large Inline</p>
            <JVColorPicker
              inline
              size="large"
              id="largeInlineDefault"
              value={colors[0]}
              onColorChange={(color) => handleColorChange(0, color)}
              onChange={handleChange.bind(null, 0)}
              label="Large Inline Default"
            />

            <JVColorPicker
              inline
              size="large"
              id="largeInlineLight"
              value={colors[3]}
              onColorChange={(color) => handleColorChange(3, color)}
              onChange={handleChange.bind(null, 3)}
              label="Large Inline Light"
            />

            <JVColorPicker
              inline
              error="Error: You entered an invalid color value"
              size="large"
              id="largeInlineTransparent"
              value={colors[2]}
              onColorChange={(color) => handleColorChange(2, color)}
              onChange={handleChange.bind(null, 2)}
              label="Large Inline Transparent"
            />
          </div>
        </div>
      </form>
    </>
  );
};
inputColor.storyName = "Color Picker";

/* --------------- */
/*  09. REFRESH    */
/* --------------- */
export const inputRefresh = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Refresh Control</h1>

      <div className={"demoWrapper demoInput"}>
        <div className="demoSize">
          <p className={"demoSubtitle"}>Static</p>

          {/* TODO: add static Refresh component here. */}
        </div>
        <div className="demoSize">
          <p className={"demoSubtitle"}>Active</p>

          {/* TODO: add active Refresh component here. */}
        </div>
      </div>
    </>
  );
};
inputRefresh.storyName = "Refresh";

/* -------------------- */
/*  10. COMBINATIONS    */
/* -------------------- */
export const inputCombos = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Input - Combinations</h1>

      {/* TODO: add Combination components here. */}

      <div className={"demoWrapper demoInput"}>
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          {/* 10a. Small Interval */}
          {/* 10b. Small Inline Interval */}
          {/* 10c. Small Condition */}
          {/* 10d. Small Inline Condition */}
        </div>

        <div className="demoSize">
          <p className={"demoSubtitle"}>Default</p>
          {/* 10e. Default Interval */}
          {/* 10f. Default Inline Interval */}
          {/* 10g. Default Condition */}
          {/* 10h. Default Inline Condition */}
        </div>

        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          {/* 10i. Large Interval */}
          {/* 10j. Large Inline Interval */}
          {/* 10k. Large Condition */}
          {/* 10l. Large Inline Condition */}
        </div>
      </div>
    </>
  );
};
inputCombos.storyName = "Combinations";
