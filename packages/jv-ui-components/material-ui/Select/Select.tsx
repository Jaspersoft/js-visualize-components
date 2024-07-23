import * as React from "react";
import { forwardRef } from "react";
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
    let sublen = 800,
      subOpts = props.state?.options?.slice(0, sublen);
    return subOpts.map((opt: any) => makeOption(opt)) || [];
  };

  return (
    <div>
      <TextField
        {...otherProps}
        className={"jr-mInput jr-mInputText jr-mInputSelect mui"}
        defaultValue={value}
        id={id}
        label={label}
        select
        variant="outlined"
        InputLabelProps={{
          classes: { root: "jr-mInput-label mui" },
          disableAnimation: true,
        }}
        SelectProps={{
          classes: { root: "jr-mInput-select mui" },
          "aria-describedby":
            "select-inline-helper-error-helper-text select-inline-helper-error-error-text",
        }}
        FormHelperTextProps={{
          classes: { root: "jr-mInput-helper mui" },
        }}
      >
        {makeOptions()}
      </TextField>
    </div>
  );
});
