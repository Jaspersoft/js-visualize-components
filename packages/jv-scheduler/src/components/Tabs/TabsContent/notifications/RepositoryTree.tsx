import React, { useEffect, useState } from "react";
import {
  JVButton,
  JVDialog,
  JVDialogTitle,
  JVDialogContent,
  JVDialogFooter,
  JVPaper,
  JVPaperProps,
} from "@jaspersoft/jv-ui-components";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { TreeView } from "./TreeView";

const DialogContentComponent = <TreeView />;

function PaperComponent(props: JVPaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="jv-MuiDialogContent-root"]'}
    >
      <JVPaper {...props} />
    </Draggable>
  );
}

export const RepositoryTree = ({ open: dialogOpen }: any) => {
  const [open, setOpen] = useState<any>(dialogOpen);
  const [width, setWidth] = useState("400px");
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    setOpen(dialogOpen);
  }, [dialogOpen]);
  return (
    <>
      <JVDialog
        open={open}
        scroll="paper"
        PaperComponent={PaperComponent}
        maxWidth={window.innerWidth - 12 + "px"}
      >
        <Resizable
          size={{ width, height }}
          onResize={() => {}}
          resizing
          not
          working
          after
          resizing
          to
          max
          width
          onResizeStop={(e, direction, ref, d) => {
            setWidth(parseInt(width) + d.width + "px");
            setHeight(parseInt(height) + d.height + "px");
          }}
          enable={{ bottomRight: true }}
          minWidth={"400px"}
          minHeight={"400px"}
          maxWidth={window.innerWidth - 10 + "px"}
        >
          <JVDialogTitle
            dialogTitle="Repository Content"
            DialogTitleProps={{
              style: { cursor: "move" },
              id: "draggable-dialog-title",
              disableTypography: true,
            }}
          />
          <JVDialogContent
            DialogContentComponent={DialogContentComponent}
            DialogContentProps={{
              dividers: scroll === "paper",
            }}
          />
          <JVDialogFooter>
            <JVButton
              disableElevation
              size="large"
              variant="contained"
              color="primary"
            >
              Select
            </JVButton>
            <JVButton disableElevation size="large" variant="contained">
              Cancel
            </JVButton>
          </JVDialogFooter>
        </Resizable>
      </JVDialog>
    </>
  );
};
