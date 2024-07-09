import React from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";

const SchedulerFooter = () => {
  return (
    <>
      <div className="jv-mDrawer-footer mui">
        <JVButton color="primary" variant="contained">
          Create schedule
        </JVButton>
        <JVButton variant="contained">Cancel</JVButton>
      </div>
    </>
  );
};

export default SchedulerFooter;
