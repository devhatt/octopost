/**
 * Uma função que resolve os parâmetros de caminho em uma URL montada.
 * @param url - URL com parâmetros de caminho.
 * @param pathParams - Parâmetros de caminho para substituir na URL.
 * @returns URL montada.
 */
export function getMountedURL(
  url: string,
  pathParams: Record<string, string>
): string {
  let mountedURL = url;

  for (const key in pathParams) {
    mountedURL = mountedURL.replace(`:${key}`, pathParams[key]);
  }

  return mountedURL;
}
