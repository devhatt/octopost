import { checkTextLength } from './checkText';

describe('check texts', () => {
  it('limit text length', () => {
    const limiteLength = 2000;

    expect(checkTextLength('Good Morning', limiteLength)).toBe(true);
  });
});
