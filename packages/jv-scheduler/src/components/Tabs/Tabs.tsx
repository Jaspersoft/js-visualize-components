import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import { JVTabs, JVTab } from "@jaspersoft/jv-ui-components";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import Schedule from "../Tabs/TabsContent/Schedule";
import Parameters from "../Tabs/TabsContent/Parameters";
import Output from "../Tabs/TabsContent/Output";
import Notifications from "../Tabs/TabsContent/Notifications";
import SchedulerFooter from "./SchedulerFooter";
import {
  getUserTimezones,
  getOutputOptions,
  getInputControls,
} from "../../services/schedulerServices";
// import {useDispatch} from "react-redux";
import { setUserTimeZones } from "../../actions/action";
import ScheduleStepper from "../Stepper/ScheduleStepper";
import SchedulerHeader from "./SchedulerHeader";

const Tabs = () => {
  const [value, setValue] = useState<number>(0);
  // const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const timezones = await getUserTimezones();
      const outputOptions = await getOutputOptions();
      // const locale = await getSupportedLocale();
      const inputControls = await getInputControls();
      if (timezones.error) {
        // handle error for user timezones
      } else {
        // dispatch(setUserTimeZones(timezones))
      }

      if (outputOptions.error) {
        // handle error for output options
      }
      // if(locale.error){
      //     // handle error for locale
      // }
      if (inputControls.error) {
        // handle error for input controls
      }
    };
    fetchData();
  }, []);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="jv-lColumns">
        <div className="jv-lColumns-column jv-uWidth-300px jv-uOverflow-auto jv-uBackgroundGrey-04">
          <ScheduleStepper />
        </div>
        <JVStylesProvider>
          <div className="jv-lColumns-column  jv-uWidth-550px jv-uOverflow-auto">
            <SchedulerHeader />
            <div className="jv-mDrawer-subheader jv-uMargin-t-04 jv-mDrawer-subheaderPadded mui">
              <JVTabs value={value} onChange={handleChange} size="large">
                <JVTab label={t("schedule")} />
                <JVTab label={t("parameters")} />
                <JVTab label={t("output_options")} />
                <JVTab label={t("notifications")} />
              </JVTabs>
            </div>
            <div className="jv-mDrawer-body jv-mDrawer-bodyPadded mui">
              {value === 0 && <Schedule />}
              {value === 1 && <Parameters />}
              {value === 2 && <Output />}
              {value === 3 && <Notifications />}
            </div>

            <SchedulerFooter />
          </div>
        </JVStylesProvider>
      </div>
    </>
  );
};
export default Tabs;
