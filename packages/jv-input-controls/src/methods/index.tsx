/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { InputControlProperties, VisualizeClient } from "@jaspersoft/jv-tools";
import { InputControlCollection } from "../controls/BaseInputControl";
import { createRoot } from "react-dom/client";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import BasePanel from "../panels/BasePanel";
import { InputControlsConfig } from "../InputControls";
import { InputControlsProvider } from "../reducer/InputControlsReducer";

export const fillControlStructure = (
  vObject: VisualizeClient,
  uri: string,
  callbackFn?: (controls: any) => void,
  callbackErrorFn?: (error: any) => void,
) => {
  vObject.inputControls({
    resource: uri,
    success: (data: InputControlProperties[]) => {
      if (callbackFn) {
        callbackFn({ data });
      }
    },
    error: (e: object) => {
      if (callbackErrorFn) {
        callbackErrorFn(e);
      }
    },
  });
};

export const renderInputControls = (
  v: VisualizeClient,
  uri: string,
  container: HTMLElement,
  config?: InputControlsConfig,
) => {
  fillControlStructure(
    v,
    uri,
    (controls: InputControlCollection) => {
      try {
        const icRoot = createRoot(container);
        icRoot.render(
          <JVStylesProvider>
            <InputControlsProvider
              initialState={controls?.data}
              overwriteParams={config?.params}
              events={config?.events}
            >
              <BasePanel config={config?.typeConfig} />
            </InputControlsProvider>
          </JVStylesProvider>,
        );
        config?.success && config?.success.call(self, controls);
      } catch (e) {
        config?.error && config?.error.call(null, e);
      }
    },
    (e: any) => {
      config?.error && config?.error.call(null, e);
    },
  );
};
