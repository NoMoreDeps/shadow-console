"use strict";
var PTerminal_1 = require("../../bin/PTerminal");
var term = new PTerminal_1.PTerminal(true);
term.onWrite = function (data) {
    console.log(JSON.stringify(data), data.length, data[0].length);
};
term.listenInputs(true);
