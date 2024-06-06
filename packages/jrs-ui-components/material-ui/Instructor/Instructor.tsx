import React from 'react';
import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';

enum SizeToClass {
    large = 'jv-mInstructorLarge',
    small = 'jv-mInstructorSmall',
    medium = ''
}

export interface InstructorProps {
    size?: 'small' | 'large' | 'medium',
    label?: boolean,
    messageTitle?: string,
    messageDescription?: string,
    icon?: string,
    wrapperProps?: {
        className?: string
    }
}

export const Instructor = ({
    messageTitle, icon = 'message', size = 'medium', messageDescription, wrapperProps = {}
} : InstructorProps) => {
    const { className: wrapperClassName = '', ...restWrapperProps } = wrapperProps;
    return (
        <div className={`jv-mInstructor ${wrapperClassName} ${SizeToClass[size]} ${messageTitle ? '' : 'jv-mInstructorSimple'} mui`} {...restWrapperProps}>
            <div className="jv-mInstructor-wrapper mui">
                <Icon className="jv-mInstructor-icon" icon={icon} />
                { messageTitle && (
                    <Typography className="jv-mInstructor-title mui">
                        {messageTitle}
                    </Typography>
                )}

                <Typography className="jv-mInstructor-text mui">
                    {messageDescription}
                </Typography>

            </div>
        </div>
    )
}
