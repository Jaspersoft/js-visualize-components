/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  AccordionDetails,
  AccordionDetailsProps,
} from "../AccordionDetails/AccordionDetails";
import {
  AccordionSummary,
  AccordionSummaryProps,
} from "../AccordionSummary/AccordionSummary";
import { Accordion, AccordionProps } from "./Accordion";

export type AccordionFullProps = AccordionProps & {
  id?: string;
  SummaryProps?: AccordionSummaryProps;
  summary?: React.ReactNode;
  DetailsProps?: AccordionDetailsProps;
  children: NonNullable<React.ReactNode>;
};

export const AccordionFull = forwardRef<HTMLDivElement, AccordionFullProps>(
  (
    {
      id,
      size = "normal",
      SummaryProps,
      summary,
      DetailsProps,
      children,
      ...rest
    },
    ref,
  ) => {
    const headerId = id ? `${id}-header` : undefined;
    const contentId = id ? `${id}-content` : undefined;

    return (
      <Accordion ref={ref} size={size} {...rest}>
        <AccordionSummary
          id={headerId}
          aria-controls={contentId}
          size={size}
          {...SummaryProps}
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails {...DetailsProps}>{children}</AccordionDetails>
      </Accordion>
    );
  },
);
