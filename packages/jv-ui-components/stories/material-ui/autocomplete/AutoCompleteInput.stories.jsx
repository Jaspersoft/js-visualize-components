import "../../../.storybook/styles/storybook-jv-ui.scss";
import {
  Popper,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "../css/demoPages.css";
import "./autoCompleteInput.css";
import React from "react";
import { Paper } from "@mui/material";
import {
  JVTextField,
  JVIcon,
  JVAutocomplete,
  JVIconButton,
} from "@jaspersoft/jv-ui-components";
import { labels, fontOptions } from "./autoCompleteUtils";

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
  component: Autocomplete,
  title: "Components/Autocomplete/Design",
};

/* TODO: Please remove classname 'jv-MuiFormControl-fullWidth' from inline contained inputs */

/* ------------------- */
/*  1. AUTOCOMPLETE    */
/* ------------------- */
export const Input = () => {
  const CustomPaper = (props) => {
    return <Paper elevation={2} {...props} />;
  };
  const CustomPaperForContained = (props) => {
    return <Paper elevation={0} {...props} />;
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Autocomplete - Select List</h1>
      <div className="demoWrapper demoAutocomplete">
        {/* 1a. Small Autocomplete */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <Autocomplete
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            freeSolo
            id="free-solo-demo-small1"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            PaperComponent={CustomPaper}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                size="small"
                error="You can have error text for the input here."
                helperText={"You can have helper text for the input here."}
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <Autocomplete
            freeSolo
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            id="free-solo-demo-small2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            PaperComponent={CustomPaper}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                size="small"
                error="You can have error text for the input here."
                helperText={"You can have helper text for the input here."}
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
            <Autocomplete
              /* when want to inspect selection list uncomment below parameter (open)*/
              /*open*/
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              PaperComponent={CustomPaperForContained}
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

        {/* 1b. Default Autocomplete */}
        <div className="demoSize">
          <p className="demoSubtitle">Medium</p>
          <Autocomplete
            freeSolo
            id="free-solo-demo-medium1"
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            disableClearable
            options={fontOptions.map((option) => option.text)}
            PaperComponent={CustomPaper}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                // error="You can have error text here."
                helperText={"You can have helper text here."}
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <Autocomplete
            freeSolo
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            id="free-solo-demo-medium2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            PaperComponent={CustomPaper}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                // error="You can have error text here."
                helperText={"You can have helper text here."}
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
            <Autocomplete
              /* when want to inspect selection list uncomment below parameter (open)*/
              /*open*/
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              PaperComponent={CustomPaperForContained}
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

        {/* 1c. Large Autocomplete */}
        <div className="demoSize">
          <p className="demoSubtitle">Large</p>
          <Autocomplete
            id="free-solo-demo-large1"
            freeSolo
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            autoHighlight
            PaperComponent={CustomPaper}
            options={fontOptions.map((option) => option.text)}
            renderInput={(params) => (
              <JVTextField
                {...params}
                id="outlined01"
                label="Auto-complete"
                size="large"
                // error="You can have error text here."
                helperText={"You can have helper text here."}
                InputLabelProps={{
                  classes: { root: "jv-mInput-label mui" },
                  disableAnimation: true,
                  shrink: true,
                }}
              />
            )}
          />

          <div className="demoSpacer28"></div>

          <Autocomplete
            freeSolo
            /* when want to inspect selection list uncomment below parameter (open)*/
            /*open*/
            id="free-solo-demo-large2"
            disableClearable
            options={fontOptions.map((option) => option.text)}
            PaperComponent={CustomPaper}
            autoHighlight
            renderInput={(params) => (
              <JVTextField
                {...params}
                inline
                id="outlined01"
                label="Auto-complete inline"
                size="large"
                // error="You can have error text here."
                helperText={"You can have helper text here."}
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
            <Autocomplete
              /* when want to inspect selection list uncomment below parameter (open)*/
              /*open*/
              freeSolo
              id="free-solo-demo-medium3"
              disableClearable
              options={fontOptions.map((option) => option.text)}
              PaperComponent={CustomPaperForContained}
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [pendingValue, setPendingValue] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState("auto");
  const [title, setTitle] = React.useState("All");
  const handleClick = (event) => {
    setWidth(ref.current.offsetWidth);
    setAnchorEl(event.currentTarget);
  };

  const onClearBtnClick = () => {
    setSearchText("");
  };

  const handleClose = (event, reason) => {
    // if (reason === 'toggleInput') {
    //     return;
    // }
    // if (anchorEl) {
    //     anchorEl.focus();
    // }
    // setAnchorEl(null);
  };

  const handleOnChange = (e, value) => {
    console.log(pendingValue);
  };
  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  const CustomPaper = (props) => {
    return <Paper elevation={0} {...props} />;
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Autocomplete - Check List</h1>
      <div className="demoWrapper demoAutocomplete">
        {/* 2a. Small Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Small</p>
          <div className="jv-mAutocomplete mui">
            <JVTextField
              id="autocomplete-checkbox-small1"
              ref={ref}
              label="Inline contained"
              size="small"
              value={title}
              inline
              labelContained
              placeholder="All"
              onFocus={handleClick}
              variant="outlined"
              inputProps={{ readOnly: true }}
            />
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              className="jv-mDropdown jv-mAutocomplete-dropdown mui"
              disablePortal
            >
              <JVAutocomplete
                open
                onClose={handleClose}
                multiple
                className="jv-mDropdown-search jv-uMargin-02"
                classes={{
                  listbox:
                    "jv-mListbox jv-mListboxSmall jv-mListboxCheckbox mui",
                  option: "jv-mListbox-option mui",
                  popper: "jv-mDropdown-checklist",
                }}
                style={{ width: width }}
                value={pendingValue}
                inputValue={searchText}
                onChange={(event, newValue, reason) => {
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
                  const { key, ...other } = props;
                  return (
                    <li key={key} {...other}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selected}
                            color="primary"
                            classes={{ root: "jv-mInput-checkbox-check mui" }}
                            name="gilad"
                          />
                        }
                        className="jv-mInput-checkbox mui"
                        classes={{ label: "jv-mInput-checkbox-label mui" }}
                        label={option.label}
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
                    size="small"
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                    textFieldClassName={"jv-mInputSearch"}
                    id="search-sm-02"
                    variant="outlined"
                    value={searchText}
                    InputProps={{
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
                      classes: { root: "jv-Mui-focused" },
                      disableAnimation: true,
                    }}
                  />
                )}
              />
            </Popper>
          </div>
        </div>

        {/* 2b. Medium Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Medium</p>
          <div className="jv-mAutocomplete mui">
            <JVTextField
              id="autocomplete-checkbox-medium2"
              ref={ref}
              label="Inline contained"
              size=""
              value={title}
              inline
              labelContained
              placeholder="All"
              onFocus={handleClick}
              variant="outlined"
              inputProps={{ readOnly: true }}
            />
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              className="jv-mDropdown jv-mAutocomplete-dropdown mui"
              disablePortal
            >
              <JVAutocomplete
                open
                onClose={handleClose}
                multiple
                className="jv-mDropdown-search jv-uMargin-02"
                classes={{
                  listbox: "jv-mListbox jv-mListboxCheckbox mui",
                  option: "jv-mListbox-option mui",
                  popper: "jv-mDropdown-checklist",
                }}
                style={{ width: width }}
                value={pendingValue}
                inputValue={searchText}
                onChange={(event, newValue, reason) => {
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
                  const { key, ...other } = props;
                  return (
                    <li key={key} {...other}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selected}
                            color="primary"
                            classes={{ root: "jv-mInput-checkbox-check mui" }}
                            name="gilad"
                          />
                        }
                        className="jv-mInput-checkbox mui"
                        classes={{ label: "jv-mInput-checkbox-label mui" }}
                        label={option.label}
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
                    size=""
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search"
                    textFieldClassName={"jv-mInputSearch"}
                    id="search-md-02"
                    variant="outlined"
                    value={searchText}
                    InputProps={{
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
                      classes: { root: "jv-Mui-focused" },
                      disableAnimation: true,
                    }}
                  />
                )}
              />
            </Popper>
          </div>
        </div>

        {/* 2c. Large Autocomplete - Check List */}
        <div className="demoSize">
          <p className={"demoSubtitle"}>Large</p>
          <div className="jv-mAutocomplete jv-mAutocompleteLarge mui">
            <JVTextField
              id="autocomplete-checkbox-large3"
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
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              className="jv-mDropdown jv-mAutocomplete-dropdown mui"
              disablePortal
            >
              <JVAutocomplete
                open
                onClose={handleClose}
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
                onChange={(event, newValue, reason) => {
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
                  const { key, ...other } = props;
                  return (
                    <li key={key} {...other}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selected}
                            color="primary"
                            classes={{ root: "jv-mInput-checkbox-check mui" }}
                            name="gilad"
                          />
                        }
                        className="jv-mInput-checkbox mui"
                        classes={{ label: "jv-mInput-checkbox-label mui" }}
                        label={option.label}
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
                    id="search-lg-02"
                    variant="outlined"
                    value={searchText}
                    InputProps={{
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
                      classes: { root: "jv-Mui-focused" },
                      disableAnimation: true,
                    }}
                  />
                )}
              />
            </Popper>
          </div>
        </div>
      </div>
    </>
  );
};
ContainedInputWithAutocomplete.storyName = "Check List";
