import { HttpRequest } from './http';

export interface Service<T> {
  path: string;
  execute(httpRequest: HttpRequest): T;
}
