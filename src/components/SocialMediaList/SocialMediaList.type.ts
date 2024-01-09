export interface ISocialMediaList {
  SocialMediaList: ISocialMediaDb[];
}

export interface ISocialMediaDb {
  id: number;
  name: string;
  icon: React.ReactElement;
}
