import React from 'react';
import { Button as JRSButton } from 'jrs-ui-components/material-ui/Button/Button';

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

      </>
    );
};

export default MuiTest;