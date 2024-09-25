import { useControlClasses } from "./hooks/useControlClasses";
import { useMultiLiveState } from "./hooks/useMultiLiveState";
import { MultiSelect as JVMultiSelect } from "@jaspersoft/jv-ui-components/material-ui/MultiSelect/MultiSelect";

export const MultiSelectInputControl = (props: any): JSX.Element => {
  const liveState = useMultiLiveState([]);
  const controlClasses = useControlClasses([], props);

  return (
    <JVMultiSelect
      {...liveState}
      label={props.label}
      id={props.id}
      key={props.id}
      state={props.state}
      textFieldClassName={`${controlClasses.join(" ")}`}
    />
  );
};
