import { TextField as JVTextField } from '@jaspersoft/jv-ui-components/material-ui/TextField/TextField';
import { ChangeEvent, useState } from 'react';
import BaseInputControl, { BaseInputControlProps } from './BaseInputControl';

export type TextFieldICType = 'textField';

export interface TextFieldICProps extends BaseInputControlProps {
  defaultValue?: string;
  value?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  size?: 'large';
  className?: string;
}

/**
 * Text Input Control Component
 *
 * Will handle the text based input controls
 * @param props
 * @constructor
 */
export const SingleValueTextInputControl = (props: TextFieldICProps) => {
  const defaultOnChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentValue(event.target.value);
  };
  const {
    value: theValue, size, className,
    defaultValue, mandatory, readOnly, visible, ...remainingProps
  } = props;
  let cssClasses = className || '';
  const theSize = size !== 'large' ? 'large' : size;
  const [currentValue, setCurrentValue] = useState<string>(theValue || defaultValue || '');
  const inputProps: any = {};
  if (readOnly) {
    inputProps.readOnly = true;
  }
  if (!visible) {
    cssClasses += ' jv-uVisibility-hide';
  }
  const isRequiredError = mandatory && currentValue.trim().length === 0;
  return <BaseInputControl {...{ ...remainingProps, mandatory, readOnly, visible }}>
    <JVTextField variant={props.variant || 'outlined'}
                 value={currentValue}
                 size={theSize}
                 onChange={defaultOnChangeHandler}
                 className={cssClasses}
                 InputProps={inputProps}
                 required={mandatory}
                 error={isRequiredError}
                 {...remainingProps}
    />
  </BaseInputControl>;
};

