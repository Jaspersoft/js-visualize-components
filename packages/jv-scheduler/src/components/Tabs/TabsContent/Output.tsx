import React, { ChangeEvent, useEffect, useState } from "react";
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
  OUTPUT_FORMAT,
  OUTPUT_TIME_ZONE,
} from "../../../constants/schedulerConstants";
import { IOutputFormat, IState } from "../../../types/schedulerTypes";
import { MessageAPIError } from "../../apiFailureError/scheduleAPIError";

const Output = () => {
  const { t } = useTranslation() as { t: (k: string) => string };

  const outputFormats = useSelector((state: IState) => state.outputFormats);
  const userTimeZones = useSelector((state: any) => state.userTimeZones);
  const userSelectedTimezone = useSelector(
    (state: IState) => state.scheduleInfo.outputTimeZone,
  );
  const userSelectedOutputFormats = useSelector(
    (state: IState) => state.scheduleInfo.outputFormats.outputFormat,
  );
  const userTimezoneApiFailure = useSelector(
    (state: any) => state.scheduleApisFailure.userTimezoneApiFailure,
  );
  const userOutputFormatApiFailure = useSelector(
    (state: any) => state.scheduleApisFailure.userOutputFormatApiFailure,
  );
  const baseOutputFilename = useSelector(
    (state: IState) => state.scheduleInfo.baseOutputFilename,
  );
  const repositoryDestination = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination,
  );
  const baseOutputFileDescription = useSelector(
    (state: IState) =>
      state.scheduleInfo.repositoryDestination.outputDescription,
  );
  const [outputDescription, setOutputDescription] = useState(
    baseOutputFileDescription,
  );
  const [fileName, setFileName] = useState(baseOutputFilename);
  const [timezone, setTimezone] = useState(userSelectedTimezone);
  const [outputFormatSelected, setOutputFormat] = useState(
    userSelectedOutputFormats,
  );
  const updateStore = useStoreUpdate();

  useEffect(() => {
    setFileName(baseOutputFilename);
  }, [baseOutputFilename]);

  useEffect(() => {
    setTimezone(timezone);
  }, [timezone]);

  const updateChangeToStore = (
    storeData: { [key: string]: string | IOutputFormat },
    propertyName: string,
    propertyValue: string | string[],
  ) => {
    updateStore(storeData);
  };

  const isOutputFormatSelected = (formatToCheck: any) =>
    outputFormatSelected?.some((format: any) => formatToCheck === format);

  const handleOutputFormatChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    const newOutputFormat = value
      ? [...outputFormatSelected, e.target.name]
      : outputFormatSelected?.filter((item) => item !== e.target.name);
    setOutputFormat(newOutputFormat);
    updateChangeToStore(
      { outputFormats: { outputFormat: newOutputFormat } },
      OUTPUT_FORMAT,
      newOutputFormat,
    );
  };

  return (
    <>
      <JVTypographyComponent text={t("output.title")} />
      <div className="jv-mInputs mui">
        <JVTextField
          size="large"
          label={t("output.file.name.label")}
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          onBlur={() =>
            updateChangeToStore(
              { baseOutputFilename: fileName },
              OUTPUT_FILE_NAME,
              fileName,
            )
          }
        />
        <JVTextField
          size="large"
          label={t("output.file.description.label")}
          multiline
          rows={5}
          value={outputDescription}
          onChange={(e) => {
            setOutputDescription(e.target.value);
          }}
          onBlur={() =>
            updateChangeToStore(
              {
                repositoryDestination: {
                  ...repositoryDestination,
                  outputDescription,
                },
              },
              OUTPUT_FILE_DESCRIPTION,
              outputDescription,
            )
          }
        />
        <JVTextField
          size="large"
          label={t("output.timezone.label")}
          select
          value={timezone}
          onChange={(e) => {
            const newTimezone = e.target.value;
            setTimezone(e.target.value);
            updateChangeToStore(
              { outputTimeZone: newTimezone },
              OUTPUT_TIME_ZONE,
              newTimezone,
            );
          }}
        >
          {userTimeZones.map((item: { code: string; description: string }) => (
            <JVSelectItem key={item.code} value={item.code}>
              {item.code} - {item.description}
            </JVSelectItem>
          ))}
        </JVTextField>
        <JVCheckboxGroup size="large" title={t("output.formats.label")}>
          {outputFormats.map((format: any) => (
            <JVCheckbox
              key={format}
              label={t(`output.format.${format}`)}
              value={format}
              CheckboxProps={{
                name: format,
                checked: isOutputFormatSelected(format),
                onChange: handleOutputFormatChange,
              }}
            />
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
