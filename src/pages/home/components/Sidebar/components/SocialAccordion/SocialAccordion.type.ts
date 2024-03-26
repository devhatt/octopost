export type ISocialAccordion = {
  accountList: IAccountList[];
  error: boolean;
  socialMediaName: string;
}

export type IAccountList = {
  id: number | string;
  image: string;
  username: string;
}
