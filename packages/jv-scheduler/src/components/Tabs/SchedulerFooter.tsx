import React from "react";
import { JVButton } from "@jaspersoft/jv-ui-components";

const SchedulerFooter = () => {
  return (
    <>
      <JVButton color="primary" variant="contained">
        Create schedule
      </JVButton>
      <JVButton variant="contained">Cancel</JVButton>
    </>
  );
};

export default SchedulerFooter;
