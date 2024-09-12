import React, { useState } from "react";
import "./menu.css";
import "../../../.storybook/styles/storybook-jasper-ui.scss";
import {
  JVButton,
  JVDivider,
  JVIcon,
  JVListItem,
  JVListItemIcon,
  JVListItemText,
  JVMenu,
  JVMenuItem,
  JVMenuList,
  JVPaper,
  JVTypography,
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
  component: JVMenu,
  title: "Components/JVMenu/Design",
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
          <JVButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </JVButton>
          <JVMenu
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
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Organizations"
              />
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-caretRight mui" />
              </JVListItemIcon>
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Users"
              />
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Roles"
              />
            </JVMenuItem>
          </JVMenu>
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
          <JVButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </JVButton>
          <JVMenu
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
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Sort ascending"
              />
              {/*<ListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                                <Icon className="jv-mIcon jv-caretRight mui"/>
                            </ListItemIcon>*/}
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Sort descending"
              />
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item Mui-selected mui"}>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Don't sort"
              />
            </JVMenuItem>
          </JVMenu>
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
          <JVButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </JVButton>
          <JVMenu
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
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-star mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Add to favorites"
              />
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-caretRight mui" />
              </JVListItemIcon>
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-clock mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Schedule"
              />
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-filter mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Filter"
              />
            </JVMenuItem>

            <JVDivider className={"jv-mMenu-divider mui"} />
          </JVMenu>
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
          <JVButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Menu
          </JVButton>
          <JVMenu
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
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-star mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Add to favorites"
              />
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-caretRight mui" />
              </JVListItemIcon>
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-clock mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Schedule"
              />
            </JVMenuItem>
            <JVMenuItem className={"jv-mMenu-list-item Mui-selected mui"}>
              <JVListItemIcon className={"jv-mMenu-list-item-icon mui"}>
                <JVIcon className="jv-mIcon jv-filter mui" />
              </JVListItemIcon>
              <JVListItemText
                className={"jv-mMenu-list-item-text mui"}
                classes={{ primary: "jv-mText mui" }}
                primary="Filter"
              />
            </JVMenuItem>

            <JVDivider className={"jv-mMenu-divider mui"} />
          </JVMenu>
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
            <JVButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Menu
            </JVButton>
            <JVMenu
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
                <JVMenuItem>
                    <JVListItemIcon>
                        <SendIcon fontSize="small" />
                    </JVListItemIcon>
                    <JVListItemText primary="Sent mail" />
                </JVMenuItem>
                <JVMenuItem>
                    <JVListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </JVListItemIcon>
                    <JVListItemText primary="Drafts" />
                </JVMenuItem>
                <JVMenuItem>
                    <JVListItemIcon>
                        <InboxIcon fontSize="small" />
                    </JVListItemIcon>
                    <JVListItemText primary="Inbox" />
                </JVMenuItem>
            </JVMenu>
        </div>
    );

};
CustomizeMenu.storyName = "Customized Menu"; */
