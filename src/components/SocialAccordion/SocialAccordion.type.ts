export interface ISocialAccordion {
  socialMediaName: string;
  isError: boolean;
  accountList: IAccountList[];
}

interface IAccountList {
  id: string | number;
  username: string;
  image: string;
}
