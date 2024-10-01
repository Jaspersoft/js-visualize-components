import React from "react";
import { JVCircularProgress } from "@jaspersoft/jv-ui-components";

const Loader = () => {
  return (
    <div className="jv-mSpinner jv-mSpinnerCenter mui">
      <JVCircularProgress
        variant="determinate"
        size={28}
        thickness={4}
        value={100}
      />
      <JVCircularProgress variant="indeterminate" size={28} thickness={4} />
    </div>
  );
};
export default Loader;
