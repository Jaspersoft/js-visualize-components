/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

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
  OUTPUT_TAB,
  OUTPUT_TIME_ZONE,
} from "../../../constants/schedulerConstants";
import { MessageAPIError } from "../../apiFailureError/MessageAPIError";
import { IState, translationProps } from "../../../types/scheduleType";
import { updateChangeToStore } from "../../../utils/schedulerUtils";
import i18nScheduler from "../../../i18n";

const Output = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;

  const outputFormats = useSelector((state: IState) => state.outputFormats);
  const userTimeZones = useSelector((state: IState) => state.userTimeZones);
  const stepperConfig = useSelector(
    (state: IState) => state.stepperConfiguration,
  );
  const baseFileOutputErr = useSelector(
    (state: IState) => state.scheduleErrors.baseOutputFilename,
  );
  const userSelectedTimezone = useSelector(
    (state: IState) => state.scheduleInfo.outputTimeZone,
  );
  const userSelectedOutputFormats = useSelector(
    (state: IState) => state.scheduleInfo.outputFormats.outputFormat,
  );
  const userTimezoneApiFailure = useSelector(
    (state: IState) => state.scheduleApisFailure?.userTimezoneApiFailure,
  );
  const userOutputFormatApiFailure = useSelector(
    (state: IState) => state.scheduleApisFailure?.userOutputFormatApiFailure,
  );
  const baseOutputFilename = useSelector(
    (state: IState) => state.scheduleInfo.baseOutputFilename,
  );
  const repositoryDestination = useSelector(
    (state: IState) => state.scheduleInfo.repositoryDestination,
  );
  const baseOutputFileDescription: string | undefined = useSelector(
    (state: IState) =>
      state.scheduleInfo.repositoryDestination.outputDescription,
  );
  const {
    baseOutputFilename: baseOutputFilenameVisible,
    outputDescription: outputDescriptionVisible,
    outputFormat: outputFormatsVisible,
    outputTimeZone: timezoneVisible,
  } = useSelector((state: IState) => state.fieldsVisibility);

  const [outputDescription, setOutputDescription] = useState(
    baseOutputFileDescription,
  );
  const [fileName, setFileName] = useState(baseOutputFilename);
  const [timezone, setTimezone] = useState(userSelectedTimezone);
  const [outputFormatSelected, setOutputFormat] = useState(
    userSelectedOutputFormats,
  );
  const updateStore = useStoreUpdate(OUTPUT_TAB);

  useEffect(() => {
    setFileName(baseOutputFilename);
  }, [baseOutputFilename]);

  useEffect(() => {
    setTimezone(timezone);
  }, [timezone]);

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
      stepperConfig.show,
      updateStore,
    );
  };

  return (
    <>
      <JVTypographyComponent text={t("output.title")} />
      <div className="jv-mInputs mui">
        {baseOutputFilenameVisible && (
          <JVTextField
            size="large"
            label={t("output.file.name.label")}
            value={fileName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFileName(e.target.value)
            }
            onBlur={() =>
              updateChangeToStore(
                { baseOutputFilename: fileName },
                OUTPUT_FILE_NAME,
                fileName,
                stepperConfig.show,
                updateStore,
              )
            }
            error={t(baseFileOutputErr || "")}
          />
        )}
        {outputDescriptionVisible && (
          <JVTextField
            size="large"
            label={t("output.file.description.label")}
            multiline
            rows={5}
            value={outputDescription}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                outputDescription ? outputDescription : "",
                stepperConfig ? stepperConfig.show : true,
                updateStore,
              )
            }
          />
        )}
        {timezoneVisible && (
          <JVTextField
            size="large"
            label={t("output.timezone.label")}
            select
            value={timezone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newTimezone = e.target.value;
              setTimezone(e.target.value);
              updateChangeToStore(
                { outputTimeZone: newTimezone },
                OUTPUT_TIME_ZONE,
                newTimezone,
                stepperConfig.show,
                updateStore,
              );
            }}
          >
            {userTimeZones.map(
              (item: { code: string; description: string }) => (
                <JVSelectItem key={item.code} value={item.code}>
                  {item.code} - {item.description}
                </JVSelectItem>
              ),
            )}
          </JVTextField>
        )}
        {outputFormatsVisible && (
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
        )}

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
