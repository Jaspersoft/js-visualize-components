import React from "react";
import { JVStylesProvider } from '@jaspersoft/jv-ui-components';
import Button from "../Button";

const Tabs = () => {
    return (
        <JVStylesProvider>
        <Button label="Hello world!"/>
        </JVStylesProvider>
    )
}
export default Tabs;