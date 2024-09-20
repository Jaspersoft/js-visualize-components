import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  JVTextField,
  JVTypography,
  JVRadioGroup,
  JVRadioButton,
  JVSelectItem,
} from "@jaspersoft/jv-ui-components";
import i18nScheduler from "../../../i18n";
import {
  SCHEDULE_JOB_DESCRIPTION,
  SCHEDULE_JOB_NAME,
  SCHEDULE_TAB,
  timeFrames,
} from "../../../constants/schedulerConstants";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useStoreUpdate } from "../../../hooks/useStoreUpdate";
import { useTranslation } from "react-i18next";
import { IState, translationProps } from "../../../types/scheduleType";
import { updateChangeToStore } from "../../../utils/schedulerUtils";

const Schedule = () => {
  const { t } = useTranslation(undefined, {
    i18n: i18nScheduler,
  }) as translationProps;
  const recurrenceIntervalErr = useSelector(
    (state: IState) => state.scheduleErrors.recurrenceInterval,
  );
  const stepperConfig = useSelector(
    (state: IState) => state.stepperConfiguration,
  );
  const scheduleJobNameErr = useSelector(
    (state: IState) => state.scheduleErrors.scheduleJobName,
  );
  const scheduleJobDescriptionErr = useSelector(
    (state: IState) => state.scheduleErrors.scheduleJobDescription,
  );
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
  const {
    label: labelVisible,
    description: descriptionVisible,
    recurrenceInterval: recurrenceIntervalVisible,
    recurrenceIntervalUnit: recurrenceIntervalUnitVisible,
    startTime: startTimeVisible,
  } = useSelector((state: IState) => state.fieldsVisibility);

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
  const [specificDateTime, setSpecificDateTime] = useState<string | null>(
    startDate,
  );

  useEffect(() => {
    if (startDate) setSpecificDateTime(startDate);
  }, [simpleTrigger.startDate]);

  useEffect(() => {
    setScheduleName(scheduleJobName);
  }, [scheduleJobName]);

  useEffect(() => {
    setStartType(storeStartType);
  }, [simpleTrigger.startType]);

  useEffect(() => {
    setRecurrenceInterval(recurrenceInterval);
  }, [simpleTrigger.recurrenceInterval]);

  useEffect(() => {
    setRecurrenceUnit(recurrenceIntervalUnit);
  }, [simpleTrigger.recurrenceIntervalUnit]);

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

  const updateRecurrenceToStore = (newProperty: {
    [key: string]: string | number | null;
  }) => {
    const triggerValues = { ...simpleTrigger, ...newProperty };
    updateStore(
      { trigger: { simpleTrigger: triggerValues } },
      newProperty,
      stepperConfig.show,
    );
  };

  return (
    <>
      <JVTypographyComponent text={t("schedule.name.description.title")} />
      {labelVisible && (
        <JVTextField
          size="large"
          label={t("schedule.job.name.label")}
          value={scheduleName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setScheduleName(e.target.value)
          }
          onBlur={() => {
            updateChangeToStore(
              { scheduleJobName: scheduleName },
              SCHEDULE_JOB_NAME,
              scheduleName,
              stepperConfig.show,
              updateStore,
            );
          }}
          error={t(scheduleJobNameErr || "")}
        />
      )}
      {descriptionVisible && (
        <JVTextField
          size="large"
          label={t("schedule.job.description.label")}
          multiline
          rows={5}
          value={scheduleDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setScheduleDescription(e.target.value);
          }}
          onBlur={() => {
            updateChangeToStore(
              { scheduleJobDescription: scheduleDescription },
              SCHEDULE_JOB_DESCRIPTION,
              scheduleDescription,
              stepperConfig.show,
              updateStore,
            );
          }}
          error={t(scheduleJobDescriptionErr || "")}
        />
      )}
      {recurrenceIntervalVisible ||
        (recurrenceIntervalUnitVisible && (
          <JVTypographyComponent text={t("schedule.recurrence.title")} />
        ))}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleIntervalChange(e.target.value)
          }
          onBlur={() => {
            const convertedValue = Number(recurrenceInt);
            setRecurrenceInterval(convertedValue);
            updateRecurrenceToStore({ recurrenceInterval: convertedValue });
          }}
          error={t(recurrenceIntervalErr || "")}
        />
        <div className="jv-mControl-timeframe mui">
          <JVTextField
            size="large"
            label={t("schedule.recurrence.timeframe")}
            textFieldClassName="jv-uWidth-175px"
            select
            value={recurrenceUnit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleTimeFrameChange(e.target.value)
            }
          >
            {timeFrames.map((timeFrame) => (
              <JVSelectItem key={timeFrame.value} value={timeFrame.value}>
                {timeFrame.textPlural}
              </JVSelectItem>
            ))}
          </JVTextField>
        </div>
      </div>

      {startTimeVisible && (
        <>
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
              type="datetime-local"
              disabled={startType === 1}
              value={specificDateTime?.split(" ").join("T")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
      )}
    </>
  );
};

export default Schedule;
