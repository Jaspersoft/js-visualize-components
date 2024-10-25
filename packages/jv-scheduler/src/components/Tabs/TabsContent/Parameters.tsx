/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React, { useEffect } from "react";
import {
  InputControls,
  InputControlsConfig,
} from "@jaspersoft/jv-input-controls";
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

  const { success, error, events, typeConfig, ...restConfig } =
    parametersConfig;
  const { change, ...restEvents } = events || {};

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

  const panelD: InputControlsConfig = {
    success: (params: any) => {
      updateStoreWithParameters(
        Object.keys(parameters).length ? parameters : params.data.parameters,
      );
      success?.(params);
    },
    error: (error: any) => {
      dispatch(parametersTabErrorOrLoading({ isLoaded: true, isError: true }));
      error?.(error);
    },
    typeConfig,
    events: {
      change: (ics: any, vs: any) => {
        if (vs) {
          dispatch(
            scheduleValidationError({ parameters: "error.parameters.error" }),
          );
        } else {
          updateStoreWithParameters(ics);
        }

        change?.(ics, vs);
      },
      ...restEvents,
    },
    params: parameters,
    ...restConfig,
  };

  return (
    <>
      <JVTypographyComponent text={t("parameters.title")} />
      <InputControls v={visualize} uri={resourceUri} config={panelD} />
    </>
  );
};

export default Parameters;
