import React, { FC, ReactNode } from 'react';
import { Drawer } from '@mui/material';
import { IconButton } from '../IconButton/IconButton'
import { Anchor } from '../CollapsiblePanel/collapsiblePanelTypes';
import i18nLabel from '../utils/i18nLabel';

export interface SingleFlushPanelProps {
    anchor: Anchor,
    className: string,
    id: string,
    onCollapse: () => void,
    label: string
    content?: ReactNode
}

export const SingleFlushPanel: FC<SingleFlushPanelProps> = (
    {
        onCollapse,
        anchor,
        className = '',
        id,
        label,
        content
    }
) => {
    const closePanelLabel = i18nLabel('materialUi.component.collapsiblePanel.close');
    const iconDirection = anchor === 'right' ? 'caretRightLarge' : 'caretLeftLarge'

    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open
            style={{ width: '100%', height: '100%' }}
            className={`jr-mPanel jr-mPanelFlush mui ${className}`}
            data-name={id}
        >
            <div className="jr-mPanel-header mui">

                {anchor === 'right' && <p className="jr-MuiTypography-root jr-mText jr-mPanel-header-title mui jr-MuiTypography-body1">{label}</p>}
                <div className="jr-mPanel-header-action mui">
                    <IconButton
                        icon={iconDirection}
                        onClick={onCollapse}
                        aria-label={closePanelLabel}
                        className="jr-mPanel-action-button jr-mButtonSmall"
                        size="large"
                    />
                </div>
                {anchor === 'left' && <p className="jr-MuiTypography-root jr-mText jr-mPanel-header-title mui jr-MuiTypography-body1">{label}</p>}

            </div>
            <div className="jr-mPanel-body mui">
                {content}
            </div>

        </Drawer>
    );
};
