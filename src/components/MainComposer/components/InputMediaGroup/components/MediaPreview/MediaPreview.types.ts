import { IMedia } from '~components/MainComposer/components/InputMediaGroup/components/InputMedia/InputMedia.types';

export type MediaPreviewProps = {
  media: IMedia;
  onImageChange: (newMedias: IMedia[], id: IMedia['id']) => void;
  onRemove: (id: IMedia['id']) => void;
};
