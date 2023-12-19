export type Unsubscribe = () => void;

export interface IEventEmitter {
  emit(eventName: 'load', data: unknown): void;
  emit(eventName: 'loaded', data: unknown): void;
  subscribe(eventName: 'load', fn: () => void): Unsubscribe;
  subscribe(eventName: 'loaded', fn: () => void): Unsubscribe;
}
