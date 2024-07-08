import { FC, ReactNode } from 'react';
import { Drawer } from '@mui/material';
import { IconButton } from '../IconButton/IconButton';
import { Anchor } from './collapsiblePanelTypes';

export interface SinglePanelProps {
    anchor: Anchor,
    className: string,
    id: string,
    onCollapse: () => void,
    children: ReactNode
}

export const SinglePanel: FC<SinglePanelProps> = (
    {
        onCollapse,
        anchor,
        className = '',
        id,
        children
    }
) => {
    const closePanelLabel = 'Close panel';
    return (
        <Drawer
            variant="persistent"
            anchor={anchor}
            open
            style={{ width: '100%', height: '100%' }}
            className={`mui jv-mPanel ${className}`}
            data-name={id}
        >
            <div className="jv-mPanel-action mui">
                <IconButton
                    data-name={`${id}-collapse`}
                    icon={(anchor === 'right') ? 'caretRightLarge' : 'caretLeftLarge'}
                    size="small"
                    className="jv-mPanel-action-button"
                    aria-label={closePanelLabel}
                    onClick={() => onCollapse()}
                />
            </div>
            {children}
        </Drawer>
    )
};
