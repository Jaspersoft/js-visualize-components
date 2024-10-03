import { forwardRef, JSX } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
  InputLabel as MuiInputLabel,
  ListItemText as MuiListItemText,
  OutlinedInput as MuiOutlinedInput,
  Select as MuiSelect,
} from "@mui/material";
import { SelectItem } from "../MenuItem/SelectItem";

export const MultiSelect = forwardRef((props: any, ref) => {
  const { value, selected, id, label, className, error, state, ...otherProps } =
    props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const isError = error?.trim().length > 0;

  const makeOption = (opt: any): JSX.Element => {
    return (
      <SelectItem key={opt.value} id={opt.value} value={opt.value}>
        <MuiCheckbox
          checked={
            value.indexOf(opt.value) > -1 || value.indexOf(opt.label) > -1
          }
        />
        <MuiListItemText primary={opt.label} />
      </SelectItem>
    );
  };

  const makeOptions = (): JSX.Element[] => {
    return state?.options?.map((opt: any) => makeOption(opt)) || [];
  };
  return (
    <MuiFormControl
      className="jv-mInput jv-mInputLarge jv-mInputSelect mui"
      error={isError}
    >
      <MuiInputLabel
        id={id + "_label"}
        className="jv-mInput-label mui"
        error={isError}
      >
        {label}
      </MuiInputLabel>
      <MuiSelect
        {...otherProps}
        value={value}
        error={isError}
        renderValue={(value: any[]) => value.join(", ")}
        id={id}
        labelId={id + "_label"}
        className={className + " jv-mInput-select jv-mInput-text mui"}
        multiple
        variant="outlined"
        input={<MuiOutlinedInput label="Tag" />}
        slotProps={{
          elevation: 4,
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        }}
        MenuProps={{
          classes: {
            list: "jv-mChecklist jv-mChecklistLarge mui",
          },
        }}
      >
        {makeOptions()}
      </MuiSelect>
      {isError && (
        <MuiFormHelperText className="jv-mInput-error mui">
          {error}
        </MuiFormHelperText>
      )}
    </MuiFormControl>
  );
});
