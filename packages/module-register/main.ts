import { EventEmitter } from './lib/EventEmitter';

export class OctoModule extends EventEmitter {
  private modules = new Map<string, unknown>();

  public register(moduleKey: string, callback: () => void) {
    this.modules.set(moduleKey, callback());
    this.emit('loaded', moduleKey);
  }

  public loadModules() {
    return this.modules.values();
  }
}
