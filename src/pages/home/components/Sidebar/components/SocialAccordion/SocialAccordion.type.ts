export interface ISocialAccordion {
  accountList: IAccountList[];
  error: boolean;
  socialMediaName: string;
}

export interface IAccountList {
  id: number | string;
  image: string;
  username: string;
}
