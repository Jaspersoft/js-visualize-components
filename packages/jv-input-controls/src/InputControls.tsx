import { BoolICType } from "./controls/BooleanInputControl";
import { createRoot } from 'react-dom'
import BasePanel from './panels/BasePanel'

export interface InputControlConfig {
  hostname?: string,
  username: string,
  password: string,
  tenant: string,
};

export interface InputControlPanelConfig {
  boolean: BoolICType,
}

const defaultInputControlConfig: InputControlConfig = {
  username: 'joeuser',
  password: 'joeuser',
  tenant: 'organization_1',
};

export class InputControls {
  private viz: any;
  private config: InputControlConfig;
  protected controlStructure: object = {};

  constructor(vizjs: any, config?: InputControlConfig) {
    this.viz = vizjs;
    this.config = config || defaultInputControlConfig;
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
  }

  public getControls = () => {
    return this.controlStructure;
  }

  public renderControlPanel = (uri: string, container: HTMLElement, config?: InputControlPanelConfig) => {
    this.fillControlStructure(uri, (controls) => {
      const icRoot = createRoot(container);
      icRoot.render(<BasePanel />);
    });
  }

  public makeControlsForReport = (resourceUri: string, container: any) => {
    this.fillControlStructure(resourceUri);
    container = JSON.stringify(this.controlStructure);
  }

}
