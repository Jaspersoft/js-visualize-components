import InputControls from 'input-controls-plugin';
import { useEffect, useState } from 'react';

export interface AppConfig {
    title: string,
};

export default function App(props: AppConfig) {

    const [controlStruct, setControlStruct] = useState({});
    const plugin = new InputControls((window as any).visualize);
    
    useEffect(() => {
        plugin.fillControlStructure('/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report', (controls: object) => {
            setControlStruct(controls);
        });
    }, []);

    return (
    <div className="appBox">
        <h1> {props.title || 'Title Goes Here'}</h1>
        <div id="controlBox">
            {JSON.stringify(controlStruct)}
        </div>
    </div>
    );
};