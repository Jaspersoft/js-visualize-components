import * as React from 'react';

import { ColorResult } from 'react-color';
import { createPortal } from 'react-dom';
import colorConvertUtil from '../utils/colorConvertUtil';
import { AttachableColorPicker } from '../utils/AttachableColorPicker';

const SWATCH_LIGHT_CLASS = 'jv-mControl-launcher-swatchLight';
const TRANSPARENT_CLASS = `${SWATCH_LIGHT_CLASS} jv-mControl-launcher-swatchTransparent`;

const getSwatchLightClass = (color : string): string => {
    if (colorConvertUtil.isRgbTransparent(color)) {
        return TRANSPARENT_CLASS;
    }
    if (!colorConvertUtil.isColorDark(color)) {
        return SWATCH_LIGHT_CLASS;
    }
    return '';
};

interface ColorSampleProps {
    color?: string,
    allowTransparent?: boolean,
    onChange?: (color: string) => void,
    disabled?: boolean
}

export const ColorPickerSample: React.FC<ColorSampleProps> = ({
    color = '', onChange = () => {}, allowTransparent = true, disabled = false
}) => {
    const [visible, setVisible] = React.useState(false);
    const attachToRef = React.useRef<HTMLDivElement>(null);

    const style = {
        backgroundColor: color
    }

    const [colorPickerContainer] = React.useState(() => {
        return document.createElement('div');
    });

    React.useEffect(() => {
        colorPickerContainer.className = 'jv-jColorPickerWrapper';
        document.body.appendChild(colorPickerContainer);

        return () => colorPickerContainer.remove();
    }, [colorPickerContainer])

    let colorPicker: React.ReactElement;

    const handleColorChange = (colorResult: ColorResult) => {
        onChange(colorResult.hex)
    }

    // if (attachTo.current) {
    if (attachToRef.current && visible) {
        colorPicker = (
            <AttachableColorPicker
                padding={{ top: 0, left: 0 }}
                show={visible}
                color={color}
                showTransparentPreset={allowTransparent}
                onChangeComplete={handleColorChange}
                onHide={() => { setVisible(false) }}
                attachTo={attachToRef.current}
            />
        )
    } else {
        colorPicker = <></>;
    }

    const handleClick = () => {
        if (!disabled) {
            setVisible(!visible);
        }
    }

    return (
        <>
            <div
                ref={attachToRef}
                className="jv-mControl-launcher mui"
                onClick={handleClick}
                role="button"
                tabIndex={-1}
                aria-label="button"
            >
                <div style={style} className={`jv-mControl-launcher-swatch mui ${getSwatchLightClass(color)}`} />
            </div>
            {createPortal(colorPicker, colorPickerContainer)}
        </>
    )
}