import React, { forwardRef } from 'react';
import {
    IconButton as MuiIconButton, ButtonProps as MuiButtonProps, IconButtonProps as MuiIconButtonProps
} from '@mui/material';
import {
    ButtonColor, ColorToClass, SizeToClass, VariantToClassName
} from '../types/ButtonTypes';

export type IconButtonProps = MuiIconButtonProps & {
    icon: string,
    variant?: MuiButtonProps['variant'],
    selected?: boolean,
    color?: ButtonColor,
    labelProps?: {
        labelClasses: string
    }
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
    labelProps = {}, color = 'secondary', className = '', size = 'medium', icon, variant = 'text', selected = false, ...rest
}, ref) => {
    const { labelClasses } = labelProps;
    const iconClassName = `jr-${icon}`;
    const selectedClassName = selected ? 'jr-Mui-selected' : '';

    return (
        <MuiIconButton
            ref={ref}
            className={`jr-mButton ${ColorToClass[color]} ${SizeToClass[size]} mui ${VariantToClassName[variant]} ${selectedClassName} ${className}`}
            {...rest}
        >
            <span className={`jr-mButton-icon jr-mIcon mui ${iconClassName} ${labelClasses}`} />
        </MuiIconButton>
    )
})
