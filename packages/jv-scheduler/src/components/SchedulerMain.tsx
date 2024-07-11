import React, { useEffect } from "react";
import Tabs from "./Tabs/Tabs";
import { useDispatch } from "react-redux";
import { getInputControls } from "../services/schedulerServices";
import { getUserTimeZones, getOutputFormats } from "../actions/action";

const SchedulerMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTimeZones());
    dispatch(getOutputFormats());

    const fetchData = async () => {
      const inputControls = await getInputControls();
      if (inputControls.error) {
        // handle error for input controls
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Tabs />
    </>
  );
};
export default SchedulerMain;
