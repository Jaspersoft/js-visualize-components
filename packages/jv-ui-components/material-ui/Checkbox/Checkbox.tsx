import { forwardRef, ReactElement } from 'react';
import {
    FormControlLabel, FormControlLabelProps, Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps
} from '@mui/material';

export interface CheckboxProps extends Omit<FormControlLabelProps, 'control'> {
    control?: ReactElement<any, any>,
    CheckboxProps?: MuiCheckboxProps & {
        'data-name'?: string
    }
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(({
    className = '', classes = {}, control, CheckboxProps = {}, ...rest
}, ref) => {

    const { classes: checkBoxClasses = {}, ...restCheckboxProps } = CheckboxProps;

    return (
        <FormControlLabel
            ref={ref}
            control={control ?? <MuiCheckbox color="primary" classes={{ root: `jv-mInput-checkbox-check mui ${checkBoxClasses.root ?? ''}` }} {...restCheckboxProps} />}
            className={`jv-mInput-checkbox ${className} mui`}
            classes={{ label: `jv-mInput-checkbox-label mui ${classes?.root ?? ''}`, ...classes }}
            {...rest}
        />
    )
})
