/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApiFailure } from "../../actions/action";
import { IState } from "../../types/scheduleType";
import { ErrorDialog } from "../common/ErrorDialog";

export const ErrorConfirmationDialog = () => {
  const dispatch = useDispatch();
  const listOfApiFailed = useSelector(
    (state: IState) => state.scheduleApisFailure,
  );

  const handleCancelBtn = () => {
    dispatch(
      setApiFailure({
        createScheduleApiFailure: false,
      }),
    );
  };

  const getErrorMessage = () => {
    const { createScheduleApiFailure } = listOfApiFailed;
    const isApiFailed = createScheduleApiFailure;
    const errorMsg = {
      errorMsg: "",
      subContainMsg: "",
    };
    if (isApiFailed) {
      errorMsg.errorMsg =
        "You can close this error message and try to save the alert again.";
      errorMsg.subContainMsg =
        "A network error is preventing the alert from being saved.";
    }
    return errorMsg;
  };

  const { errorMsg, subContainMsg } = getErrorMessage();

  return (
    <ErrorDialog
      handleCancelBtn={handleCancelBtn}
      errorMsg={errorMsg}
      subContainerMsg={subContainMsg}
    />
  );
};
