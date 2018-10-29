import { ForeColor, BackColor, Color16 } from "../../../core/Constant";
import { Terminal } from "../../../Index";
import { Geometry } from "../../Geometry/Rectangle";

export class DisplayObject implements Geometry.Rectangle{
  public _x: number;
  public _y: number;
  public _w: number;
  public _h: number;

  public get x(): number {
    return this._x;
  }

  public set x(v: number) {
    this.dirty = true;
    this._x = v;
  }

  public get y(): number {
    return this._y;
  }

  public set y(v: number) {
    this.dirty = true;
    this._y = v;
  }

  public get w(): number {
    return this._w;
  }

  public set w(v: number) {
    this.dirty = true;
    this._w = v;
  }

  public get h(): number {
    return this._h;
  }

  public set h(v: number) {
    this.dirty = true;
    this._h = v;
  }

  protected term: Terminal;
  protected renderingBuffer: Array<string>;
  protected dirty: boolean;

  drawString(text: string , 
      foreColor: number = void 0, 
      backColor: number = void 0
    ): string {
    this.term.drawColoredText(text, foreColor, backColor);
    return this.term.getAndClearBuffer();
  }

  constructor() {
    this.renderingBuffer = [];
    this.term = new Terminal();
  }

  clear(): void {
    this.renderingBuffer.length = 0;
  }

  render(): Array<string> {
    if (this.dirty) {
      this.dirty = false;
      return this.renderingBuffer;
    }

    return void 0;
  }

}