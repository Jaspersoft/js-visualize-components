import React, {useState} from "react";
import {JVButton} from "@jaspersoft/jv-ui-components";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    const [showtext, setShowtext] = useState(true);
    // @ts-ignore
    return (showtext ? (<JVButton size="small"
                                  variant="contained"
                                  color='primary'>
        {props.label}
    </JVButton>) : (<JVButton size="small"
                              variant="contained"
                              color='primary'>
        Bye</JVButton>));
};

export default Button;