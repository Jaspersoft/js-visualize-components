import React from 'react';
import { Button as JRSButton } from 'jrs-ui-components/material-ui/Button/Button.js';
import { Badge as JRSBadge } from 'jrs-ui-components/material-ui/Badge/Badge.js';
import { Checkbox as JRSCheckbox } from 'jrs-ui-components/material-ui/Checkbox/Checkbox.js';

const MuiTest = () => {
    const onEmptyCall = () => {
    };
    return (
      <>
          {/*Rendering a basic button*/}
          <JRSButton
            size="large"
            variant="contained"
            color="error"
            onClick={onEmptyCall}
          >
              {'hello world'}
          </JRSButton>

          <br/>

          <JRSBadge badgeContent={4} color="success">
              check this badge
          </JRSBadge>

      </>
    );
};

export default MuiTest;