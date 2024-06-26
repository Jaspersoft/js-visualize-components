import { FC, ReactNode } from 'react';
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
            className={`jv-mPanel jv-mPanelFlush mui ${className}`}
            data-name={id}
        >
            <div className="jv-mPanel-header mui">

                {anchor === 'right' && <p className="jv-MuiTypography-root jv-mText jv-mPanel-header-title mui jv-MuiTypography-body1">{label}</p>}
                <div className="jv-mPanel-header-action mui">
                    <IconButton
                        icon={iconDirection}
                        onClick={onCollapse}
                        aria-label={closePanelLabel}
                        className="jv-mPanel-action-button jv-mButtonSmall"
                        size="large"
                    />
                </div>
                {anchor === 'left' && <p className="jv-MuiTypography-root jv-mText jv-mPanel-header-title mui jv-MuiTypography-body1">{label}</p>}

            </div>
            <div className="jv-mPanel-body mui">
                {content}
            </div>

        </Drawer>
    );
};
