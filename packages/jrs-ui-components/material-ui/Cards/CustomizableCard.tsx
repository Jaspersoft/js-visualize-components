import React, { forwardRef } from 'react';
import {
    Card as MuiCard, CardContent as MuiCardContent, CardHeader as MuiCardHeader, CardProps as MuiCardProps, CardContentProps as MuiCardContentProps, CardHeaderProps as MuiCardHeaderProps
} from '@mui/material';

type CardProps = MuiCardProps & {
    cardOverflow?: boolean
    isLastOrSingleCard?: boolean
    isCardHeader?: boolean
    cardHeaderProps?: MuiCardHeaderProps,
    cardContentProps?: MuiCardContentProps,
    paddedCardBodyContent?: React.ReactNode
}

export const CustomizableCard = forwardRef<HTMLDivElement, CardProps>(({
    isCardHeader = false, isLastOrSingleCard = false, cardOverflow = false, paddedCardBodyContent, variant = 'elevation', className: cardClassname = '', elevation = 2, children, cardHeaderProps = {}, cardContentProps = {}, ...rest
}, ref) => {

    const {
        title = '', className: cardHeaderClassName = '', classes: cardHeaderClasses = '', ...restCardHeaderProps
    } = cardHeaderProps;

    const overflowClass = cardOverflow ? 'jv-uOverflow-show' : '';
    const marginClass = isLastOrSingleCard ? '' : 'jv-uMargin-b-08';
    return (
        <MuiCard ref={ref} className={`jv-mCard ${marginClass} ${overflowClass} ${cardClassname} mui`} variant={variant} elevation={elevation} {...rest}>
            <MuiCardContent {...cardContentProps}>
                { isCardHeader && (
                    <MuiCardHeader
                        className={`jv-mCard-header jv-mCard-headerLarge  ${cardHeaderClassName} mui`}
                        classes={{ title: `jv-mCard-header-title ${cardHeaderClasses} mui` }}
                        title={title}
                        {...restCardHeaderProps}
                    />
                )}
                { paddedCardBodyContent && (
                    <div className="jv-mCard-bodyPadded jv-mCard-body mui"> {paddedCardBodyContent} </div>
                )}
                { children && (
                    <div className="jv-mCard-body mui">
                        {children}
                    </div>
                ) }
            </MuiCardContent>
        </MuiCard>
    )
})
