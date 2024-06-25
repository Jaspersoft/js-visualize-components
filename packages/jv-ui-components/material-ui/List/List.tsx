import { ElementType, forwardRef } from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export type ListProps = MuiListProps & {
    component?: ElementType<any>,
    isBulleted?: boolean
};
export const List = forwardRef<HTMLUListElement, ListProps>(({
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
