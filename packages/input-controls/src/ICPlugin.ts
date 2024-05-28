import { FC } from 'react';

interface ICPluginConfig {
    hostname?: string,
    username: string,
    password: string,
    tenant: string,
    // customize control look & feel
    boolean?: BooleanICConfig,
};

interface BooleanICConfig {
    style?: string | FC,
}

const defaultConfig: ICPluginConfig = {
    //hostname: 'mobiledemo.jaspersoft.com',
    username: 'joeuser',
    password: 'joeuser',
    tenant: 'organization_1',

    boolean: { style: 'switch' },
};

export default class ICPlugin {

    private viz: any;
    private config: ICPluginConfig;
    protected controlStructure: object = {};

    constructor(vizjs: any, config: ICPluginConfig = defaultConfig) {
        this.viz = vizjs;
        this.config = config;
    }

    public fillControlStructure = (uri: string) => {
        this.viz({
            auth: {
                name: this.config.username || "joeuser",
                password: this.config.password || "joeuser",
                organization: this.config.tenant || "organization_1",
            },
        }, (v: any) => {
            v.inputControls({
                resource: uri,
                success: (data: string) => {
                    this.controlStructure = {...this.controlStructure, data};
                },
                error: (e: object) => {
                    console.log(e);
                },
            });
        });
    }

    public getControls = () => {
        return this.controlStructure;
    }

    public makeControlsForReport = (resourceUri: string, container: any) => {
        this.fillControlStructure(resourceUri);
        container.innerHTML = JSON.stringify(this.controlStructure);
    };
}