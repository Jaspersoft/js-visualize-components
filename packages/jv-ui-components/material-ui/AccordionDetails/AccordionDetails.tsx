/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from "@mui/material";

export type AccordionDetailsProps = MuiAccordionDetailsProps;

export const AccordionDetails = forwardRef<unknown, MuiAccordionDetailsProps>(
  ({ className = "", children, ...rest }, ref) => {
    return (
      <MuiAccordionDetails
        ref={ref}
        className={`jv-mAccordion-body mui ${className}`}
        {...rest}
      >
        {children}
      </MuiAccordionDetails>
    );
  },
);
