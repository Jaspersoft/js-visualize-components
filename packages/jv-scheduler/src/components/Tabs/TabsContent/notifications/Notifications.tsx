import React, { ChangeEvent, useEffect, useState } from "react";
import {
  JVButton,
  JVRadioButton,
  JVRadioGroup,
  JVTextField,
} from "@jaspersoft/jv-ui-components";
import { JVTypographyComponent } from "../../../common/CommonComponents";
import { RepositoryTreeDialog } from "./RepositoryTreeDialog";
import { getFakeRootData, getFolderData } from "../../../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useStoreUpdate } from "../../../../hooks/useStoreUpdate";
import { IState } from "../../../../types/schedulerTypes";
import {
  NOTIFICATIONS_TAB,
  SEND_ATTACHMENT,
  SEND_LINK,
} from "../../../../constants/schedulerConstants";
import { getExpandedNodeDataFromUri } from "../../../../utils/schedulerUtils";

const Notifications = () => {
  const mailNotification = useSelector(
    (state: IState) => state.scheduleInfo.mailNotification,
  );
  const folderData = useSelector((state: any) => state.folderData);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );
  const fakeRoot = useSelector((state: any) => state.fakeRoot);
  const {
    messageText,
    subject,
    toAddresses: { address },
    resultSendType,
  } = mailNotification;

  const [selectedValue, setSelectedValue] = useState("option1");
  const [open, setOpen] = useState(false);
  const [mailAddress, setMailAddress] = useState(address);
  const [mailSubject, setMailSubject] = useState(subject);
  const [mailMessageText, setMailMessageText] = useState(messageText);
  const [sendType, setSendType] = useState(resultSendType);

  const updateStore = useStoreUpdate(NOTIFICATIONS_TAB);
  const dispatch = useDispatch();

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const updateChangeToStore = (updateProperty: any) => {
    updateStore({
      mailNotification: { ...mailNotification, ...updateProperty },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedVal = e.target.value,
      saveToRepositoryVal = selectedVal === SEND_LINK,
      updatedProperty = {
        mailNotificationVal: {
          ...mailNotification,
          resultSendType: selectedVal,
        },
        resultSendType: selectedVal,
      };
    setSendType(selectedVal);
    updateChangeToStore(updatedProperty);
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

  const handleBrowseButtonClick = () => {
    if (!fakeRoot.length) {
      dispatch(getFakeRootData());
    }
    getExpandedNodeDataFromUri(resourceUri, (uri: string) => {
      if (!folderData[uri]) {
        dispatch(getFolderData(uri));
      }
    });
    setOpen(true);
  };

  return (
    <>
      <JVTypographyComponent text="Email Notification" />
      <div className="jv-mInputs mui">
        <JVTextField
          size="large"
          label="Send to (required)"
          helperText="Use commas to separate email addresses."
          value={mailAddress}
          onChange={(e) => setMailAddress(e.target.value)}
          onBlur={() => {
            const addressArr = mailAddress.length
              ? mailAddress.split(new RegExp(" *, *"))
              : mailAddress;
            updateChangeToStore({ toAddresses: { address: addressArr } });
          }}
        />
        <JVTextField
          size="large"
          label="Subject (required)"
          value={mailSubject}
          onChange={(e) => setMailSubject(e.target.value)}
          onBlur={() => updateChangeToStore({ subject: mailSubject })}
        />
        <JVTextField
          size="large"
          label="Message"
          multiline
          rows={5}
          value={mailMessageText}
          onChange={(e) => setMailMessageText(e.target.value)}
          onBlur={() => updateChangeToStore({ messageText: mailMessageText })}
        />
        <JVRadioGroup
          title="Report/dashboard access (required)"
          RadioGroupProps={{ value: sendType, onChange: handleChange }}
        >
          <JVRadioButton
            value="option1"
            label="Include report/dashboard as repository link."
            RadioProps={{
              value: SEND_LINK,
              checked: sendType === SEND_LINK,
            }}
          />

          <div className="jv-mInput jv-mInputBrowse jv-mInputLarge jv-uMargin-l-07 mui">
            <JVTextField
              label="Repository URI"
              disabled={sendType !== SEND_LINK}
              value="/path/"
            />
            <JVButton
              variant="contained"
              size="large"
              disabled={sendType !== SEND_LINK}
              onClick={handleBrowseButtonClick}
            >
              Browse...
            </JVButton>
          </div>

          <JVRadioButton
            value="option2"
            label="Include report/dashboard file as attachment."
            RadioProps={{
              value: SEND_ATTACHMENT,
              checked: sendType === SEND_ATTACHMENT,
            }}
          />
        </JVRadioGroup>
      </div>
      <RepositoryTreeDialog
        open={open}
        handleDialogState={(isOpen) => setOpen(isOpen)}
      />
    </>
  );
};

export default Notifications;
