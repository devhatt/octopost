export interface ISocialAccordion {
  socialMediaName: string;
  error: boolean;
  accountList: IAccountList[];
}

export interface IAccountList {
  id: string | number;
  username: string;
  image: string;
}
