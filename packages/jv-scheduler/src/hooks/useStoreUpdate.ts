/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import { useDispatch, useSelector } from "react-redux";
import { stateValidator } from "../validations/scheduleValidators";
import {
  scheduleValidationError,
  setPropertiesDetails,
  setStepperProperties,
} from "../actions/action";
import { setPropertiesDetails, setStepperProperties } from "../actions/action";

export const useStoreUpdate = (tabName: string) => {
  const dispatch = useDispatch();
  const visitedTab = useSelector((state: any) => state.visitedTabs);

  return async (
    storeData: any,
    stepperData: any,
    isStepperVisible: boolean,
  ) => {
    dispatch(setPropertiesDetails(storeData));
    if (visitedTab.includes(tabName)) {
      if (isStepperVisible) dispatch(setStepperProperties(stepperData));
      const errors = await stateValidator(stepperData);
      dispatch(scheduleValidationError(errors));
    }
  };
};
