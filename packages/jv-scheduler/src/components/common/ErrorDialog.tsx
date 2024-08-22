/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import {
  JVIcon,
  JVTypography,
  JVConfirmationDialog,
  JVButton,
} from "@jaspersoft/jv-ui-components";
import React from "react";

interface IErrorDialog {
  handleCancelBtn: () => void;
  errorMsg: string | undefined;
  subContainerMsg: string;
}
const ActionBtn = (props: any) => {
  const { color, actionBtn, text } = props;
  return (
    <JVButton
      size="large"
      variant="contained"
      color={color}
      onClick={actionBtn}
    >
      {text}
    </JVButton>
  );
};

export const ErrorDialog = ({
  handleCancelBtn,
  errorMsg,
  subContainerMsg,
  ...rest
}: IErrorDialog & Pick<any, "style">) => {
  return (
    <>
      {errorMsg && (
        <JVConfirmationDialog
          id="confirmationDialog"
          open
          maxWidth="xs"
          dialogTitle={"Error"}
          type="error"
          disableEscapeKeyDown
          DialogContentComponent={
            <JVTypography variant="body1">{errorMsg}</JVTypography>
          }
          DialogActionsComponent={
            <ActionBtn
              actionBtn={handleCancelBtn}
              text={"Cancel"}
              color="error"
            />
          }
          DialogSubTitleComponent={
            <>
              <JVIcon icon="cancelRound" size="small" />
              <JVTypography
                className="jv-mTextError jv-uMargin-b-04"
                variant="body1"
              >
                {subContainerMsg}
              </JVTypography>
            </>
          }
          DialogTitleTypographyProps={{
            variant: "h2",
          }}
          {...rest}
        />
      )}
    </>
  );
};
