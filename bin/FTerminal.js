"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseTerminal_1 = require("./core/BaseTerminal");
var FTerminal = (function (_super) {
    __extends(FTerminal, _super);
    function FTerminal(autoReset) {
        if (autoReset === void 0) { autoReset = false; }
        _super.call(this, autoReset);
    }
    // Foreground colors
    FTerminal.prototype.default = function (text) {
        return this._color(39).text(text);
    };
    FTerminal.prototype.red = function (text) {
        return this._color(31).text(text);
    };
    FTerminal.prototype.black = function (text) {
        return this._color(30).text(text);
    };
    FTerminal.prototype.green = function (text) {
        return this._color(32).text(text);
    };
    FTerminal.prototype.yellow = function (text) {
        return this._color(33).text(text);
    };
    FTerminal.prototype.blue = function (text) {
        return this._color(34).text(text);
    };
    FTerminal.prototype.magenta = function (text) {
        return this._color(35).text(text);
    };
    FTerminal.prototype.cyan = function (text) {
        return this._color(36).text(text);
    };
    FTerminal.prototype.lightGray = function (text) {
        return this._color(37).text(text);
    };
    FTerminal.prototype.darkGray = function (text) {
        return this._color(90).text(text);
    };
    FTerminal.prototype.lightRed = function (text) {
        return this._color(91).text(text);
    };
    FTerminal.prototype.lightGreen = function (text) {
        return this._color(92).text(text);
    };
    FTerminal.prototype.lightYellow = function (text) {
        return this._color(93).text(text);
    };
    FTerminal.prototype.lightBlue = function (text) {
        return this._color(94).text(text);
    };
    FTerminal.prototype.lightMagenta = function (text) {
        return this._color(95).text(text);
    };
    FTerminal.prototype.lightCyan = function (text) {
        return this._color(96).text(text);
    };
    FTerminal.prototype.white = function (text) {
        return this._color(97).text(text);
    };
    // Background colors
    FTerminal.prototype.bgDefault = function (text) {
        return this._color(49).text(text);
    };
    FTerminal.prototype.bgBlack = function (text) {
        return this._color(40).text(text);
    };
    FTerminal.prototype.bgRed = function (text) {
        return this._color(41).text(text);
    };
    FTerminal.prototype.bgGreen = function (text) {
        return this._color(42).text(text);
    };
    FTerminal.prototype.bgYellow = function (text) {
        return this._color(43).text(text);
    };
    FTerminal.prototype.bgBlue = function (text) {
        return this._color(44).text(text);
    };
    FTerminal.prototype.bgMagenta = function (text) {
        return this._color(45).text(text);
    };
    FTerminal.prototype.bgCyan = function (text) {
        return this._color(46).text(text);
    };
    FTerminal.prototype.bgLightGray = function (text) {
        return this._color(47).text(text);
    };
    FTerminal.prototype.bgDarkGray = function (text) {
        return this._color(100).text(text);
    };
    FTerminal.prototype.bgLightRed = function (text) {
        return this._color(101).text(text);
    };
    FTerminal.prototype.bgLightGreen = function (text) {
        return this._color(102).text(text);
    };
    FTerminal.prototype.bgLightYellow = function (text) {
        return this._color(103).text(text);
    };
    FTerminal.prototype.bgLightBlue = function (text) {
        return this._color(104).text(text);
    };
    FTerminal.prototype.bgLightMagenta = function (text) {
        return this._color(105).text(text);
    };
    FTerminal.prototype.bgLightCyan = function (text) {
        return this._color(106).text(text);
    };
    FTerminal.prototype.bgWhite = function (text) {
        return this._color(107).text(text);
    };
    return FTerminal;
}(BaseTerminal_1.BaseTerminal));
exports.FTerminal = FTerminal;
