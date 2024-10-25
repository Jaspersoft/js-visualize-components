/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { forwardRef } from "react";
import {
  Anchor,
  DIRECTION_CLASS,
  OnExpandCollapseClick,
  PanelDefinition,
} from "./collapsiblePanelTypes";
import {
  isPanelFullyExpanded,
  PanelsState,
  SetPanelState,
  SetSubPanelState,
} from "./useCollapsiblePanelState";
import { IconButton } from "../IconButton/IconButton";
import { TabsList } from "./TabsList";

export interface CollapsiblePanelTabsProps {
  anchor: Anchor;
  setPanelState: SetPanelState;
  setSubPanelState: SetSubPanelState;
  panels: PanelDefinition[];
  panelsState: PanelsState;
  onExpandClick: OnExpandCollapseClick;
}

export const CollapsiblePanelTabs = forwardRef<
  HTMLDivElement,
  CollapsiblePanelTabsProps
>(
  (
    {
      anchor,
      setPanelState,
      setSubPanelState,
      panels,
      panelsState,
      onExpandClick,
    },
    ref,
  ) => {
    const { panelsDirectionClass, panelDirectionClass } =
      DIRECTION_CLASS[anchor];
    const openPanelLabel = "Open panel";

    const handleExpandClick = (index: number, id: string) => {
      const result = onExpandClick({ type: "panel", id });
      if (typeof result === "undefined" || result) {
        setPanelState(index, true);
      }
    };

    return (
      <div
        className={`jv-mPanels ${panelsDirectionClass} jv-mPanelsMinimized jv-mPanelsStacked mui`}
        ref={ref}
      >
        {panels.map((panelDefinition, panelIndex) => {
          const isVisible = !isPanelFullyExpanded(panelIndex, panelsState);
          const panelState = panelsState[panelIndex];
          const { id } = panelState;

          return (
            isVisible && (
              <div
                className={`jv-mPanel ${panelDirectionClass} jv-mPanelMinimized mui`}
                key={id}
                data-name={`${id}-tabs`}
              >
                <div className="jv-mPanel-action mui">
                  <IconButton
                    data-name={`${id}-tabs-expand`}
                    aria-label={openPanelLabel}
                    icon={
                      anchor === "right" ? "caretLeftLarge" : "caretRightLarge"
                    }
                    size="small"
                    className="jv-mPanel-action-button"
                    onClick={() => handleExpandClick(panelIndex, id)}
                  />
                </div>
                <TabsList
                  panelIndex={panelIndex}
                  subPanels={panelDefinition.subPanels}
                  subPanelsState={panelState.subPanels}
                  setSubPanelState={setSubPanelState}
                  onExpandClick={onExpandClick}
                />
              </div>
            )
          );
        })}
      </div>
    );
  },
);
