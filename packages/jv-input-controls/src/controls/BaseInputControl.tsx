import * as React from "react";
import { useState, useEffect } from "react";

export type ICType =
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

export interface ICOption {
  selected?: boolean;
  label?: string;
  value?: string;
}

export interface ICState {
  id: string;
  uri: string;
  value: string;
  error?: string;
  totalCount?: string;
  options?: ICOption[];
}

export interface ICValidationRule {
  errorMessage?: string;
}

export interface ICDateValidationRule {
  dateTimeFormatValidationRule?: {
    errorMessage: string;
    format: string;
  };
  mandatoryValidationRule?: {
    errorMessage: string;
  };
}

export type ICDataTypeType =
  | string
  | "date"
  | "datetime"
  | "time"
  | "text"
  | "number"
  | undefined;

export interface ICDataType {
  type?: ICDataTypeType;
  pattern?: string;
  maxValue?: string;
  strictMax?: boolean;
  minValue?: string;
  strictMin?: boolean;
  maxLength?: number;
}

export interface BaseInputControlProps {
  children?: React.JSX.Element[] | React.JSX.Element;
  id: string;
  type: ICType;
  label: string;
  mandatory: boolean;
  readOnly: boolean;
  visible: boolean;
  uri?: string;
  state?: ICState;
  validationRules?: ICValidationRule | ICDateValidationRule[];
  dataType?: ICDataType;

  masterDependencies?: string[];
  slaveDependencies?: string[];
}

export interface InputControlCollection {
  inputControl: BaseInputControlProps[];
}
