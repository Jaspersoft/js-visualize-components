/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useDispatch, useSelector } from "react-redux";
import { stateValidator } from "../validations/scheduleValidators";
import {
  scheduleValidationError,
  setPropertiesDetails,
  setStepperProperties,
} from "../actions/action";

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
