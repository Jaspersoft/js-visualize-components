import * as React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { IconButton } from '../IconButton/IconButton';
import { SubPanelSlots } from './collapsiblePanelTypes';

export interface SubPanelProps {
    id: string,
    label: string,
    slots?: SubPanelSlots,
    onClose: () => void,
    onScroll: (scrollPos: number) => void,
    scrollPos: number,
    children: React.ReactNode
}

export const SubPanel: React.FC<SubPanelProps> = ({
    id, label, children, slots = { }, onClose, onScroll, scrollPos
}) => {
    const { headerAction } = slots;
    const closeSubPanelLabel = 'Close sub panel';
    const contentRef = React.useRef<HTMLDivElement>(null);

    const [internalScrollPos, setInternalScrollPos] = React.useState(0);

    const handleScroll = (ev: React.UIEvent<HTMLDivElement>) => {
        const newScrollPos = (ev.target as HTMLDivElement).scrollTop;
        setInternalScrollPos(newScrollPos);
        if (newScrollPos !== scrollPos) {
            onScroll(newScrollPos)
        }
    }

    React.useLayoutEffect(() => {
        if (contentRef.current && scrollPos !== internalScrollPos) {
            contentRef.current.scrollTop = scrollPos;
            setInternalScrollPos(scrollPos);
        }
    }, [contentRef, internalScrollPos, scrollPos])

    return (
        <Card elevation={0}>
            <CardHeader
                className="jv-mPanel-section-header mui"
                classes={{ content: 'jv-mPanel-section-header-title mui' }}
                title={label}
                action={(
                    <>
                        {headerAction}
                        <IconButton
                            data-name={`${id}-collapse`}
                            icon="cancel"
                            variant="contained"
                            color="default"
                            aria-label={closeSubPanelLabel}
                            onClick={onClose}
                            size="large"
                        />
                    </>
                )}
                disableTypography
            />
            <CardContent ref={contentRef} component="div" onScroll={handleScroll}>{children}</CardContent>
        </Card>
    );
};
