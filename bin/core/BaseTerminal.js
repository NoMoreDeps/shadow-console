"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * The MIT License (MIT)
 * Copyright (c) <2016> <Beewix Interactive>
 * Author <François Skorzec>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var Constant_1 = require("./Constant");
var TerminalStreamWriter_1 = require("../TerminalStreamWriter");
var events_1 = require("events");
/**
 * Defines a base class for terminal shell
 * @class BaseTerminal
 * @abstract
 */
var BaseTerminal = (function (_super) {
    __extends(BaseTerminal, _super);
    function BaseTerminal(autoReset) {
        var _this = this;
        if (autoReset === void 0) { autoReset = false; }
        _super.call(this);
        this._x = 0;
        this._y = 0;
        this._buffer = "";
        this._autoReset = autoReset;
        process.stdin.setEncoding("utf8");
        this.on("write", function (data) {
            if (_this._streamWriterDataEventHandler) {
                _this._streamWriterDataEventHandler(data);
            }
        });
    }
    BaseTerminal.prototype._color = function (colorValue) {
        this._buffer += "" + Constant_1.EscOpeningChar + colorValue + Constant_1.EscColorClosingChar;
        return this;
    };
    BaseTerminal.prototype._colorExt = function (colorValue) {
        this._buffer += Constant_1.EscOpeningChar + "38;5;" + colorValue + Constant_1.EscColorClosingChar;
        return this;
    };
    BaseTerminal.prototype._bgColorExt = function (colorValue) {
        this._buffer += Constant_1.EscOpeningChar + "48;5;" + colorValue + Constant_1.EscColorClosingChar;
        return this;
    };
    Object.defineProperty(BaseTerminal.prototype, "onWrite", {
        get: function () {
            return this._streamWriterDataEventHandler;
        },
        /**
         *
         */
        set: function (value) {
            this._streamWriterDataEventHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTerminal.prototype, "autoReset", {
        /**
         * Gets or sets a value indicating wether or not a write operation will reset color settings automaticaly.
         * @property {boolean} autoReset
         */
        get: function () {
            return this._autoReset;
        },
        set: function (value) {
            this._autoReset = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets all color settings
     * @method reset
     */
    BaseTerminal.prototype.reset = function () {
        return this._color(39)._color(49);
    };
    BaseTerminal.prototype.clearTerminal = function () {
        process.stdout.write(Constant_1.EscOpeningChar + "2J");
        return this;
    };
    /**
     * Draws a line onto the terminal
     * @method drawLine
     * @param {string} char
     */
    BaseTerminal.prototype.drawLine = function (char) {
        if (char === void 0) { char = ""; }
        if (char === "") {
            char = " ";
        }
        if (typeof char === "string" && char.length > 1) {
            char = char.charAt(0);
        }
        var line = "";
        for (var i = 0; i < this.cols - 1; i++) {
            line += char;
        }
        var old = this._buffer;
        this.write(line);
        this._buffer = old;
        return this;
    };
    BaseTerminal.prototype.to = function (row, col) {
        this._buffer += "" + Constant_1.EscOpeningChar + row + ";" + col + Constant_1.EscPositionClosingChar;
        return this;
    };
    BaseTerminal.prototype.row = function (row) {
        this._buffer += "" + Constant_1.EscOpeningChar + row + Constant_1.EscPositionClosingChar;
        return this;
    };
    BaseTerminal.prototype.col = function (col) {
        this._buffer += Constant_1.EscOpeningChar + ";" + col + Constant_1.EscPositionClosingChar;
        return this;
    };
    BaseTerminal.prototype.ext = function (colorValue) {
        return this._colorExt(colorValue);
    };
    BaseTerminal.prototype.bgExt = function (colorValue) {
        return this._bgColorExt(colorValue);
    };
    BaseTerminal.prototype.text = function (object) {
        if (object === void 0) { object = void 0; }
        if (!object) {
            return this;
        }
        this._buffer += object.toString();
        return this;
    };
    BaseTerminal.prototype.stringify = function (object) {
        this._buffer += JSON.stringify(object, null, 2);
        return this;
    };
    BaseTerminal.prototype.clear = function () {
        console.clear();
    };
    BaseTerminal.prototype.write = function (object) {
        if (object === void 0) { object = void 0; }
        if (object !== void 0) {
            this.text(object);
        }
        if (this._autoReset) {
            this.reset();
        }
        console.log(this._buffer);
        this._buffer = "";
        return this;
    };
    Object.defineProperty(BaseTerminal.prototype, "rows", {
        get: function () {
            return process.stdout["rows"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTerminal.prototype, "cols", {
        get: function () {
            return process.stdout["columns"];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Stops listening to inputs
     * This will unpipe the current stream and unregister all callbacks
     * @method stopListen
     * @return {void}
     */
    BaseTerminal.prototype.stopListen = function () {
        process.stdin["setRawMode"](false);
        process.stdin.removeAllListeners();
        process.stdin.unpipe();
    };
    /**
     * Listen to inputs
     * By default it will start listening to inputs and let you get inputs by registering on write event.
     * You can set your own StreamWriter. In that case, the write event will not be fired
     * @method listenInputs
     * @param {boolean} rawMode If true the Terminal will listen Key data, otherwise string data
     */
    BaseTerminal.prototype.listenInputs = function (rawMode, streamWriter) {
        var _this = this;
        if (rawMode === void 0) { rawMode = false; }
        if (streamWriter === void 0) { streamWriter = void 0; }
        var stream = streamWriter ? streamWriter : new TerminalStreamWriter_1.TerminalStreamWriter(this);
        stream.on("write", function (data) {
            _this.emit("write", data);
        });
        stream.on("pipe", function (src) {
            stream.src = src;
            src["setRawMode"](rawMode);
        });
        process.stdin.pipe(stream);
    };
    return BaseTerminal;
}(events_1.EventEmitter));
exports.BaseTerminal = BaseTerminal;
