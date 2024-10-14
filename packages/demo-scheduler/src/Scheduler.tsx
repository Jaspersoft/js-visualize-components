/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  Scheduler as JaspersoftScheduler,
  SchedulerProps,
} from "@jaspersoft/jv-scheduler";
import { JVDrawer } from "@jaspersoft/jv-ui-components";

export const Scheduler = ({ v, config, uri }: SchedulerProps) => {
  return (
    <JVDrawer
      anchor="right"
      open={true}
      style={{ top: "3px" }}
      classes={{
        paper: "jv-uOverflow-hide jv-uWidth-750px",
      }}
    >
      <div
        className="jv-lColumns-column  jv-uOverflow-auto"
        style={{ height: "100%" }}
      >
        <JaspersoftScheduler v={v} config={config} uri={uri} />
      </div>
    </JVDrawer>
  );
};
