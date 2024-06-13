import * as React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { ColorToClass, LinkColor } from '../types/LinkTypes';

export type LinkProps = Omit<MuiLinkProps, 'color'> & {
    color?: LinkColor
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ className = '', color = 'default', ...rest }, ref) => {
    const colorClassName = ColorToClass[color];

    return (
        <MuiLink ref={ref} className={`jv-mLink mui ${colorClassName} ${className}`} {...rest} />
    )
})
