import React from "react";
import {
  JVTableRow,
  JVTableCell,
  JVTableBody,
  JVCircularProgress,
} from "@jaspersoft/jv-ui-components";

const Loader = () => {
  return (
    <JVTableBody>
      <JVTableRow>
        <JVTableCell colSpan={3} align="center">
          <div className="jv-v-mSpinner jv-mSpinnerCenter jv-uMargin-tb-10 mui">
            <JVCircularProgress
              variant="determinate"
              size={28}
              thickness={4}
              value={100}
            />
            <JVCircularProgress size={28} thickness={4} />
          </div>
        </JVTableCell>
      </JVTableRow>
    </JVTableBody>
  );
};
export default Loader;
