import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';

export const StyleEngineProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <StyledEngineProvider injectFirst>
          {children}
      </StyledEngineProvider>
    );
};
