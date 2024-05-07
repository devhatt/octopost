import { beforeEach, describe, expect, it } from 'vitest';

import { MultiMap } from './multimap';

describe('MultiMap', () => {
  let multiMap: MultiMap<number>;

  beforeEach(() => {
    multiMap = new MultiMap<number>();
  });

  it('adds and retrieve values by key', () => {
    multiMap.add('a', 1);
    multiMap.add('a', 2);
    expect(multiMap.get('a')).toEqual([1, 2]);
  });

  it('handles deletion of specific values', () => {
    multiMap.add('b', 3);
    multiMap.add('b', 4);
    multiMap.delete('b', 3);
    expect(multiMap.get('b')).toEqual([4]);
    multiMap.delete('b', 4);
    expect(multiMap.get('b')).toEqual([]);
  });

  it('handles complete deletion of a key', () => {
    multiMap.add('c', 5);
    multiMap.deleteKey('c');
    expect(multiMap.has('c')).toBe(false);
  });

  it('clears all entries', () => {
    multiMap.add('d', 6);
    multiMap.add('e', 7);
    multiMap.clear();
    expect(multiMap.has('d')).toBe(false);
    expect(multiMap.has('e')).toBe(false);
  });
});
