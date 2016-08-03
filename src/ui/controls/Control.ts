export abstract class Control {
  protected _width: number;
  protected _height: number;
  protected _x: number;
  protected _y: number;

  public parent: Control;

  public getBounds(): [number, number] {
    return [this.width, this.height];
  }

  public getAbsolutePosition(): [number, number] {
    let [px, py] = this.parent ? this.parent.getAbsolutePosition() : [0, 0];
    return [px + this.x, py + this.y];
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }
}