import * as React from 'react';
import { AccordionDetails as MuiAccordionDetails, AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material';

export type AccordionDetailsProps = MuiAccordionDetailsProps;

export const AccordionDetails = React.forwardRef<unknown, MuiAccordionDetailsProps>(({
    className = '', children, ...rest
}, ref) => {

    return (
        <MuiAccordionDetails ref={ref} className={`jv-mAccordion-body mui ${className}`} {...rest}>{children}</MuiAccordionDetails>
    )
})
