export interface ISocialAccordion {
  socialMediaName: string;
  accountList: IAccountList[];
}

interface IAccountList {
  username: string;
  image: string;
}
