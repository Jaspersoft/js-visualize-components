import {
  ComponentType,
  Component,
  createRef,
  RefObject,
  CSSProperties,
} from "react";
import { ColorResult, SketchPicker, SketchPickerProps } from "react-color";
// import positionUtil from '../../base/util/attachableComponentPositionUtil';

import Colors from "./enum/colors";

const getPresetColors = (showTransparentPreset: boolean): string[] => {
  let presetColors = [
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
  ];

  if (showTransparentPreset) {
    presetColors = presetColors.concat([Colors.TRANSPARENT]);
  }

  return presetColors;
};

export interface ColorPickerProps {
  padding: { top: number; left: number };
  show: boolean;
  color: string;
  disableAlpha?: boolean;
  showTransparentPreset?: boolean;
  onChangeComplete(color: ColorResult): void;
  onHide(): void;
  attachTo: HTMLElement;
}

interface ColorPickerPropsExtended extends ColorPickerProps {
  ColorPicker: ComponentType<SketchPickerProps>;
  doc: Document;
}

interface ColorPickerState {
  disableAlpha: boolean;
  showTransparentPreset: boolean;
}

class ColorPickerWithAbilityToAttach extends Component<
  ColorPickerPropsExtended,
  ColorPickerState
> {
  constructor(props: ColorPickerPropsExtended) {
    super(props);

    const { disableAlpha, showTransparentPreset } = props;

    this.state = {
      disableAlpha: typeof disableAlpha === "undefined" ? true : disableAlpha,
      showTransparentPreset:
        typeof showTransparentPreset === "undefined"
          ? true
          : showTransparentPreset,
    };

    this.divRef = createRef<HTMLDivElement>();

    this.boundOnDocumentMousedown = this.onDocumentMousedown.bind(this);
  }

  componentDidMount(): void {
    this.forceUpdate();
  }

  componentDidUpdate() {
    this.props.doc.removeEventListener(
      "mousedown",
      this.boundOnDocumentMousedown,
    );

    if (this.props.show && this.divRef.current) {
      this.props.doc.addEventListener(
        "mousedown",
        this.boundOnDocumentMousedown,
      );
    }
  }

  componentWillUnmount(): void {
    this.props.doc.removeEventListener(
      "mousedown",
      this.boundOnDocumentMousedown,
    );
  }

  onDocumentMousedown(e: Event) {
    const colorPickerEl = this.divRef.current;
    const mouseDownTarget = e.target as HTMLElement;
    const { attachTo } = this.props;

    if (colorPickerEl) {
      if (
        !colorPickerEl.contains(mouseDownTarget) &&
        !colorPickerEl.isEqualNode(mouseDownTarget) &&
        !attachTo.contains(mouseDownTarget) &&
        !attachTo.isEqualNode(mouseDownTarget)
      ) {
        this.props.onHide();
      }
    }
  }

  private readonly divRef: RefObject<HTMLDivElement>;

  private readonly boundOnDocumentMousedown: (e: Event) => void;

  render() {
    const {
      // @ts-ignore
      show,
      color,
      attachTo,
      padding,
      onChangeComplete,
      ColorPicker,
    } = this.props;

    const { disableAlpha, showTransparentPreset } = this.state;

    let position = {
      top: 0,
      left: 0,
    };

    // if (this.divRef.current) {
    //     position = positionUtil
    //         .getPosition(attachTo, padding, this.divRef.current);
    // }

    const style: CSSProperties = {
      position: "absolute",
      zIndex: 9000,
      top: `${position.top}px`,
      left: `${position.left}px`,
      visibility: show && this.divRef.current ? "visible" : "hidden",
    };

    return (
      <div style={style} ref={this.divRef}>
        <ColorPicker
          color={color}
          disableAlpha={disableAlpha}
          onChangeComplete={onChangeComplete}
          presetColors={getPresetColors(showTransparentPreset)}
        />
      </div>
    );
  }
}

const withAbilityToAttach = (
  ColorPicker: ComponentType<SketchPickerProps>,
  doc: Document,
): ComponentType<ColorPickerProps> => {
  return (props: ColorPickerProps) => {
    const extendedProps = {
      ...props,
      ColorPicker,
      doc,
    };

    return <ColorPickerWithAbilityToAttach {...extendedProps} />;
  };
};

const AttachableColorPicker = withAbilityToAttach(SketchPicker, document);

export { withAbilityToAttach, AttachableColorPicker };
