import "../css/demoPages.css";
import "./dialog.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. DEFAULT
 *
 *  2. DRAGGABLE
 *
 *  3. CONFIRMATION
 *     3a. General (non-destructive action)
 *     3b. Warning
 *     3c. Delete
 *     3d. Error
 *
 * ----------------------------
 *  last modified Mar 6, 2024
 * ---------------------------- */

export default {
  component: Dialog,
  title: "Components/Dialog/Design",
};

/* -------------------- */
/* 1. DEFAULT DIALOG    */
/* -------------------- */
export const DefaultDialog = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Dialog</h1>

      <div className={"demoWrapper demoDialog"}>
        <Dialog
          classes={{ paper: "jv-mDialog-wrapper mui" }}
          className="jv-mDialog mui"
          open={true}
          onClose={handleClose}
          PaperProps={{
            elevation: 4,
          }}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle
            id="scroll-dialog-title"
            className="jv-mDialog-header mui"
          >
            <Typography className="jv-mDialog-header-title mui" variant="h5">
              Dialog Box Title
            </Typography>
          </DialogTitle>

          <DialogContent
            className="jv-mDialog-body jv-mDialog-bodyPadded mui"
            dividers={scroll === "paper"}
          >
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {[...new Array(12)]
                .map(
                  () =>
                    `Your business and your customers want answers. But your requirements are unique. You need a reporting and analytics infrastructure that you can make your own. TIBCO Jaspersoft® software is the most flexible, customizable, and developer-friendly BI platform in the world. Design, embed, and manage reports & analytics with programmatic control. Embedded BI is more than adding a dashboard to a webpage. Embedding requires both front- and back-end integration. Jaspersoft® software takes an API-first approach, giving developers a direct line to all its functionality. Embed reports and dashboards into user interfaces using an award-winning JavaScript framework and leverage powerful back-end services via REST to handle single sign-on, data access, multi-tenancy, and more.`,
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions className="jv-mDialog-footer mui">
            <Button
              className="jv-mButton jv-mButtonPrimary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">OK</span>
            </Button>
            <Button
              className="jv-mButton jv-mButtonSecondary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Cancel</span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
DefaultDialog.storyName = "Default Dialog";

/* ---------------------- */
/*  2. DRAGGABLE DIALOG   */
/* ---------------------- */
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="jv-MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export const DraggableDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Dialog - Draggable</h1>

      <div>
        <Dialog
          classes={{ paper: "jv-mDialog-wrapper mui" }}
          className="jv-mDialog mui"
          open={true}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          PaperProps={{
            elevation: 4,
          }}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
            className="jv-mDialog-header mui"
          >
            <Typography className="jv-mDialog-header-title mui" variant="h2">
              Dialog Box Title
            </Typography>
          </DialogTitle>

          <DialogContent
            className="jv-mDialog-body jv-mDialog-bodyPadded mui"
            dividers={true}
          >
            <DialogContentText>
              <TextField
                className={"jv-mInput jv-mInputText jv-mInputLarge mui"}
                id="outlined01"
                label="Name"
                variant="outlined"
                InputLabelProps={{
                  classes: { root: "jv-mInput-label jv-Mui-focused mui" },
                  disableAnimation: true,
                }}
                InputProps={{
                  classes: { input: "jv-mInput-text mui" },
                }}
              />
            </DialogContentText>
          </DialogContent>

          <DialogActions className="jv-mDialog-footer mui">
            <Button
              className="jv-mButton jv-mButtonPrimary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">OK</span>
            </Button>
            <Button
              className="jv-mButton jv-mButtonSecondary mui"
              disableElevation
              size="large"
              variant="contained"
            >
              <span className="jv-mButton-label mui">Cancel</span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
DraggableDialog.storyName = "Draggable Dialog";

/* --------------------------- */
/*  3. CONFIRMATION DIALOG     */
/* --------------------------- */
export const ConfirmationDialog = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Dialog - Confirmation</h1>

      {/* 3a. General Confirmation Dialog */}
      <Dialog
        classes={{ paper: "jv-mDialog-wrapper mui" }}
        className="jv-mDialog jv-mDialogConfirm demo mui"
        disableEscapeKeyDown
        maxWidth="xs"
        PaperProps={{
          elevation: 4,
        }}
        aria-labelledby="confirmation-dialog-title"
        open={true}
      >
        <DialogTitle
          id="confirmation-dialog-title"
          className="jv-mDialog-header mui"
        >
          <Typography className="jv-mDialog-header-title mui" variant="h2">
            Ignore and save?
          </Typography>
        </DialogTitle>

        <DialogContent
          className="jv-mDialog-body jv-mDialog-bodyPadded mui"
          dividers={true}
        >
          <div className="jv-mDialog-subtitle mui">
            <Icon className="jv-mIcon jv-mIconSmall jv-infoRound mui" />
            <Typography
              className="jv-mText jv-mTextTheme jv-uMargin-b-04 mui"
              variant="body1"
            >
              You've made changes to filters but have not applied them.
            </Typography>
          </div>
          <Typography className="jv-mText mui" variant="body1">
            You can ignore your changes and continue saving, or you can cancel
            and apply your filter changes.
          </Typography>
        </DialogContent>
        <DialogActions className="jv-mDialog-footer mui">
          <Button
            className="jv-mButton jv-mButtonPrimary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui"> Ignore changes</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Cancel</span>
          </Button>
        </DialogActions>
      </Dialog>

      {/* 3b. Warning Confirmation Dialog */}
      <Dialog
        classes={{ paper: "jv-mDialog-wrapper mui" }}
        className="jv-mDialog jv-mDialogWarning demo mui"
        disableEscapeKeyDown
        maxWidth="xs"
        PaperProps={{
          elevation: 4,
        }}
        aria-labelledby="confirmation-dialog-title"
        open={true}
      >
        <DialogTitle
          id="confirmation-dialog-title"
          className="jv-mDialog-header mui"
        >
          <Typography className="jv-mDialog-header-title mui" variant="h2">
            Warning
          </Typography>
        </DialogTitle>

        <DialogContent
          className="jv-mDialog-body jv-mDialog-bodyPadded mui"
          dividers={true}
        >
          <div className="jv-mDialog-subtitle mui">
            <Icon className="jv-mIcon jv-mIconSmall jv-warningRound mui" />
            <Typography
              className="jv-mText jv-mTextWarning jv-uMargin-b-04 mui"
              variant="body1"
            >
              There is a problem with [specific thing].
            </Typography>
          </div>
          <Typography className="jv-mText mui" variant="body1">
            Helpful information. Can be one or more paragraphs.
          </Typography>
        </DialogContent>
        <DialogActions className="jv-mDialog-footer mui">
          <Button
            className="jv-mButton jv-mButtonWarning mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">[Action]</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Cancel</span>
          </Button>
        </DialogActions>
      </Dialog>

      {/* 3c. Delete Confirmation Dialog */}
      <Dialog
        classes={{ paper: "jv-mDialog-wrapper mui" }}
        className="jv-mDialog jv-mDialogDelete demo mui"
        disableEscapeKeyDown
        maxWidth="xs"
        PaperProps={{
          elevation: 4,
        }}
        aria-labelledby="confirmation-dialog-title"
        open={true}
      >
        <DialogTitle
          id="confirmation-dialog-title"
          className="jv-mDialog-header mui"
        >
          <Typography className="jv-mDialog-header-title mui" variant="h2">
            Delete [object]?
          </Typography>
        </DialogTitle>

        <DialogContent
          className="jv-mDialog-body jv-mDialog-bodyPadded mui"
          dividers={true}
        >
          <Typography className="jv-mText jv-uMargin-b-04 mui" variant="body1">
            You are about to delete [object name].
          </Typography>
          <Typography className="jv-mText mui" variant="body1">
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions className="jv-mDialog-footer mui">
          <Button
            className="jv-mButton jv-mButtonError mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Delete</span>
          </Button>
          <Button
            className="jv-mButton jv-mButtonSecondary mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Cancel</span>
          </Button>
        </DialogActions>
      </Dialog>

      {/* 3d. Error Confirmation Dialog */}
      <Dialog
        classes={{ paper: "jv-mDialog-wrapper mui" }}
        className="jv-mDialog jv-mDialogError demo mui"
        disableEscapeKeyDown
        maxWidth="xs"
        PaperProps={{
          elevation: 4,
        }}
        aria-labelledby="confirmation-dialog-title"
        open={true}
      >
        <DialogTitle
          id="confirmation-dialog-title"
          className="jv-mDialog-header mui"
        >
          <Typography className="jv-mDialog-header-title mui" variant="h2">
            Error
          </Typography>
        </DialogTitle>

        <DialogContent
          className="jv-mDialog-body jv-mDialog-bodyPadded mui"
          dividers={true}
        >
          <div className="jv-mDialog-subtitle mui">
            <Icon className="jv-mIcon jv-mIconSmall jv-cancelRound mui" />
            <Typography
              className="jv-mText jv-mTextError jv-uMargin-b-04 mui"
              variant="body1"
            >
              There is a problem with [specific thing].
            </Typography>
          </div>
          <Typography className="jv-mText mui" variant="body1">
            Helpful information. Can be one or more paragraphs.
          </Typography>
        </DialogContent>
        <DialogActions className="jv-mDialog-footer mui">
          <Button
            className="jv-mButton jv-mButtonError mui"
            disableElevation
            size="large"
            variant="contained"
          >
            <span className="jv-mButton-label mui">Close</span>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
ConfirmationDialog.storyName = "Confirmation Dialog";
