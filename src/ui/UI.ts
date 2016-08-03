import * as Terms from "../Index";

export class UI {
  protected _terminal: Terms.PTerminal;

  constructor() {
    this._terminal = new Terms.PTerminal();
  }

  get terminal(): Terms.PTerminal {
    return this._terminal;
  }

  clearScreen(): this {
    let line = "";
    for (let i = 0; i < this._terminal.cols - 1; i++) {
      line += " ";
    }

    for (let i = 0; i < this._terminal.rows - 1; i++) {
      this._terminal.to(i, 1).text(line);
    }
    this._terminal.write();
    return this;
  }
}