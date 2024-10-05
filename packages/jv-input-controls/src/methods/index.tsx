/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

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

export const fillControlStructure = (
  vObject: VisualizeClient,
  uri: string,
  callbackFn?: (controls: any) => void,
  callbackErrorFn?: (error: any) => void,
) => {
  vObject.inputControls({
    resource: uri,
    success: (data: InputControlProperties) => {
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
  vObject: VisualizeClient,
  uri: string,
  container: HTMLElement,
  icPanelDef?: InputControlsConfig,
) => {
  fillControlStructure(
    vObject,
    uri,
    (controls: InputControlCollection) => {
      try {
        const icRoot = createRoot(container);
        icRoot.render(
          <JVStylesProvider>
            <BasePanel
              controls={controls}
              config={icPanelDef?.config}
              events={icPanelDef?.events}
              params={icPanelDef?.params}
            />
          </JVStylesProvider>,
        );
        icPanelDef?.success && icPanelDef?.success.call(self, controls);
      } catch (e) {
        icPanelDef?.error && icPanelDef?.error.call(null, e);
      }
    },
    (e: any) => {
      icPanelDef?.error && icPanelDef?.error.call(null, e);
    },
  );
};
