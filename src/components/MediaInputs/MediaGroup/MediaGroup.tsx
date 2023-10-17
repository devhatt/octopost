import scss from '../MediaInput.module.scss';

import InputMedia from '../../InputMedia/InputMedia';
import { IMediaGroupProps } from './MediaGroup.types';

function MediaGroup({ media, onImageChange, onRemove }: IMediaGroupProps) {
  return (
    <div className={scss.imageGroup}>
      <div className={scss.imageContainer}>
        <InputMedia
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

export default MediaGroup;
