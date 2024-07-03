import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { forwardRef } from 'react';

const castValueIfNeeded = (theValue: dayjs.Dayjs | null | undefined): dayjs.Dayjs | undefined => {
    if (!theValue) {
        return undefined;
    }
    return theValue instanceof dayjs ? theValue : dayjs(theValue);
};

export const DatePicker = forwardRef<HTMLElement, MuiDatePickerProps<Dayjs|any>>((props, ref) => {
    const { defaultValue, value, ...remainingProps } = props;
    const theDefaultValue = castValueIfNeeded(defaultValue);
    const theValue = castValueIfNeeded(value);
    return (
      <MuiDatePicker {...remainingProps}
                     defaultValue={theDefaultValue}
                     value={theValue}/>
    );
});