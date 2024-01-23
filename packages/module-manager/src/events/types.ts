export type Unsubscribe = () => void;

export interface IEventEmitter {
  emit: ((eventName: 'load', data: unknown) => void) &
    ((eventName: 'loaded', data: unknown) => void);
  subscribe: ((eventName: 'load', fn: () => void) => Unsubscribe) &
    ((eventName: 'loaded', fn: () => void) => Unsubscribe);
}
