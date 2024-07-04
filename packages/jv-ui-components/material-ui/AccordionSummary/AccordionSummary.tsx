import { forwardRef } from 'react';
import { AccordionSummary as MuiAccordionSummary, AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AccordionSize } from '../Accordion/Accordion';

const AccordionSummarySizeToClass: {[key in AccordionSize]: string} = {
    small: 'jv-mAccordion-titleShaded',
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
            className={`jv-mAccordion-title mui ${sizeClass} ${className}`}
            classes={{
                content: `jv-mAccordion-title-text mui ${content}`,
                expandIconWrapper: `jv-mAccordion-title-icon mui ${expandIconWrapper}`,
                ...restClasses
            }}
            expandIcon={<ChevronRightIcon />}
            {...rest}
        >
            {children}
        </MuiAccordionSummary>
    )
})
