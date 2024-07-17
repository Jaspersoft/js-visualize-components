import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";
import Schedule from "../Tabs/TabsContent/Schedule";
import Parameters from "../Tabs/TabsContent/Parameters";
import Output from "../Tabs/TabsContent/Output";
import Notifications from "./TabsContent/notifications/Notifications";

const Tabs = () => {
  const [value, setValue] = useState<number>(0);
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="jv-mDrawer-subheader jv-uMargin-t-04 jv-mDrawer-subheaderPadded mui">
        <JVTabs value={value} onChange={handleChange} size="large">
          <JVTab label={t("schedule")} />
          <JVTab label={t("parameters")} />
          <JVTab label={t("output")} />
          <JVTab label={t("notifications")} />
        </JVTabs>
      </div>
      <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
        {value === 0 && <Schedule />}
        {value === 1 && <Parameters />}
        {value === 2 && <Output />}
        {value === 3 && <Notifications />}
      </div>
    </>
  );
};
export default Tabs;
