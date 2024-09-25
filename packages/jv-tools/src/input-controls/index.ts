export type InputControlDataTypeType =
  | string
  | "date"
  | "datetime"
  | "time"
  | "text"
  | "number"
  | undefined;

export interface InputControlDataType {
  type?: InputControlDataTypeType;
  pattern?: string;
  maxValue?: string;
  strictMax?: boolean;
  minValue?: string;
  strictMin?: boolean;
  maxLength?: number;
}

export interface InputControlValidationRule {
  dateTimeFormatValidationRule?: {
    errorMessage: string;
    format: string;
  };
  mandatoryValidationRule?: {
    errorMessage: string;
  };
  regexpValidationRule?: {
    errorMessage: string;
    inverted: boolean;
    regexp: string;
  };
  rangeValidationRule?: {
    errorMessage: string;
    inverted: boolean;
    maxValue: number;
    minValue: number;
    includeMaxValue: boolean;
    includeMinValue: boolean;
  };
}

export interface InputControlOption {
  selected?: boolean;
  label?: string;
  value?: string;
}

export interface InputControlState {
  id: string;
  uri: string;
  value: string;
  error?: string;
  totalCount?: string;
  options?: InputControlOption[];
}

export type InputControlType =
  | string
  | "bool"
  | "singleValueText"
  | "singleValueNumber"
  | "singleValueDate"
  | "singleValueDatetime"
  | "singleValueTime"
  | "singleSelect"
  | "singleSelectRadio"
  | "multiSelect"
  | "multiSelectCheckbox"
  | undefined;

export interface BaseInputControlProps {
  id: string;
  type: InputControlType;
  label: string;
  mandatory: boolean;
  readOnly: boolean;
  visible: boolean;
  uri?: string;
  state?: InputControlState;
  validationRules?: InputControlValidationRule[];
  dataType?: InputControlDataType;

  masterDependencies?: string[];
  slaveDependencies?: string[];
  events?: {
    change: (
      ic: BaseInputControlProps,
      validationResult?: { [key: string]: string },
    ) => void;
  };
}
