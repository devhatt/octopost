import { TextValidators } from './textValidators';

describe('check texts', () => {
  it('limit text length', () => {
    const textValidator = new TextValidators('Good Morning');
    const limiteLength = 2000;

    expect(textValidator.textLength(limiteLength)).toBe(true);
  });
});
