import { JVMessage, JVTypography, JVIcon } from "@jaspersoft/jv-ui-components";
export default function NotYetImplementedMessage() {
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
            Error
          </JVTypography>
        ),
      }}
    >
      <JVTypography variant="body1">
        This resource contains controls that are not yet supported.
      </JVTypography>
    </JVMessage>
  );
}
