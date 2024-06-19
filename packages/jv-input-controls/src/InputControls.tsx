import { FC } from 'react';


interface BooleanICConfig {
    style?: string | FC,
}

export interface InputControlConfig {
    hostname?: string,
    username: string,
    password: string,
    tenant: string,
    
    // customize control look & feel
    boolean?: BooleanICConfig,
};

const defaultInputControlConfig: InputControlConfig = {
    username: 'joeuser',
    password: 'joeuser',
    tenant: 'organization_1',

    boolean: { style: 'switch' },
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
                this.controlStructure = {...this.controlStructure, data};
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

    public makeControlsForReport = (resourceUri: string, container: any) => {
        this.fillControlStructure(resourceUri);
        container = JSON.stringify(this.controlStructure);
    };
}

export { TextFieldInputControl } from './controls/TextFieldInputControl';
