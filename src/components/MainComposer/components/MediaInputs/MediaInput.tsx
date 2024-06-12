import { ReactNode, useState } from 'react';

import { MediaValidator } from '~services/api/social-media/social-media.types';

import { fileValidators } from './utils/fileValidator/fileValidator';

import { IMedia } from '~components/InputMedia/InputMedia.types';

import MediaGroup from './MediaGroup/MediaGroup';

import scss from './MediaInput.module.scss';

import InputMedia from '../../../InputMedia/InputMedia';
import { MediaInput } from './MediaInput.type';

function MediaInputs(props: MediaInput): ReactNode {
  const [medias, setMedias] = useState<IMedia[]>([]);

  const validateFile = (file: IMedia): void => {
    const media = file.file;
    const validator = props.postMode?.validators as MediaValidator;

    const fileValidator = Object.values(fileValidators({ media, validator }));

    for (const validators of fileValidator) {
      validators(props);
    }
  };

  const addMedia = (files: IMedia[]): void => {
    if (props.postMode) {
      for (const file of files) {
        validateFile(file);
      }
    }

    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: IMedia['id']): void => {
    const list = Array.from(medias);
    const indexToRemove = list.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }

    setMedias(list);
  };

  const updateMedia = (files: IMedia[], id: IMedia['id']): void => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

    if (props.postMode) {
      for (const file of files) {
        validateFile(file);
      }
    }

    if (indexToUpdate !== -1) {
      list.splice(indexToUpdate, 1);
      list.splice(indexToUpdate, 0, ...files);
    }

    setMedias(list);
  };

  return (
    <div className={scss.manyMediaContainer} data-testid="manyMediaInputs">
      {medias.map((media) => (
        <MediaGroup
          key={media.id}
          media={media}
          onImageChange={updateMedia}
          onRemove={removeMedia}
        />
      ))}
      <InputMedia onChange={addMedia} />
    </div>
  );
}

export default MediaInputs;
