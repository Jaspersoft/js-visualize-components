/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef, JSX } from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
  InputLabel as MuiInputLabel,
  ListItemText as MuiListItemText,
  OutlinedInput as MuiOutlinedInput,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
} from "@mui/material";

export const MultiSelect = forwardRef((props: any, ref) => {
  const { value, selected, id, label, className, error, state, ...otherProps } =
    props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const isError = error?.trim().length > 0;

  const makeOption = (opt: any): JSX.Element => {
    return (
      <MuiMenuItem
        key={opt.value}
        id={opt.value}
        value={opt.value}
        className="jv-mChecklist-item mui"
      >
        <MuiCheckbox
          checked={
            value.indexOf(opt.value) > -1 || value.indexOf(opt.label) > -1
          }
          className="jv-mInput-checkbox-check mui"
        />
        <MuiListItemText
          className="jv-mInput-checkbox-label mui"
          primary={opt.label}
        />
      </MuiMenuItem>
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
        className={className + " jv-mInput-select mui"}
        multiple
        variant="outlined"
        input={<MuiOutlinedInput label="Tag" />}
        MenuProps={{
          classes: {
            list: "jv-mChecklist jv-mChecklistLarge mui",
          },
          slotProps: {
            elevation: 4,
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
            },
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
