import {toStringType, BaseTerminal} from "./core/BaseTerminal";

export class FTerminal extends BaseTerminal {
  constructor(autoReset: boolean = false) {
    super(autoReset);
  }

  // Foreground colors
    default(text: toStringType): this {
      return this._color(39).text(text);
    }
    red(text?: toStringType): this {
      return this._color(31).text(text);
    }
    black(text?: toStringType): this {
      return this._color(30).text(text);
    }
    green(text?: toStringType): this {
      return this._color(32).text(text);
    }
    yellow(text?: toStringType): this {
      return this._color(33).text(text);
    }
    blue(text?: toStringType): this {
      return this._color(34).text(text);
    }
    magenta(text?: toStringType): this {
      return this._color(35).text(text);
    }
    cyan(text?: toStringType): this {
      return this._color(36).text(text);
    }
    lightGray(text?: toStringType): this {
      return this._color(37).text(text);
    }
    darkGray(text?: toStringType): this {
      return this._color(90).text(text);
    }
    lightRed(text?: toStringType): this {
      return this._color(91).text(text);
    }
    lightGreen(text?: toStringType): this {
      return this._color(92).text(text);
    }
    lightYellow(text?: toStringType): this {
      return this._color(93).text(text);
    }
    lightBlue(text?: toStringType): this {
      return this._color(94).text(text);
    }
    lightMagenta(text?: toStringType): this {
      return this._color(95).text(text);
    }
    lightCyan(text?: toStringType): this {
      return this._color(96).text(text);
    }
    white(text?: toStringType): this {
      return this._color(97).text(text);
    }

    // Background colors
    bgDefault(text?: toStringType): this {
      return this._color(49).text(text);
    }
    bgBlack(text?: toStringType): this {
      return this._color(40).text(text);
    }
    bgRed(text?: toStringType): this {
      return this._color(41).text(text);
    }
    bgGreen(text?: toStringType): this {
      return this._color(42).text(text);
    }
    bgYellow(text?: toStringType): this {
      return this._color(43).text(text);
    }
    bgBlue(text?: toStringType): this {
      return this._color(44).text(text);
    }
    bgMagenta(text?: toStringType): this {
      return this._color(45).text(text);
    }
    bgCyan(text?: toStringType): this {
      return this._color(46).text(text);
    }
    bgLightGray(text?: toStringType): this {
      return this._color(47).text(text);
    }
    bgDarkGray(text?: toStringType): this {
      return this._color(100).text(text);
    }
    bgLightRed(text?: toStringType): this {
      return this._color(101).text(text);
    }
    bgLightGreen(text?: toStringType): this {
      return this._color(102).text(text);
    }
    bgLightYellow(text?: toStringType): this {
      return this._color(103).text(text);
    }
    bgLightBlue(text?: toStringType): this {
      return this._color(104).text(text);
    }
    bgLightMagenta(text?: toStringType): this { 
      return this._color(105).text(text);
    }
    bgLightCyan(text?: toStringType): this {
      return this._color(106).text(text);
    }
    bgWhite(text?: toStringType): this {
      return this._color(107).text(text);
    }
}