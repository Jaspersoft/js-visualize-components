import * as React from 'react'
import { useState } from 'react';
import { BaseInputControlProps } from '../controls/BaseInputControl'

const CONTAINER_CLASS = 'jv-uInputControl-container';
const INVISIBLE_CLASS = 'jv-uVisibility-hide';
const MANDATORY_CLASS = 'jv-uMandatory';

export default function BaseInputControl(props: BaseInputControlProps) {

  const [additionalCssClasses, setAdditionalCssClasses] = useState<string[]>([]);

  const getClasses = () => {
    let activeClasses: string[] = [CONTAINER_CLASS];
    if (!props.visible) activeClasses.push(INVISIBLE_CLASS);
    if (props.mandatory) activeClasses.push(MANDATORY_CLASS);
    setAdditionalCssClasses(activeClasses);
  }

  getClasses();

  return (
    <div className={additionalCssClasses.join(' ')}>
      {props.children}
    </div>
  );

}
