import { IPostMode, IPreviewComponent } from 'modules/types';

import { location } from '../widgets/location';

const mockPreview: React.FC<IPreviewComponent> = (props) => {
  return <div>{props.text}</div>;
};

export const story: IPostMode = {
  name: 'Story',
  previewComponent: mockPreview,
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

export const post: IPostMode = {
  name: 'Post',
  previewComponent: mockPreview,
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

export const reels: IPostMode = {
  name: 'Reels',
  previewComponent: mockPreview,
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
