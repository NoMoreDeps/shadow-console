import {Terminal} from "../src/Terminal";
let term = new Terminal();

// Color can be changed by using a property
// You have to use the <text> function to add text to the buffer
// and use the write function to write the line
term.bgBlue().yellow().text("Hello ").red().write("world !!");

// Or you can use function to set colors and text at the same time.
term.bgYellow().black("Foo ").green("bar").write();