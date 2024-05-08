export function validateMediaSize(file: File, limitSize: number): boolean {
  return file.size <= limitSize;
}
