import React from 'react';
import {JVCheckbox, JVCheckboxGroup, JVTextField, JVTypography} from "@jaspersoft/jv-ui-components";

const Output = () => {
    return (
        <>
            <JVTypography variant="h6">Output Settings</JVTypography>
            <div className="jv-mInputs mui">
                <JVTextField
                    size="large"
                    label="File name (required)"
                />
                <JVTextField
                    size="large"
                    label="Time zone (required)"
                    select
                />
                <JVCheckboxGroup
                    size="large"
                    title="Formats (required)">
                    <JVCheckbox
                        value="pdf"
                        label="PDF"/>
                </JVCheckboxGroup>

            </div>
        </>
    );
}

export default Output;