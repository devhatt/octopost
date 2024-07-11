export class MultiMap<V> {
  private readonly map: Map<string, V[]>;

  constructor() {
    this.map = new Map<string, V[]>();
  }

  public add(key: string, value: V): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    this.map.get(key)?.push(value);
  }

  public get(key: string): V[] {
    return this.map.get(key) ?? [];
  }

  public delete(key: string, value: V): void {
    if (this.map.has(key)) {
      const array = this.map.get(key);
      const index = array?.indexOf(value);

      if (index !== undefined && index > -1 && array) {
        array.splice(index, 1);

        if (array.length === 0) {
          this.map.delete(key);
        }
      }
    }
  }

  public deleteKey(key: string): void {
    this.map.delete(key);
  }

  public has(key: string): boolean {
    return this.map.has(key);
  }

  public clear(): void {
    this.map.clear();
  }

  public toObject(): Record<string, V[]> {
    const obj: Record<string, V[]> = {};
    for (const [key, value] of this.map.entries()) {
      obj[key] = value;
    }
    return obj;
  }
}
