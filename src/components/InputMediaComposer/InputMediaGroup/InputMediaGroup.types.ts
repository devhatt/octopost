import { IMedia } from '../InputMediaButton/InputMediaButton.types';

export interface IInputMediaGroupProps {
  media: IMedia;

  onImageChange: (newMedias: IMedia[], id: IMedia['id']) => void;
  onRemove: (id: IMedia['id']) => void;
}
