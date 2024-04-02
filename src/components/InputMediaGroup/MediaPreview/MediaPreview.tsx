import { ReactNode } from 'react';

import Icon from '~components/Icon/Icon';

import InputMedia from '../InputMedia/InputMedia';

import scss from '../InputMediaGroup.module.scss';

import { IMediaPreviewProps } from './MediaPreview.types';

function InputMediaGroup({
  media,
  onImageChange,
  onRemove,
}: IMediaPreviewProps): ReactNode {
  return (
    <div className={scss.imageGroup}>
      <div className={scss.imageContainer}>
        <InputMedia
          files={media.file}
          onChange={(newMedias) => onImageChange(newMedias, media.id)}
        />
        <button
          aria-label="Close"
          className={scss.removeButton}
          data-testid="closeButton"
          onClick={() => onRemove(media.id)}
          type="button"
        >
          <Icon icon="close" size={10} />
        </button>
      </div>
    </div>
  );
}

export default InputMediaGroup;
