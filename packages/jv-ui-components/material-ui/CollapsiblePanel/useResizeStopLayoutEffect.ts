/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { useLayoutEffect, useMemo } from "react";
import { OnResizeStopCallback } from "./collapsiblePanelTypes";
import { getPanelSizeState, PanelsState } from "./useCollapsiblePanelState";

const getSubPanelsWidthHeightHash = (panelsState: PanelsState) => {
  return panelsState.reduce((acc, panel) => {
    const panelWidthHash = `${acc}${acc.length ? "-" : ""}${panel.width}:`;
    return panel.subPanels.reduce((acc1, subPanel) => {
      return `${acc1}${subPanel.height}`;
    }, panelWidthHash);
  }, "");
};

export const useResizeStopLayoutEffect = (
  callback: OnResizeStopCallback,
  panelsState: PanelsState,
) => {
  const initialPanelsWidthHeightHash = useMemo(
    () => getSubPanelsWidthHeightHash(panelsState),
    [panelsState],
  );
  useLayoutEffect(() => {
    callback(getPanelSizeState(panelsState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, initialPanelsWidthHeightHash]);
};
