import { ButtonProps, PropTypes } from '@mui/material';

export const SizeToClass: {[key in Required<ButtonProps>['size']]: string} = {
    large: 'jr-mButtonLarge',
    small: 'jr-mButtonSmall',
    medium: ''
}

export type ButtonColor = PropTypes.Color | 'error' | 'warning' | 'success' | 'info';

export const ColorToClass: {[key in ButtonColor]: string} = {
    inherit: '',
    default: '',
    success: '',
    info: '',
    secondary: 'jr-mButtonSecondary',
    primary: 'jr-mButtonPrimary',
    error: 'jr-mButtonError',
    warning: 'jr-mButtonWarning'
}

export const VariantToClassName: {[key in Required<ButtonProps>['variant']]: string} = {
    contained: 'jr-MuiButton-contained',
    text: 'jr-MuiButton-text',
    outlined: 'jr-MuiButton-outlined'
}
