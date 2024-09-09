import "../css/demoPages.css";
import "./autoCompleteInput.css";
import {
  JVAutocomplete,
  JVCheckbox,
  JVClickAwayListener,
  JVIcon,
  JVIconButton,
  JVInputAdornment,
  JVPaper,
  JVPopper,
  JVTextField,
} from "@jaspersoft/jv-ui-components";
import { useRef, useState } from "react";
import { fontOptions, labels } from "./autoCompleteUtils";

/*--------------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. AUTOCOMPLETE SELECT LIST
 *      1a. Small
 *      1b. Default
 *      1c. Large
 *
 *   2. AUTOCOMPLETE CHECK LIST
 *      2a. Small
 *      2b. Default
 *      2c. Large
 *
 /* -------------------------------------
 *  last modified July 22, 2022
 * ------------------------------------ */

export default {
  component: JVAutocomplete,
  title: "Components/Autocomplete/Component",
};

/* ------------------- */
/*  1. AUTOCOMPLETE    */
/* ------------------- */
export const Input = () => {
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Autocomplete - Select List</h1>
      <div className="demoWrapper demoAutocomplete">
        {/* 1a. Small Autocomplete - Select List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <JVAutocomplete
            freeSolo
            id="free-solo-demo-small1"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                size="small"
                error="You can have error text for the input here."
                helperText="You can have helper text for the input here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <JVAutocomplete
            freeSolo
            id="free-solo-demo-small2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                size="small"
                error="You can have error text for the input here."
                helperText="You can have helper text for the input here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <div
            className="jv-mAutocomplete jv-mAutocompleteSmall mui"
            style={{ position: "relative" }}
          >
            <JVAutocomplete
              // open
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              paperComponentProps={{ elevation: 0 }}
              autoHighlight
              disablePortal
              classes={{
                popper: "jv-mDropdown",
              }}
              renderInput={(params) => (
                <JVTextField
                  {...params}
                  labelContained
                  inline
                  id="outlined01"
                  size="small"
                  label="Inline contained"
                  fullWidth={false}
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                  }}
                />
              )}
            />
          </div>
        </div>

        {/* 1b. Default Autocomplete - Select List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <JVAutocomplete
            freeSolo
            id="free-solo-demo-medium1"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                // error="You can have error text here."
                helperText="You can have helper text here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <JVAutocomplete
            freeSolo
            id="free-solo-demo-medium2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                // error="You can have error text here."
                helperText="You can have helper text here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <div
            className="jv-mAutocomplete mui"
            style={{ position: "relative" }}
          >
            <JVAutocomplete
              // open
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              autoHighlight
              disablePortal
              paperComponentProps={{ elevation: 0 }}
              classes={{
                popper: "jv-mDropdown",
              }}
              renderInput={(params) => (
                <JVTextField
                  {...params}
                  labelContained
                  inline
                  id="outlined01"
                  label="Inline contained"
                  fullWidth={false}
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                  }}
                />
              )}
            />
          </div>
        </div>

        {/* 1c. Large Autocomplete - Select List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <JVAutocomplete
            freeSolo
            id="free-solo-demo-large1"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                size="large"
                // error="You can have error text here."
                helperText="You can have helper text here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <JVAutocomplete
            freeSolo
            id="free-solo-demo-large2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                size="large"
                // error="You can have error text here."
                helperText="You can have helper text here."
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <div
            className="jv-mAutocomplete jv-mAutocompleteLarge mui"
            style={{ position: "relative" }}
          >
            <JVAutocomplete
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              paperComponentProps={{ elevation: 0 }}
              autoHighlight
              disablePortal
              classes={{
                popper: "jv-mDropdown",
              }}
              renderInput={(params) => (
                <JVTextField
                  {...params}
                  labelContained
                  inline
                  id="outlined01"
                  label="Inline contained"
                  size="large"
                  fullWidth={false}
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
Input.storyName = "Select List";

/* -------------------------------- */
/*  2. AUTOCOMPLETE CHECK LIST      */
/* -------------------------------- */
/* This component uses a contained input with a drop-down.
 * The drop-down contains a list of checkboxes */

export const ContainedInputWithAutocomplete = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingValue, setPendingValue] = useState([]);
  const [searchText, setSearchText] = useState("");
  const ref = useRef(null);
  const [width, setWidth] = useState("auto");
  const [title, setTitle] = useState("All");
  const handleClick = (event) => {
    setWidth(ref.current.offsetWidth);
    setAnchorEl(event.currentTarget);
  };

  const onClearBtnClick = () => {
    setSearchText("");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  const CustomPaper = (props) => {
    return <JVPaper elevation={0} {...props} />;
  };

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Autocomplete - Check List</h1>
      <div className="demoWrapper demoAutocomplete">
        {/* 2a. Small Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
        </div>
        {/* TODO: Add small autocomplete check list*/}

        {/* 2b. Medium Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
        </div>
        {/* TODO: Add medium autocomplete check list*/}

        {/* 2c. Large Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <JVClickAwayListener onClickAway={handleClose}>
            <div className="jv-mAutocomplete jv-mAutocompleteLarge mui">
              <JVTextField
                id="outlined112"
                ref={ref}
                label="Inline contained"
                size="large"
                value={title}
                inline
                labelContained
                placeholder="All"
                onFocus={handleClick}
                variant="outlined"
                inputProps={{ readOnly: true }}
              />
              <JVPopper
                id={id}
                open={open}
                anchorEl={anchorEl}
                className="jv-mDropdown jv-mAutocomplete-dropdown mui"
                disablePortal
              >
                <JVAutocomplete
                  open
                  multiple
                  className="jv-mDropdown-search jv-uMargin-02"
                  classes={{
                    listbox:
                      "jv-mListbox jv-mListboxLarge jv-mListboxCheckbox mui",
                    option: "jv-mListbox-option mui",
                    popper: "jv-mDropdown-checklist",
                  }}
                  style={{ width: width }}
                  value={pendingValue}
                  inputValue={searchText}
                  onChange={(event, newValue) => {
                    const titleVal = newValue
                      .map((item) => item.label)
                      .join(", ");
                    setPendingValue(newValue);
                    setTitle(titleVal.length ? titleVal : "All");
                    console.log(newValue);
                  }}
                  disableCloseOnSelect
                  disablePortal
                  renderTags={() => null}
                  noOptionsText="No resource"
                  renderOption={(props, option, { selected }) => {
                    return (
                      <li {...props}>
                        <JVCheckbox
                          label={option.label}
                          CheckboxProps={{
                            checked: selected,
                            name: "gilad",
                            onChange: () => {
                              console.log("test");
                            },
                          }}
                        />
                      </li>
                    );
                  }}
                  options={labels}
                  PaperComponent={CustomPaper}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <JVTextField
                      ref={params.InputProps.ref}
                      inputProps={params.inputProps}
                      size="large"
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search"
                      textFieldClassName={"jv-mInputSearch"}
                      id="search02"
                      variant="outlined"
                      value={searchText}
                      InputProps={{
                        endAdornment: (
                          <JVInputAdornment
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
                          </JVInputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        classes: { root: "jv-Mui-focused" },
                        disableAnimation: true,
                      }}
                    />
                  )}
                />
              </JVPopper>
            </div>
          </JVClickAwayListener>
        </div>
      </div>
    </>
  );
};
ContainedInputWithAutocomplete.storyName = "Check List";
