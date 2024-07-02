import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps} from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { forwardRef } from 'react';

export const DatePicker = forwardRef<HTMLElement, MuiDatePickerProps<Dayjs>>((props, ref) => {
    return (
      <MuiDatePicker {...props}/>
    );
});