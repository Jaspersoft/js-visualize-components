import React, { ChangeEvent, useEffect, useState } from "react";
import {
  JVTextField,
  JVTypography,
  JVRadioGroup,
  JVRadioButton,
  JVSelectItem,
} from "@jaspersoft/jv-ui-components";
import {
  SCHEDULE_JOB_DESCRIPTION,
  SCHEDULE_JOB_NAME,
  SCHEDULE_TAB,
  timeFrames,
} from "../../../constants/schedulerConstants";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useSelector } from "react-redux";
import { IState, IStepperState } from "../../../types/schedulerTypes";
import { useStoreUpdate } from "../../../hooks/useStoreUpdate";
import { useTranslation } from "react-i18next";

const Schedule = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const scheduleJobName = useSelector(
    (state: IState) => state.scheduleInfo.scheduleJobName,
  );
  const scheduleJobDescription = useSelector(
    (state: IState) => state.scheduleInfo.scheduleJobDescription,
  );
  const simpleTrigger = useSelector(
    (state: IState) => state.scheduleInfo.trigger.simpleTrigger,
  );
  const outputTimeZone = useSelector(
    (state: IState) => state.scheduleInfo.outputTimeZone,
  );

  const [scheduleName, setScheduleName] = useState(scheduleJobName);
  const [scheduleDescription, setScheduleDescription] = useState(
    scheduleJobDescription,
  );
  const updateStore = useStoreUpdate(SCHEDULE_TAB);
  const {
    recurrenceInterval,
    recurrenceIntervalUnit,
    startType: storeStartType,
    startDate,
  } = simpleTrigger;
  const [recurrenceInt, setRecurrenceInterval] = useState<string | number>(
    recurrenceInterval,
  );
  const [recurrenceUnit, setRecurrenceUnit] = useState(recurrenceIntervalUnit);
  const [startType, setStartType] = useState(storeStartType);
  const [specificDateTime, setSpecificDateTime] = useState<string>("");

  useEffect(() => {
    if (startDate) setSpecificDateTime(startDate);
  }, [startDate]);

  useEffect(() => {
    setScheduleName(scheduleJobName);
  }, [scheduleJobName]);

  useEffect(() => {
    setRecurrenceInterval(recurrenceInterval);
  }, [recurrenceInterval]);

  useEffect(() => {
    setRecurrenceUnit(recurrenceIntervalUnit);
  }, [recurrenceIntervalUnit]);

  const handleIntervalChange = (value: string) => {
    setRecurrenceInterval(value);
  };

  const handleTimeFrameChange = (newVal: string) => {
    setRecurrenceUnit(newVal);
    updateRecurrenceToStore({ recurrenceIntervalUnit: newVal });
  };

  const handleStartType = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = +e.target.value;
    let changedVal: { startType: number; startDate: null | string } = {
      startType: newVal,
      startDate: null,
    };
    changedVal =
      newVal === 1
        ? { ...changedVal }
        : { ...changedVal, ...{ startDate: specificDateTime, outputTimeZone } };
    setStartType(newVal);
    updateRecurrenceToStore(changedVal);
  };

  const updateChangeToStore = (property: any) => {
    updateStore(property, property);
  };

  const updateRecurrenceToStore = (newProperty: {
    [key: string]: string | number | null;
  }) => {
    const triggerValues = { ...simpleTrigger, ...newProperty };
    updateStore({ trigger: { simpleTrigger: triggerValues } }, newProperty);
  };

  return (
    <>
      <JVTypographyComponent text={t("schedule.name.description.title")} />
      <JVTextField
        size="large"
        label={t("schedule.job.name.label")}
        value={scheduleName}
        onChange={(e) => setScheduleName(e.target.value)}
        onBlur={() => {
          updateChangeToStore({ [SCHEDULE_JOB_NAME]: scheduleName });
        }}
      />
      <JVTextField
        size="large"
        label={t("schedule.job.description.label")}
        multiline
        rows={5}
        value={scheduleDescription}
        onChange={(e) => {
          setScheduleDescription(e.target.value);
        }}
        onBlur={() =>
          updateChangeToStore({
            [SCHEDULE_JOB_DESCRIPTION]: scheduleDescription,
          })
        }
      />
      <JVTypographyComponent text={t("schedule.recurrence.title")} />
      <div className="jv-mControl jv-mControlInterval jv-mControlFlexwidth mui">
        <JVTextField
          id="recurrenceInterval"
          label={t("schedule.recurrence.interval")}
          size="large"
          className="jv-mControl-interval mui"
          InputLabelProps={{
            shrink: true,
          }}
          textFieldClassName="jv-uWidth-140px"
          type="number"
          value={String(recurrenceInt)}
          onChange={(e) => handleIntervalChange(e.target.value)}
          onBlur={() => {
            const convertedValue = Number(recurrenceInt);
            setRecurrenceInterval(convertedValue);
            updateRecurrenceToStore({ recurrenceInterval: convertedValue });
          }}
        />
        <div className="jv-mControl-timeframe mui">
          <JVTextField
            size="large"
            label={t("schedule.recurrence.timeframe")}
            textFieldClassName="jv-uWidth-175px"
            select
            value={recurrenceUnit}
            onChange={(e) => handleTimeFrameChange(e.target.value)}
          >
            {timeFrames.map((timeFrame) => (
              <JVSelectItem key={timeFrame.value} value={timeFrame.value}>
                {timeFrame.textPlural}
              </JVSelectItem>
            ))}
          </JVTextField>
        </div>
      </div>

      <JVRadioGroup
        size="large"
        RadioGroupProps={{ onChange: handleStartType }}
      >
        <JVTypography>{t("schedule.recurrence.start")}</JVTypography>
        <JVRadioButton
          id="start-now"
          value="start-now"
          label={t("schedule.recurrence.start.now")}
          RadioProps={{
            value: 1,
            checked: startType === 1,
          }}
        />
        <JVRadioButton
          id="specificDate"
          value="start-specific-time"
          label={t("schedule.recurrence.start.custom")}
          RadioProps={{
            value: 2,
            checked: startType === 2,
          }}
        />
      </JVRadioGroup>
      <div className="jv-uMargin-l-07 jv-uWidth-200px">
        <JVTextField
          size="large"
          type="date"
          disabled={startType === 1}
          value={specificDateTime.split(" ").join("T")}
          onChange={(e) => {
            const formattedDate = e.target.value.split("T").join(" ");
            setSpecificDateTime(formattedDate);
          }}
          onBlur={() =>
            updateRecurrenceToStore({
              startDate: specificDateTime,
              startType,
              outputTimeZone,
            })
          }
        />
      </div>
    </>
  );
};

export default Schedule;
