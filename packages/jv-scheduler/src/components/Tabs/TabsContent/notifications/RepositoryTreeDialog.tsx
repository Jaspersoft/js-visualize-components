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
import {
  getLengthOfObject,
  getUriParts,
} from "../../../../utils/schedulerUtils";
import Loader from "../../../loader/Loader";
import { useTranslation } from "react-i18next";

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

export const RepositoryTreeDialog = ({
  open: dialogOpen,
  handleDialogState,
}: any) => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const folderData = useSelector((state: any) => state.folderData);
  const folderRootData = useSelector((state: any) => state.fakeRoot);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );

  const [showTree, setShowTree] = useState(false);
  const [open, setOpen] = useState<any>(dialogOpen);
  const [width, setWidth] = useState("400px");
  const [height, setHeight] = useState("500px");

  useEffect(() => {
    const expandedFoldersData = getUriParts(resourceUri, true);
    if (
      getLengthOfObject(folderData) === expandedFoldersData.length &&
      folderRootData.length
    ) {
      setShowTree(true);
    }
  }, [folderData, folderRootData]);

  useEffect(() => {
    setOpen(dialogOpen);
  }, [dialogOpen]);

  return (
    <JVDialog open={open} scroll="paper" PaperComponent={PaperComponent}>
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
          dialogTitle={t("repository.dialog.title")}
          DialogTitleProps={{
            style: { cursor: "move" },
            id: "draggable-dialog-title",
          }}
        />
        <JVDialogContent
          DialogContentComponent={showTree ? <TreeView /> : <Loader />}
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
            {t("repository.dialog.select.button")}
          </JVButton>
          <JVButton
            disableElevation
            size="large"
            variant="contained"
            onClick={() => {
              setOpen(false);
              handleDialogState(false);
            }}
          >
            {t("repository.dialog.cancel.button")}
          </JVButton>
        </JVDialogFooter>
      </Resizable>
    </JVDialog>
  );
};
