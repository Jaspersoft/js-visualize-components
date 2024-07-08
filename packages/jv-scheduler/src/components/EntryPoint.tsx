import React from 'react';
import store from "./../store/store";
import { Provider as ReduxProvider } from 'react-redux';
import SchedulerMain from "./SchedulerMain"

type EntryPointProps = { lang: string }
const EntryPoint = (props: EntryPointProps) => {
    console.log(props)
    return (
        <ReduxProvider store={store}>
            <SchedulerMain />
        </ReduxProvider>
    )
}

export default EntryPoint;