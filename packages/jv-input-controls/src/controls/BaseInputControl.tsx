import { InputControlProperties } from "@jaspersoft/jv-tools";

export const getInputControlProperties = (
  ic: InputControlProperties,
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

export interface InputControlCollection {
  inputControl: InputControlProperties[];
}
