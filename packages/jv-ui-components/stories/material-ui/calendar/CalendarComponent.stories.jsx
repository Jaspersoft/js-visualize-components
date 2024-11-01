import {
  JVButton,
  JVClickAwayListener,
  JVList,
  JVListItem,
  JVListItemText,
  JVPaper,
  JVPopper,
  JVSelectItem,
  JVTextField,
  JVTypography,
} from "../../../material-ui";
import { useRef, useState } from "react";
import "../css/demoPages.css";
import "./calendar.css";
import "../css/demoPages.css";
import "./calendar.css";
/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. CALENDAR DROP-DOWN
 *
 *  2. INPUT LAYOUTS
 *
 * ----------------------------
 *  last modified July 22, 2022
 * ---------------------------- */

export default {
  title: "Components/Calendar/Component",
  component: JVTextField,
};

/* -------------------------- */
/*  1. CALENDAR DROP-DOWN     */
/* -------------------------- */
export const Calendar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(5);
  const ref = useRef(null);
  const [width, setWidth] = useState("auto");
  const [selectedDateFilter, setSelectedDateFilter] = useState("exactDate");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("anyTime");
  const handleClick = (event) => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
    setAnchorEl(event.currentTarget);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handlePopupClose = () => {
    if (event.target.localName === "body") {
      event.preventDefault();
    } else {
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <div>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Calendar</h1>
      <p className={"demoText"}>
        The Calendar component is a complex component that is customized for
        JRS.
      </p>

      <div className={"demoWrapper demoCalendar"}>
        <div className={"demoSize"}>
          <div className={"demoSubtitle"}>Large</div>
          <JVClickAwayListener onClickAway={handlePopupClose}>
            <div
              className={"jv-mCalendar jv-mCalendarLarge"}
              style={{ position: "relative" }}
            >
              <JVTextField
                id="outlined112"
                ref={ref}
                label="Last run"
                size="large"
                inline
                labelContained
                placeholder="All"
                onFocus={handleClick}
                variant="outlined"
                inputProps={{ readOnly: true }}
                InputLabelProps={{
                  shrink: true,
                  disableAnimation: true,
                }}
              />
              <JVPopper
                id={id}
                open={open}
                anchorEl={anchorEl}
                className="jv-mDropdown jv-mCalendar-dropdown"
                disablePortal
              >
                <JVPaper>
                  <div
                    className="jv-mCalendar-dropdown-listbox"
                    style={{ width: width }}
                  >
                    <JVList
                      disablePadding
                      component="nav"
                      className={"jv-mListbox jv-mListboxLarge"}
                      aria-label="main mailbox folders"
                    >
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="All"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Last 1 hour"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Last 2 hours"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Last 24 hours"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Last 3 days"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Last 7 days"
                        />
                      </JVListItem>
                      <JVListItem
                        className="jv-mListbox-option"
                        button
                        disableGutters
                        selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6)}
                      >
                        <JVListItemText
                          className="jv-mListbox-option-label"
                          primary="Custom"
                        />
                      </JVListItem>
                    </JVList>
                  </div>

                  {selectedIndex === 6 && (
                    <div className="jv-mCalendar-dropdown-inputs">
                      <div className="jv-mCalendar-dropdown-inputs-body">
                        <div className="jv-mInputs jv-mCalendar-inputs mui">
                          <div className={"jv-mInputs-group mui"}>
                            <div
                              className={
                                "jv-mInputs-group-item jv-uWidth-150px mui"
                              }
                            >
                              <JVTextField
                                size="large"
                                value={selectedDateFilter}
                                id="select"
                                label=""
                                select
                                onChange={(e) =>
                                  setSelectedDateFilter(e.target.value)
                                }
                              >
                                <JVSelectItem value="exactDate">
                                  Exact Date
                                </JVSelectItem>
                                <JVSelectItem value="before">
                                  Before
                                </JVSelectItem>
                                <JVSelectItem value="after">After</JVSelectItem>
                                <JVSelectItem value="between">
                                  Between
                                </JVSelectItem>
                              </JVTextField>
                            </div>
                            {selectedDateFilter !== "between" && (
                              <div className={"jv-mInputs-group-item mui"}>
                                <JVTextField
                                  textFieldClassName={"jv-mInputDate"}
                                  size={"large"}
                                  id="outlined03"
                                  type="date"
                                  InputLabelProps={{
                                    disableAnimation: true,
                                  }}
                                />
                              </div>
                            )}

                            {(selectedDateFilter === "before" ||
                              selectedDateFilter === "after") && (
                              <div className={"jv-mInputs-group-item mui"}>
                                <JVTextField
                                  /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                                  textFieldClassName={"jv-mInputTime"}
                                  size={"large"}
                                  id="outlined03"
                                  type="time"
                                  InputLabelProps={{
                                    disableAnimation: true,
                                  }}
                                />
                              </div>
                            )}
                            {selectedDateFilter === "between" && (
                              <div className={"jv-mInputs-group-item mui"}>
                                <div
                                  className={"jv-mControl jv-mControlRange mui"}
                                >
                                  <div className={"jv-mControlRange-from mui"}>
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
                              </div>
                            )}
                          </div>
                          {selectedDateFilter === "exactDate" && (
                            <div className={"jv-mInputs-group mui"}>
                              <div
                                className={
                                  "jv-mInputs-group-item jv-uWidth-150px mui"
                                }
                              >
                                <JVTextField
                                  size="large"
                                  value={selectedTimeFilter}
                                  id="select"
                                  label=""
                                  select
                                  onChange={(e) =>
                                    setSelectedTimeFilter(e.target.value)
                                  }
                                >
                                  <JVSelectItem value="anyTime">
                                    Any time
                                  </JVSelectItem>
                                  <JVSelectItem value="exactTime">
                                    Exact Time
                                  </JVSelectItem>
                                  <JVSelectItem value="before">
                                    Before
                                  </JVSelectItem>
                                  <JVSelectItem value="after">
                                    After
                                  </JVSelectItem>
                                  <JVSelectItem value="between">
                                    Between
                                  </JVSelectItem>
                                </JVTextField>
                              </div>

                              <div className={"jv-mInputs-group-item mui"}>
                                {selectedTimeFilter !== "anyTime" &&
                                  selectedTimeFilter !== "between" && (
                                    <JVTextField
                                      textFieldClassName={"jv-mInputTime"}
                                      size={"large"}
                                      id="outlined03"
                                      type="time"
                                      InputLabelProps={{
                                        disableAnimation: true,
                                      }}
                                    />
                                  )}
                                {selectedTimeFilter === "between" && (
                                  <div
                                    className={
                                      "jv-mControl jv-mControlRange mui"
                                    }
                                  >
                                    <div
                                      className={"jv-mControlRange-from mui"}
                                    >
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
                                    <JVTypography
                                      className="jv-mText jv-mControlRange-text mui"
                                      variant="body1"
                                    >
                                      and
                                    </JVTypography>
                                    <div className={"jv-mControlRange-to mui"}>
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
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        <JVButton
                          labelProps={{ labelClasses: "jv-uTextNormal" }}
                          color="primary"
                          className="jv-uAlignRight"
                        >
                          Reset date and time
                        </JVButton>
                      </div>
                      <div className="jv-mCalendar-dropdown-inputs-footer">
                        <JVButton
                          color="primary"
                          size="large"
                          variant="contained"
                        >
                          Apply
                        </JVButton>
                        <JVButton size="large" variant="contained">
                          Cancel
                        </JVButton>
                      </div>
                    </div>
                  )}
                </JVPaper>
              </JVPopper>
            </div>
          </JVClickAwayListener>
        </div>
      </div>
    </div>
  );
};

/* --------------------- */
/*  2. INPUT LAYOUTS     */
/* --------------------- */
export const inputLayouts = () => {
  return (
    <>
      <div>
        <h1 className={"demoType demoTypeComponent"}>Component</h1>
        <h1 className={"demoTitle"}>Calendar - Input Combinations</h1>

        <div className="demoWrapper demoCalendarLayout">
          {/* Before and After */}
          <div className="demoSize">
            <p className={"demoSubtitle"}>Before & After</p>
            <div className="jv-mInputs jv-mCalendar-inputs mui">
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="before"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>
                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                    textFieldClassName={"jv-mInputDate"}
                    size={"large"}
                    id="outlined03"
                    type="date"
                    InputLabelProps={{
                      disableAnimation: true,
                    }}
                  />
                </div>

                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
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
            </div>
          </div>
          <div className="demoHorizontalRule"></div>

          {/* Between */}
          <div className="demoSize">
            <p className={"demoSubtitle"}>Between</p>
            <div className="jv-mInputs jv-mCalendar-inputs mui">
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="between"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>

                <div className={"jv-mInputs-group-item mui"}>
                  <div className={"jv-mControl jv-mControlRange mui"}>
                    <div className={"jv-mControlRange-from mui"}>
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
                </div>
              </div>
            </div>
          </div>
          <div className="demoHorizontalRule"></div>

          {/* Exact Date, Any Time */}
          <div className="demoSize">
            <div className="demo calendar">
              <p className={"demoSubtitle"}>Exact date, any time</p>
              <div className="jv-mInputs jv-mCalendar-inputs mui">
                <div className={"jv-mInputs-group mui"}>
                  <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                    <JVTextField
                      size="large"
                      defaultValue="exactDate"
                      id="select"
                      label=""
                      select
                    >
                      <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                      <JVSelectItem value="before">Before</JVSelectItem>
                      <JVSelectItem value="after">After</JVSelectItem>
                      <JVSelectItem value="between">Between</JVSelectItem>
                    </JVTextField>
                  </div>

                  <div className={"jv-mInputs-group-item mui"}>
                    <JVTextField
                      /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                      textFieldClassName={"jv-mInputDate"}
                      size={"large"}
                      id="outlined03"
                      type="date"
                      InputLabelProps={{
                        disableAnimation: true,
                      }}
                    />
                  </div>
                </div>
                <div className={"jv-mInputs-group mui"}>
                  <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                    <JVTextField
                      size="large"
                      defaultValue="anyTime"
                      id="select"
                      label=""
                      select
                    >
                      <JVSelectItem value="anyTime">Any time</JVSelectItem>
                      <JVSelectItem value="exactTime">Exact Time</JVSelectItem>
                      <JVSelectItem value="before">Before</JVSelectItem>
                      <JVSelectItem value="after">After</JVSelectItem>
                      <JVSelectItem value="between">Between</JVSelectItem>
                    </JVTextField>
                  </div>
                  <div className={"jv-mInputs-group-item mui"}>
                    {/* this container needs to be here even though it's empty */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="demoHorizontalRule"></div>

          {/* Exact Date, Exact Time */}
          <div className="demoSize">
            <p className={"demoSubtitle"}>Exact date, exact time</p>
            <div className="jv-mInputs jv-mCalendar-inputs mui">
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="exactDate"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>

                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                    textFieldClassName={"jv-mInputDate"}
                    size={"large"}
                    id="outlined03"
                    type="date"
                    InputLabelProps={{
                      disableAnimation: true,
                    }}
                  />
                </div>
              </div>
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="exactTime"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="anyTime">Any time</JVSelectItem>
                    <JVSelectItem value="exactTime">Exact Time</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>
                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputTime jv-uWidth-125px"}*/
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
            </div>
          </div>
          <div className="demoHorizontalRule"></div>

          {/* Exact Date, Before or After */}
          <div className="demoSize">
            <p className={"demoSubtitle"}>Exact date, before or after </p>
            <div className="jv-mInputs jv-mCalendar-inputs mui">
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="exactDate"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>

                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                    textFieldClassName={"jv-mInputDate"}
                    size={"large"}
                    id="outlined03"
                    type="date"
                    InputLabelProps={{
                      disableAnimation: true,
                    }}
                  />
                </div>
              </div>
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="after"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="anyTime">Any time</JVSelectItem>
                    <JVSelectItem value="exactTime">Exact Time</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>
                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputTime jv-uWidth-125px"}*/
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
            </div>
          </div>
          <div className="demoHorizontalRule"></div>

          {/* Exact Date, Between */}
          <div className="demoSize">
            <p className={"demoSubtitle"}>Exact date, between </p>
            <div className="jv-mInputs jv-mCalendar-inputs mui">
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="exactDate"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="exactDate">Exact Date</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>

                <div className={"jv-mInputs-group-item mui"}>
                  <JVTextField
                    /*textFieldClassName={"jv-mInputDate jv-uWidth-125px"}*/
                    textFieldClassName={"jv-mInputDate"}
                    size={"large"}
                    id="outlined03"
                    error="Enter Error here"
                    type="date"
                    InputLabelProps={{
                      disableAnimation: true,
                    }}
                  />
                </div>
              </div>
              <div className={"jv-mInputs-group mui"}>
                <div className={"jv-mInputs-group-item jv-uWidth-150px mui"}>
                  <JVTextField
                    size="large"
                    defaultValue="between"
                    id="select"
                    label=""
                    select
                  >
                    <JVSelectItem value="anyTime">Any time</JVSelectItem>
                    <JVSelectItem value="exactTime">Exact Time</JVSelectItem>
                    <JVSelectItem value="before">Before</JVSelectItem>
                    <JVSelectItem value="after">After</JVSelectItem>
                    <JVSelectItem value="between">Between</JVSelectItem>
                  </JVTextField>
                </div>
                <div className={"jv-mInputs-group-item mui"}>
                  <div className={"jv-mControl jv-mControlRange mui"}>
                    <div className={"jv-mControlRange-from mui"}>
                      <JVTextField
                        /*textFieldClassName={"jv-mInputTime jv-uWidth-125px"}*/
                        textFieldClassName={"jv-mInputTime"}
                        size={"large"}
                        id="outlined03"
                        error="Enter Error here"
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
                        /*textFieldClassName={"jv-mInputTime jv-uWidth-125px"}*/
                        textFieldClassName={"jv-mInputTime"}
                        size={"large"}
                        id="outlined03"
                        error="Enter Error here"
                        type="time"
                        InputLabelProps={{
                          disableAnimation: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
