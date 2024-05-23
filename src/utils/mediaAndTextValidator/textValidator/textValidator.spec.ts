import { TextValidator } from './textValidator';

describe('check texts', () => {
  it('limit text length', () => {
    const textValidator = new TextValidator('Good Morning');
    const limiteLength = 2000;

    expect(textValidator.textLength(limiteLength)).toBe(true);
  });
});
