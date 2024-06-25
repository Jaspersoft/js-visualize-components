import { StyledEngineProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

export const StyleEngineProvider = ({ children }: { children: ReactNode }) => {
    return (
      <StyledEngineProvider injectFirst>
          {children}
      </StyledEngineProvider>
    );
};
