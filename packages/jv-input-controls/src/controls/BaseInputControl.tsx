/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  CommonInputControlProperties,
  InputControlProperties,
} from "@jaspersoft/jv-tools";

export const getInputControlProperties = (
  ic: InputControlProperties,
  updatedStateValue: any,
): CommonInputControlProperties => {
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
  data: InputControlProperties[];
}
