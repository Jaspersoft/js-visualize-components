import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { JSX } from 'react';

export const DateProvider = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
      </LocalizationProvider>
    );
};