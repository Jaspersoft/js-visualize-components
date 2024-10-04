/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

const i18nLabel = (keyMsg: string): string => {
  const i18nLabelArray: any = {
    "materialUi.component.collapsiblePanel.close": "Close panel",
  };
  return i18nLabelArray[keyMsg] || keyMsg;
};

export default i18nLabel;
