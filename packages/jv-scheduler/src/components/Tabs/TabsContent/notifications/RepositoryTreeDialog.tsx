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
import { useSelector } from "react-redux";

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

export const RepositoryTreeDialog = ({ open: dialogOpen }: any) => {
  const folderData = useSelector((state: any) => state.folderData);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );

  const [showTree, setShowTree] = useState(false);
  const [open, setOpen] = useState<any>(dialogOpen);
  const [width, setWidth] = useState("400px");
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    const folders = resourceUri.split("/");
    const expandedFoldersData = folders.slice(1, folders.length - 1);
    if (Object.keys(folderData).length === expandedFoldersData.length) {
      setShowTree(true);
    }
  }, [folderData]);

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
            DialogContentComponent={showTree ? <TreeView /> : null}
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
            <JVButton
              disableElevation
              size="large"
              variant="contained"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </JVButton>
          </JVDialogFooter>
        </Resizable>
      </JVDialog>
    </>
  );
};
