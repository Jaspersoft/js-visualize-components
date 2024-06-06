import React, { ReactNode } from 'react'
import {
    StyledEngineProvider,
} from '@mui/material/styles';

export const StyleEngineProvider = ({ children }: {children: ReactNode}) => {
    return (
        <StyledEngineProvider injectFirst>
            {children}
        </StyledEngineProvider>
    )
}
