import type { OctoModule } from '../types/OctoModule';
import { EventEmitter } from '../events/EventEmitter';

export class Manager extends EventEmitter {
  private readonly modules = new Map<string, OctoModule>();

  public loadModules(): OctoModule[] {
    return Array.from(this.modules.values());
  }

  public register(moduleKey: string, callback: () => OctoModule): void {
    this.modules.set(moduleKey, callback());
    this.emit('loaded', moduleKey);
  }
}
