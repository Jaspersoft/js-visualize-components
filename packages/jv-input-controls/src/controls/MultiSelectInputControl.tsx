import { useControlClasses } from "./hooks/useControlClasses";
import { useErrorMsg } from "./hooks/useErrorMsg";
import { useLiveState } from "./hooks/useLiveState";
import { MultiSelect as JVMultiSelect } from "@jaspersoft/jv-ui-components/material-ui/MultiSelect/MultiSelect";

export const MultiSelectInputControl = (props: any): JSX.Element => {
  const liveState = useLiveState([]);
  const controlClasses = useControlClasses([], props);
  const errorText = useErrorMsg({
    textValue: liveState.value,
    props,
  });
  return (
    <JVMultiSelect
      {...liveState}
      label={props.label}
      id={props.id}
      key={props.id}
      state={props.state}
      textFieldClassName={`${controlClasses.join(" ")}`}
      error={errorText}
    />
  );
};
