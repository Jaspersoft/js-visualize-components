export type ICType = "bool" | "singleValueText" | "singleValueNumber" | undefined;

export interface BaseInputControlProps {
  id: number;
  type: ICType;
  label: string;
  mandatory: boolean;
  readOnly: boolean;
  visible: boolean;
  uri?: string;

  masterDependencies?: string[];
  slaveDependencies?: string[];
}

