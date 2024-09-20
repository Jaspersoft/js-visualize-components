interface ITabState {
  name?: string;
  operator?: string;
  thresholdValue?: string | undefined;
  recurrenceInterval?: string | undefined;
  address?: string;
  fileName?: string;
}

export interface ConditionTabProps {
  name?: string;
  operator?: string;
  thresholdValue?: string | undefined;
}

export interface ScheduleTabProps {
  recurrenceInterval?: string | undefined;
}

export interface NotificationsTabProps {
  address?: string;
}

export interface OutputTabProps {
  fileName?: string;
}

export interface TabProps {
  tabState?: ITabState;
  tabValuesChangeFn?:
    | ((item: ConditionTabProps) => void)
    | ((item: ScheduleTabProps) => void)
    | ((item: NotificationsTabProps) => void)
    | ((item: OutputTabProps) => void);
}
