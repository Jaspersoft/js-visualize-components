import { useDispatch, useSelector } from "react-redux";
import { IState, IStoreData } from "../types/schedulerTypes";
import { setPropertiesDetails } from "../actions/action";

export const useStoreUpdate = () => {
  const dispatch = useDispatch();
  // const visitedTab = useSelector((state: Pick<IState, 'visitedTabs'>) => state.visitedTabs);

  return async (storeData: IStoreData) => {
    dispatch(setPropertiesDetails(storeData));
    // if (visitedTab.includes(tabName)) {
    //     dispatch(setStepperProperties(stepperData));
    //     const errors = await stateValidator(stepperData);
    //     dispatch(alertValidationError(errors));
    // }
  };
};
