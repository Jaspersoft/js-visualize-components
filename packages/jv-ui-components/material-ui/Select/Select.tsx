import { forwardRef, JSX } from "react";
import { SelectItem } from "../MenuItem/SelectItem";
import { TextField } from "../TextField/TextField";

export const Select = forwardRef((props: any, ref) => {
  const { value, selected, id, label, ...otherProps } = props;

  const makeOption = (opt: any): JSX.Element => {
    return (
      <SelectItem
        key={opt.value}
        id={opt.value}
        value={opt.value}
        selected={opt.selected}
      >
        {opt.label}
      </SelectItem>
    );
  };

  const makeOptions = (): JSX.Element[] => {
    return props.state?.options?.map((opt: any) => makeOption(opt)) || [];
  };

  return (
    <TextField
      {...otherProps}
      value={value}
      id={id}
      label={label}
      select
      variant="outlined"
      InputLabelProps={{
        classes: { root: "jv-mInput-label mui" },
        disableAnimation: true,
      }}
      SelectProps={{
        classes: { root: "jv-mInput-select mui" },
        "aria-describedby":
          "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
      }}
      FormHelperTextProps={{
        classes: { root: "jv-mInput-helper mui" },
      }}
    >
      {makeOptions()}
    </TextField>
  );
});
