import { BaseTerminal}           from "./core/BaseTerminal"  ;
import { IColorTerminalDelegate, Styles} from "../src/core/Constant" ;
import { 
  BgColor16Type    , 
  Color16Type      , 
  Color16          , 
  ForeColor        , 
  BackColor        , 
  endingForeColor  , 
  IColor16Terminal , 
  endingBackColor 
} from "./core/Constant";

type IColorTerminal<T> = {
  [key in keyof Color16Type] : T;
}

type IBgColorTerminal<T> = {
  [key in keyof BgColor16Type] : T;
}

export class Terminal extends BaseTerminal implements IColor16Terminal<Terminal>{
  red            : IColorTerminalDelegate<Terminal> ;
  black          : IColorTerminalDelegate<Terminal> ;
  green          : IColorTerminalDelegate<Terminal> ;
  yellow         : IColorTerminalDelegate<Terminal> ;
  blue           : IColorTerminalDelegate<Terminal> ;
  magenta        : IColorTerminalDelegate<Terminal> ;
  cyan           : IColorTerminalDelegate<Terminal> ;
  lightGray      : IColorTerminalDelegate<Terminal> ;
  darkGray       : IColorTerminalDelegate<Terminal> ;
  lightRed       : IColorTerminalDelegate<Terminal> ;
  lightGreen     : IColorTerminalDelegate<Terminal> ;
  lightYellow    : IColorTerminalDelegate<Terminal> ;
  lightBlue      : IColorTerminalDelegate<Terminal> ;
  lightMagenta   : IColorTerminalDelegate<Terminal> ;
  lightCyan      : IColorTerminalDelegate<Terminal> ;

  white          : IColorTerminalDelegate<Terminal> ;
  bgRed          : IColorTerminalDelegate<Terminal> ;
  bgBlack        : IColorTerminalDelegate<Terminal> ;
  bgGreen        : IColorTerminalDelegate<Terminal> ;
  bgYellow       : IColorTerminalDelegate<Terminal> ;
  bgBlue         : IColorTerminalDelegate<Terminal> ;
  bgMagenta      : IColorTerminalDelegate<Terminal> ;
  bgCyan         : IColorTerminalDelegate<Terminal> ;
  bgLightGray    : IColorTerminalDelegate<Terminal> ;
  bgDarkGray     : IColorTerminalDelegate<Terminal> ;
  bgLightRed     : IColorTerminalDelegate<Terminal> ;
  bgLightGreen   : IColorTerminalDelegate<Terminal> ;
  bgLightYellow  : IColorTerminalDelegate<Terminal> ;
  bgLightBlue    : IColorTerminalDelegate<Terminal> ;
  bgLightMagenta : IColorTerminalDelegate<Terminal> ;
  bgLightCyan    : IColorTerminalDelegate<Terminal> ;
  bgWhite        : IColorTerminalDelegate<Terminal> ;

  bold           : IColorTerminalDelegate<Terminal> ;
  dim            : IColorTerminalDelegate<Terminal> ;
  italic         : IColorTerminalDelegate<Terminal> ;
  underline      : IColorTerminalDelegate<Terminal> ;
  inverse        : IColorTerminalDelegate<Terminal> ;
  hidden         : IColorTerminalDelegate<Terminal> ;
  strikethrough  : IColorTerminalDelegate<Terminal> ;

  drawColoredText(text: string, foreColor: number = void 0, backColor: number = void 0): this {
    foreColor && this._color(foreColor);
    backColor && this._color(backColor);
    this.text(text);
    backColor && this._color(endingBackColor);
    foreColor && this._color(endingForeColor);
    return this;
  }

  getAndClearBuffer() {
    const res = this._buffer;
    this.clearBuffer();
    return res;
  }

  constructor() {
    super();
  }
}

/**
 * Mixin for foreground and background colors
 */
for(let i in Color16) {
  Terminal.prototype[i] = function(text: string = "") {
    return text ===  "" ? this : (this as Terminal)
      ["_color"](ForeColor[Color16[i]])
      .text(text)
      ["_color"](endingForeColor);
  }
  Terminal.prototype[`bg${i}`] = function(text: string = "") {
    return  text ===  "" ? this : (this as Terminal)
      ["_color"](BackColor[Color16[i]])
      .text(text)
      ["_color"](endingBackColor);
  }
}

/**
 * Mixin for styles
 */
for(let i in Styles) {
  Terminal.prototype[i] = function(text: string = "") {
    return  text ===  "" ? this : (this as Terminal)
      ["_color"](Styles[i][0])
      .text(text)
      ["_color"](Styles[i][1]);
  }
}