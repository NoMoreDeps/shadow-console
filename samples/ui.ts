import {Terminal} from "../src/Terminal";
import { Label } from "../src/ui/control/input/Label";
import { ForeColor, BackColor, Color16 } from "../src/core/Constant";
const term = new Terminal();

const lbl = new Label();
lbl.w = 11;
lbl.text = "Hello Kitty";
lbl.foreColor = ForeColor[Color16.blue];
term.write(lbl.render()[0]);
lbl.w = 2;
lbl.foreColor = void 0;
lbl.backColor = BackColor[Color16.lightRed];
term["_color"](BackColor[Color16.blue]).drawLine(" ")["_color"](49);
term.bold("bold ")
  .italic("italic ")
  .underline("underline ")
  .strikethrough("strikethrough ")
  .dim("dim ")
  .inverse("inverse ")
  .hidden("hidden ")
  .write();