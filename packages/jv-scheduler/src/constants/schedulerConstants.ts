export const PARAMETERS_TAB = "parameters";
export const SCHEDULE_TAB = "schedule";
export const NOTIFICATIONS_TAB = "notifications";
export const OUTPUT_TAB = "output";
const allTabs = [PARAMETERS_TAB, SCHEDULE_TAB, NOTIFICATIONS_TAB, OUTPUT_TAB];

export const timeFrames = [
  {
    textPlural: "Hours",
    textSingular: "Hour",
    value: "HOUR",
  },
  {
    textPlural: "Days",
    textSingular: "Day",
    value: "DAY",
  },
  {
    textPlural: "Weeks",
    textSingular: "Week",
    value: "WEEK",
  },
];
export const tabParameters = [
  {
    key: "condition",
    label: "condition.label",
    value: "condition",
  },
  {
    key: "parameters",
    label: "parameters.label",
    value: "parameters",
  },
  {
    key: "schedule",
    label: "schedule.label",
    value: "schedule",
  },
  {
    key: "notifications",
    label: "notifications.label",
    value: "notifications",
  },
  {
    key: "output",
    label: "output.label",
    value: "output",
  },
];

export const stepInfo = [
  {
    name: "schedule",
    title: "Schedule",
  },
  {
    name: "outputOptions",
    title: "Output Options",
  },
  {
    name: "notifications",
    title: "Notifications",
  },
];
