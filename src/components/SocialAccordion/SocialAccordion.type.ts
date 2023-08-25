export interface ISocialAccordion {
  socialMediaName: string;
  isError: boolean;
  accountList: IAccountList[];
}

export interface IAccountList {
  id: string | number;
  username: string;
  image: string;
}
