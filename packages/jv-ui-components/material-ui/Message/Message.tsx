import { forwardRef, ReactNode } from 'react';
import {
    Card as MuiCard, CardContent as MuiCardContent, CardHeader as MuiCardHeader, CardProps as MuiCardProps, CardContentProps as MuiCardContentProps, CardHeaderProps as MuiCardHeaderProps
} from '@mui/material';

// title is explicitly added in type of MuiCardHeaderProps to avoid lint error.
// It is fixed in version 5 of mui.
type CardProps = MuiCardProps & {
    isCardHeader?: boolean
    cardHeaderProps?: Omit<MuiCardHeaderProps, 'title'> & { isHeaderPadded?: boolean, title?: ReactNode},
    cardContentProps?: MuiCardContentProps & {isPadded?: boolean},
    type?: 'error' | 'warning'
}

export enum TypeToClass {
    error = 'jv-mMessageError',
    warning = 'jv-mMessageWarning'
}

export const Message = forwardRef<HTMLDivElement, CardProps>(({
    elevation = 0, type = 'error', cardHeaderProps = {}, isCardHeader = true, cardContentProps = {}, className = '', children, ...rest
}, ref) => {

    const {
        className: headerClassName = '', isHeaderPadded = true, classes: headerClasses = {}, ...restCardHeaderProps
    } = cardHeaderProps;
    const {
        avatar: avatarClass = '', content: contentClass = '', action: actionClass = '', ...restHeaderClasses
    } = headerClasses;
    const paddedHeaderClass = isHeaderPadded ? 'jv-mMessage-headerPadded' : '';

    const { className: contentClassName = '', isPadded = true, ...restCardContentProps } = cardContentProps;
    const paddedClass = isPadded ? 'jv-mMessage-bodyPadded' : '';

    return (
        <MuiCard ref={ref} className={`jv-mMessage ${TypeToClass[type]} ${className} mui`} elevation={elevation} {...rest}>
            { isCardHeader && (
                <MuiCardHeader
                    className={`jv-mMessage-header ${headerClassName} ${paddedHeaderClass} mui`}
                    classes={{
                        avatar: `jv-mMessage-header-icon ${avatarClass} mui`,
                        content: `jv-mMessage-header-title ${contentClass} mui`,
                        action: `jv-mMessage-header-action ${actionClass}  mui`,
                        ...restHeaderClasses
                    }}
                    {...restCardHeaderProps}
                />
            )}
            <MuiCardContent className={`jv-mMessage-body ${paddedClass} ${contentClassName} mui`} {...restCardContentProps}>
                {children}
            </MuiCardContent>
        </MuiCard>
    )
})
