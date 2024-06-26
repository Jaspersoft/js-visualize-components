import { ClickAwayListener as MuiClickAwayListener, ClickAwayListenerProps as MuiClickAwayListenerProps } from '@mui/material';
import { FC } from 'react';

export type ClickAwayListenerProps = MuiClickAwayListenerProps;
export const ClickAwayListener: FC<ClickAwayListenerProps> = (props) => {
    const { onClickAway, ...rest } = props
    return (
        <MuiClickAwayListener
            onClickAway={onClickAway}
            {...rest}
        />
    )
}
