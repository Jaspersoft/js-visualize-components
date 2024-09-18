import dayjs from "dayjs";

const castValueIfNeeded = (theValue: dayjs.Dayjs): dayjs.Dayjs => {
  return theValue instanceof dayjs ? theValue : dayjs(theValue);
};

export const setTodayToTime = (time: string): dayjs.Dayjs => {
  const [hours, minutes, seconds] = time.split(":");
  return dayjs()
    .hour(parseInt(hours, 10))
    .minute(parseInt(minutes, 10))
    .second(parseInt(seconds, 10));
};

export const prepareErrorHelperTextParams = (
  props: any,
): { hasErrorText: boolean; errorTextId: string | undefined } => {
  const hasError = Boolean(props.error);
  const hasErrorText = hasError && typeof props.error === "string";
  const errorTextId =
    props.errorId ??
    (hasError && props.id ? `${props.id}-error-text` : undefined);
  return { hasErrorText, errorTextId };
};

export default castValueIfNeeded;
