import React, { forwardRef } from 'react';
import {
    Card as MuiCard, CardContent as MuiCardContent, CardHeader as MuiCardHeader, CardProps as MuiCardProps, CardContentProps as MuiCardContentProps, CardHeaderProps as MuiCardHeaderProps
} from '@mui/material';

// title is explicitly added in type of MuiCardHeaderProps to avoid lint error.
// It is fixed in version 5 of mui.
type CardProps = MuiCardProps & {
    isCardHeader?: boolean
    cardHeaderProps?: Omit<MuiCardHeaderProps, 'title'> & { isHeaderPadded?: boolean, title?: React.ReactNode},
    cardContentProps?: MuiCardContentProps & {isPadded?: boolean},
    type?: 'error' | 'warning'
}

export enum TypeToClass {
    error = 'jr-mMessageError',
    warning = 'jr-mMessageWarning'
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
    const paddedHeaderClass = isHeaderPadded ? 'jr-mMessage-headerPadded' : '';

    const { className: contentClassName = '', isPadded = true, ...restCardContentProps } = cardContentProps;
    const paddedClass = isPadded ? 'jr-mMessage-bodyPadded' : '';

    return (
        <MuiCard ref={ref} className={`jr-mMessage ${TypeToClass[type]} ${className} mui`} elevation={elevation} {...rest}>
            { isCardHeader && (
                <MuiCardHeader
                    className={`jr-mMessage-header ${headerClassName} ${paddedHeaderClass} mui`}
                    classes={{
                        avatar: `jr-mMessage-header-icon ${avatarClass} mui`,
                        content: `jr-mMessage-header-title ${contentClass} mui`,
                        action: `jr-mMessage-header-action ${actionClass}  mui`,
                        ...restHeaderClasses
                    }}
                    {...restCardHeaderProps}
                />
            )}
            <MuiCardContent className={`jr-mMessage-body ${paddedClass} ${contentClassName} mui`} {...restCardContentProps}>
                {children}
            </MuiCardContent>
        </MuiCard>
    )
})
