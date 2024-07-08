import React, { useEffect, useState } from "react";
import Tabs from "./Tabs/Tabs";
import { useDispatch } from "react-redux";
import {
  getUserTimezones,
  getOutputOptions,
  getInputControls,
} from "../services/schedulerServices";
import { setUserTimeZones, setOutputFormats } from "../actions/action";

const SchedulerMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const timezones = await getUserTimezones();
      const outputOptions = await getOutputOptions();
      // const locale = await getSupportedLocale();
      const inputControls = await getInputControls();
      if (timezones.error) {
        // handle error for user timezones
      } else {
        dispatch(setUserTimeZones(timezones));
      }

      if (outputOptions.error) {
        // handle error for output options
      } else {
        dispatch(setOutputFormats(outputOptions.dashboard.outputFormats));
      }
      // if(locale.error){
      //     // handle error for locale
      // } else {
      //     dispatch(setUserLocale(locale))
      // }
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
