import { useEffect, useState } from "react";
import { BaseInputControlProps } from "@jaspersoft/jv-tools";

export function useControlClasses(
  initialClasses: string[],
  props: BaseInputControlProps,
) {
  const INVISIBLE_CLASS = "jv-uVisibility-hide";
  const MANDATORY_CLASS = "jv-mInputRequired";
  const [classes, setClasses] = useState<string[]>(initialClasses);

  const getClasses = () => {
    let controlClasses: string[] = [];
    if (!props.visible) controlClasses.push(INVISIBLE_CLASS);
    if (props.mandatory) controlClasses.push(MANDATORY_CLASS);
    setClasses([...initialClasses, ...controlClasses]);
  };

  useEffect(() => {
    getClasses();
  }, []);

  return classes;
}
