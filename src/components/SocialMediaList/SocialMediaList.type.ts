export interface ISocialMediaList {
  socialMediaList: ISocialMedia[];
}

export interface ISocialMedia {
  icon: React.ReactElement;
  id: number;
  name: string;
}
