import {UI} from "../UI";
import {Control} from "./Control";

export class Button extends Control {
  protected _text: string;
  protected _autoSize: boolean;
  protected _paddingTop: number;
  protected _paddingLeft: number;
  protected _paddingRight: number;
  protected _paddingBottom: number;
  protected _textAlign: "left" | "center" | "right";
  protected _disabled: boolean;
  protected _clicked: boolean;
  protected _focused: boolean;

  constructor() {
    super();

    this._text = "Default";
    this._width = this._text.length + 2;
    this._height = 3;
    this._paddingTop = 0;
    this._paddingLeft = 0;
    this._paddingRight = 0;
    this._paddingBottom = 0;
    this._autoSize = true;
  }


}