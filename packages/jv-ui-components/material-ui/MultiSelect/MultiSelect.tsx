import { forwardRef, JSX } from "react";
import { Checkbox, ListItemText, OutlinedInput } from "@mui/material";
import { SelectItem } from "../MenuItem/SelectItem";
import { Select } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";

export const MultiSelect = forwardRef((props: any, ref) => {
  const { value, selected, id, label, ...otherProps } = props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const makeOption = (opt: any): JSX.Element => {
    return (
      <SelectItem key={opt.value} id={opt.value} value={opt.value}>
        <Checkbox
          checked={
            value.indexOf(opt.value) > -1 || value.indexOf(opt.label) > -1
          }
        />
        <ListItemText primary={opt.label} />
      </SelectItem>
    );
  };

  const makeOptions = (): JSX.Element[] => {
    return props.state?.options?.map((opt: any) => makeOption(opt)) || [];
  };
  return (
    <FormControl className="jv-mInput jv-mInputLarge jv-mInputSelect mui">
      <InputLabel id={label + "_label"} className="jv-mInput-label mui">
        {label}
      </InputLabel>
      <Select
        {...otherProps}
        renderValue={(value: any[]) => value.join(", ")}
        defaultValue={[]}
        id={id}
        labelId={label + "_label"}
        className="jv-mInput-select mui"
        multiple
        variant="outlined"
        input={<OutlinedInput label="Tag" />}
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
      </Select>
    </FormControl>
  );
});
