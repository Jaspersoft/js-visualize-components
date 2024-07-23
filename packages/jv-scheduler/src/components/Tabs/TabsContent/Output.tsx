import React, { useEffect, useState } from "react";
import {
  JVCheckbox,
  JVCheckboxGroup,
  JVTextField,
  JVSelectItem,
} from "@jaspersoft/jv-ui-components";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useStoreUpdate } from "../../../hooks/useStoreUpdate";
import {
  OUTPUT_FILE_DESCRIPTION,
  OUTPUT_FILE_NAME,
} from "../../../constants/schedulerConstants";
import { IState } from "../../../types/schedulerTypes";
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
  const baseOutputFilename = useSelector(
    (state: IState) => state.scheduleInfo.baseOutputFilename,
  );
  const baseOutputFileDescription = useSelector(
    (state: IState) => state.scheduleInfo.baseOutputFileDescription,
  );
  const [outputDescription, setOutputDescription] = useState(
    baseOutputFileDescription,
  );
  const [fileName, setFileName] = useState(baseOutputFilename);
  const updateStore = useStoreUpdate();

  useEffect(() => {
    setFileName(baseOutputFilename);
  }, [baseOutputFilename]);

  const updateChangeToStore = (
    propertyName: string,
    propertyValue: string | string[],
  ) => {
    updateStore({ [propertyName]: propertyValue });
  };

  return (
    <>
      <JVTypographyComponent text="Output File Options" />
      <div className="jv-mInputs mui">
        <JVTextField
          size="large"
          label="File name (required)"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          onBlur={() => updateChangeToStore(OUTPUT_FILE_NAME, fileName)}
        />
        <JVTextField
          size="large"
          label="Description"
          multiline
          rows={5}
          value={outputDescription}
          onChange={(e) => {
            setOutputDescription(e.target.value);
          }}
          onBlur={() =>
            updateChangeToStore(OUTPUT_FILE_DESCRIPTION, outputDescription)
          }
        />
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
