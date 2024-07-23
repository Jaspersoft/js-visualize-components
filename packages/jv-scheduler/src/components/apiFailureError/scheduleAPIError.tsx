/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import React from "react";
import {
  JVIcon,
  JVTypography,
  JVList,
  JVListItem,
  JVListItemText,
  JVButton,
  JVMessage,
} from "@jaspersoft/jv-ui-components";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { IApiFailed } from "../../types/scheduleType";
import { getOutputFormats, getUserTimeZones } from "../../actions/action";

const ErrorList = (props: { errorMsg: string }) => {
  return (
    <JVListItem className="jr-mList-item">
      <JVListItemText className="jr-mList-item-text" primary={props.errorMsg} />
    </JVListItem>
  );
};

export const MessageAPIError = ({
  userTimezoneApiFailure,
  userOutputFormatApiFailure,
  apiErrorTitle,
  retryNetworkTitle,
}: IApiFailed) => {
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const onRetryBtnClick = () => {
    if (userTimezoneApiFailure) dispatch(getUserTimeZones());
    if (userOutputFormatApiFailure) dispatch(getOutputFormats());
  };

  const RetryButton = () => (
    <JVButton
      size="large"
      className="jr-mButtonError jr-uMargin-t-04"
      variant="contained"
      onClick={onRetryBtnClick}
    >
      {t("schedule.network.retry")}
    </JVButton>
  );

  return (
    <JVMessage
      type="error"
      isCardHeader
      className={"jr-uMargin-t-07"}
      cardHeaderProps={{
        isHeaderPadded: true,
        avatar: (
          <JVIcon
            className="jr-uColor-error"
            size="large"
            icon="warningRound"
          />
        ),
        title: (
          <JVTypography
            className="jr-mText jr-mTextTitle jr-uColor-error jr-uTextBold"
            variant="h3"
          >
            {t("schedule.error.title")}
          </JVTypography>
        ),
      }}
      cardContentProps={{
        isPadded: true,
      }}
    >
      <JVTypography variant="body1">{apiErrorTitle}</JVTypography>
      {(userTimezoneApiFailure || userOutputFormatApiFailure) && (
        <JVList className="jr-mList jr-uMargin-tb-02" isBulleted disablePadding>
          {userTimezoneApiFailure && (
            <ErrorList errorMsg={t("schedule.timezone.network.error")} />
          )}
          {userOutputFormatApiFailure && (
            <ErrorList errorMsg={t("schedule.output.network.error")} />
          )}
        </JVList>
      )}

      <JVTypography variant="body1">{retryNetworkTitle}</JVTypography>
      <RetryButton />
    </JVMessage>
  );
};
