import * as React from 'react';
import { Enable, HandleClassName, Resizable } from 're-resizable';
import {
    Anchor, DIRECTION_CLASS,
    MaxWidth, OnExpandCollapseClick,
    OnResizeCallback,
    OnResizeStartCallback, OnScrollCallback,
    PanelDefinition
} from '../CollapsiblePanel/collapsiblePanelTypes';
import {
    isPanelExpanded, PANEL_MARGIN_RIGHT,
    PanelsState, PanelState,
    SetPanelState,
    SetSubPanelState
} from '../CollapsiblePanel/useCollapsiblePanelState';
import { useMaxWidthState } from '../CollapsiblePanel/useMaxWidthState';
import { SingleFlushPanel } from './SingleFlushPanel';

export interface FlushPanelsContainerProps {
    anchor: Anchor,
    panels: PanelDefinition[],
    panelsState: PanelsState,
    setPanelState: SetPanelState,
    maxWidth: MaxWidth,
    // eslint-disable-next-line react/no-unused-prop-types
    setSubPanelState: SetSubPanelState,
    onResizeStart: OnResizeStartCallback,
    onResize: OnResizeCallback
    // eslint-disable-next-line react/no-unused-prop-types
    onScroll: OnScrollCallback
    onCollapseClick: OnExpandCollapseClick,
    tabsPanelWidth: number
}

const ResizableEnableByAnchor: { [key in Anchor]: Enable } = {
    left: { right: true },
    right: { left: true }
};

const ResizeDirectionClasses: { [key in Anchor]: HandleClassName } = {
    right: { left: 'jv-mPanel-resizerHorizontal mui' },
    left: { right: '' }
};

interface ResizableContainerProps {
    anchor: Anchor,
    panelState: PanelState,
    onResize: OnResizeCallback,
    onResizeStart: OnResizeStartCallback,
    setPanelState: SetPanelState,
    maxWidth: number,
    panelIndex: number,
    children?: React.ReactNode
}

const ResizableContainer: React.FC<ResizableContainerProps> = ({
    children, anchor, panelState, onResize, onResizeStart, setPanelState, panelIndex, maxWidth
}) => {
    return (
        <Resizable
            enable={ResizableEnableByAnchor[anchor]}
            handleClasses={ResizeDirectionClasses[anchor]}
            size={{
                width: panelState.width,
                height: '100%'
            }}
            minWidth={panelState.minWidth}
            maxWidth={maxWidth}
            style={{ marginRight: `${PANEL_MARGIN_RIGHT}px` }}
            onResize={(event, direction, elementRef, delta) => onResize({
                type: 'panel',
                id: panelState.id,
                delta: delta.width
            })}
            onResizeStart={() => onResizeStart({
                type: 'panel',
                id: panelState.id
            })}
            onResizeStop={(event, direction, elementRef, delta) => {
                setPanelState(panelIndex, undefined, panelState.width + delta.width);
            }}
        >
            {children}
        </Resizable>
    )
}

export const FlushPanelsContainer: React.FC<FlushPanelsContainerProps> = ({
    panels,
    panelsState,
    setPanelState,
    maxWidth,
    anchor,
    onResizeStart,
    onResize,
    onCollapseClick,
    tabsPanelWidth
}) => {
    const { panelsDirectionClass, panelDirectionClass } = DIRECTION_CLASS[anchor];

    const handlePanelCollapse = (index: number, id: string) => {
        const result = onCollapseClick({ type: 'panel', id })
        if (typeof result === 'undefined' || result) {
            setPanelState(index, false)
        }
    }

    const panelMaxWidth = useMaxWidthState(maxWidth, tabsPanelWidth, panelsState);
    return (
        <div className={`jv-mPanels  ${panelsDirectionClass} mui`}>
            {
                panels.map((panelItem, panelIndex) => {
                    const isOpen = isPanelExpanded(panelIndex, panelsState);
                    const panelState = panelsState[panelIndex];
                    return isOpen && (
                        <ResizableContainer
                            key={panelState.id}
                            onResize={onResize}
                            onResizeStart={onResizeStart}
                            panelIndex={panelIndex}
                            panelState={panelState}
                            anchor={anchor}
                            setPanelState={setPanelState}
                            maxWidth={panelMaxWidth[panelIndex].maxWidth}
                        >
                            <SingleFlushPanel
                                className={`${panelDirectionClass}`}
                                anchor={anchor}
                                id={panelState.id}
                                onCollapse={() => handlePanelCollapse(panelIndex, panelState.id)}
                                label={panelItem.subPanels[0].label}
                                content={panelItem.subPanels[0].content}
                            />

                        </ResizableContainer>
                    )
                })
            }

        </div>

    )
}
