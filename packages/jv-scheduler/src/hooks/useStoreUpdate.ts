/*
 * Copyright (C) 2005 - 2023. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary.
 * Licensed pursuant to commercial Cloud Software Group, Inc. End User License Agreement.
 */

import { useDispatch, useSelector } from "react-redux";
// import { stateValidator } from '../validations/AlertValidators';
// import { alertValidationError, setPropertiesDetails, setStepperProperties } from '../actions/alertAction';
import { setPropertiesDetails, setStepperProperties } from "../actions/action";

export const useStoreUpdate = (tabName: string) => {
  const dispatch = useDispatch();
  const visitedTab = useSelector((state: any) => state.visitedTabs);

  return (storeData: any, stepperData: any) => {
    dispatch(setPropertiesDetails(storeData));
    if (visitedTab.includes(tabName)) {
      dispatch(setStepperProperties(stepperData));
      // const errors = await stateValidator(stepperData);
      // dispatch(alertValidationError(errors));
    }
  };
};
