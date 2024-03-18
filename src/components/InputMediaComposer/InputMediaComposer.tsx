import { useState } from 'react';

import InputMediaButton from './InputMediaButton/InputMediaButton';
import InputMediaGroup from './InputMediaGroup/InputMediaGroup';

import scss from './MediaInput.module.scss';

import { IMedia } from './InputMediaButton/InputMediaButton.types';

function InputMediaComposer() {
  const [medias, setMedias] = useState<IMedia[]>([]);

  const addMedia = (files: IMedia[]) => {
    setMedias([...medias, ...files]);
  };

  const removeMedia = (id: IMedia['id']) => {
    const list = Array.from(medias);
    const indexToRemove = list.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      list.splice(indexToRemove, 1);
    }

    setMedias(list);
  };

  const updateMedia = (files: IMedia[], id: IMedia['id']) => {
    const list = Array.from(medias);
    const indexToUpdate = list.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
      list.splice(indexToUpdate, 1);
      list.splice(indexToUpdate, 0, ...files);
    }
    setMedias(list);
  };

  return (
    <div className={scss.manyMediaContainer} data-testid="manyMediaInputs">
      {medias.map((media) => (
        <InputMediaGroup
          key={media.id}
          media={media}
          onImageChange={updateMedia}
          onRemove={removeMedia}
        />
      ))}
      <InputMediaButton onChange={addMedia} />
    </div>
  );
}

export default InputMediaComposer;
