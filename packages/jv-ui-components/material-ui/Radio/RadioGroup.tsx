import * as React from 'react';
import {
    RadioGroupProps as MuiRadioGroupProps, FormControl as MuiFormControl, FormLabel as MuiFormLabel, RadioGroup as MuiRadioGroup,
    FormControlProps as MuiFormControlProps, FormLabelProps as MuiFormLabelProps
} from '@mui/material';
import {
    InputSize, SizeToClass
} from '../types/InputTypes';
import { FormHelper, FormHelperTextProps as JRSFormHelperTextProps } from '../FormHelperTextGroup/FormHelperText'

export type RadioButtonGroupProps = {
    size?: InputSize,
    title?: string,
    helperText?: string,
    RadioGroupProps?: MuiRadioGroupProps & {
        'data-name'?: string
    },
    FormHelperTextProps?: JRSFormHelperTextProps,
    FormLabelProps?: Omit<MuiFormLabelProps, 'component'> & {
        component?: React.ElementType<any>
    },
    FormControlProps?: Omit<MuiFormControlProps, 'component'> & {
        component?: React.ElementType<any>,
        'data-name'?: string
    }
}

export const RadioGroup = React.forwardRef<HTMLDivElement, React.PropsWithChildren<RadioButtonGroupProps>>(({
    helperText, children, size = 'medium', title = '', FormLabelProps = {}, RadioGroupProps = {}, FormControlProps = {}
}, ref) => {
    const { component: formControlComponent = 'fieldset', className: formControlClassName = '', ...restFormControlProps } = FormControlProps
    const { className: formLabelPropsClassName = '', component: formLabelComponent = 'legend', ...restFormLabelProps } = FormLabelProps;

    return (
        <MuiFormControl ref={ref} component={formControlComponent} className={`jv-mInput ${SizeToClass[size]} ${formControlClassName} jv-mInputRadio mui`} {...restFormControlProps}>
            { title && <MuiFormLabel component={formLabelComponent} className={`jv-mInput-label ${formLabelPropsClassName} mui`} {...restFormLabelProps}>{title}</MuiFormLabel>}
            <MuiRadioGroup {...RadioGroupProps}>
                {children}
            </MuiRadioGroup>
            { helperText && <FormHelper text={helperText} />}
        </MuiFormControl>
    )
})