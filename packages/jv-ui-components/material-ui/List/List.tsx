import * as React from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export type ListProps = MuiListProps & {
    component?: React.ElementType<any>,
    isBulleted?: boolean
};
export const List = React.forwardRef<HTMLUListElement, ListProps>(({
    className, component = 'ul', isBulleted = false, ...rest
}, ref) => {
    const bulletClass = isBulleted ? 'jv-mListBulleted' : '';
    return (
        <MuiList
            ref={ref}
            component={component}
            className={`${className} ${bulletClass}  mui`}
            {...rest}
        />
    )
})
