import * as React from 'react'
import { Checkbox as JRSCheckbox } from 'jrs-ui-components';
import { TextField as JRSTextField } from 'jrs-ui-components';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface ControlPanelProps {
    title?: string,
    controlData: object,
}

export default function ControlPanel(props: ControlPanelProps) {
    const buildControl = (control) => {

        if (control.type === "bool") {
            return (
                <JRSCheckbox 
                    label={control.label} 
                    CheckboxProps={{checked: (control.state.value === 'true')}}
                    
                />
            );
        }
        if (control.type === "singleValueText") {
            return (
                <JRSTextField
                    label={control.label}
                    value={control.state.value}
                />
            );
        }
        if (control.type === "singleValueNumber") {
            return (
                <JRSTextField
                  label={control.label}
                  value={control.state.value}
                />
            );
        }
        
    }

    const buildControls = (controlMap) => {
        if (controlMap.data) return controlMap.data.map(buildControl);
        if (controlMap) return <span className='control-map-text'>{JSON.stringify(controlMap)}</span>;
        return <></>;
    }

    return (
        <div className="controls">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ul className="control-list">
                    {buildControls(props.controlData)}
                </ul>
            </LocalizationProvider>
        </div>
    );
}