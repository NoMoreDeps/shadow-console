import {UI} from "../UI";

export class Button {
  protected _width: number;
  protected _height: number;
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