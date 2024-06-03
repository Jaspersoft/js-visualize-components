import React, { forwardRef } from 'react';
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AccordionSize } from '../Accordion/Accordion';

const AccordionSummarySizeToClass: {[key in AccordionSize]: string} = {
    small: 'jr-mAccordion-titleShaded',
    normal: ''
}

export type AccordionSummaryProps = MuiAccordionSummaryProps & {
    size?: AccordionSize
}

export const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>(({
    className = '', classes = {}, size = 'normal', children, ...rest
}, ref) => {
    const { content = '', expandIconWrapper = '', ...restClasses } = classes;

    const sizeClass = AccordionSummarySizeToClass[size];

    return (
        <MuiAccordionSummary
            ref={ref}
            className={`jr-mAccordion-title mui ${sizeClass} ${className}`}
            classes={{
                content: `jr-mAccordion-title-text mui ${content}`,
                expandIconWrapper: `jr-mAccordion-title-icon mui ${expandIconWrapper}`,
                ...restClasses
            }}
            expandIcon={<ChevronRightIcon />}
            {...rest}
        >
            {children}
        </MuiAccordionSummary>
    )
})
