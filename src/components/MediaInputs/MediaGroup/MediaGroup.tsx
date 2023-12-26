import scss from '../MediaInput.module.scss';

import InputMedia from '../../InputMedia/InputMedia';
import { IMediaGroupProps } from './MediaGroup.types';

function MediaGroup(props: IMediaGroupProps) {
  return (
    <div className={scss.imageGroup}>
      <div className={scss.imageContainer}>
        <InputMedia
          files={props.media.file}
          onChange={(newMedias) =>
            { props.onImageChange(newMedias, props.media.id); }
          }
        />
        <button
          aria-label="Close"
          className={scss.removeButton}
          onClick={() => { props.onRemove(props.media.id); }}
          type="button"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default MediaGroup;
