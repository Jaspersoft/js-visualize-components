import * as React from 'react';
import {
    FormControlLabel, FormControlLabelProps, Radio as MuiRadio, RadioProps as MuiRadioProps
} from '@mui/material';

export interface RadioProps extends Omit<FormControlLabelProps, 'control'> {
    control?: React.ReactElement<any, any>,
    RadioProps?: MuiRadioProps
}

export const RadioButton = React.forwardRef<HTMLDivElement, RadioProps>(({
    className = '', classes = {}, control, RadioProps = {}, ...rest
}, ref) => {

    const { classes: radioClasses = {}, ...restRadioProps } = RadioProps;

    return (
        <FormControlLabel
            ref={ref}
            control={control ?? <MuiRadio color="primary" classes={{ root: `jv-mInput-radio-button mui ${radioClasses.root ?? ''}` }} {...restRadioProps} />}
            className={`jv-mInput-radio ${className} mui`}
            classes={{ label: `jv-mInput-radio-label mui ${classes?.root ?? ''}`, ...classes }}
            {...rest}
        />
    )
})
