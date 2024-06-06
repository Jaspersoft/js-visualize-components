export type IconSize = 'small' | 'medium' | 'large';

export const SizeToClass: {[key in IconSize]: string} = {
    small: 'jv-mIconSmall',
    medium: '',
    large: 'jv-mIconLarge'
}
