import {FTerminal} from "../src/FTerminal";
let term  = new FTerminal(true);

term.ext(0xCCCCCC).text("Hello").write();