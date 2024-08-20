import { ReactNode } from 'react';

import { MediaValidator } from '~services/api/social-media/social-media.types';
import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { fileValidators } from './utils/fileValidator/fileValidator';

import InputMedia from './components/InputMedia/InputMedia';
import MediaPreview from './components/MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { Media } from './components/InputMedia/InputMedia.types';
import { MediaInput } from './InputMediaGroup.type';

function InputMediaGroup(props: MediaInput): ReactNode {
  const [medias, setMedias] = useState<IMedia[]>([]);
  const { socialMedias } = useSocialMediaStore();

  const validateFile = (file: IMedia): void => {
    if (props.socialMediaId && props.postModeId) {
      const postModes = socialMedias
        .get(props.socialMediaId)
        ?.postModes.find((postMode) => postMode.id === props.postModeId);
      const media = file.file;
      const validator = postModes?.validators as MediaValidator;

      const fileValidator = Object.values(fileValidators({ media, validator }));
      for (const validators of fileValidator) validators(props);
    }
  };

  const addMedia = (files: IMedia[]): void => {
    if (props.postModeId) {
      for (const file of files) {
        validateFile(file);
      }
    }
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: Media['id']): void => {
    const list = Array.from(medias);
    const indexToRemove = list.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }

    setMedias(list);
  };

  const updateMedia = (files: Media[], id: Media['id']): void => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

    if (props.postModeId) {
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
