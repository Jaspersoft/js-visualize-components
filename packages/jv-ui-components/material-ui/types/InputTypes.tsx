export const INLINE_CLASS = 'jv-mInputInline';

export const NO_LABEL_CLASS = 'jv-mInputNolabel';

export const LABEL_CONTAINED = 'jv-mInputContained';

export enum SizeToClass {
    large = 'jv-mInputLarge',
    small = 'jv-mInputSmall',
    medium = ''
}

export enum WidthToClass {
    narrow = 'jv-mInputNarrow',
    normal = ''
}

export type InputSize = keyof typeof SizeToClass;
export type InputWidth = keyof typeof WidthToClass;
