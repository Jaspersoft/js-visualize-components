import React, { FC } from 'react'
import { ClickAwayListener as MuiClickAwayListener, ClickAwayListenerProps as MuiClickAwayListenerProps } from '@mui/material';

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
