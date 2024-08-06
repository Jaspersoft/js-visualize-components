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

export const getBaseInputControlProps = (
  ic: BaseInputControlProps,
  updatedStateValue: any,
) => {
  return {
    id: ic.id,
    type: ic.type,
    label: ic.label,
    mandatory: ic.mandatory,
    readOnly: ic.readOnly,
    visible: ic.visible,
    uri: ic.uri,
    state: { ...ic.state!, value: updatedStateValue! },
    validationRules: ic.validationRules,
    dataType: ic.dataType,
    masterDependencies: ic.masterDependencies,
    slaveDependencies: ic.slaveDependencies,
  };
};

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
  callbackChange?: (ic: BaseInputControlProps) => void;
}

export interface InputControlCollection {
  inputControl: BaseInputControlProps[];
}
