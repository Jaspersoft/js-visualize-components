/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVMessage, JVTypography, JVIcon } from "@jaspersoft/jv-ui-components";
import { useTranslation } from "react-i18next";

export default function NotYetImplementedMessage() {
  const { t } = useTranslation() as { t: (k: string) => string };
  return (
    <JVMessage
      type="error"
      isCardHeader
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
            {t("error")}
          </JVTypography>
        ),
      }}
    >
      <JVTypography variant="body1">{t("not.yet.implemented")}</JVTypography>
    </JVMessage>
  );
}
