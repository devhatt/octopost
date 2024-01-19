import type { GenericFunction } from '../utils/primitives';

import type { IEventEmitter } from './types';

export abstract class EventEmitter implements IEventEmitter {
  private events: Record<string, GenericFunction[]>;

  public constructor() {
    this.events = {};
  }

  public emit(eventName: string, data: unknown): void {
    const event = this.events[eventName];
    if (event) {
      for (const fn of event) {
        fn.call(null, data);
      }
    }
  }

  public subscribe(eventName: string, fn: GenericFunction): GenericFunction {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn) => fn !== eventFn
      );
    };
  }
}
