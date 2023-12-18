// temporario enquanto os types nao sao migrados
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Events = 'load' | 'loaded';

export class EventEmitter {
  private events: Record<string, Function[]>;

  constructor() {
    this.events = {};
  }

  subscribe(eventName: Events, fn: Function) {
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

  emit(eventName: Events, data: any) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((fn) => {
        fn.call(null, data);
      });
    }
  }
}
