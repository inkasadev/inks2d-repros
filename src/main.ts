import { Engine, Scene } from "inks2d";
import { Rectangle } from "inks2d/geom";

const g = new Engine(512, 512, 1, false);

class Main extends Scene {
  private _rect: Rectangle = new Rectangle(50, 50, "blue");

  constructor() {
    super();
  }

  async start(engine: Engine) {
    super.start(engine);

    this._rect.draggable = true;
    this._rect.position.x = g.stage.width / 2;
    this._rect.position.y = g.stage.height / 2;
    g.stage.addChild(this._rect);
  }

  update(): void {
    console.log("g.fps => ", g.fps);
    this._rect.position.x += 1;
  }
}

g.scene = new Main();
g.centerscreen = true;
g.start();
