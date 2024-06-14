
import { JVBadge, JVButton } from 'jrs-ui-components';
import * as React from 'react';

const MuiTest = () => {
    const onEmptyCall = () => {
    };
    return (
      <>
          {/*Rendering a basic button*/}
          <JVButton
            size="large"
            variant="contained"
            color="error"
            onClick={onEmptyCall}
          >
              {'hello world'}
          </JVButton>

          <br/>

          <JVBadge badgeContent={4} color="success">
              check this badge
          </JVBadge>

      </>
    );
};

export default MuiTest;