/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef, HTMLAttributes, useRef } from "react";

import {
  Anchor,
  MaxWidth,
  OnExpandCollapseClick,
  OnExpansionStateChangedCallback,
  OnResizeCallback,
  OnResizeStartCallback,
  OnResizeStopCallback,
  OnScrollCallback,
  PanelDefinition,
} from "../CollapsiblePanel/collapsiblePanelTypes";
import { FlushPanelsContainer } from "./FlushPanelsContainer";
import { useCollapsiblePanelState } from "../CollapsiblePanel/useCollapsiblePanelState";
import { useCollapsiblePanelExpansionLayoutEffect } from "../CollapsiblePanel/useCollapsiblePanelExpansionLayoutEffect";
import { useToggleExpansionStateLayoutEffect } from "../CollapsiblePanel/useToggleExpansionStateLayoutEffect";
import { useResizeStopLayoutEffect } from "../CollapsiblePanel/useResizeStopLayoutEffect";
import { useTabsPanelWidth } from "../CollapsiblePanel/useTabsPanelWidth";
import { CollapsibleFlushPanelTabs } from "./CollapsibleFlushPanelTabs";

export interface FlushPanelProps {
  anchor?: Anchor;
  panels: PanelDefinition[];
  maxWidth?: MaxWidth;
  onScroll?: OnScrollCallback;
  onResize?: OnResizeCallback;
  onResizeStart?: OnResizeStartCallback;
  onResizeStop?: OnResizeStopCallback;
  onExpansionStateChanged?: OnExpansionStateChangedCallback;
  onExpandClick?: OnExpandCollapseClick;
  onCollapseClick?: OnExpandCollapseClick;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

const emptyFn = () => {};
const getMaxWidth = () => {
  return window.innerWidth;
};

export const FlushPanel = forwardRef<HTMLDivElement, FlushPanelProps>(
  (
    {
      anchor = "right",
      panels = [],
      maxWidth = getMaxWidth,
      onScroll = emptyFn,
      onResize = emptyFn,
      onResizeStart = emptyFn,
      onResizeStop = emptyFn,
      onExpansionStateChanged = emptyFn,
      onExpandClick = emptyFn,
      onCollapseClick = emptyFn,
      wrapperProps,
    },
    ref,
  ) => {
    const [panelsState, setPanelState, setSubPanelState] =
      useCollapsiblePanelState(panels);

    useCollapsiblePanelExpansionLayoutEffect(onResizeStop, panelsState);
    useToggleExpansionStateLayoutEffect(onExpansionStateChanged, panelsState);
    useResizeStopLayoutEffect(onResizeStop, panelsState);

    const panelTabsRef = useRef<HTMLDivElement>(null);
    const tabsPanelWidth = useTabsPanelWidth(panelTabsRef, panelsState);
    const flushPanelsContainer = (
      <FlushPanelsContainer
        anchor={anchor}
        panels={panels}
        panelsState={panelsState}
        maxWidth={maxWidth}
        setPanelState={setPanelState}
        setSubPanelState={setSubPanelState}
        onResizeStart={onResizeStart}
        onResize={onResize}
        onScroll={onScroll}
        onCollapseClick={onCollapseClick}
        tabsPanelWidth={tabsPanelWidth}
      />
    );
    return (
      <div ref={ref} {...wrapperProps}>
        {anchor === "right" && flushPanelsContainer}
        <CollapsibleFlushPanelTabs
          ref={panelTabsRef}
          panels={panels}
          anchor={anchor}
          setPanelState={setPanelState}
          setSubPanelState={setSubPanelState}
          panelsState={panelsState}
          onExpandClick={onExpandClick}
        />
        {anchor === "left" && flushPanelsContainer}
      </div>
    );
  },
);
