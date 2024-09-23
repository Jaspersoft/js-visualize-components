import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
} from "@mui/material";
import { forwardRef, ReactElement, Ref, RefAttributes } from "react";

export type AutocompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> = MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & {
  paperComponentProps?: MuiPaperProps;
};

function AutoCompleteFunc<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  {
    paperComponentProps = {},
    ...rest
  }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  ref: Ref<HTMLDivElement>,
) {
  const { elevation = 8, ...restPaperProps } = paperComponentProps;
  return (
    <MuiAutocomplete
      ref={ref}
      PaperComponent={({ children }) => (
        <MuiPaper elevation={elevation} {...restPaperProps}>
          {children}
        </MuiPaper>
      )}
      {...rest}
    />
  );
}
export const Autocomplete = forwardRef(AutoCompleteFunc) as <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> &
    RefAttributes<HTMLDivElement>,
) => ReactElement;
