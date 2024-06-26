import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { JVCheckbox, JVTextField } from '@jaspersoft/jv-ui-components';
import * as React from 'react';
import { SingleValueTextInputControl } from '@jaspersoft/jv-input-controls';

export interface ControlPanelProps {
    title?: string,
    controlData: object,
    icGeneralConfig: ConfigInputControl
}

export interface ConfigInputControl {
    container: string,
    success?: (success: { code: number; message: string }) => void,
    error?: (error: { code: number; message: string }) => void,
    exclude?: string[],
    config?: {
        bool?: {
            type: 'checkbox' | 'switch'
        },
        singleValueText?: {
            type: 'textField'
        },
        singleValueNumber?: {
            type: 'number'
        }
    }
}

export default function ControlPanel(props: ControlPanelProps) {
    const buildControl = (control: any) => {

        if (control.type === "bool") {
            return (
                <JVCheckbox
                    key={control.id}
                    label={control.label} 
                    CheckboxProps={{checked: (control.state.value === 'true')}}
                    
                />
            );
        }
        if (control.type === "singleValueText") {
            let defaultType = props.icGeneralConfig.config?.singleValueText?.type || 'text';
            if (defaultType === 'textField') {
                defaultType = 'text';
            }
            return (
                <SingleValueTextInputControl
                    key={control.id}
                    label={control.label}
                    value={control.state.value}
                    type={defaultType || 'text' }
                />
            );
        }
        if (control.type === "singleValueNumber") {
            return (
                <JVTextField
                  key={control.id}
                  label={control.label}
                  value={control.state.value}
                />
            );
        }
        
    }

    const buildControls = (controlMap: any) => {
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
