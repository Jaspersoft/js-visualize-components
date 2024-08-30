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
import { TreeView } from "./tree/TreeView";
import { useSelector } from "react-redux";
import {
  getLengthOfObject,
  getUriParts,
  updateChangeToStore,
} from "../../../../utils/schedulerUtils";
import Loader from "../../../loader/Loader";
import { useTranslation } from "react-i18next";
import { useStoreUpdate } from "../../../../hooks/useStoreUpdate";
import { NOTIFICATIONS_TAB } from "../../../../constants/schedulerConstants";
import { IState } from "../../../../types/scheduleType";

function PaperComponent(props: JVPaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="jv-MuiDialogContent-root"]'}
    >
      <div>
        <Resizable
          defaultSize={{ width: 600, height: 400 }}
          minWidth={300}
          minHeight={200}
          enable={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: true,
            bottomLeft: false,
            topLeft: false,
          }}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          handleComponent={{
            bottomRight: (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  position: "absolute",
                  right: "5px",
                  bottom: "0px",
                  cursor: "se-resize",
                }}
              />
            ),
          }}
        >
          <JVPaper {...props} />
        </Resizable>
      </div>
    </Draggable>
  );
}

export const RepositoryTreeDialog = ({
  open: dialogOpen,
  handleDialogState,
}: any) => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const folderData = useSelector((state: IState) => state.folderData);
  const folderRootData = useSelector((state: IState) => state.fakeRoot);
  const stepperConfig = useSelector(
    (state: IState) => state.stepperConfiguration,
  );
  const mailNotification = useSelector(
    (state: IState) => state.scheduleInfo.mailNotification,
  );
  const repositoryDestination = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination,
  );

  const updateStore = useStoreUpdate(NOTIFICATIONS_TAB);

  const { folderURI } = repositoryDestination;

  const [showTree, setShowTree] = useState(false);
  const [open, setOpen] = useState<any>(dialogOpen);
  const [width, setWidth] = useState("400px");
  const [height, setHeight] = useState("500px");
  const [currentSelectedFolder, setCurrentSelectedFolder] = useState(folderURI);

  useEffect(() => {
    setCurrentSelectedFolder(folderURI);
  }, [folderURI]);

  useEffect(() => {
    const expandedFoldersData = getUriParts(folderURI, false);
    if (
      getLengthOfObject(folderData) === expandedFoldersData.length &&
      folderRootData?.length
    ) {
      setShowTree(true);
    }
  }, [folderData, folderRootData]);

  useEffect(() => {
    setOpen(dialogOpen);
  }, [dialogOpen]);

  const handleCloseBtnClick = () => {
    setOpen(false);
    handleDialogState(false);
  };

  const handleSelectBtnClick = () => {
    handleCloseBtnClick();
    updateChangeToStore(
      {
        mailNotification: mailNotification,
        repositoryDestination: {
          ...repositoryDestination,
          folderURI: currentSelectedFolder,
        },
      },
      "folderURI",
      currentSelectedFolder ? currentSelectedFolder : [],
      stepperConfig ? stepperConfig.show : true,
      updateStore,
    );
  };
  return (
    <JVDialog open={open} scroll="paper" PaperComponent={PaperComponent}>
      <JVDialogTitle
        dialogTitle={t("repository.dialog.title")}
        DialogTitleProps={{
          style: { cursor: "move" },
          id: "draggable-dialog-title",
        }}
      />
      <JVDialogContent
        DialogContentComponent={
          showTree ? (
            <TreeView
              folderSelected={currentSelectedFolder}
              handleCurrentSelection={setCurrentSelectedFolder}
            />
          ) : (
            <Loader />
          )
        }
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
          onClick={handleSelectBtnClick}
        >
          {t("repository.dialog.select.button")}
        </JVButton>
        <JVButton
          disableElevation
          size="large"
          variant="contained"
          onClick={handleCloseBtnClick}
        >
          {t("repository.dialog.cancel.button")}
        </JVButton>
      </JVDialogFooter>
    </JVDialog>
  );
};
