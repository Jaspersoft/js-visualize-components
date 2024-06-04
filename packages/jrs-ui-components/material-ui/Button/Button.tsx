import React, { forwardRef } from 'react';
import {
    Button as MuiButton, ButtonProps as MuiButtonProps
} from '@mui/material';
import { ColorToClass, SizeToClass } from '../types/ButtonTypes';

export type ButtonProps = MuiButtonProps & {
    labelProps?: {
        labelClasses?: string;
    }
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    labelProps = {}, className = '', size = 'medium', color = 'secondary', children, ...rest
}, ref) => {

    const { labelClasses = '' } = labelProps;
    return (
        <MuiButton
            ref={ref}
            className={`jr-mButton ${SizeToClass[size]} ${ColorToClass[color]} mui ${className}`}
            disableElevation
            size={size}
            {...rest}
        >
            <span className={`jr-MuiButton-label jr-mButton-label mui ${labelClasses}`}>{children}</span>
        </MuiButton>
    )
})
