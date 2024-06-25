export type socialMediasType = {
  hasGroup: boolean;
  id: string;
  name: string;
};

const socialMedias: socialMediasType[] = [
  {
    hasGroup: true,
    id: crypto.randomUUID(),
    name: 'Facebook',
  },
  {
    hasGroup: false,
    id: crypto.randomUUID(),
    name: 'Instagram',
  },
  {
    hasGroup: false,
    id: crypto.randomUUID(),
    name: 'Twitter',
  },
  {
    hasGroup: false,
    id: crypto.randomUUID(),
    name: 'Tiktok',
  },
  {
    hasGroup: false,
    id: crypto.randomUUID(),
    name: 'LinkedIn',
  },
];

export { socialMedias };
