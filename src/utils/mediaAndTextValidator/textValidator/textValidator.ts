export class TextValidator {
  public text: string;

  constructor(text: string) {
    this.text = text;
  }

  public textLength = (limitLength: number): boolean =>
    this.text.length <= limitLength;
}
