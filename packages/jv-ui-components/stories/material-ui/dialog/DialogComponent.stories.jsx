import {
  JVButton,
  JVConfirmationDialog,
  JVIcon,
  JVPaper,
  JVTextField,
  JVTypography,
} from "@jaspersoft/jv-ui-components";
import { DialogContentText, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "../css/demoPages.css";
import "./dialog.css";

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
 ----------------------------
 last modified July 25, 2022
 ---------------------------- */

export default {
  component: JVConfirmationDialog,
  title: "Components/Dialog/Component",
};

/* ---------------------- */
/*  1. DEFAULT DIALOG     */
/* ---------------------- */
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

  const DialogContentComponent = (
    <DialogContentText
      id="scroll-dialog-description"
      ref={descriptionElementRef}
      tabIndex={-1}
    >
      {[...new Array(25)]
        .map(
          () =>
            `Your business and your customers want answers. But your requirements are unique. You need a reporting and analytics infrastructure that you can make your own. TIBCO Jaspersoft® software is the most flexible, customizable, and developer-friendly BI platform in the world. Design, embed, and manage reports & analytics with programmatic control. Embedded BI is more than adding a dashboard to a webpage. Embedding requires both front- and back-end integration. Jaspersoft® software takes an API-first approach, giving developers a direct line to all its functionality. Embed reports and dashboards into user interfaces using an award-winning JavaScript framework and leverage powerful back-end services via REST to handle single sign-on, data access, multi-tenancy, and more.`,
        )
        .join("\n")}
    </DialogContentText>
  );
  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Dialog</h1>
      <div>
        <JVConfirmationDialog
          open={true}
          type={"default"}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          onClose={handleClose}
          dialogTitle="Dialog Box Title"
          DialogTitleProps={{
            id: "scroll-dialog-header",
          }}
          DialogTitleTypographyProps={{
            variant: "h2",
          }}
          DialogContentProps={{
            dividers: scroll === "paper",
          }}
          DialogContentComponent={DialogContentComponent}
          DialogActionsComponent={DialogActionsComponent}
        />
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
      <JVPaper {...props} />
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

  const DialogContentComponent = (
    <DialogContentText>
      <JVTextField
        size="large"
        id="outlined01"
        label="Name"
        variant="outlined"
        InputLabelProps={{
          classes: { root: "jv-mInput-label jv-Mui-focused mui" },
          disableAnimation: true,
        }}
      />
    </DialogContentText>
  );

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Dialog - Draggable</h1>
      <div>
        <JVConfirmationDialog
          open={true}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          DialogContentComponent={DialogContentComponent}
          DialogActionsComponent={DialogActionsComponent}
          DialogTitleTypographyProps={{
            variant: "h2",
          }}
          DialogTitleProps={{
            style: { cursor: "move" },
            id: "draggable-dialog-title",

            className: "jv-mDialog-header mui",
          }}
          dialogTitle="Dialog Box Title"
        />
      </div>
    </>
  );
};
DraggableDialog.storyName = "Draggable Dialog";

/* --------------------------- */
/*  3. CONFIRMATION DIALOG     */
/* --------------------------- */
const ActionBtn = (props) => {
  return (
    <JVButton
      disableElevation
      size="large"
      variant="contained"
      color={props.color}
    >
      {props.text}
    </JVButton>
  );
};
const DialogActionsComponent = (
  <>
    <JVButton disableElevation size="large" variant="contained" color="primary">
      OK
    </JVButton>
    <JVButton disableElevation size="large" variant="contained">
      Cancel
    </JVButton>
  </>
);

export const ConfirmationDialog = () => {
  const DialogContentComponent = (
    <>
      <JVTypography className="jv-mText jv-uMargin-b-04  mui" variant="body1">
        You are about to delete [jobname].
      </JVTypography>
      <JVTypography className="jv-mText mui" variant="body1">
        This action cannot be undone.
      </JVTypography>
    </>
  );

  return (
    <>
      <h1 className={"demoType demoTypeComponent"}>Component</h1>
      <h1 className={"demoTitle"}>Dialog - Confirmation</h1>

      {/* 1a. General Confirmation Dialog */}
      <JVConfirmationDialog
        open={true}
        className="demo"
        dialogTitle="Ignore and save?"
        DialogContentComponent={
          <Typography className="jv-mText mui" variant="body1">
            You can ignore your changes and continue saving, or you can cancel
            and apply your filter changes.
          </Typography>
        }
        DialogActionsComponent={
          <>
            <ActionBtn text="Ignore changes" color="primary" />
            <ActionBtn text="Cancel" color="secondary" />
          </>
        }
        DialogSubTitleComponent={
          <>
            <JVIcon icon="infoRound" size="small" />
            <Typography
              className="jv-mText jv-mTextTheme jv-uMargin-b-04 mui"
              variant="body1"
            >
              You've made changes to filters but have not applied them.
            </Typography>
          </>
        }
        disableEscapeKeyDown
        maxWidth="xs"
        DialogTitleProps={{}}
        DialogTitleTypographyProps={{
          variant: "h2",
        }}
      />

      {/* 1b. Warning Confirmation Dialog */}
      <JVConfirmationDialog
        open={true}
        type="warning"
        className="demo"
        dialogTitle="Warning"
        DialogContentComponent={
          <Typography className="jv-mText mui" variant="body1">
            Helpful information. Can be one or more paragraphs.
          </Typography>
        }
        DialogActionsComponent={
          <>
            <ActionBtn text="[Action]" color="warning" />
            <ActionBtn text="Cancel" color="secondary" />
          </>
        }
        DialogSubTitleComponent={
          <>
            <JVIcon icon="warningRound" size="small" />
            <Typography
              className="jv-mText jv-mTextWarning jv-uMargin-b-04 mui"
              variant="body1"
            >
              There is a problem with [specific thing].
            </Typography>
          </>
        }
        disableEscapeKeyDown
        maxWidth="xs"
        DialogTitleProps={{}}
        DialogTitleTypographyProps={{
          variant: "h2",
        }}
      />

      {/* 1c. Delete Confirmation Dialog */}
      <JVConfirmationDialog
        open={true}
        maxWidth="xs"
        dialogTitle="Delete [object]?"
        type="delete"
        className="demo"
        disableEscapeKeyDown
        DialogContentComponent={DialogContentComponent}
        DialogActionsComponent={
          <>
            <ActionBtn text="Yes" color="error" />
            <ActionBtn text="No" color="secondary" />
          </>
        }
        DialogTitleProps={{}}
        DialogTitleTypographyProps={{
          variant: "h2",
        }}
      />

      {/* 1d. Error Confirmation Dialog */}
      <JVConfirmationDialog
        open={true}
        maxWidth="xs"
        dialogTitle="Error"
        type="error"
        className="demo"
        disableEscapeKeyDown
        DialogContentComponent={
          <Typography className="jv-mText mui" variant="body1">
            Helpful information. Can be one or more paragraphs.
          </Typography>
        }
        DialogActionsComponent={<ActionBtn text="Cancel" color="error" />}
        DialogSubTitleComponent={
          <>
            <JVIcon icon="cancelRound" size="small" />
            <Typography
              className="jv-mText jv-mTextError jv-uMargin-b-04 mui"
              variant="body1"
            >
              There is a problem with [specific thing].
            </Typography>
          </>
        }
        DialogTitleProps={{}}
        DialogTitleTypographyProps={{
          variant: "h2",
        }}
      />
    </>
  );
};
ConfirmationDialog.storyName = "Confirmation Dialog";
