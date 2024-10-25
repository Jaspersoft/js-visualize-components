/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
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
import { ApiFailedProps, translationProps } from "../../types/scheduleType";
import { getOutputFormats, getUserTimeZones } from "../../actions/action";
import i18nScheduler from "../../i18n";

const ErrorList = (props: { errorMsg: string }) => {
  return (
    <JVListItem className="jv-mList-item">
      <JVListItemText className="jv-mList-item-text" primary={props.errorMsg} />
    </JVListItem>
  );
};

export const MessageAPIError = ({
  userTimezoneApiFailure,
  userOutputFormatApiFailure,
  apiErrorTitle,
  retryNetworkTitle,
}: ApiFailedProps) => {
  const dispatch = useDispatch<any>();
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;

  const onRetryBtnClick = () => {
    if (userTimezoneApiFailure) dispatch(getUserTimeZones());
    if (userOutputFormatApiFailure) dispatch(getOutputFormats());
  };

  const RetryButton = () => (
    <JVButton
      size="large"
      className="jv-mButtonError jv-uMargin-t-04"
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
      className={"jv-uMargin-t-07"}
      cardHeaderProps={{
        isHeaderPadded: true,
        avatar: (
          <JVIcon
            className="jv-uColor-error"
            size="large"
            icon="warningRound"
          />
        ),
        title: (
          <JVTypography
            className="jv-mText jv-mTextTitle jv-uColor-error jv-uTextBold"
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
        <JVList className="jv-mList jv-uMargin-tb-02" isBulleted disablePadding>
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
