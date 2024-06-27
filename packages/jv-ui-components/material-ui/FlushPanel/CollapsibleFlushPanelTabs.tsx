import { forwardRef } from 'react';
import { IconButton } from '../IconButton/IconButton';
import {
    Anchor, DIRECTION_CLASS,
    OnExpandCollapseClick,
    PanelDefinition
} from '../CollapsiblePanel/collapsiblePanelTypes';
import {
    isPanelFullyExpanded,
    PanelsState,
    SetPanelState,
    SetSubPanelState
} from '../CollapsiblePanel/useCollapsiblePanelState';
import i18nLabel from '../utils/i18nLabel';
import { TabsListFlush } from './TabsListFlush';

export interface CollapsibleFlushPanelTabsProps {
    anchor: Anchor,
    setPanelState: SetPanelState
    setSubPanelState: SetSubPanelState
    panels: PanelDefinition[],
    panelsState: PanelsState,
    onExpandClick: OnExpandCollapseClick
}

export const CollapsibleFlushPanelTabs = forwardRef<HTMLDivElement, CollapsibleFlushPanelTabsProps>(({
    anchor,
    setPanelState,
    setSubPanelState,
    panels,
    panelsState,
    onExpandClick
}, ref) => {

    const { panelsDirectionClass, panelDirectionClass } = DIRECTION_CLASS[anchor];
    const iconDirection = anchor === 'left' ? 'caretRightLarge' : 'caretLeftLarge'
    const closePanelLabel = i18nLabel('materialUi.component.collapsiblePanel.close');

    const handleExpandClick = (index: number, id: string) => {
        const result = onExpandClick({ type: 'panel', id })
        if (typeof result === 'undefined' || result) {
            setPanelState(index, true)
        }
    }

    return (
        <div className={`jv-mPanels ${panelsDirectionClass} jv-mPanelsMinimized jv-mPanelsStacked mui`} ref={ref}>
            {
                panels.map((panelDefinition, panelIndex) => {
                    const isVisible = !isPanelFullyExpanded(panelIndex, panelsState);
                    const panelState = panelsState[panelIndex];
                    const { id } = panelState;

                    return isVisible && (
                        <div
                            className={`jv-mPanel ${panelDirectionClass} jv-mPanelMinimized mui`}
                            key={id}
                            data-name={`${id}-tabs`}
                        >
                            <div className="jv-mPanel-header mui">
                                <div className="jv-mPanel-header-action mui">
                                    <IconButton
                                        onClick={() => handleExpandClick(panelIndex, id)}
                                        aria-label={closePanelLabel}
                                        className="jv-mPanel-action-button jv-mButton jv-mButtonSmall mui"
                                        size="large"
                                        icon={iconDirection}
                                    />
                                </div>

                                <TabsListFlush
                                    panelIndex={panelIndex}
                                    subPanels={panelDefinition.subPanels}
                                    subPanelsState={panelState.subPanels}
                                    setSubPanelState={setSubPanelState}
                                    onExpandClick={onExpandClick}
                                />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
})
