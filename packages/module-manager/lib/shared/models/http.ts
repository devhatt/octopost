export type HttpRequest<Q = any, P = any, B = any> = {
  body: B;
  pathParams: P;
  queryParams: Q;
};

export type HttpResponse<T = any> = {
  body: T;
  status: number;
};
