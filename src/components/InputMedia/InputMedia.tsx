import { useRef, useState } from 'react';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';
import emptyInputPurple from './assets/imageEmptyPurple.svg';

import { IInputMedia } from './InputMedia.types';

function InputMedia(props: IInputMedia) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [mediaType, setMediaType] = useState('');
  const [mediaSelected, setMediaSelected] = useState('');

  const handleInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) return;

    const fileType = files[0].type;
    if (fileType.includes('image') || fileType.includes('video')) {
      setMediaSelected(URL.createObjectURL(files[0]));

      const mediaType = fileType.match('(image|video)');

      if (!mediaType) return;

      setMediaType(mediaType[0]);
      // Mostrando informações da imagem durante o desenvolvimento
      // eslint-disable-next-line no-console
      console.log('imagem', files[0]);
    }
  };

  const renderEmptyImagePlaceholder = () => (
    <img
      alt="selected"
      className={scss.imagePlaceholder}
      src={props.variant ? emptyInputGrey : emptyInputPurple}
    />
  );

  const renderMedia = () =>
    mediaType === 'image' ? (
      <img alt="selected" className={scss.imageInputed} src={mediaSelected} />
    ) : (
      <video controls className={scss.imageInputed}>
        <source src={mediaSelected} />
      </video>
    );

  return (
    <button
      className={scss.button}
      onClick={handleInputClick}
      data-variant={props.variant}
    >
      <input
        type="file"
        ref={fileInputRef}
        role="imageInput"
        className={scss.hidden}
        accept="image/*, video/*"
        onChange={handleFileChange}
      />

      {mediaSelected ? renderMedia() : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default InputMedia;
