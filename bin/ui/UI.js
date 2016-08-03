"use strict";
var Terms = require("../Index");
var UI = (function () {
    function UI() {
        this._terminal = new Terms.PTerminal();
    }
    Object.defineProperty(UI.prototype, "terminal", {
        get: function () {
            return this._terminal;
        },
        enumerable: true,
        configurable: true
    });
    UI.prototype.clearScreen = function () {
        var line = "";
        for (var i = 0; i < this._terminal.cols - 1; i++) {
            line += " ";
        }
        for (var i = 0; i < this._terminal.rows - 1; i++) {
            this._terminal.to(i, 1).text(line);
        }
        this._terminal.write();
        return this;
    };
    return UI;
}());
exports.UI = UI;
