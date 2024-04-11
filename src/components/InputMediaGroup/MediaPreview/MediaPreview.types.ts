import { TMedia } from '../InputMedia/InputMedia.types';

export type TMediaPreviewProps = {
  media: TMedia;

  onImageChange: (newMedias: TMedia[], id: TMedia['id']) => void;
  onRemove: (id: TMedia['id']) => void;
};
