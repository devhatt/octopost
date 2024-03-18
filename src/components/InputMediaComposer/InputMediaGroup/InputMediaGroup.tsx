import InputMediaButton from '../InputMediaButton/InputMediaButton';

import scss from '../MediaInput.module.scss';

import { IInputMediaGroupProps } from './InputMediaGroup.types';

function InputMediaGroup({
  media,
  onImageChange,
  onRemove,
}: IInputMediaGroupProps) {
  return (
    <div className={scss.imageGroup}>
      <div className={scss.imageContainer}>
        <InputMediaButton
          files={media.file}
          onChange={(newMedias) => onImageChange(newMedias, media.id)}
        />
        <button
          area-label="Close"
          className={scss.removeButton}
          onClick={() => onRemove(media.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default InputMediaGroup;
