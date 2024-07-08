import React from 'react';
import {JVTextField, JVTypography, JVRadioGroup, JVRadioButton} from "@jaspersoft/jv-ui-components";

const Schedule = () => {
    return (
        <>
            <JVTypography variant="h6">Recurrence</JVTypography>
            <div className="jv-mControl jv-mControlInterval jv-mControlFlexwidth mui">
                <JVTextField
                    id="recurrenceInterval"
                    label="Interval (required)"
                    size="large"
                    className="jv-mControl-interval mui"
                    InputLabelProps={{
                        shrink: true
                    }}
                    textFieldClassName="jv-uWidth-140px"
                    type="number"
                    defaultValue="1"
                />
                <div className="jv-mControl-timeframe mui">
                    <JVTextField
                        size="large"
                        label="Timeframe (required)"
                        textFieldClassName="jv-uWidth-175px"
                        select
                        defaultValue="Minutes"
                    />
                </div>
            </div>
            <JVRadioGroup
                size="large"

            >
                <JVRadioButton
                    value="now"
                    label="Now"
                    checked
                />
                <JVRadioButton
                    value="now"
                    label="Specific date and time"
                />
            </JVRadioGroup>
            <div className="jr-uMargin-l-07 jr-uWidth-200px">
                <JVTextField
                    size="large"
                    label="Start date"
                    type="date"
                    defaultValue="2024-07-02"
                />
            </div>

        </>

    );
}

export default Schedule;