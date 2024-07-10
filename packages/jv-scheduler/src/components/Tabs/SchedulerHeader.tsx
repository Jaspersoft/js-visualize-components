import React from "react";
import { JVTypography } from "@jaspersoft/jv-ui-components";

const SchedulerHeader = () => {
  return (
    <div className="jv-mDrawer-header mui">
      <JVTypography className="jv-mDrawer-header-title" variant="h2">
        Create Schedule
      </JVTypography>
    </div>
  );
};

export default SchedulerHeader;
