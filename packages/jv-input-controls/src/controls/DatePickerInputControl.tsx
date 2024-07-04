import { DatePicker as JVDatePicker } from "@jaspersoft/jv-ui-components/material-ui/Date/DatePicker";
import { BaseInputControlProps } from "./BaseInputControl";

export type DateICType = "Date";

export interface DateICProps extends BaseInputControlProps {
  // defaultValue?: string;
  value?: string;
  className?: string;
  views?: Array<"year" | "month" | "day">;
}

export const DatePickerInputControl = (props: DateICProps) => {
  return <JVDatePicker {...props} />;
};
