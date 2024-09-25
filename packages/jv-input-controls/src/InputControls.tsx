import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BaseInputControlProps, VisualizeClient } from "@jaspersoft/jv-tools";
import { InputControlCollection } from "./controls/BaseInputControl";
import { BoolICType } from "./controls/BooleanInputControl";
import { DatePickerICType } from "./controls/DatePickerInputControl";
import { DateICType } from "./controls/DatePickerTextFieldInputControl";
import { DateTimePickerICType } from "./controls/DateTimePickerInputControl";
import { DateTimeICType } from "./controls/DateTimePickerTextFieldInputControl";
import { NumberICType } from "./controls/SingleValueNumberInputControl";
import { TextFieldICType } from "./controls/SingleValueTextInputControl";
import { TimePickerICType } from "./controls/TimePickerInputControl";
import { TimeICType } from "./controls/TimePickerTextFieldInputControl";
import BasePanel from "./panels/BasePanel";

export interface InputControlUserConfig {
  bool?: {
    type: BoolICType;
  };
  singleValueText?: {
    type: TextFieldICType;
  };
  singleValueNumber?: {
    type: NumberICType;
  };
  singleValueDate?: {
    type: DateICType | DatePickerICType;
  };
  singleValueDatetime?: {
    type: DateTimeICType | DateTimePickerICType;
  };
  singleValueTime?: {
    type: TimeICType | TimePickerICType;
  };
}

export interface InputControlConfig {
  success?: () => void;
  error?: (error: any) => void;
  config?: InputControlUserConfig;
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
}

export const fillControlStructure = (
  vObject: VisualizeClient,
  uri: string,
  callbackFn?: Function,
  callbackErrorFn?: Function,
) => {
  vObject.inputControls({
    resource: uri,
    success: (data: BaseInputControlProps) => {
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
  icPanelDef?: InputControlConfig,
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
            />
          </JVStylesProvider>,
        );
        icPanelDef?.success && icPanelDef?.success.call(null);
      } catch (e) {
        icPanelDef?.error && icPanelDef?.error.call(null, e);
      }
    },
    (e: any) => {
      icPanelDef?.error && icPanelDef?.error.call(null, e);
    },
  );
};

export interface InputControlProps {
  vObject?: VisualizeClient;
  uri: string;
  panelDef?: InputControlConfig;
  handleError?: (error: any) => void;
}

export function InputControls(props: InputControlProps) {
  const [embedControls, setEmbedControls] = useState<InputControlCollection>();

  useEffect(() => {
    if (props.vObject !== undefined) {
      fillControlStructure(
        props.vObject,
        props.uri,
        (controls: InputControlCollection) => {
          setEmbedControls(controls);
        },
        props.handleError === undefined
          ? (error: any) => {
              console.log("Error filling controls: ", error);
            }
          : props.handleError,
      );
    }
  }, [props.vObject]);

  if (props.vObject === undefined) {
    return (
      <>
        <h2>Loading visualize.js...</h2>
      </>
    );
  }
  if (!embedControls) {
    return (
      <>
        <h2>Fetching input controls...</h2>
      </>
    );
  }

  return (
    <JVStylesProvider>
      <BasePanel
        controls={embedControls}
        config={props.panelDef?.config}
        events={props.panelDef?.events}
      ></BasePanel>
    </JVStylesProvider>
  );
}
