import * as Core from "./core/BaseTerminal";

export class PTerminal extends Core.BaseTerminal {
  constructor(autoReset: boolean = false) {
    super(autoReset);
  }

  // Foreground colors
    get default(): this {
      return this._color(39);
    }
    get red(): this {
      return this._color(31);
    }
    get black(): this {
      return this._color(30);
    }
    get green(): this {
      return this._color(32);
    }
    get yellow(): this {
      return this._color(33);
    }
    get blue(): this {
      return this._color(34);
    }
    get magenta(): this {
      return this._color(35);
    }
    get cyan(): this {
      return this._color(36);
    }
    get lightGray(): this {
      return this._color(37);
    }
    get darkGray(): this {
      return this._color(90);
    }
    get lightRed(): this {
      return this._color(91);
    }
    get lightGreen(): this {
      return this._color(92);
    }
    get lightYellow(): this {
      return this._color(93);
    }
    get lightBlue(): this {
      return this._color(94);
    }
    get lightMagenta(): this {
      return this._color(95);
    }
    get lightCyan(): this {
      return this._color(96);
    }
    get white(): this {
      return this._color(97);
    }

    // Background colors
    get bgDefault(): this {
      return this._color(49);
    }
    get bgBlack(): this {
      return this._color(40);
    }
    get bgRed(): this {
      return this._color(41);
    }
    get bgGreen(): this {
      return this._color(42);
    }
    get bgYellow(): this {
      return this._color(43);
    }
    get bgBlue(): this {
      return this._color(44);
    }
    get bgMagenta(): this {
      return this._color(45);
    }
    get bgCyan(): this {
      return this._color(46);
    }
    get bgLightGray(): this {
      return this._color(47);
    }
    get bgDarkGray(): this {
      return this._color(100);
    }
    get bgLightRed(): this {
      return this._color(101);
    }
    get bgLightGreen(): this {
      return this._color(102);
    }
    get bgLightYellow(): this {
      return this._color(103);
    }
    get bgLightBlue(): this {
      return this._color(104);
    }
    get bgLightMagenta(): this {
      return this._color(105);
    }
    get bgLightCyan(): this {
      return this._color(106);
    }
    get bgWhite(): this {
      return this._color(107);
    }
}