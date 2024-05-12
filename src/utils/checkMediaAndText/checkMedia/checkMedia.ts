export function checkMediaSize(file: File, limitSize: number): boolean {
  return file.size <= limitSize;
}
