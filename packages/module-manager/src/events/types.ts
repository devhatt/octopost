export type Unsubscribe = () => void;

export interface IEventEmitter {
  subscribe(eventName: 'load', fn: () => void): Unsubscribe;
  subscribe(eventName: 'loaded', fn: () => void): Unsubscribe;
  emit(eventName: 'load', data: any): void;
  emit(eventName: 'loaded', data: any): void;
}
