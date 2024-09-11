import {
  JVButton,
  JVPopper,
  JVSelectItem,
  JVTextField,
} from "@jaspersoft/jv-ui-components";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
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
 *  last modified Mar 6, 2024
 * ---------------------------- */

export default {
  title: "Components/Calendar/Design",
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

  const handleListItemClick = (event, index, label) => {
    setSelectedIndex(index);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <div>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Calendar</h1>
      <p className={"demoText"}>
        The Calendar component is a complex component that is customized for
        JRS.
      </p>

      <div className={"demoWrapper demoCalendar"}>
        <div className={"demoSize"}>
          <div className={"demoSubtitle"}>Large</div>
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
              <Paper>
                <div
                  className="jv-mCalendar-dropdown-listbox"
                  style={{ width: width }}
                >
                  <List
                    disablePadding
                    className={"jv-mListbox jv-mListboxLarge mui"}
                    aria-label="main mailbox folders"
                  >
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0, "All")}
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 1 hour"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 1}
                      onClick={(event) =>
                        handleListItemClick(event, 1, "Last 1 hour")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 1 hour"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 2}
                      onClick={(event) =>
                        handleListItemClick(event, 2, "Last 2 hours")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 2 hours"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 3}
                      onClick={(event) =>
                        handleListItemClick(event, 3, "Last 24 hours")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 24 hours"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 4}
                      onClick={(event) =>
                        handleListItemClick(event, 4, "Last 3 days")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 3 days"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 5}
                      onClick={(event) =>
                        handleListItemClick(event, 5, "Last 7 days")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Last 7 days"
                      />
                    </ListItem>
                    <ListItem
                      button
                      className={"jv-mListbox-option mui"}
                      disableGutters
                      selected={selectedIndex === 6}
                      onClick={(event) =>
                        handleListItemClick(event, 6, "Custom")
                      }
                    >
                      <ListItemText
                        className={"jv-mListbox-option-label mui"}
                        primary="Custom"
                      />
                    </ListItem>
                  </List>
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
                              <JVSelectItem value="before">Before</JVSelectItem>
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
                                <JVSelectItem value="after">After</JVSelectItem>
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
                                  className={"jv-mControl jv-mControlRange mui"}
                                >
                                  <div className={"jv-mControlRange-from mui"}>
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
                                  <Typography
                                    className="jv-mText jv-mControlRange-text mui"
                                    variant="body1"
                                  >
                                    and
                                  </Typography>
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

                      <Button className="jv-mButton jv-mButtonPrimary jv-uAlignRight mui">
                        <span className="jv-mButton-label jv-uTextNormal mui">
                          Reset date and time
                        </span>
                      </Button>
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
              </Paper>
            </JVPopper>
          </div>
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
        <h1 className={"demoType demoTypeDesign"}>Design</h1>
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

          <div className={"demoHorizontalRule"}></div>

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
                </div>
              </div>
            </div>
          </div>

          <div className={"demoHorizontalRule"}></div>

          {/* Exact Date, Any Time */}
          <div className="demoSize">
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

          <div className={"demoHorizontalRule"}></div>

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
                    type="date"
                    error="Enter Error here"
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
                        type="time"
                        error="Enter Error here"
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
