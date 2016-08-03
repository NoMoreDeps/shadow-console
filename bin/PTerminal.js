"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Core = require("./core/BaseTerminal");
var PTerminal = (function (_super) {
    __extends(PTerminal, _super);
    function PTerminal(autoReset) {
        if (autoReset === void 0) { autoReset = false; }
        _super.call(this, autoReset);
    }
    Object.defineProperty(PTerminal.prototype, "default", {
        // Foreground colors
        get: function () {
            return this._color(39);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "red", {
        get: function () {
            return this._color(31);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "black", {
        get: function () {
            return this._color(30);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "green", {
        get: function () {
            return this._color(32);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "yellow", {
        get: function () {
            return this._color(33);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "blue", {
        get: function () {
            return this._color(34);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "magenta", {
        get: function () {
            return this._color(35);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "cyan", {
        get: function () {
            return this._color(36);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightGray", {
        get: function () {
            return this._color(37);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "darkGray", {
        get: function () {
            return this._color(90);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightRed", {
        get: function () {
            return this._color(91);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightGreen", {
        get: function () {
            return this._color(92);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightYellow", {
        get: function () {
            return this._color(93);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightBlue", {
        get: function () {
            return this._color(94);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightMagenta", {
        get: function () {
            return this._color(95);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "lightCyan", {
        get: function () {
            return this._color(96);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "white", {
        get: function () {
            return this._color(97);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgDefault", {
        // Background colors
        get: function () {
            return this._color(49);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgBlack", {
        get: function () {
            return this._color(40);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgRed", {
        get: function () {
            return this._color(41);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgGreen", {
        get: function () {
            return this._color(42);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgYellow", {
        get: function () {
            return this._color(43);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgBlue", {
        get: function () {
            return this._color(44);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgMagenta", {
        get: function () {
            return this._color(45);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgCyan", {
        get: function () {
            return this._color(46);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightGray", {
        get: function () {
            return this._color(47);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgDarkGray", {
        get: function () {
            return this._color(100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightRed", {
        get: function () {
            return this._color(101);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightGreen", {
        get: function () {
            return this._color(102);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightYellow", {
        get: function () {
            return this._color(103);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightBlue", {
        get: function () {
            return this._color(104);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightMagenta", {
        get: function () {
            return this._color(105);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgLightCyan", {
        get: function () {
            return this._color(106);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PTerminal.prototype, "bgWhite", {
        get: function () {
            return this._color(107);
        },
        enumerable: true,
        configurable: true
    });
    return PTerminal;
}(Core.BaseTerminal));
exports.PTerminal = PTerminal;
