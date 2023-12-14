import { EventEmitter } from './EventEmitter';
import { OctoModule } from './OctoModule';

export class Manager extends EventEmitter {
  private modules = new Map<string, OctoModule>();

  public register(moduleKey: string, callback: () => OctoModule) {
    this.modules.set(moduleKey, callback());
    this.emit('loaded-module', moduleKey);
  }

  public loadModules() {
    return Array.from(this.modules.values());
  }
}
