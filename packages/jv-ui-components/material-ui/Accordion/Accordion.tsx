import * as React from 'react';
import { Accordion as MuiAccordion, AccordionProps as MuiAccordionProps } from '@mui/material';

export type AccordionSize = 'normal' | 'small';

const AccordionSizeToClass: {[key in AccordionSize]: string} = {
    small: 'jv-mAccordionSmall',
    normal: ''
}

export type AccordionProps = MuiAccordionProps & {
    size?: AccordionSize
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({
    className = '', size = 'normal', children, ...rest
}, ref) => {

    const sizeClass = AccordionSizeToClass[size];

    return (
        <MuiAccordion ref={ref} className={`jv-mAccordion mui ${sizeClass} ${className}`} elevation={0} square {...rest}>
            {children}
        </MuiAccordion>
    )
})