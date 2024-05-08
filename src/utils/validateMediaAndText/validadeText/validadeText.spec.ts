import { validateTextLength } from './validateText';

describe('validate texts', () => {
  it('validate text length', () => {
    const limiteLength = 2000;

    expect(validateTextLength('Good Morning', limiteLength)).toBe(true);
  });
});
