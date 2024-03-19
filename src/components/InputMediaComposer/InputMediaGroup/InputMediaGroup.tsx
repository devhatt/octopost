import { ReactNode } from 'react';

import InputMediaButton from '../InputMediaButton/InputMediaButton';

import scss from '../InputMediaComposer.module.scss';

import { IInputMediaGroupProps } from './InputMediaGroup.types';

function InputMediaGroup({
  media,
  onImageChange,
  onRemove,
}: IInputMediaGroupProps): ReactNode {
  return (
    <div className={scss.imageGroup}>
      <div className={scss.imageContainer}>
        <InputMediaButton
          files={media.file}
          onChange={(newMedias) => onImageChange(newMedias, media.id)}
        />
        <button
          aria-label="Close"
          className={scss.removeButton}
          onClick={() => onRemove(media.id)}
          type="button"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default InputMediaGroup;
