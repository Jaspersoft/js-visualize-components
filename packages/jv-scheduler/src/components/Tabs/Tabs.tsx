import React from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
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