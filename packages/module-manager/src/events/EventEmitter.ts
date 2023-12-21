import type { IEventEmitter } from './types';

import type { GenericFunction } from '~/utils/primitives';

export abstract class EventEmitter implements IEventEmitter {
  private events: Record<string, GenericFunction[]>;

  constructor() {
    this.events = {};
  }

  subscribe(eventName: string, fn: GenericFunction): GenericFunction {
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

  emit(eventName: string, data: unknown): void {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  }
}
