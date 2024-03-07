import isEmpty from './isEmpty';

describe('isEmpty', () => {
  it('should return true if array is empty', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return false if array is not empty', () => {
    const oneElementInArray = 1;
    expect(isEmpty([oneElementInArray])).toBe(false);
  });
});
