import { useEffect, useState } from "react";
import { BaseInputControlProps } from "../BaseInputControl";

export function useControlClasses(
  initialClasses: string[],
  props: BaseInputControlProps,
) {
  const CONTAINER_CLASS = "jv-uInputControl-container";
  const INVISIBLE_CLASS = "jv-uVisibility-hide";
  const MANDATORY_CLASS = "jv-uMandatory";
  const READ_ONLY_CLASS = "jv-uReadOnly";
  const [classes, setClasses] = useState<string[]>(initialClasses);

  const getClasses = () => {
    let controlClasses: string[] = [CONTAINER_CLASS];
    if (!props.visible) controlClasses.push(INVISIBLE_CLASS);
    if (props.mandatory) controlClasses.push(MANDATORY_CLASS);
    if (props.readOnly) controlClasses.push(READ_ONLY_CLASS);
    setClasses([...initialClasses, ...controlClasses]);
  };

  useEffect(() => {
    getClasses();
  }, []);

  return classes;
}
