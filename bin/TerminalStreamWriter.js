"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events_1 = require("events");
var TerminalStreamWriter = (function (_super) {
    __extends(TerminalStreamWriter, _super);
    function TerminalStreamWriter(terminal) {
        _super.call(this);
        this.term = terminal;
    }
    TerminalStreamWriter.prototype.write = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.emit("write", args);
        if (args[0] === "\u0018") {
            this.src["setRawMode"](false);
            console.log("End (press enter to exit)");
            process.stdin.removeAllListeners();
            process.stdin.unpipe(this);
        }
        return true;
    };
    TerminalStreamWriter.prototype.end = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log("end", args);
    };
    return TerminalStreamWriter;
}(events_1.EventEmitter));
exports.TerminalStreamWriter = TerminalStreamWriter;
