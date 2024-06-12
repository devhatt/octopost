import { IMedia } from '~components/InputMedia/InputMedia.types';

export type IMediaGroupProps = {
  media: IMedia;

  onImageChange: (newMedias: IMedia[], id: IMedia['id']) => void;
  onRemove: (id: IMedia['id']) => void;
};
