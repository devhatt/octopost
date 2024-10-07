import { ReactNode, useState } from 'react';

import isEmpty from 'lodash.isempty';
import { nanoid } from 'nanoid';

import { usePostStore } from '~stores/usePostStore/usePostStore';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { fileValidators } from './utils/fileValidator/fileValidator';

import InputMedia from './components/InputMedia/InputMedia';
import MediaPreview from './components/MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { Media } from './components/InputMedia/InputMedia.types';
import {
  ErrorMap,
  MEDIA_ERRORS,
  MediaErrorMap,
  MediaInputProps,
} from './InputMediaGroup.type';

function InputMediaGroup(props: MediaInputProps): ReactNode {
  const [errors, setErrors] = useState<MediaErrorMap>({});
  const { mainContent, updateMainContent } = usePostStore();
  const { socialMedias } = useSocialMediaStore();
  const medias = mainContent.medias ?? [];
  const hasValidation = Boolean(props.postModeId);

  const setMedias = (newMedias: Media[]): void => {
    updateMainContent({ medias: newMedias });
  };

  const removeErrors = (fileId: Media['id']): void => {
    const errorsForFile = errors[fileId];
    for (const error of Object.values(errorsForFile)) {
      props.removeError?.(error);
    }
  };

  const validateFile = async (file: Media): Promise<void> => {
    const media = file.file;
    const postModes =
      props.socialMediaId && socialMedias.get(props.socialMediaId)?.postModes;
    const validatorRules =
      postModes &&
      postModes.find((postMode) => postMode.id === props.postModeId)?.validators
        .media;

    const fileErrors: ErrorMap = {
      [MEDIA_ERRORS.MAX_AR_EXCEED]: '',
      [MEDIA_ERRORS.MAX_DURATION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_RESOLUTION_EXCEED]: '',
      [MEDIA_ERRORS.MAX_SIZE_EXCEED]: '',
    };

    if (validatorRules) {
      const validators = Object.values(
        fileValidators({ media, validatorRules })
      );
      for (const validator of validators) {
        const validate = await validator(props, media.name);
        const errorId = nanoid();

        if (validate.error) {
          fileErrors[validate.type] = errorId;
          props.addError?.(errorId, validate.error);
        }
      }
      if (!isEmpty(fileErrors)) {
        setErrors({ ...errors, [file.id]: fileErrors });
      }
    }
  };

  const addMedia = async (files: Media[]): Promise<void> => {
    if (hasValidation) {
      for (const file of files) {
        await validateFile(file);
      }
    }
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: Media['id']): void => {
    const newMedias = medias.filter((item) => item.id !== id);

    if (hasValidation) removeErrors(id);

    setMedias(newMedias);
  };

  const updateMedia = async (
    files: Media[],
    id: Media['id']
  ): Promise<void> => {
    const newMedias = medias.flatMap((media) =>
      media.id === id ? files : media
    );

    if (hasValidation) {
      removeErrors(id);
      for (const file of files) {
        await validateFile(file);
      }
    }

    setMedias(newMedias);
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
