import * as React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { OnExpandCollapseClick, SubPanelDefinition } from './collapsiblePanelTypes';
import { SetSubPanelState, SubPanelState } from './useCollapsiblePanelState';

export interface TabsListProps {
    panelIndex: number,
    subPanels: SubPanelDefinition[],
    subPanelsState: SubPanelState[],
    setSubPanelState: SetSubPanelState,
    onExpandClick: OnExpandCollapseClick
}

export const TabsList: React.FC<TabsListProps> = ({
    subPanelsState, panelIndex, subPanels, setSubPanelState, onExpandClick
}) => {
    const openSubPanelLabel = 'Open sub panel';

    const handleExpandClick = (index: number, id: string) => {
        const result = onExpandClick({ type: 'subpanel', id })
        if (typeof result === 'undefined' || result) {
            setSubPanelState(panelIndex, index, true)
        }
    }

    return (
        <List
            disablePadding
            className="jv-mPanel-sections mui"
            component="ul"
        >
            {
                subPanels.map((subPanelDefinition, subPanelIndex) => {
                    const subPanelState = subPanelsState[subPanelIndex];
                    const isTabVisible = !subPanelState.open;

                    return isTabVisible && (
                        <ListItem
                            disableGutters
                            className="jv-mPanel-section mui"
                            component="li"
                            key={subPanelState.id}
                            data-name={`${subPanelState.id}-tab`}
                        >
                            <Button
                                data-name={`${subPanelState.id}-tab-expand`}
                                classes={{ root: 'jv-mPanel-section-action mui' }}
                                onClick={() => handleExpandClick(subPanelIndex, subPanelState.id)}
                                aria-label={openSubPanelLabel}
                            >
                                <span className="jv-MuiButton-label jv-mButton-label mui"> {subPanelDefinition.label}</span>
                            </Button>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
