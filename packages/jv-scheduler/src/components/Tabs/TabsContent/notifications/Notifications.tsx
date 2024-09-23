import React, { ChangeEvent, useEffect, useState } from "react";
import {
  JVButton,
  JVRadioButton,
  JVRadioGroup,
  JVTextField,
  JVFormError,
} from "@jaspersoft/jv-ui-components";
import i18nScheduler from "../../../../i18n";
import { JVTypographyComponent } from "../../../common/CommonComponents";
import { RepositoryTreeDialog } from "./RepositoryTreeDialog";
import { getFakeRootData, getFolderData } from "../../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useStoreUpdate } from "../../../../hooks/useStoreUpdate";
import {
  NOTIFICATIONS_TAB,
  SEND_ATTACHMENT,
  SEND_LINK,
} from "../../../../constants/schedulerConstants";
import { useTranslation } from "react-i18next";
import { IState, translationProps } from "../../../../types/scheduleType";
import { updateChangeToStore } from "../../../../utils/schedulerUtils";
import {
  addRootFolderPath,
  getExpandedNodeDataFromUri,
} from "../../../../utils/treeUtils";

const Notifications = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const stepperConfig = useSelector(
    (state: IState) => state.stepperConfiguration,
  );
  const mailNotification = useSelector(
    (state: IState) => state.scheduleInfo.mailNotification,
  );
  const emailErr = useSelector((state: IState) => state.scheduleErrors.address);
  const subjectErr = useSelector(
    (state: IState) => state.scheduleErrors.subject,
  );
  const messageErr = useSelector(
    (state: IState) => state.scheduleErrors.messageText,
  );
  const folderUriErr = useSelector(
    (state: IState) => state.scheduleErrors.folderURI,
  );
  const repositoryDestination = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination,
  );
  const folderData = useSelector((state: IState) => state.folderData);
  const fakeRoot = useSelector((state: IState) => state.fakeRoot);
  const initialTreeDataLoadApiFailure = useSelector(
    (state: IState) => state.scheduleApisFailure?.initialTreeDataLoadApiFailure,
  );

  const {
    address: addressVisible,
    subject: subjectVisible,
    messageText: messageTextVisible,
    reportAccessType: reportAccessTypeVisible,
  } = useSelector((state: IState) => state.fieldsVisibility);

  const {
    messageText,
    subject,
    toAddresses: { address },
    resultSendType,
  } = mailNotification;
  const { folderURI } = repositoryDestination;

  const [open, setOpen] = useState<boolean>(false);
  const [mailAddress, setMailAddress] = useState(address);
  const [mailSubject, setMailSubject] = useState(subject);
  const [mailMessageText, setMailMessageText] = useState(messageText);
  const [sendType, setSendType] = useState(resultSendType);
  const [repoUri, setRepoUri] = useState(folderURI);

  const updateStore = useStoreUpdate(NOTIFICATIONS_TAB);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedVal = e.target.value,
      updatedProperty = {
        mailNotificationVal: {
          ...mailNotification,
          resultSendType: selectedVal,
        },
        resultSendType: selectedVal,
      };
    setSendType(selectedVal);
    updateChangeToStore(
      updatedProperty,
      "",
      "",
      stepperConfig.show,
      updateStore,
    );
  };

  useEffect(() => {
    setMailAddress(mailAddress);
  }, [mailAddress]);

  useEffect(() => {
    setMailSubject(mailSubject);
  }, [mailSubject]);

  useEffect(() => {
    setMailMessageText(mailMessageText);
  }, [mailMessageText]);

  useEffect(() => {
    setRepoUri(repositoryDestination.folderURI);
  }, [repositoryDestination.folderURI]);

  const handleBrowseButtonClick = () => {
    // get data for what to show in the tree on first level
    if (!fakeRoot?.length) {
      dispatch(getFakeRootData());
    }
    // get children data for each folder of resource uri
    getExpandedNodeDataFromUri(folderURI as string, false, (uri: string) => {
      const uriToCheck = addRootFolderPath(uri);
      if (!folderData[uriToCheck]) {
        dispatch(getFolderData(uriToCheck));
      }
    });
    setOpen(true);
  };

  return (
    <>
      <JVTypographyComponent text={t("notifications.email.title")} />
      <div className="jv-mInputs mui">
        {addressVisible && (
          <JVTextField
            size="large"
            label={t("notifications.email.recipients.label")}
            helperText={t("notifications.email.helpertext")}
            value={mailAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMailAddress(e.target.value)
            }
            onBlur={() => {
              let addressArr;
              if (Array.isArray(mailAddress)) {
                addressArr = mailAddress;
              } else {
                addressArr = mailAddress.length
                  ? mailAddress.split(new RegExp(" *, *"))
                  : mailAddress;
              }
              updateChangeToStore(
                {
                  mailNotification: {
                    ...mailNotification,
                    toAddresses: { address: addressArr },
                  },
                },
                "address",
                addressArr,
                stepperConfig.show,
                updateStore,
              );
            }}
            error={t(emailErr || "")}
          />
        )}
        {subjectVisible && (
          <JVTextField
            size="large"
            label={t("notifications.email.subject.label")}
            value={mailSubject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMailSubject(e.target.value)
            }
            onBlur={() =>
              updateChangeToStore(
                {
                  mailNotification: {
                    ...mailNotification,
                    subject: mailSubject,
                  },
                },
                "subject",
                mailSubject,
                stepperConfig.show,
                updateStore,
              )
            }
            error={t(subjectErr || "")}
          />
        )}
        {messageTextVisible && (
          <JVTextField
            size="large"
            label={t("notifications.email.message.label")}
            multiline
            rows={5}
            value={mailMessageText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMailMessageText(e.target.value)
            }
            onBlur={() =>
              updateChangeToStore(
                {
                  mailNotification: {
                    ...mailNotification,
                    messageText: mailMessageText,
                  },
                },
                "messageText",
                mailMessageText,
                stepperConfig.show,
                updateStore,
              )
            }
            error={t(messageErr || "")}
          />
        )}
        {reportAccessTypeVisible && (
          <JVRadioGroup
            FormControlProps={{ className: "jv-uWidth-100pc" }}
            title={t("notifications.radiogroup.title")}
            RadioGroupProps={{ value: sendType, onChange: handleChange }}
          >
            <JVRadioButton
              label={t("notifications.repositoryLink.label")}
              RadioProps={{
                value: SEND_LINK,
                checked: sendType === SEND_LINK,
              }}
            />

            <div className="jv-mInput jv-mInputBrowse jv-mInputLarge jv-uMargin-l-07 mui">
              <JVTextField
                label={t("notifications.uri.label")}
                disabled={sendType !== SEND_LINK}
                value={repoUri}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  let newFolderUri = e.target.value;
                  newFolderUri = newFolderUri.startsWith("/")
                    ? newFolderUri
                    : `/${newFolderUri}`;
                  setRepoUri(newFolderUri);
                }}
                onBlur={() => {
                  let newFolderUri = repoUri;
                  function reValidate(uri: string) {
                    newFolderUri = uri;
                    if (uri.startsWith("//")) {
                      reValidate(uri.substring(1, uri.length));
                    }
                    if (uri.length > 1 && uri.endsWith("/")) {
                      reValidate(uri.substring(0, uri.length - 1));
                    }
                  }

                  reValidate(repoUri);

                  setRepoUri(newFolderUri);
                  const mailNotificationVal = { ...mailNotification },
                    repositoryDestinationVal = {
                      ...repositoryDestination,
                      folderURI: newFolderUri,
                    };
                  updateChangeToStore(
                    {
                      mailNotificationVal,
                      repositoryDestination: repositoryDestinationVal,
                    },
                    "folderURI",
                    newFolderUri,
                    stepperConfig.show,
                    updateStore,
                  );
                }}
              />
              <JVButton
                variant="contained"
                size="large"
                disabled={sendType !== SEND_LINK}
                onClick={handleBrowseButtonClick}
              >
                {t("notifications.browse.button")}
              </JVButton>
            </div>
            <JVFormError
              className="jv-uMargin-l-07"
              text={t(folderUriErr || "")}
            />
            <JVRadioButton
              label={t("notifications.fileAsAttachment.label")}
              RadioProps={{
                value: SEND_ATTACHMENT,
                checked: sendType === SEND_ATTACHMENT,
              }}
            />
          </JVRadioGroup>
        )}
      </div>
      {reportAccessTypeVisible && !initialTreeDataLoadApiFailure && (
        <RepositoryTreeDialog
          open={open}
          handleDialogState={(isOpen: boolean) => setOpen(isOpen)}
        />
      )}
    </>
  );
};

export default Notifications;
