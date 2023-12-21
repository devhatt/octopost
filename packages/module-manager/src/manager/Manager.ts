import { EventEmitter } from '../events/EventEmitter';

export class Manager extends EventEmitter {
  private modules = new Map<string, unknown>();

  public register(moduleKey: string, callback: () => void): void {
    this.modules.set(moduleKey, callback());
    this.emit('loaded', moduleKey);
  }

  public loadModules(): unknown[] {
    return Array.from(this.modules.values());
  }
}
