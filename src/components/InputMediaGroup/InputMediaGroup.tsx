import { ReactNode, useState } from 'react';

import InputMedia from './InputMedia/InputMedia';
import MediaPreview from './MediaPreview/MediaPreview';

import scss from './InputMediaGroup.module.scss';

import { TMedia } from './InputMedia/InputMedia.types';

function InputMediaGroup(): ReactNode {
  const [medias, setMedias] = useState<TMedia[]>([]);
  const invalidIndex = -1;

  const addMedia = (files: TMedia[]): void => {
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: TMedia['id']): void => {
    const list = Array.from(medias);
    const indexToRemove = list.findIndex((item) => item.id === id);
    const amountToRemove = 1;

    if (indexToRemove !== invalidIndex) {
      list.splice(indexToRemove, amountToRemove);
    }

    setMedias(list);
  };

  const updateMedia = (files: TMedia[], id: TMedia['id']): void => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);
    const amountToUpdate = 1;

    if (indexToUpdate !== invalidIndex) {
      list.splice(indexToUpdate, amountToUpdate, ...files);
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
