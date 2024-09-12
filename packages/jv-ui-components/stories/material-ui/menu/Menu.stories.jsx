import React, { useState } from "react";
import "./menu.css";
import {
  Button,
  Divider,
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";

/*------------------------------
 *  TABLE OF CONTENTS
 *
 *   1. BASIC MENU
 *
 *   2. SELECTABLE MENU
 *
 *   3. MENU WITH ICONS
 *
 *   4. SELECTABLE MENU WITH ICONS
 *
 * -------------------------------
 *  last modified Mar 7, 2024
 * ------------------------------- */

export default {
  component: Menu,
  title: "Components/Menu/Design",
};

/* ----------------- */
/*  1. BASIC MENU    */
/* ----------------- */
export const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Menu</h1>

      <div className={"demoWrapper"}>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            classes={{
              paper: "jv-mMenu mui",
              list: "jv-mMenu-list mui",
            }}
            elevation={4}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Organizations"
              />
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-caretRight mui" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Users"
              />
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Roles"
              />
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};
BasicMenu.storyName = "Menu";

/* ---------------------- */
/*  2. SELECTABLE MENU    */
/* ---------------------- */
export const MenuSelectable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Menu - Selectable Options</h1>

      <div className={"demoWrapper"}>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            classes={{
              paper: "jv-mMenu jv-mMenuSelectable mui",
              list: "jv-mMenu-list mui",
            }}
            elevation={4}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Sort ascending"
              />
              {/*<ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                                <Icon className="jv-mIcon jv-caretRight mui"/>
                            </ListItemIcon>*/}
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Sort descending"
              />
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item Mui-selected mui"}>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Don't sort"
              />
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};
MenuSelectable.storyName = "Menu - Selectable";

/* --------------------- */
/* 3. MENU WITH ICONS    */
/* --------------------- */
export const MenuIcons = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Menu - Icons</h1>

      <div className={"demoWrapper"}>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            classes={{
              paper: "jv-mMenu jv-mMenuDecorated mui",
              list: "jv-mMenu-list mui",
            }}
            elevation={4}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-star mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Add to favorites"
              />
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-caretRight mui" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-clock mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Schedule"
              />
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-filter mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Filter"
              />
            </MenuItem>

            <Divider className={"jv-mMenu-divider mui"} />
          </Menu>
        </div>
      </div>
    </>
  );
};
MenuIcons.storyName = "Menu - Icons";

/* -------------------------------- */
/* 4. SELECTABLE MENU WITH ICONS    */
/* -------------------------------- */
export const MenuIconsSelectable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Menu - Selectable + Icons</h1>

      <div className={"demoWrapper"}>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            classes={{
              paper: "jv-mMenu jv-mMenuDecorated jv-mMenuSelectable mui",
              list: "jv-mMenu-list mui",
            }}
            elevation={4}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-star mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Add to favorites"
              />
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-caretRight mui" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-clock mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Schedule"
              />
            </MenuItem>
            <MenuItem className={"jv-mMenu-list-item Mui-selected mui"}>
              <ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <Icon className="jv-mIcon jv-filter mui" />
              </ListItemIcon>
              <ListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Filter"
              />
            </MenuItem>

            <Divider className={"jv-mMenu-divider mui"} />
          </Menu>
        </div>
      </div>
    </>
  );
};
MenuIconsSelectable.storyName = "Menu - Selectable + Icons";

/* --------------------- */
/*  3. CUSTOMIZE MENU    */
/* ---------------------
export const CustomizeMenu = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </MenuItem>
            </Menu>
        </div>
    );

};
CustomizeMenu.storyName = "Customized Menu"; */
