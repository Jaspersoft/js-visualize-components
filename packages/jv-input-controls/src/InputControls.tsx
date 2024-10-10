/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import { useEffect, useState } from "react";
import { VisualizeClient } from "@jaspersoft/jv-tools";
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
import { fillControlStructure } from "./methods";
import { MultiSelectICType } from "./controls/MultiSelectInputControl";
import { SingleSelectICType } from "./controls/SingleSelectInputControl";

export interface InputControlsTypeConfig {
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
  singleSelect?: {
    type: SingleSelectICType;
  };
  multiSelect?: {
    type: MultiSelectICType;
  };
}

export interface InputControlsConfig {
  success?: (controls: any) => void;
  error?: (error: any) => void;
  typeConfig?: InputControlsTypeConfig;
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
  params?: { [key: string]: string[] };
}

export interface InputControlsProps {
  v?: VisualizeClient;
  uri: string;
  config?: InputControlsConfig;
}

export function InputControls(props: InputControlsProps) {
  const [embedControls, setEmbedControls] = useState<InputControlCollection>();

  useEffect(() => {
    if (props.v !== undefined) {
      fillControlStructure(
        props.v,
        props.uri,
        (controls: InputControlCollection) => {
          setEmbedControls(controls);
          props.config?.success?.call(self, controls);
        },
        (e: any) => {
          props.config?.error?.call(self, e);
        },
      );
    }
  }, [props.v]);

  if (props.v === undefined) {
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
        config={props.config?.typeConfig}
        events={props.config?.events}
        params={props.config?.params}
      ></BasePanel>
    </JVStylesProvider>
  );
}
