import React from 'react';
import {JVTextField, JVTypography} from "@jaspersoft/jv-ui-components";

const Notifications = () => {
    return (
        <>
            <JVTypography variant="h6">Email Notification</JVTypography>
            <div className="jv-mInputs mui">
                <JVTextField
                    size="large"
                    label="Send alert to (required)"
                    helperText="Use commas to separate email addresses."
                />
                <JVTextField
                    size="large"
                    label="Subject (required)"
                />
                <JVTextField
                    size="large"
                    label="Message"
                    multiline
                    rows={5}
                />
            </div>
        </>
    );
}

export default Notifications;