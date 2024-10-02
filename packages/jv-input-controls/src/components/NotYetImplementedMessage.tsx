import { JVMessage, JVTypography, JVIcon } from "@jaspersoft/jv-ui-components";
import i18n from "../i18n";

export default function NotYetImplementedMessage() {
  const t = i18n.t;
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
