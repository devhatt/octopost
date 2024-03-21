export type HttpRequest<Q = any, P = any, B = any> = {
  queryParams: Q;
  body: B;
  pathParams: P;
};

export type HttpResponse<T = any> = {
  status: number;
  body: T;
};
