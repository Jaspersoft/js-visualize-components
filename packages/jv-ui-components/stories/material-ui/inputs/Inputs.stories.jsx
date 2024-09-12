import {
  JVIcon,
  JVIconButton,
  JVTextField,
} from "@jaspersoft/jv-ui-components";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "../css/demoPages.css";
import "./inputs.css";

/*  --------------------------------------------------  */
/*    Table of Contents                                 */
/*                                                      */
/*    01. BROWSE                                        */
/*        01a. Small                                    */
/*        01b. Small + Hint                             */
/*        01c. Small + Hint + Error                     */
/*        01d. Medium                                   */
/*        01e. Medium + Hint                            */
/*        01f. Medium + Hint + Error                    */
/*        01g. Large                                    */
/*        01h. Large + Hint                             */
/*        01i. Large + Hint + Error                     */
/*                                                      */
/*    02. CHECKBOX                                      */
/*        02a. Small                                    */
/*        02b. Medium                                   */
/*        02c. Large                                    */
/*                                                      */
/*    03. DATE/TIME                                     */
/*        03a. Small                                    */
/*        03b. Small Inline                             */
/*        03c. Small No Label                           */
/*        03d. Small Range                              */
/*        03e. Medium                                   */
/*        03f. Medium Inline                            */
/*        03g. Medium No Label                          */
/*        03h. Medium Range                             */
/*        03i. Large                                    */
/*        03j. Large Inline                             */
/*        03k. Large No Label                           */
/*        03l. Large Range                              */
/*        03m. Medium Error Validation                  */
/*        03n. Medium Error Validation Inline           */
/*        03o. Medium Error Validation No Label         */
/*        03p. Medium Error Validation Range            */
/*                                                      */
/*    04. RADIO                                         */
/*        04a. Small                                    */
/*        04b. Medium                                   */
/*        04c. Large                                    */
/*                                                      */
/*    05. SELECT                                        */
/*        05a. Small                                    */
/*        05b. Small w/Helper + Error                   */
/*        05c. Small Inline                             */
/*        05d. Small Inline w/Helper + Error            */
/*        05e. Medium                                   */
/*        05f. Medium w/Helper + Error                  */
/*        05g. Medium Inline                            */
/*        05h. Medium Inline w/Helper + Error           */
/*        05i. Large                                    */
/*        05j. Large w/Helper + Error                   */
/*        05k. Large Inline Select                      */
/*        05l. Large Inline w/Helper + Error            */
/*                                                      */
/*    06. SWITCH                                        */
/*        06a. Small Inline, Label First                */
/*        06b. Small Inline Disabled, Label First       */
/*        06c. Small Inline, Label Last                 */
/*        06d. Small Inline Disabled, Label Last        */
/*        06e. Small No Label                           */
/*        06f. Medium Inline, Label First               */
/*        06g. Medium Inline Disabled, Label First      */
/*        06h. Medium Inline, Label Last                */
/*        06i. Medium Inline Disabled, Label Last       */
/*        06j. Medium No Label                          */
/*        06k. Large Inline, Label First                */
/*        06l. Large Inline Disabled, Label First       */
/*        06m. Large Inline, Label Last                 */
/*        06n. Large Inline Disabled, Label Last        */
/*        06o. Large No Label                           */
/*                                                      */
/*    07. TEXT                                          */
/*        07a. Small Text Variations                    */
/*        07b. Small Search                             */
/*        07c. Small Number Variations                  */
/*        07d. Small Textarea Variations                */
/*        07e. Small Error States                       */
/*        07f. Medium Text Variations                   */
/*        07g. Medium Search                            */
/*        07h. Medium Number Variations                 */
/*        07i. Medium Textarea Variations               */
/*        07j. Medium Error States                      */
/*        07k. Large Text Variations                    */
/*        07l. Large Search                             */
/*        07m. Large Number Variations                  */
/*        07n. Large Textarea Variations                */
/*        07o. Large Error States                       */
/*        07p. Small Inline Text Variations             */
/*        07q. Small Inline Number Variations           */
/*        07r. Small Inline Textarea Variations         */
/*        07s. Small Inline Error States                */
/*                                                      */
/*    08. COLOR                                         */
/*        08a. Small Color                              */
/*        08b. Small Inline Color                       */
/*        08c. Medium Color                             */
/*        08d. Medium Inline Color                      */
/*        08e. Large Color                              */
/*        08f. Large Inline Color                       */
/*                                                      */
/*    09. REFRESH                                       */
/*                                                      */
/*    10. COMBINATIONS                                  */
/*        10a. Small Interval                           */
/*        10b. Small Inline Interval                    */
/*        10c. Small Condition                          */
/*        10d. Small Flexwidth Condition                */
/*        10e. Small Inline Condition                   */
/*        10f. Medium Interval                          */
/*        10g. Medium Inline Interval                   */
/*        10h. Medium Condition                         */
/*        10i. Small Flexwidth Condition                */
/*        10j. Medium Inline Condition                  */
/*        10k. Large Interval                           */
/*        10l. Large Inline Interval                    */
/*        10m. Large Condition                          */
/*        10n. Large Inline Condition                   */
/*                                                      */
/*  --------------------------------------------------  */
/*   Last modified Mar 14, 2024                         */
/*  --------------------------------------------------  */

export default {
  component: Checkbox,
  title: "Components/Inputs/Design",
};

/* -------------- */
/* 01. BROWSE     */
/* -------------- */
export const InputBrowse = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Browse</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 01a. Small Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <div className="jv-mInput jv-mInputBrowse jv-mInputSmall mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error1"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
              disableElevation
              size="small"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>

          {/* 01b. Small Browse + Hint */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputSmall mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error1"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
              disableElevation
              size="small"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error1"
          >
            Web address must start with http or https.
          </FormHelperText>

          {/* 01c. Small Browse + Hint + Error */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputSmall mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error1"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>

            <Button
              className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
              disableElevation
              size="small"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error1"
          >
            Web address must start with http or https.
          </FormHelperText>
          <FormHelperText
            className={"jv-mInput-error mui"}
            id="select-inline-helper-error-error-text1"
          >
            Error Message.
          </FormHelperText>
        </div>

        {/* 01d. Medium Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <div className="jv-mInput jv-mInputBrowse mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputMedium mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error2"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>

            <Button
              className="jv-mButton jv-mButtonMedium jv-mButtonSecondary mui"
              disableElevation
              size="medium"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>

          {/* 01e. Medium Browse + Hint */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputMedium mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error1"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
              disableElevation
              size="small"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error1"
          >
            Web address must start with http or https.
          </FormHelperText>

          {/* 01f. Medium Browse + Hint + Error */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputMedium mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error1"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonSmall jv-mButtonSecondary mui"
              disableElevation
              size="small"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error1"
          >
            Web address must start with http or https.
          </FormHelperText>
          <FormHelperText
            className={"jv-mInput-error mui"}
            id="select-inline-helper-error-error-text1"
          >
            Error Message.
          </FormHelperText>
        </div>

        {/* 01g. Large Browse */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <div className="jv-mInput jv-mInputBrowse jv-mInputLarge mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error3"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonLarge jv-mButtonSecondary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>

          {/* 01h. Large Browse + Hint */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputLarge mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error3"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonLarge jv-mButtonSecondary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error3"
          >
            Web address must start with http or https.
          </FormHelperText>

          {/* 01h. Large Browse + Hint + Error */}
          <div className="jv-mInput jv-mInputBrowse jv-mInputLarge mui">
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                variant="outlined"
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
                id="text-inline-helper-error3"
                label="URL/repository URI"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
              />
            </div>
            <Button
              className="jv-mButton jv-mButtonLarge jv-mButtonSecondary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Browse...</span>
            </Button>
          </div>
          <FormHelperText
            className={"jv-mInput-helper mui"}
            id="select-inline-helper-error3"
          >
            Web address must start with http or https.
          </FormHelperText>
          <FormHelperText
            className={"jv-mInput-error mui"}
            id="select-inline-helper-error-error-text3"
          >
            Error Message.
          </FormHelperText>
        </div>
      </div>
    </>
  );
};
InputBrowse.storyName = "Browse";

/* ---------------- */
/* 02. CHECKBOX     */
/* ---------------- */
export const inputCheckbox = () => {
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
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Checkbox</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 02a. Small Checkbox*/}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputSmall jv-mInputCheckbox mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Assign responsibility
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="gilad"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Gilad Gray"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="jason"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="antoine"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Antpoine Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd"
              />
            </FormGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="select-inline-helper-error-error-text3"
            >
              Error Message.
            </FormHelperText>
          </FormControl>
        </div>

        {/* 02b. Medium Checkbox*/}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputCheckbox mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Assign responsibility
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="gilad"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="jason"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="antoine"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Antpoine Llyorc"
              />
            </FormGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
          </FormControl>
        </div>

        {/* 02c. Large Checkbox */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputLarge jv-mInputCheckbox mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Assign responsibility
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="gilad"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="jason"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    color="primary"
                    onChange={handleChange}
                    classes={{ root: "jv-mInput-checkbox-check mui" }}
                    name="antoine"
                  />
                }
                className="jv-mInput-checkbox mui"
                classes={{ label: "jv-mInput-checkbox-label mui" }}
                label="Antpoine Llyorc"
              />
            </FormGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
          </FormControl>
        </div>
      </div>
    </>
  );
};
inputCheckbox.storyName = "Checkbox";

/* ------------------ */
/* 03. DATE/TIME      */
/* ------------------ */
export const inputDatetime = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Date/Time</h1>

      <div className={"demoWrapper demoInputDateTime"}>
        {/* SMALL DATE/TIME */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>

          {/* 03a. Small Date/Time */}
          <p className={"demoSubtitle-2"}>Basic</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputDate mui"
              }
              id=""
              label="Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputTime mui"
              }
              helperText="You can have helper text here."
              id=""
              label="Time"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
          </div>

          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputDatetime mui"
              }
              helperText="You can have helper text here."
              id=""
              label="Datetime"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 03b. Small Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputInline jv-mInputDate mui"
              }
              id=""
              label="Date inline"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputInline jv-mInputTime mui"
              }
              id=""
              label="Time inline"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputInline jv-mInputDatetime mui"
              }
              id=""
              label="Datetime inline"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 03c. Small No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputDate mui"
              }
              id=""
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputTime mui"
              }
              id=""
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputDatetime mui"
              }
              id=""
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>

          <div className="demoSpacer8"></div>

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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDate mui"}
              id=""
              label="Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputTime mui"}
              id=""
              label="Time"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDatetime mui"}
              id=""
              label="Datetime"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 03f. Medium Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputDate mui"
              }
              id=""
              label="Date inline"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputTime mui"
              }
              id=""
              label="Time inline"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>

          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputDatetime mui"
              }
              id=""
              label="Datetime inline"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 03g. Medium No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDate mui"}
              id=""
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputTime mui"}
              id=""
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDatetime mui"}
              id=""
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer8"></div>

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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputDate mui"
              }
              id=""
              label="Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputTime mui"
              }
              id=""
              label="Time"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputDatetime mui"
              }
              id=""
              label="Datetime"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer12"></div>

          {/* 03j. Large Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputInline jv-mInputDate mui"
              }
              id=""
              label="Date inline"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputInline jv-mInputTime mui"
              }
              id=""
              label="Time inline"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputInline jv-mInputDatetime mui"
              }
              id=""
              label="Datetime inline"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer12"></div>

          {/* 03k. Large Date/Time No Label */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputDate mui"
              }
              id=""
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputTime mui"
              }
              id=""
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputLarge jv-mInputText jv-mInputDatetime mui"
              }
              id=""
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
          </div>
          <div className="demoSpacer12"></div>

          {/* 03l. Large Date/Time Range */}
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                textFieldClassName={"jv-mInputDate"}
                size={"large"}
                id="outlined03"
                type="date"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
              <JVTextField
                textFieldClassName={"jv-mInputTime"}
                size={"large"}
                id="outlined03"
                type="time"
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
          </div>
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
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
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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

        {/* 03m. Medium with Validation Date/Time */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium with Error Validation</p>
          {/* default */}
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDate mui"}
              error
              helperText="You can have helper text here."
              id=""
              label="Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              You have made an error.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputTime mui"}
              error
              id=""
              label="Time"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              You have made an error.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDatetime mui"}
              error
              id=""
              label="Datetime"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              You have made an error.
            </FormHelperText>
          </div>
          <div className="demoSpacer12"></div>

          {/* 03n. Medium Error Validation Inline Date/Time */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputDate mui"
              }
              error
              id=""
              label="Date inline"
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              Error message for an inline date input.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputTime mui"
              }
              error
              helperText="helper text can go here."
              id=""
              label="Time inline"
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              This error is a separate component outside its related text field.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={
                "jv-mInput jv-mInputText jv-mInputInline jv-mInputDatetime mui"
              }
              error
              helperText="helper text can go here."
              id=""
              label="Datetime inline"
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              This error is a separate component outside its related text field.
            </FormHelperText>
          </div>
          <div className="demoSpacer12"></div>

          {/* 03o. Medium Error Validation No Label Date/Time */}
          <p className={"demoSubtitle-2"}>No Label</p>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDate mui"}
              error
              id=""
              type="date"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              Error message for date input.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputTime mui"}
              error
              id=""
              type="time"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              Error message for time input.
            </FormHelperText>
          </div>
          <div>
            <TextField
              className={"jv-mInput jv-mInputText jv-mInputDatetime mui"}
              error
              id=""
              type="datetime-local"
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              InputProps={{
                classes: { input: "jv-mInput-text mui" },
              }}
              FormHelperTextProps={{
                classes: { root: "jv-mInput-helper mui" },
              }}
            />
            <FormHelperText
              className={"jv-mInput-error mui"}
              id="outlined-helperErrorText02-error-text"
            >
              Error message for datetime input.
            </FormHelperText>
          </div>
          <div className="demoSpacer12"></div>

          {/* 03p. Medium Error Validation Date/Time Range */}
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
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              />
            </div>
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
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
          <div className="demoSpacer36"></div>
          {/* date range only */}
          <div className={"jv-mControl jv-mControlRange jv-uWidth-125px mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                size={"large"}
                textFieldClassName={"jv-mInputDate"}
                id=""
                type="date"
                error="Error message."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                size={"large"}
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
          <div className="demoSpacer36"></div>
          {/* datetime range */}
          <div className={"jv-mControl jv-mControlRange mui"}>
            <div className={"jv-mControlRange-from mui"}>
              <JVTextField
                size={"large"}
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                error="Error message."
                InputLabelProps={{
                  disableAnimation: true,
                }}
              />
            </div>
            <Typography
              className="jv-mText jv-mControlRange-text mui"
              variant="body1"
            >
              and
            </Typography>
            <div className={"jv-mControlRange-to mui"}>
              <JVTextField
                size={"large"}
                textFieldClassName={"jv-mInputDatetime"}
                id=""
                type="datetime-local"
                error="Error message."
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Radio Buttons</h1>

      <div className={"demoWrapper demoInput"}>
        {/* 04a. Small Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputSmall jv-mInputRadio mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Female"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Male"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Other"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="(Disabled option)"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
            </RadioGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
          </FormControl>
        </div>

        {/* 04b. Medium Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputRadio mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Female"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Male"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Other"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="(Disabled option)"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
            </RadioGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
          </FormControl>
        </div>

        {/* 04c. Large Radio */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <FormControl
            component="fieldset"
            className="jv-mInput jv-mInputLarge jv-mInputRadio mui"
          >
            <FormLabel component="legend" className="jv-mInput-label mui">
              Gender
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Female"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Male"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="Other"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={
                  <Radio
                    color="primary"
                    classes={{ root: "jv-mInput-radio-button mui" }}
                  />
                }
                label="(Disabled option)"
                className="jv-mInput-radio mui"
                classes={{ label: "jv-mInput-radio-label mui" }}
              />
            </RadioGroup>
            <FormHelperText className={"jv-mInput-helper mui"}>
              Hint text
            </FormHelperText>
          </FormControl>
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
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Select</h1>
      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInput"}>
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Small</p>

            <p className={"demoSubtitle-2"}>Basic</p>
            {/* 05a. Small Select */}
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
              }
              defaultValue="bottom"
              id="small-select-normal"
              label="Normal"
              select
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              SelectProps={{
                classes: { select: "jv-mInput-select mui" },
              }}
            >
              <MenuItem className={"jv-mInput-select-item mui"} value="top">
                Top
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="bottom">
                Bottom
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="right">
                Right
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="left">
                Left
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="none">
                None
              </MenuItem>
            </TextField>

            {/* 05b. Small Select with Helper + Error */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
                }
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Helper and error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
            <div className="demoSpacer12"></div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05c. Small Inline Select */}
            <TextField
              className={
                "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect jv-mInputInline mui"
              }
              defaultValue="bottom"
              id="select-inline"
              label="Inline"
              select
              variant="outlined"
              InputLabelProps={{
                classes: { root: "jv-mInput-label mui" },
                disableAnimation: true,
              }}
              SelectProps={{
                classes: { select: "jv-mInput-select mui" },
              }}
            >
              <MenuItem className={"jv-mInput-select-item mui"} value="top">
                Very Long Item Very Long Item Very Long Item
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="bottom">
                Bottom
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="right">
                Right
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="left">
                Left
              </MenuItem>
              <MenuItem className={"jv-mInput-select-item mui"} value="none">
                None
              </MenuItem>
            </TextField>

            {/* 05d. Small Inline Select w/ Helper + Error */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect jv-mInputInline mui"
                }
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Inline with Helper and Error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Medium</p>

            <p className={"demoSubtitle-2"}>Basic</p>
            {/* 05e. Medium Select */}
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSelect mui"}
                defaultValue="bottom"
                id="select"
                label="Normal"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
            </div>

            {/* 05f. Medium Select w/Helper + Error */}
            <div>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSelect mui"}
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Helper and error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
            <div className="demoSpacer12"></div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05g. Medium Inline Select */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputInline jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="bottom"
                id="select"
                label="Standard Inline"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
            </div>

            {/* 05h. Medium Inline Select w/Helper + Error  */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputInline jv-mInputText jv-mInputSelect mui"
                }
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Standard Inline with Helper and error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Large</p>

            <p className={"demoSubtitle-2"}>Basic</p>
            {/* 05i. Large Select */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="bottom"
                id="select"
                label="Large"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
            </div>

            {/* 05j. Large Select w/ Helper + Error */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
                }
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Large with Helper and Error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
            <div className="demoSpacer12"></div>

            <p className={"demoSubtitle-2"}>Inline</p>
            {/* 05k. Large Inline Select */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputInline jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="bottom"
                id="select"
                label="Large Inline"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
            </div>

            {/* 05l. Large Inline Select w/Helper + Error */}
            <div>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputInline jv-mInputText jv-mInputSelect mui"
                }
                error
                helperText={"Helper text"}
                defaultValue="bottom"
                id="select-inline-helper-error"
                label="Large Inline with Helper and error"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                  "aria-describedby":
                    "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
                }}
                FormHelperTextProps={{
                  classes: { root: "jv-mInput-helper mui" },
                }}
              >
                <MenuItem className={"jv-mInput-select-item mui"} value="top">
                  Top
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="bottom"
                >
                  Bottom
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="right">
                  Right
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="left">
                  Left
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="none">
                  None
                </MenuItem>
              </TextField>
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                This error is a separate component outside its related text
                field.
              </FormHelperText>
            </div>
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
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
    checkedJ: true,
    checkedK: true,
    checkedL: true,
    checkedM: true,
    checkedN: true,
    checkedO: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Switch</h1>

      <div className={"demoWrapper demoInput"}>
        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Small</p>

          {/* 06a. Small Inline Switch, Label First */}
          <p className={"demoSubtitle-2"}>Inline</p>
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              checked={state.checkedA}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Label first"
              labelPlacement="start"
              name="checkedA"
              onChange={handleChange}
            />
          </div>
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              checked={state.checkedB}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Small inline switch control with label first and label wraps to multiple lines"
              labelPlacement="start"
              name="checkedB"
              onChange={handleChange}
            />
          </div>
          {/* 06b. Small Inline Disabled Switch, Label First */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Label first disabled"
              labelPlacement="start"
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 06c. Small Inline Switch, Label Last */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              checked={state.checkedC}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Label last"
              labelPlacement="end"
              name="checkedC"
              onChange={handleChange}
            />
          </div>
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              checked={state.checkedD}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Small inline switch control with label last and label wraps to multiple lines"
              labelPlacement="end"
              name="checkedD"
              onChange={handleChange}
            />
          </div>

          {/* 06d. Small Inline Disabled Switch, Label Last */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label="Label last disabled"
              labelPlacement="end"
            />
          </div>

          <div className="demoSpacer8"></div>
          <p className={"demoSubtitle-2"}>No Label</p>

          {/* 06e. Small No Label */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputNolabel jv-mInputSmall mui"
            }
          >
            <FormControlLabel
              checked={state.checkedE}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch
                  size="small"
                  color="primary"
                  className="jv-mInput-switch mui"
                />
              }
              label=""
              labelPlacement="end"
              name="checkedE"
              onChange={handleChange}
            />
          </div>
          <div className="demoSpacer8"></div>
        </div>

        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Medium</p>
          <p className={"demoSubtitle-2"}>Inline</p>

          {/* 06f. Medium Inline Switch, Label First */}
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              checked={state.checkedF}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label first"
              labelPlacement="start"
              name="checkedF"
              onChange={handleChange}
            />
          </div>
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              checked={state.checkedG}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Medium inline switch with label first and label wraps to multiple lines"
              labelPlacement="start"
              name="checkedG"
              onChange={handleChange}
            />
          </div>

          {/* 06g. Medium Inline Disabled Switch, Label First */}
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label first disabled"
              labelPlacement="start"
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 06h. Medium Inline Switch, Label Last */}
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              checked={state.checkedH}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label last"
              labelPlacement="end"
              name="checkedH"
              onChange={handleChange}
            />
          </div>
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              checked={state.checkedI}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Medium inline switch with label last and label wraps to multiple lines"
              labelPlacement="end"
              name="checkedI"
              onChange={handleChange}
            />
          </div>

          {/* 06i. Medium Inline Disabled Switch, Label Last */}
          <div className={"jv-mInput jv-mInputSwitch jv-mInputInline mui"}>
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label last disabled"
              labelPlacement="end"
            />
          </div>
          <div className="demoSpacer8"></div>
          <p className={"demoSubtitle-2"}>No Label</p>

          {/* 06j. Medium No Label Switch */}
          <div className={"jv-mInput jv-mInputSwitch jv-mInputNolabel mui"}>
            <FormControlLabel
              checked={state.checkedJ}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label=""
              labelPlacement="end"
              name="checkedJ"
              onChange={handleChange}
            />
          </div>
          <div className="demoSpacer8"></div>
        </div>

        <div className={"demoSize"}>
          <p className={"demoSubtitle"}>Large</p>
          <p className={"demoSubtitle-2"}>Inline</p>

          {/* 06k. Large Inline Switch, Label First */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              checked={state.checkedK}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label first"
              labelPlacement="start"
              name="checkedK"
              onChange={handleChange}
            />
          </div>
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              checked={state.checkedL}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Large inline switch with label first and label that wraps to multiple lines"
              labelPlacement="start"
              name="checkedL"
              onChange={handleChange}
            />
          </div>

          {/* 06l. Large Inline Disabled Switch, Label First */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label first disabled"
              labelPlacement="start"
            />
          </div>
          <div className="demoSpacer8"></div>

          {/* 06m. Large Inline Switch, Label Last */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              checked={state.checkedM}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label last"
              labelPlacement="end"
              name="checkedM"
              onChange={handleChange}
            />
          </div>
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              checked={state.checkedN}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Large inline switch with label last and label wraps to multiple lines"
              labelPlacement="end"
              name="checkedN"
              onChange={handleChange}
            />
          </div>

          {/* 06n. Large Inline Disabled Switch, Label Last */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              disabled
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label="Label last disabled"
              labelPlacement="end"
            />
          </div>
          <div className="demoSpacer8"></div>
          <p className={"demoSubtitle-2"}>No Label</p>

          {/* 06o. Large No Label Switch */}
          <div
            className={
              "jv-mInput jv-mInputSwitch jv-mInputNolabel jv-mInputLarge mui"
            }
          >
            <FormControlLabel
              checked={state.checkedO}
              classes={{ label: "jv-mInput-label mui" }}
              control={
                <Switch color="primary" className="jv-mInput-switch mui" />
              }
              label=""
              labelPlacement="end"
              name="checkedO"
              onChange={handleChange}
            />
          </div>
          <div className="demoSpacer8"></div>
        </div>
      </div>
    </>
  );
};
inputSwitch.storyName = "Switch";

/* -------------- */
/*  07. TEXT      */
/* -------------- */
export const inputTextField = () => {
  const [searchText, setSearchText] = useState("");
  const onClearBtnClick = () => {
    setSearchText("");
  };
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Text</h1>

      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInputText"}>
          {/*
           <div className={"demoSize"}>
           <p className={"demoSubtitle"}>Small</p>
           <p className={"demoSubtitle-2"}>General</p>
           </div>*/}

          {/* SMALL TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <p className={"demoSubtitle"}>Small</p>
                <div className={"demoSizeWrapper"}>
                  {/* COLUMN 1 - SMALL TEXT */}
                  {/* 07a. Small Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* small text */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined02"
                        label="Text"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* small text narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputNarrow mui"
                        }
                        id="outlinedNarrow02"
                        label="Text narrow"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* small text, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        defaultValue="Hello World"
                        id="outlined-read-only-input02"
                        label="Read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>

                    {/* small text + helper */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        helperText="You can have helper text here, and this text can wrap to multiple lines"
                        id="outlined-helperText03"
                        label="Text with helper"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer12"></div>

                    {/* small text -inline contained */}
                    <TextField
                      className={
                        "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline jv-mInputContained mui"
                      }
                      id="outlined02"
                      label="Inline contained text"
                      placeholder="All"
                      onChange={(e) => setText(e.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        classes: { root: "jv-mInput-label mui" },
                        disableAnimation: true,
                        shrink: true,
                      }}
                      InputProps={{
                        classes: { input: "jv-mInput-text mui" },
                      }}
                    />
                    <div className="demoSpacer12"></div>
                  </div>

                  {/* COLUMN 2 - SMALL TEXT */}
                  <div className={"demoSize"}>
                    {/* small text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>

                    <TextField
                      className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                      defaultValue="Hello World"
                      disabled
                      id="outlined-disabled02"
                      label="Disabled"
                      variant="outlined"
                      InputLabelProps={{
                        classes: { root: "jv-mInput-label mui" },
                        disableAnimation: true,
                      }}
                      InputProps={{
                        classes: { input: "jv-mInput-text mui" },
                      }}
                    />
                    <div className="demoSpacer14"></div>

                    {/* 07b. Small Search */}
                    {/* <FormControl className={"jv-mControlSearch mui"}>*/}
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
                          <InputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment mui"}
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
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-mInput-label jv-Mui-focused mui" },
                        disableAnimation: true,
                      }}
                    />
                    {/*</FormControl>*/}

                    <div className="demoSpacer22"></div>

                    {/* 07c. Small Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* small number */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined-number02"
                        label="Number"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    {/* small number, narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputNarrow mui"
                        }
                        id="outlined-numberNarrow02"
                        label="Number narrow"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 3 - SMALL TEXT  */}
                  {/* 07d. Small Textarea Variations */}
                  {/* small textarea */}
                  <div className={"demoSize"}>
                    {/* textarea, constant height */}
                    {/* (type and hit enter to increase height) */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined-textarea-static-03"
                        multiline
                        rows={5} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}></div>
                    {/* small textarea, auto height */}
                    <div>
                      <TextField
                        /*error*/
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        maxRows={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      {/*<FormHelperText
                       className={"jv-mInput-error mui"} id="outlined-helperErrorText034-error-text">
                       This error is a separate component outside its related text field.
                       </FormHelperText>*/}
                    </div>
                    <div className={"demoSpacer8"}></div>
                    {/* small textarea, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={2} // <--- this property sets fixed height
                        label="Text Area read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 4 - SMALL TEXT */}
                  {/* 07e. Small Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* text + helper + error */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        error
                        helperText="You can have helper text here"
                        id="outlined-helperErrorText02"
                        label="Text with helper and error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-helperErrorText02-helper-text outlined-helperErrorText02-error-text",
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText02-error-text"
                      >
                        You have made an error
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* small number, error state */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        error
                        id="outlined-numberError02"
                        label="Number with error"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-numberError02-error-text",
                        }}
                      />
                      <FormHelperText
                        className="jv-mInput-error mui"
                        id={"outlined-numberError02-error-text"}
                      >
                        Number must be between 0 and 100
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* small textarea, error state */}
                    <div>
                      <TextField
                        error
                        className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        rows={2}
                        label="Text Area with error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText034-error-text"
                      >
                        You have made an error
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>

          {/* MEDIUM TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <p className={"demoSubtitle"}>Medium</p>
                <div className={"demoSizeWrapper"}>
                  {/* COLUMN 1 - MEDIUM TEXT */}
                  {/* 07f. Medium Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* medium text */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined03"
                        label="Text"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* medium text narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputNarrow mui"
                        }
                        id="outlinedNarrow02"
                        label="Text narrow"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* medium text, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        defaultValue="Hello World"
                        id="outlined-read-only-input03"
                        label="Read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>

                    {/* medium text + helper */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        helperText="You can have helper text here, and this text can wrap to multiple lines"
                        id="outlined-helperText03"
                        label="Text with helper"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer12"></div>

                    {/* medium text- inline contained */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputInline jv-mInputContained mui"
                        }
                        id="outlined02"
                        label="Inline contained text"
                        placeholder="All"
                        onChange={(e) => setText(e.target.value)}
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                          shrink: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer12"></div>
                  </div>

                  {/* COLUMN 2 - MEDIUM TEXT */}
                  <div className={"demoSize"}>
                    {/* medium text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        defaultValue="Hello World"
                        disabled
                        id="outlined-disabled03"
                        label="Disabled"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* 07g. Medium Search */}
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
                          <InputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment mui"}
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
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-mInput-label jv-Mui-focused mui" },
                        disableAnimation: true,
                      }}
                    />

                    <div className="demoSpacer16"></div>

                    {/* 07h. Medium Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* default number */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined-number03"
                        label="Number"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    {/* medium number, narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputNarrow mui"
                        }
                        id="outlined-numberNarrow02"
                        label="Number narrow"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 3 - MEDIUM TEXT  */}
                  {/* 07i. Medium Textarea Variations */}
                  {/* medium textarea */}
                  <div className={"demoSize"}>
                    {/* Text Area with constant height */}
                    {/* type and hit enter to increase height */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined-textarea-static-03"
                        multiline
                        rows={5} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}></div>

                    {/* default textarea, auto height */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        maxRows={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}></div>

                    {/* default textarea, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={2} // <--- this property sets fixed height
                        label="Text Area read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 4 - MEDIUM TEXT  */}
                  {/* 07j. Medium Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* medium text + helper + error */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        error
                        helperText="You have made an error"
                        id="outlined-helperErrorText03"
                        label="Text with helper and error"
                        variant="outlined"
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-helperErrorText01-helper-text outlined-helperErrorText01-error-text",
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText03-error-text"
                      >
                        You can have validation error text here, and this text
                        can wrap to multiple lines
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* medium number + error */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText mui"}
                        error
                        id="outlined-numberError02"
                        label="Number with error"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-numberError02-error-text",
                        }}
                      />
                      <FormHelperText
                        className="jv-mInput-error mui"
                        id={"outlined-numberError02-error-text"}
                      >
                        Number must be between 0 and 100
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* medium textarea with error */}
                    <div>
                      <TextField
                        error
                        className={"jv-mInput jv-mInputText mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        rows={2}
                        label="Text Area with error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText034-error-text"
                      >
                        You have made an error
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>

          {/* LARGE TEXT INPUT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <p className={"demoSubtitle"}>Large</p>

                <div className={"demoSizeWrapper"}>
                  {/* COLUMN 1 - LARGE TEXT */}
                  {/* 07k. Large Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* large text */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined01"
                        label="Text"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* large text, narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputLarge jv-mInputNarrow mui"
                        }
                        id="outlinedNarrow02"
                        label="Text narrow"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* large text, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        defaultValue="Hello World"
                        id="outlined-read-only-input01"
                        label="Read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>

                    {/* large text + helper */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        helperText="Web address must start with http or https start with http or https"
                        id="outlined-helperText01"
                        label="Text with helper"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer12"></div>

                    {/* large text - inline contained */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputLarge jv-mInputInline jv-mInputContained mui"
                        }
                        id="outlined02"
                        label="Inline contained text"
                        placeholder="All"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                          shrink: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer12"></div>
                  </div>

                  {/* COLUMN 2 - LARGE TEXT  */}
                  <div className={"demoSize"}>
                    {/* large text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        defaultValue="Hello World"
                        disabled
                        id="outlined-disabled01"
                        label="Disabled"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* 07l. Large Search */}
                    {/*<FormControl className={"jv-mControlSearch jv-mControlLarge mui"}>*/}
                    <p className={"demoSubtitle-2"}>Search</p>
                    <JVTextField
                      placeholder="Search"
                      textFieldClassName={"jv-mInputLarge jv-mInputSearch mui"}
                      id="search02"
                      variant="outlined"
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      InputProps={{
                        classes: { input: "jv-mInput-text mui" },
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={"jv-mInputSearch-adornment mui"}
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
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-mInput-label jv-Mui-focused mui" },
                        disableAnimation: true,
                      }}
                    />
                    {/*</FormControl>*/}
                    <div className="demoSpacer12"></div>

                    <div className="demoSearchGlobal">
                      <JVTextField
                        /*placeholder="Search"*/
                        textFieldClassName={
                          "jv-mInputLarge jv-mInputSearch jv-mInputSearchGlobal mui"
                        }
                        id="search02m"
                        variant="outlined"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              className={"jv-mInputSearch-adornment mui"}
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
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{
                          classes: {
                            root: "jv-mInput-label jv-Mui-focused mui",
                          },
                          disableAnimation: true,
                        }}
                      />
                    </div>

                    <div className="demoSpacer22"></div>

                    {/* 07m. Large Number Variations */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    {/* large number */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined-number01"
                        label="Number"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    {/* large number, narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputLarge jv-mInputNarrow mui"
                        }
                        id="outlined-numberNarrow02"
                        label="Number narrow"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 3 - LARGE TEXT */}
                  {/* 07n. Large Textarea Variations */}
                  {/* large textarea */}
                  <div className={"demoSize"}>
                    {/* Text Area with constant height */}
                    {/* (type and hit enter to increase height) */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined-textarea-static-03"
                        multiline
                        rows={5} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className={"demoSpacer8"}></div>

                    {/* large textarea, auto height */}
                    <div>
                      <TextField
                        /*error*/
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        maxRows={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      {/*<FormHelperText
                       className={"jv-mInput-error mui"} id="outlined-helperErrorText034-error-text">
                       This error is a separate component outside its related text field.
                       </FormHelperText>*/}
                    </div>
                    <div className={"demoSpacer8"}></div>

                    {/* large textarea, read-only */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={2} // <--- this property sets fixed height
                        label="Text Area read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* COLUMN 4 - LARGE TEXT  */}
                  {/* 07o. Large Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* large text + helper + error */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        error
                        helperText="You can have helper text or error text, but not both"
                        id="outlined-helperErrorText01"
                        label="Text with helper and error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-helperErrorText01-helper-text outlined-helperErrorText01-error-text",
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText01-error-text"
                      >
                        This error is a separate component outside its related
                        text field.
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* large text + error */}
                    <div>
                      <TextField
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        error
                        id="outlined-error01"
                        label="Text with error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby": "outlined-error01-error-text",
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-error01-error-text"
                      >
                        You have made an error
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer8"></div>

                    {/* large textarea with error */}
                    <div>
                      <TextField
                        error
                        className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                        id="outlined-textarea-dynamic-03"
                        multiline
                        rows={2}
                        label="Text Area with error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText034-error-text"
                      >
                        You have made an error
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>

          {/* INLINE TEXT */}
          <Grid className={"demoGrid-text"} container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <p className={"demoSubtitle"}>Small Inline</p>

                <div className={"demoSizeWrapper"}>
                  {/* Column 1 Small Inline Text */}
                  {/* 07p. Small Inline Text Variations */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Text</p>
                    {/* small inline text */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined02"
                        label="Text"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    {/* small inline text + long label + helper */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        helperText="Helper text that has many words and ends up being multiple lines long"
                        id="outlined-helperText02"
                        label="Text input with wordy label that runs to three lines long"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                    </div>
                    {/* small inline text narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputNarrow jv-mInputInline mui"
                        }
                        id="outlinedNarrow02"
                        label="Text narrow"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* small inline text, read-only */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        defaultValue="Hello World"
                        id="outlined-read-only-input02"
                        label="Text read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* Column 2 Small Inline Text */}
                  <div className={"demoSize"}>
                    {/* small inline text, disabled */}
                    <p className={"demoSubtitle-2"}>Disabled</p>
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        defaultValue="Hello World"
                        disabled
                        id="outlined-disabled02"
                        label="Disabled"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* 07q. Small Inline Number Variations */}
                    {/* small inline number */}
                    <p className={"demoSubtitle-2"}>Number</p>
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined-number02"
                        label="Number"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    {/* small inline number narrow */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputNarrow jv-mInputInline mui"
                        }
                        id="outlined-numberNarrow02"
                        label="Number narrow"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                  </div>

                  {/* Column 3 - Small Inline Text */}
                  {/* 07r. Small Inline Textarea Variations */}
                  {/* small inline textarea */}
                  <div className={"demoSize"}>
                    {/* Text Area with constant height */}
                    {/* Type and hit enter to increase height */}
                    <p className={"demoSubtitle-2"}>Textarea</p>
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined-textarea-static-03"
                        multiline
                        rows={4} // <--- this property sets fixed height
                        label="Text Area fixed height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* small inline textarea with auto height */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined-textarea-dynamic-03"
                        multiline
                        maxRows={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                    </div>

                    {/* small inline textarea, read-only */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined-textarea-static-03"
                        defaultValue="Build reports and data visualizations to exact design specifications. Learn More."
                        multiline
                        rows={4} // <--- this property sets fixed height
                        label="Text Area read only"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>

                  {/* Column 4 - Small Inline Text */}
                  {/* 07s. Small Inline Error States */}
                  <div className={"demoSize"}>
                    <p className={"demoSubtitle-2"}>Error Validation</p>
                    {/* small inline number + error */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        error
                        id="outlined-numberError02"
                        label="Number with error"
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          shrink: true,
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-numberError02-error-text",
                        }}
                      />
                      <FormHelperText
                        className="jv-mInput-error mui"
                        id={"outlined-numberError02-error-text"}
                      >
                        Number must be between 0 and 100
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* small inline text + helper + error */}
                    <div>
                      <TextField
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        error
                        helperText="You can have helper text or error text, but not both"
                        id="outlined-helperErrorText02"
                        label="Text: helper + error"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                          "aria-describedby":
                            "outlined-helperErrorText02-helper-text outlined-helperErrorText02-error-text",
                        }}
                        FormHelperTextProps={{
                          classes: { root: "jv-mInput-helper mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText02-error-text"
                      >
                        This error is a separate component outside its related
                        text field. I'd need to find a way to have red outline
                        on input box. Will this work?
                      </FormHelperText>
                    </div>
                    <div className="demoSpacer14"></div>

                    {/* Text Area with auto height */}
                    <div>
                      <TextField
                        error
                        className={
                          "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                        }
                        id="outlined-textarea-dynamic-03"
                        multiline
                        maxRows={4}
                        label="Text Area auto height"
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: "jv-mInput-label mui" },
                          disableAnimation: true,
                        }}
                        InputProps={{
                          classes: { input: "jv-mInput-text mui" },
                        }}
                      />
                      <FormHelperText
                        className={"jv-mInput-error mui"}
                        id="outlined-helperErrorText034-error-text"
                      >
                        This error is a separate component outside its related
                        text field.
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};
inputTextField.storyName = "Text Field";

/* --------------- */
/*  08. COLOR      */
/* --------------- */
export const inputColor = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Color</h1>
      <form noValidate autoComplete="off">
        <div className={"demoWrapper demoInput"}>
          <div className={"demoSize"}>
            {/* 8a. Small Color */}
            <p className={"demoSubtitle"}>Small</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallDefault"
                value={"rgba(47,126,216,1)"}
                label="Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallLight"
                value={"#D2E9FD"}
                label="Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#d2e9fd" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallDefaultDisabled"
                disabled={true}
                value={"#249490"}
                label="Default Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallLightDisabled"
                disabled={true}
                value={"#F5FAEB"}
                label="Light Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
            <div className="demoSpacer28"></div>

            {/* 8b. Small Inline Color */}
            <p className={"demoSubtitle"}>Small Inline</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineDefault"
                value={"rgba(47,126,216,1)"}
                label="Inline Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineLight"
                value={"#FFFFFF"}
                label="Inline Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineDefault"
                value={"#249490"}
                label="Inline Default Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineLight"
                value={"#F5FAEB"}
                label="Inline Light Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSmall mui"
                }
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
          </div>

          <div className={"demoSize"}>
            {/* 8c. Medium Color */}
            <p className={"demoSubtitle"}>Medium</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="smallDefault"
                value={"rgba(47,126,216,1)"}
                label="Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="smallLight"
                value={"#D2E9FD"}
                label="Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#d2e9fd" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="smallTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="smallDefaultDisabled"
                disabled={true}
                value={"#249490"}
                label="Default Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="smallLightDisabled"
                disabled={true}
                value={"#F5FAEB"}
                label="Light Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={"jv-mInput jv-mInputText mui"}
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
            <div className="demoSpacer28"></div>

            {/* 8d. Medium Inline Color */}
            <p className={"demoSubtitle"}>Medium Inline</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineDefault"
                value={"rgba(47,126,216,1)"}
                label="Inline Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineLight"
                value={"#FFFFFF"}
                label="Inline Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineDefault"
                value={"#249490"}
                label="Inline Default Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineLight"
                value={"#F5FAEB"}
                label="Inline Light Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
          </div>

          <div className={"demoSize"}>
            {/* 8e. Large Color */}
            <p className={"demoSubtitle"}>Large</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallDefault"
                value={"rgba(47,126,216,1)"}
                label="Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallLight"
                value={"#D2E9FD"}
                label="Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#d2e9fd" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallDefaultDisabled"
                disabled={true}
                value={"#249490"}
                label="Default Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallLightDisabled"
                disabled={true}
                value={"#F5FAEB"}
                label="Light Disabled"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
            <div className="demoSpacer28"></div>

            {/* 8f. Large Inline Color */}
            <p className={"demoSubtitle"}>Large Inline</p>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineDefault"
                value={"rgba(47,126,216,1)"}
                label="Inline Default"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "rgba(47,126,216,1)" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineLight"
                value={"#FFFFFF"}
                label="Inline Light"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineDefault"
                value={"#249490"}
                label="Inline Default Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#249490" }}
                        className={`jv-mControl-launcher-swatch mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineLight"
                value={"#F5FAEB"}
                label="Inline Light Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#f5faeb" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight mui`}
                      />
                    </div>
                  ),
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text">
               Error: You entered an invalid color value
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallInlineTransparent"
                value={"rgba(0, 0, 0, 0)"}
                label="Inline Transparent Read-only"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  readOnly: true,
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  jv-mControl-launcher-swatchTransparent mui`}
                      />
                    </div>
                  ),
                }}
              />
            </div>
            <div className={"jv-mControl jv-mControlColor mui"}>
              <TextField
                error
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputLarge mui"
                }
                id="smallTransparent"
                value={"FF7"}
                label="Error"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                  startAdornment: (
                    <div className="jv-mControl-launcher mui">
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        className={`jv-mControl-launcher-swatch jv-mControl-launcher-swatchLight  mui`}
                      />
                    </div>
                  ),
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text"
              >
                “FF7” isn’t a valid color value. Enter a color value such as
                #ff0000, rgb(255,0,0), or rgba(255,0,0,0).
              </FormHelperText>
            </div>
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
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Refresh Control</h1>
      <div className={"demoWrapper demoInput"}>
        <div className="demoSize">
          <p className={"demoSubtitle"}>Static</p>
          <div className="jv-mControl jv-mControlRefresh mui">
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span class="jv-mButton-icon jv-mIcon mui jv-refresh"></span>
            </IconButton>
            <FormHelperText className={"jv-mInput-helper mui"} id="">
              Data refreshed 2022-01-27 at 14:22:42
            </FormHelperText>
          </div>
        </div>
        <div className="demoSize">
          <p className={"demoSubtitle"}>Active</p>
          <div className="jv-mControl jv-mControlRefresh mui">
            <IconButton
              aria-label="bold"
              className={"jv-mButton jv-mButtonSmall mui"}
            >
              <span className="jv-mButton-icon jv-mIcon mui jv-loading"></span>
            </IconButton>
            <FormHelperText className={"jv-mInput-helper mui"} id="">
              Data refreshed 2022-01-27 at 14:22:42
            </FormHelperText>
          </div>
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
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Input - Combinations</h1>
      <div className={"demoWrapper demoInput"}>
        <div className="demoSize demoSize300">
          <p className={"demoSubtitle"}>Small</p>
          {/* 10a. Small Interval */}
          <div className={"jv-mControl jv-mControlInterval mui"}>
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               The interval must be equal to or greater than 1 for minutes and 15 for seconds.
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="minute"
                id="select"
                select
                variant="outlined"
                label="Timeframe"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10b. Small Inline Interval */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlInterval mui"}
          >
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputSmall jv-mInputInline mui"
                }
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval inline"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               The interval must be equal to or greater than 1 for minutes and 15 for seconds.
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="minute"
                id="select"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer22"></div>

          {/* 10c. Small Condition */}
          <div className={"jv-mControl jv-mControlCondition mui"}>
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold */}
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="outlined01"
                label="Threshold"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               Number must be between 0 and 100.
               </FormHelperText>*/}
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10d. Small Flexwidth Condition */}
          <div
            className={
              "jv-mControl jv-mControlFlexwidth jv-mControlCondition mui"
            }
          >
            <div className={"jv-mControl-operator mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition flexwidth"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="not equal"
                >
                  Not equal to
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="less than"
                >
                  Less than
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="greater than"
                >
                  Greater than
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="less than or equal to"
                >
                  Less than or equal to
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="greater than or equal to"
                >
                  Greater than or equal to
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-uWidth-100px jv-mInputSmall mui"
                }
                id="outlined01"
                label="Threshold"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10e. Small Inline Condition */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlCondition mui"}
          >
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={
                  "jv-mInput jv-mInputSmall jv-mInputText jv-mInputInline jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition inline"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold */}
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSmall mui"}
                id="outlined01"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               Number must be between 0 and 100.
               </FormHelperText>*/}
            </div>
          </div>
        </div>

        <div className="demoSize demoSize300">
          <p className="demoSubtitle">Default</p>
          {/* 10f. Medium Interval */}
          <div className={"jv-mControl jv-mControlInterval mui"}>
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               The interval must be equal to or greater than 1 for minutes and 15 for seconds.
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSelect mui"}
                defaultValue="minute"
                id="select"
                label="Timeframe"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10g. Medium Inline Interval */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlInterval mui"}
          >
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputInline mui"}
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval inline"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               The interval must be equal to or greater than 1 for minutes and 15 for seconds.
               </FormHelperText>*/}
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSelect mui"}
                defaultValue="minute"
                id="select"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer22"></div>

          {/* 10h. Medium Condition */}
          <div className={"jv-mControl jv-mControlCondition mui"}>
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputSelect mui"}
                defaultValue="equals"
                id="select"
                label="Condition"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold */}
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="outlined01"
                label="Threshold"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               Number must be between 0 and 100.
               </FormHelperText>*/}
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10i. Medium Flexwidth Condition */}
          <div
            className={
              "jv-mControl jv-mControlFlexwidth jv-mControlCondition mui"
            }
          >
            <div className={"jv-mControl-operator mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInput jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition Flexwidth"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="not equal"
                >
                  Not equal to
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="less than"
                >
                  Less than
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="greater than"
                >
                  Greater than
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="less than or equal to"
                >
                  Less than or equal to
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="greater than or equal to"
                >
                  Greater than or equal to
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-uWidth-100px jv-mInput mui"
                }
                id="outlined01"
                label="Threshold"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10j. Medium Inline Condition */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlCondition mui"}
          >
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputInline jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition inline"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold */}
              <TextField
                className={"jv-mInput jv-mInputText mui"}
                id="outlined01"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              {/*<FormHelperText
               className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
               Number must be between 0 and 100.
               </FormHelperText>*/}
            </div>
          </div>
        </div>

        <div className="demoSize demoSize300">
          <p className={"demoSubtitle"}>Large</p>
          {/* 10k. Large Interval */}
          <div className={"jv-mControl jv-mControlInterval mui"}>
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text5"
              >
                The interval must be equal to or greater than 1 for minutes and
                15 for seconds.
              </FormHelperText>
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="minute"
                id="select"
                select
                variant="outlined"
                label="Timeframe"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer12"></div>

          {/* 10l. Large Inline Interval */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlInterval mui"}
          >
            <div className={"jv-mControl-interval mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputText jv-mInputLarge jv-mInputInline mui"
                }
                type="number"
                id="outlined-number02"
                variant="outlined"
                label="Interval inline"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  shrink: true,
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text5"
              >
                The interval must be equal to or greater than 1 for minutes and
                15 for seconds.
              </FormHelperText>
            </div>
            <div className={"jv-mControl-timeframe mui"}>
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="minute"
                id="select"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="minute"
                >
                  Minutes
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="second"
                >
                  Seconds
                </MenuItem>
              </TextField>
            </div>
          </div>

          <div className="demoSpacer22"></div>

          {/* 10m. Large Condition */}
          <div className={"jv-mControl jv-mControlCondition mui"}>
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputSelect mui"
                }
                defaultValue="between"
                id="select"
                label="Condition"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold with nested Range */}
              <div className={"jv-mControl jv-mControlRange mui"}>
                <div className={"jv-mControlRange-from mui"}>
                  <TextField
                    className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                    id="outlined01"
                    label="Threshold"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{
                      classes: { root: "jv-mInput-label mui" },
                      disableAnimation: true,
                    }}
                    InputProps={{
                      classes: { input: "jv-mInput-text mui" },
                    }}
                  />
                  {/*<FormHelperText
                   className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
                   Number must be between 0 and 100.
                   </FormHelperText>*/}
                </div>
                <Typography
                  className="jv-mText jv-mControlRange-text mui"
                  variant="body1"
                >
                  and
                </Typography>
                <div className={"jv-mControlRange-to mui"}>
                  <TextField
                    className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                    id="outlined01"
                    variant="outlined"
                    type="number"
                    InputLabelProps={{
                      classes: { root: "jv-mInput-label mui" },
                      disableAnimation: true,
                    }}
                    InputProps={{
                      classes: { input: "jv-mInput-text mui" },
                    }}
                  />
                  {/*<FormHelperText
                   className={"jv-mInput-error mui"} id="select-inline-helper-error-error-text5">
                   Number must be between 0 and 100.
                   </FormHelperText>*/}
                </div>
              </div>
            </div>
          </div>

          <div className="demoSpacer22"></div>

          {/* 10n. Large Inline Condition */}
          <div
            className={"jv-mControl jv-mControlInline jv-mControlCondition mui"}
          >
            <div className={"jv-mControl-operator mui"}>
              {/* Condition */}
              <TextField
                className={
                  "jv-mInput jv-mInputLarge jv-mInputText jv-mInputInline jv-mInputSelect mui"
                }
                defaultValue="equals"
                id="select"
                label="Condition inline"
                select
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                SelectProps={{
                  classes: { select: "jv-mInput-select mui" },
                }}
              >
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="equals"
                >
                  Equals
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="above">
                  Above
                </MenuItem>
                <MenuItem className={"jv-mInput-select-item mui"} value="below">
                  Below
                </MenuItem>
                <MenuItem
                  className={"jv-mInput-select-item mui"}
                  value="between"
                >
                  Between
                </MenuItem>
              </TextField>
            </div>
            <div className={"jv-mControl-threshold mui"}>
              {/* Threshold */}
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="outlined01"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
              <FormHelperText
                className={"jv-mInput-error mui"}
                id="select-inline-helper-error-error-text5"
              >
                Number must be between 0 and 100.
              </FormHelperText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
inputCombos.storyName = "Combinations";
