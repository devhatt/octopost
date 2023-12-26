import { IPostMode, IPreviewComponent } from 'modules/types';

import { location } from '../widgets/location';

const mockPreview: React.FC<IPreviewComponent> = (props) => {
  return <div>{props.text}</div>;
};

export const story: IPostMode = {
  name: 'Story',
  previewComponent: mockPreview,
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
  widgets: [location],
};

export const post: IPostMode = {
  name: 'Post',
  previewComponent: mockPreview,
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
  widgets: [location],
};

export const reels: IPostMode = {
  name: 'Reels',
  previewComponent: mockPreview,
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
  widgets: [location],
};
