import { IMedia } from '../InputMedia/InputMedia.types';

export type IMediaPreviewProps = {
  media: IMedia;

  onImageChange: (newMedias: IMedia[], id: IMedia['id']) => void;
  onRemove: (id: IMedia['id']) => void;
};
