/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React, { useEffect } from "react";
import { InputControls } from "@jaspersoft/jv-input-controls";
import i18nScheduler from "../../../i18n";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  parametersTabErrorOrLoading,
  scheduleValidationError,
  setPropertiesDetails,
} from "../../../actions/action";
import { IState, translationProps } from "../../../types/scheduleType";

const Parameters = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const dispatch = useDispatch();
  const visualize = useSelector((state: any) => state.visualize);
  const source = useSelector((state: any) => state.scheduleInfo.source);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );
  const parameters = useSelector(
    (state: IState) => state.scheduleInfo.source.parameters.parameterValues,
  );
  const parametersConfig = useSelector(
    (state: IState) => state.parametersTabConfig,
  );

  const { success, error, events, config, ...restConfig } = parametersConfig;
  const { change, ...restEvents } = events;

  useEffect(() => {
    dispatch(parametersTabErrorOrLoading({ isError: false, isLoaded: false }));
  }, []);

  const updateStoreWithParameters = (params: any) => {
    dispatch(parametersTabErrorOrLoading({ isLoaded: true, isError: false }));
    dispatch(
      setPropertiesDetails({
        source: {
          ...source,
          parameters: {
            parameterValues: params,
          },
        },
      }),
    );
  };

  const panelD: any = {
    success: (params: any) => {
      updateStoreWithParameters(
        Object.keys(parameters).length ? parameters : params.parameters,
      );
      success?.(params);
    },
    error: (error: any) => {
      dispatch(parametersTabErrorOrLoading({ isLoaded: true, isError: true }));
      error?.(error);
    },
    config: config,
    events: {
      change: (ics: any, vs: any) => {
        if (vs) {
          dispatch(
            scheduleValidationError({ parameters: "error.parameters.error" }),
          );
        }
        updateStoreWithParameters(ics);
        change?.(ics, vs);
      },
      ...restEvents,
    },
    ...restConfig,
  };

  return (
    <>
      <JVTypographyComponent text={t("parameters.title")} />
      <InputControls vObject={visualize} uri={resourceUri} panelDef={panelD} />
    </>
  );
};

export default Parameters;
