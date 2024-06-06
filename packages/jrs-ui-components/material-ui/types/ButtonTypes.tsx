import { ButtonProps, PropTypes } from '@mui/material';

export const SizeToClass: {[key in Required<ButtonProps>['size']]: string} = {
    large: 'jv-mButtonLarge',
    small: 'jv-mButtonSmall',
    medium: ''
}

export type ButtonColor = PropTypes.Color | 'error' | 'warning' | 'success' | 'info';

export const ColorToClass: {[key in ButtonColor]: string} = {
    inherit: '',
    default: '',
    success: '',
    info: '',
    secondary: 'jv-mButtonSecondary',
    primary: 'jv-mButtonPrimary',
    error: 'jv-mButtonError',
    warning: 'jv-mButtonWarning'
}

export const VariantToClassName: {[key in Required<ButtonProps>['variant']]: string} = {
    contained: 'jv-MuiButton-contained',
    text: 'jv-MuiButton-text',
    outlined: 'jv-MuiButton-outlined'
}
