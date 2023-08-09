import { Engine, Scene } from "inks2d";
import { SplashScreen } from "inks2d/extras";
import { Rectangle } from "inks2d/geom";

const g = new Engine(990, 540);

class Main extends Scene {
  constructor() {
    super();
  }

  async start(engine: Engine) {
    super.start(engine);

    const rect = new Rectangle(50, 50, "blue");
    rect.draggable = true;
    rect.position.x = g.stage.width / 2;
    rect.position.y = g.stage.height / 2;
    g.stage.addChild(rect);
  }
}

g.scene = new SplashScreen(
  ["./logo.png"],
  new Rectangle(),
  () => {
    g.scene = new Main();
  },
  true,
  g
);

g.centerscreen = true;
g.start();
