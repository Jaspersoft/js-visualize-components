import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import {JVTabs, JVTab} from "@jaspersoft/jv-ui-components";
import { JVStylesProvider } from '@jaspersoft/jv-ui-components';
import Schedule from "./TabsContent/Schedule";
import Parameters from "./TabsContent/Parameters";
import Output from "./TabsContent/Output";
import Notifications from "./TabsContent/Notifications";
import SchedulerFooter from "../SchedulerFooter";


const SchedulerMain = () => {
    const [value, setValue] = useState<number>(0);
    const { t } = useTranslation();
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <JVStylesProvider>
                <JVTabs value={value} onChange={handleChange}>
                    <JVTab label={t('schedule')} />
                    <JVTab label={t('parameters')} />
                    <JVTab label={t('output_options')} />
                    <JVTab label={t('notifications')} />
                </JVTabs>
                {value === 0 && <Schedule />}
                {value === 1 && <Parameters />}
                {value === 2 && <Output />}
                {value === 3 && <Notifications />}
                <SchedulerFooter />
            </JVStylesProvider>
        </>

    )
}
export default SchedulerMain;