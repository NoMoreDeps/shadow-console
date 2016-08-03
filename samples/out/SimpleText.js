"use strict";
var PTerminal_1 = require("../../bin/PTerminal");
var FTerminal_1 = require("../../bin/FTerminal");
var term = new PTerminal_1.PTerminal(true);
var term2 = new FTerminal_1.FTerminal(true);
// Color can be changed by using a property
// You have to use the <text> function to add text to the buffer
// and use the write function to write the line
term.bgBlue.yellow.text("Hello ").red.write("world !!");
// Or you can use function to set colors and text at the same time.
term2.bgYellow().black("Foo ").green("bar").write();
