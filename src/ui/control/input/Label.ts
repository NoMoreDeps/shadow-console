import { DisplayObject } from "../base/DisplayObject";

export class Label extends DisplayObject {
  readonly minWidth  : number = 4 ;
  readonly minHeight : number = 1 ;

  private _text    : string ;
  public backColor : number ;
  public foreColor : number ;

  public get text() : string {
    return this._text;
  }
  public set text(v : string) {
    if (v !== this._text) {
      this.dirty = true;
    }
    this._text = v;
  }

  constructor() {
    super();
    this._text = "";
  }

  render(): Array<string> {
    if (this.w < this.minWidth) {
      this.w = this.minWidth;
    }

    if (this.dirty) {
      if (this._text.indexOf("\n") !== -1) {
        this._text = this._text
          .replace(/\\\r\\\n/g,"\n")          
          .replace(/\\\n/g,"");          
      }
      let tmp = this._text;
      if (tmp.length > this.w) {
        tmp = `${tmp.substr(0, this.w - 3)}...`;
      }
      this.renderingBuffer[0] = this.drawString(tmp, this.foreColor, this.backColor);
    }
    return super.render();
  }
}