export enum EHttpMethods {
  // Requests using the GET method should only return data.
  GET = 'GET',

  // The HEAD method requests a response identical to the GET method, but without the response body.
  HEAD = 'HEAD',

  // The POST method is used to submit an entity to a specific resource, causing a change in the resource's state.
  POST = 'POST',

  // The PUT method replaces all current representations of the target resource with the payload of the request.
  PUT = 'PUT',

  // The DELETE method removes a specific resource.
  DELETE = 'DELETE',

  // The CONNECT method establishes a tunnel to the server identified by the target resource.
  CONNECT = 'CONNECT',

  // The OPTIONS method is used to describe the communication options with the target resource.
  OPTIONS = 'OPTIONS',

  // The TRACE method performs a test call loop-back along with the path to the target resource.
  TRACE = 'TRACE',

  // The PATCH method is used to apply partial modifications to a resource.
  PATCH = 'PATCH',
}
