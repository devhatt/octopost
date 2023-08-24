export interface ISocialAccordion {
  socialMediaName: string;
  accountList: IAccountList[];
}

interface IAccountList {
  id: string | number;
  username: string;
  image: string;
}
