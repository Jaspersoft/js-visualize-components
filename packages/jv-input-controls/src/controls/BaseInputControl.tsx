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
  dateTimeFormatValidationRule: {
    errorMessage: string;
    format: string;
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

const CONTAINER_CLASS = "jv-uInputControl-container";
const INVISIBLE_CLASS = "jv-uVisibility-hide";
const MANDATORY_CLASS = "jv-uMandatory";
const READ_ONLY_CLASS = "jv-uReadOnly";

export default function BaseInputControl(props: BaseInputControlProps) {
  const [additionalCssClasses, setAdditionalCssClasses] = useState<string[]>(
    [],
  );

  const getClasses = () => {
    let activeClasses: string[] = [CONTAINER_CLASS];
    if (!props.visible) activeClasses.push(INVISIBLE_CLASS);
    if (props.mandatory) activeClasses.push(MANDATORY_CLASS);
    if (props.readOnly) activeClasses.push(READ_ONLY_CLASS);
    setAdditionalCssClasses(activeClasses);
  };

  useEffect(() => {
    getClasses();
  }, []);

  return <div className={additionalCssClasses.join(" ")}>{props.children}</div>;
}
