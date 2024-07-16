import * as React from "react";
import { BoolICType } from "./controls/BooleanInputControl";
import { createRoot } from "react-dom/client";
import { DateICType } from "./controls/DatePickerInputControl";
import { DateTimeICType } from "./controls/DateTimePickerInputControl";
import { NumberICType } from "./controls/SingleValueNumberInputControl";
import { TextFieldICType } from "./controls/SingleValueTextInputControl";
import { TimeICType } from "./controls/TimePickerInputControl";
import BasePanel from "./panels/BasePanel";
import { InputControlCollection } from "./controls/BaseInputControl";

export interface InputControlConfig {
  hostname?: string;
  username: string;
  password: string;
  tenant: string;
}

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
    type: DateICType;
  };
  singleValueDatetime?: {
    type: DateTimeICType;
  };
  singleValueTime?: {
    type: TimeICType;
  };
}

export interface InputControlPanelConfig {
  success?: () => void;
  error?: (error: any) => void;
  exclude?: string[];
  config?: InputControlUserConfig;
}

const defaultInputControlConfig: InputControlConfig = {
  username: "joeuser",
  password: "joeuser",
  tenant: "organization_1",
};

export class InputControls {
  private viz: any;
  private _config: InputControlConfig;
  protected controlStructure: object = {};

  get config(): InputControlConfig {
    return this._config;
  }

  set config(value: InputControlConfig) {
    this._config = value;
  }

  constructor(vizjs: any, config?: InputControlConfig) {
    this.viz = vizjs;
    this._config = config || defaultInputControlConfig;
  }

  public fillControlStructure = (uri: string, callbackFn?: Function) => {
    this.viz.inputControls({
      resource: uri,
      success: (data: string) => {
        this.controlStructure = { ...this.controlStructure, data };
        if (callbackFn) {
          callbackFn(this.controlStructure);
        }
      },
      error: (e: object) => {
        console.log(e);
      },
    });
  };

  public getControls = () => {
    return this.controlStructure;
  };

  public renderControlPanel = (
    uri: string,
    container: HTMLElement,
    icPanelDef?: InputControlPanelConfig,
  ) => {
    this.fillControlStructure(uri, (controls: InputControlCollection) => {
      try {
        const icRoot = createRoot(container);
        // TODO: we have to consider the exclude/include property from the icPanelDef before providing the controls prop
        icRoot.render(
          <BasePanel controls={controls} config={icPanelDef?.config} />,
        );
        icPanelDef?.success && icPanelDef?.success.call(null);
      } catch (e) {
        icPanelDef?.error && icPanelDef?.error.call(null, e);
      }
    });
  };

  public makeControlsForReport = (
    resourceUri: string,
    container: HTMLElement,
  ) => {
    this.fillControlStructure(resourceUri);
    container.innerText = JSON.stringify(this.controlStructure);
  };
}
