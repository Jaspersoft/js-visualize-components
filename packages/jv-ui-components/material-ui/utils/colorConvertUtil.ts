const RGBA_REGEX = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
const THRESHOLD = 127.5;

export default {
  rgba2NoAlphaHex(color: string): string {
    const rgb = color.match(RGBA_REGEX) || [];
    const hexValue = "#";

    return [rgb[1], rgb[2], rgb[3]]
      .reduce((memo, val) => {
        const hex = `0${parseInt(val, 10).toString(16)}`.slice(-2);
        return memo + hex;
      }, hexValue)
      .toUpperCase();
  },
  isRgbTransparent: (rgb: string): boolean => {
    return rgb.replace(/\s/g, "").indexOf("0,0,0,0") !== -1;
  },
  isRgba: (rgb: string): boolean => {
    return RGBA_REGEX.test(rgb);
  },
  isColorDark: (color: string): boolean => {
    let colour, r, g, b;

    if (/^rgb/.test(color)) {
      colour = color.match(RGBA_REGEX) || [];

      r = parseInt(colour[1], 10);
      g = parseInt(colour[2], 10);
      b = parseInt(colour[3], 10);
    } else {
      colour = color.substr(1);

      r = parseInt(`${colour[0]}${colour[1]}`, 16);
      g = parseInt(`${colour[2]}${colour[3]}`, 16);
      b = parseInt(`${colour[4]}${colour[5]}`, 16);
    }

    const rgb = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return rgb < THRESHOLD;
  },
};
