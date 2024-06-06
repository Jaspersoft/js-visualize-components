import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { OnExpandCollapseClick, SubPanelDefinition } from '../CollapsiblePanel/collapsiblePanelTypes';
import { SetSubPanelState, SubPanelState } from '../CollapsiblePanel/useCollapsiblePanelState';
import i18nLabel from '../utils/i18nLabel';

export interface TabsListFlushProps {
    panelIndex: number,
    subPanels: SubPanelDefinition[],
    subPanelsState: SubPanelState[],
    setSubPanelState: SetSubPanelState,
    onExpandClick: OnExpandCollapseClick
}

export const TabsListFlush: FC<TabsListFlushProps> = ({
    subPanelsState,
    panelIndex,
    subPanels,
    setSubPanelState,
    onExpandClick
}) => {
    const openSubPanelLabel = i18nLabel('materialUi.component.collapsiblePanel.open');

    const handleExpandClick = (index: number, id: string) => {
        const result = onExpandClick({ type: 'subpanel', id })
        if (typeof result === 'undefined' || result) {
            setSubPanelState(panelIndex, index, true)
        }
    }

    return (
        <>
            {
                subPanels.map((subPanelDefinition, subPanelIndex) => {
                    const subPanelState = subPanelsState[subPanelIndex];
                    const isTabVisible = !subPanelState.open;
                    return isTabVisible && (

                        <div
                            key={subPanelDefinition.id}
                            data-name={`${subPanelState.id}-tab-expand`}
                            onClick={() => handleExpandClick(subPanelIndex, subPanelState.id)}
                            aria-label={openSubPanelLabel}
                            role="button"
                            tabIndex={0}
                        >

                            <Typography
                                className="jv-mText jv-mPanel-header-title mui"
                            >
                                {subPanelDefinition.label}
                            </Typography>
                        </div>
                    )
                })
            }
        </>

    )
}
