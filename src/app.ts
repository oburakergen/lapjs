import { Utils } from './modules/utils/Utils';

declare global {
  interface Window {
    Lap: object;
  }
}

class Lap {
  public readonly version = '@VERSION';

  public utility(): object {
    return new Utils();
  }
}

window.Lap = new Lap();
