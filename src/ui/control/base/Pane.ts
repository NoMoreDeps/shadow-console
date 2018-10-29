import { Geometry } from "../../Geometry/Rectangle";

export namespace Base {
  export abstract class Pane implements Geometry.Rectangle{
    x: number;    
    y: number;
    w: number;
    h: number;
  }
}