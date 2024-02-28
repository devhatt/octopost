export default function isEmpty<T>(arr: T[]): boolean {
  const empty = 0;
  return arr.length === empty;
}
