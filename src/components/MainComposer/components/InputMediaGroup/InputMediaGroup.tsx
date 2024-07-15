import { ReactNode, useState } from 'react';

import { nanoid } from 'nanoid';

import { MediaValidator } from '~services/api/social-media/social-media.types';

import { fileValidators } from './utils/fileValidator/fileValidator';

import InputMedia from './components/InputMedia/InputMedia';
import MediaPreview from './components/MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { IMedia } from './components/InputMedia/InputMedia.types';
import {
  MEDIA_ERRORS,
  MediaErrorMap,
  MediaInput,
} from './InputMediaGroup.type';

function InputMediaGroup(props: MediaInput): ReactNode {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const [errors, setErrors] = useState<MediaErrorMap>();

  const removeErrors = (mediaErrors: MEDIA_ERRORS): void => {
    const newError = { ...errors };
    const errorId = newError[mediaErrors];
    const updateErrors = Object.entries(newError).reduce<MediaErrorMap>(
      (acc, [key, value]) => {
        acc[key as unknown as MEDIA_ERRORS] = value;
        return acc;
      },
      {}
    );
    props.removeError?.(errorId);
    setErrors(updateErrors);
  };

  const validateFile = async (file: IMedia): Promise<void> => {
    const media = file.file;
    const validator = props.postMode?.validators as MediaValidator;

    const fileValidator = Object.values(fileValidators({ media, validator }));
    for (const validators of fileValidator) {
      const validate = await validators(props, file.id);
      const errorId = nanoid();

      if (validate.error) {
        props.addError?.(errorId, validate.error);
        setErrors({ ...errors, [validate.type]: errorId });
      } else {
        removeErrors(validate.type);
      }
    }
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

    setMedias(list);
  };

  const updateMedia = async (
    files: IMedia[],
    id: IMedia['id']
  ): Promise<void> => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

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
