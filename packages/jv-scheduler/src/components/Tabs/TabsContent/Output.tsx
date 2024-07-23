import React from "react";
import {
  JVCheckbox,
  JVCheckboxGroup,
  JVTextField,
  JVSelectItem,
} from "@jaspersoft/jv-ui-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { MessageAPIError } from "../../apiFailureError/scheduleAPIError";

const Output = () => {
  const { t } = useTranslation();
  const outputFormats = useSelector((state: any) => state.outputFormats);
  const userTimeZones = useSelector((state: any) => state.userTimeZones);
  const userTimezoneApiFailure = useSelector(
    (state: any) => state.scheduleApisFailure.userTimezoneApiFailure,
  );
  const userOutputFormatApiFailure = useSelector(
    (state: any) => state.scheduleApisFailure.userOutputFormatApiFailure,
  );
  return (
    <>
      <JVTypographyComponent text="Output File Options" />
      <div className="jv-mInputs mui">
        <JVTextField size="large" label="File name (required)" />
        <JVTextField size="large" label="Description" multiline rows={5} />
        <JVTextField size="large" label="Time zone (required)" select>
          {userTimeZones.map((item: { code: string; description: string }) => (
            <JVSelectItem key={item.code} value={item.code}>
              {item.code} - {item.description}
            </JVSelectItem>
          ))}
        </JVTextField>
        <JVCheckboxGroup size="large" title="Formats (required)">
          {outputFormats.map((format: any) => (
            <JVCheckbox key={format} value={format.id} label={format} />
          ))}
        </JVCheckboxGroup>
        {(userOutputFormatApiFailure || userTimezoneApiFailure) && (
          <MessageAPIError
            userTimezoneApiFailure={userTimezoneApiFailure}
            userOutputFormatApiFailure={userOutputFormatApiFailure}
            apiErrorTitle={t("schedule.timezone.output.format.network.error")}
            retryNetworkTitle={t(
              "schedule.timezone.output.format.retry.network",
            )}
          />
        )}
      </div>
    </>
  );
};

export default Output;
