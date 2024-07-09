import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { forwardRef } from "react";

const castValueIfNeeded = (theValue: Dayjs | string): Dayjs => {
  return theValue instanceof dayjs ? theValue : dayjs(theValue);
};

export const DatePicker = forwardRef((props: any, ref) => {
  const { defaultValue, value, ...remainingProps } = props;
  let otherProps = {};
  if (value) {
    otherProps = { value: castValueIfNeeded(value) };
  }
  if (defaultValue) {
    otherProps = {
      ...otherProps,
      defaultValue: castValueIfNeeded(defaultValue),
    };
  }
  return <MuiDatePicker {...{ ...remainingProps, ...otherProps }} />;
});
