import { Media } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

export type MediaPreviewProps = {
  media: Media;
  onImageChange: (newMedias: Media[], id: Media['id']) => void;
  onRemove: (id: Media['id']) => void;
};
