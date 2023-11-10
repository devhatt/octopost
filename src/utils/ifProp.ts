export function ifProp<T, R>(prop: T, callback: (prop: T) => R): R | undefined {
  if (!!prop === false) return undefined;

  return callback(prop);
}
