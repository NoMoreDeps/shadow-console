import { Geometry } from "../../geometry/Rectangle";
import { DisplayObject } from "../base/DisplayObject"

export namespace Base {
  export abstract class Control  extends DisplayObject implements Geometry.Rectangle {
    x: number;    
    y: number;
    w: number;
    h: number;

    constructor() {
      super();
      this.x = this.y = 0;
    }

    abstract readonly minWidth: number;
    abstract readonly minHeight: number;
  }
}