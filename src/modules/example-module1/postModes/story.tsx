import { IPostMode } from 'modules/types';

import { location } from '../widgets/location';

const preview = () => {
  return <div></div>;
};

export const story: IPostMode = {
  name: 'Story',
  previewComponent: preview,
  widgets: [location],
  validators: {
    media: {
      allowedFormats: ['jpeg', 'png', 'webp'],
      ar: ['1080:1920'],
      maxFileSize: 10,
      mediaQtyLimit: 2,
    },
    text: {
      maxLength: 200,
    },
  },
};
