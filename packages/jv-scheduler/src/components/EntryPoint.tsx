import React, { useEffect } from "react";
import store from "./../store/store";
import { Provider as ReduxProvider } from "react-redux";
import SchedulerMain from "./SchedulerMain";
import { useTranslation } from "react-i18next";

type EntryPointProps = { lang: string };
const EntryPoint = (props: EntryPointProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(props.lang);
  }, [props.lang]);

  return (
    <ReduxProvider store={store}>
      <SchedulerMain />
    </ReduxProvider>
  );
};

export default EntryPoint;
