import { ReactNode, useState } from 'react';

import { nanoid } from 'nanoid';

import { MediaValidator } from '~services/api/social-media/social-media.types';

import { fileValidators } from './utils/fileValidator/fileValidator';

import InputMedia from './components/InputMedia/InputMedia';
import MediaPreview from './components/MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { IMedia } from './components/InputMedia/InputMedia.types';
import {
  ErrorMap,
  MEDIA_ERRORS,
  MediaErrorMap,
  MediaInput,
} from './InputMediaGroup.type';

function InputMediaGroup(props: MediaInput): ReactNode {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [errors, setErrors] = useState<MediaErrorMap>({} as MediaErrorMap);

  const removeErrors = (fileId: IMedia['id']): void => {
    const errorsForFile = errors[fileId];
    for (const error of Object.values(errorsForFile)) {
      props.removeError?.(error);
    }
  };

  const validateFile = async (file: IMedia): Promise<void> => {
    const media = file.file;
    const validator = props.postMode?.validators as MediaValidator;

    const fileErrors: ErrorMap = {
      [MEDIA_ERRORS.MAX_AR_EXCEED]: '',
      [MEDIA_ERRORS.MAX_DURATION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_RESOLUTION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_SIZE_EXCEED]: '',
    };
    const fileValidator = Object.values(fileValidators({ media, validator }));
    for (const validators of fileValidator) {
      const validate = await validators(props, media.name);
      const errorId = nanoid();

      if (validate.error) {
        fileErrors[validate.type] = errorId;
        props.addError?.(errorId, validate.error);
      }
    }

    if (Object.keys(errors).length > 0)
      setErrors({ ...errors, [file.id]: fileErrors });
  };

  const addMedia = async (files: IMedia[]): Promise<void> => {
    if (props.postMode) {
      for (const file of files) {
        await validateFile(file);
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

    removeErrors(id);
    setMedias(list);
  };

  const updateMedia = async (
    files: IMedia[],
    id: IMedia['id']
  ): Promise<void> => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

    removeErrors(id);

    if (props.postMode) {
      for (const file of files) {
        await validateFile(file);
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
        <MediaPreview
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

export default InputMediaGroup;
