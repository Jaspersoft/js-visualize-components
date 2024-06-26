import { forwardRef } from 'react';
import {
    Icon as MuiIcon, IconProps as MuiIconProps
} from '@mui/material';
import { IconSize, SizeToClass } from '../types/IconTypes';

export type IconProps = MuiIconProps & {
    icon: string
    size?: IconSize
};

export const Icon = forwardRef<HTMLButtonElement, IconProps>(({
    className = '', icon, size = 'medium', ...rest
}, ref) => {

    const iconClassName = `jv-${icon}`;

    return (
        <MuiIcon
            ref={ref}
            className={`jv-mIcon mui ${iconClassName} ${className} ${SizeToClass[size]}`}
            {...rest}
        />
    )
})
