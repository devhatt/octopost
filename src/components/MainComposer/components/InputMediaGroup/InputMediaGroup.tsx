/* eslint-disable @typescript-eslint/await-thenable -- for validate*/
import { ReactNode, useState } from 'react';

import { nanoid } from 'nanoid';

import { useAccountStore } from '~stores/useAccountStore/useAccountStore';

import { fileValidators } from './utils/fileValidator/fileValidator';

import InputMedia from './components/InputMedia/InputMedia';
import MediaPreview from './components/MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { Media } from './components/InputMedia/InputMedia.types';
import {
  ErrorMap,
  MEDIA_ERRORS,
  MediaErrorMap,
  MediaInput,
} from './InputMediaGroup.type';

function InputMediaGroup(props: MediaInput): ReactNode {
  const [errors, setErrors] = useState<MediaErrorMap>({});
  const { mainContent, updateMainContent } = useAccountStore();
  const setMedias = (medias: Media[]): void => {
    updateMainContent({ medias });
  };

  const medias = mainContent.medias ?? [];

  const removeErrors = (fileId: Media['id']): void => {
    const errorsForFile = errors[fileId];
    for (const error of Object.values(errorsForFile)) {
      props.removeError?.(error);
    }
  };

  const validateFile = async (file: Media): Promise<void> => {
    const media = file.file;
    const validator = props.postMode?.validators.media;

    const fileErrors: ErrorMap = {
      [MEDIA_ERRORS.MAX_AR_EXCEED]: '',
      [MEDIA_ERRORS.MAX_DURATION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_RESOLUTION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_SIZE_EXCEED]: '',
    };

    if (validator) {
      const fileValidator = Object.values(fileValidators({ media, validator }));
      for (const validators of fileValidator) {
        const validate = await validators(props, media.name);
        const errorId = nanoid();

        if (validate.error) {
          fileErrors[validate.type] = errorId;
          props.addError?.(errorId, validate.error);
        }
      }
      if (Object.keys(fileErrors).length > 0)
        setErrors({ ...errors, [file.id]: fileErrors });
    }
  };

  const addMedia = async (files: Media[]): Promise<void> => {
    if (props.postMode) {
      for (const file of files) {
        await validateFile(file);
      }
    }
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: Media['id']): void => {
    const list = Array.from(medias);
    const indexToRemove = list.findIndex((item) => item.id === id);

    if (props.postMode) removeErrors(id);

    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }

    setMedias(list);
  };

  const updateMedia = async (
    files: Media[],
    id: Media['id']
  ): Promise<void> => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

    if (props.postMode) removeErrors(id);

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
