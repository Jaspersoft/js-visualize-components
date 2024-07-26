import { forwardRef, HTMLAttributes, ReactElement } from "react";
import {
  FormControlLabel,
  FormControlLabelProps,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";
import {
  INLINE_CLASS,
  NO_LABEL_CLASS,
  InputSize,
  SizeToClass,
} from "../types/InputTypes";

export interface SwitchProps extends Omit<FormControlLabelProps, "control"> {
  size?: Exclude<InputSize, "large">;
  noLabel?: boolean;
  inline?: boolean;
  control?: ReactElement<any, any>;
  SwitchProps?: Partial<MuiSwitchProps>;
  WrapperProps?: HTMLAttributes<HTMLDivElement> & { [key: string]: any };
}

export const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      classes = {},
      noLabel = false,
      inline = true,
      size = "medium",
      control,
      SwitchProps = {},
      WrapperProps,
      labelPlacement = "start",
      ...rest
    },
    ref,
  ) => {
    const { className: switchPropsClassName = "", ...restSwitchProps } =
      SwitchProps;
    const inlineClass = inline ? INLINE_CLASS : "";
    const noLabelClass = noLabel ? NO_LABEL_CLASS : "";
    return (
      <div
        ref={ref}
        className={`jv-mInput jv-mInputSwitch ${inlineClass} ${noLabelClass} ${SizeToClass[size]} mui`}
        {...WrapperProps}
      >
        <FormControlLabel
          classes={{
            label: `jv-mInput-label mui ${classes?.root ?? ""}`,
            ...classes,
          }}
          control={
            control ?? (
              <MuiSwitch
                size={size}
                color="primary"
                className={`jv-mInput-switch mui ${switchPropsClassName}`}
                {...restSwitchProps}
              />
            )
          }
          labelPlacement={labelPlacement}
          {...rest}
        />
      </div>
    );
  },
);
