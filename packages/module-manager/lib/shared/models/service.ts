import { HttpRequest } from './http';

export interface Service<T> {
  execute(httpRequest: HttpRequest): T;
  path: string;
}
