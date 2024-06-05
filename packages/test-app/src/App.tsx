import InputControls from 'input-controls-plugin';
import { useEffect, useState } from 'react';
import { visualizejsLoader } from 'jrs-viz';
import { Authentication, VisualizeFactory, VisualizeType } from '../../jrs-viz/src/visualize/visualizejs.js';

export interface AppConfig {
    title: string,
};

const credentials: Authentication = {
    name: 'joeuser',
    password: 'joeuser',
    organization: 'organization_1',
};

const visualizeUrl = 'https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js';

export default function App(props: AppConfig) {
    const [controlStruct, setControlStruct] = useState({});
    const [visualizeFactoryContainer, setVisualizeFactoryContainer] = useState(null as { viz: VisualizeFactory } | null);
    const [vContainer, setVContainer] = useState(null as { v: VisualizeType } | null);
    const [plugin, setPlugin] = useState<InputControls>();

    useEffect(() => {
        const loadVisualize = visualizejsLoader(visualizeUrl);
        loadVisualize().then((visualizeFactory: VisualizeFactory) => {
            setVisualizeFactoryContainer({viz: visualizeFactory});
        });
    }, []);

    useEffect(() => {
        if (credentials && visualizeFactoryContainer) {
            new Promise<VisualizeType>((resolve, reject) => {
                visualizeFactoryContainer.viz({
                    auth: {
                        name: credentials.name,
                        password: credentials.password,
                        organization: credentials.organization || null,
                        locale: "en_US"
                    }
                }, resolve, reject)
            }).then((v: VisualizeType) => {
                setVContainer({v});
            }).catch((e: any) => {
                console.log(String(e));
            });
        }
    }, [visualizeFactoryContainer]);

    useEffect(() => {
        vContainer && vContainer !== null && setPlugin(new InputControls(vContainer.v));
    }, [vContainer]);

    useEffect(() => {
        if (plugin === undefined) return;
        plugin.fillControlStructure('/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report', (controls: object) => {
            setControlStruct(controls);
        });
    }, [plugin]);

    return (
    <div className="appBox">
        <h1> {props.title || 'Title Goes Here'}</h1>
        <div id="controlBox">
            {JSON.stringify(controlStruct)}
        </div>
    </div>
    );
};