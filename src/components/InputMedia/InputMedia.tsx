import { useRef, useState } from 'react';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';
import emptyInputPurple from './assets/imageEmptyPurple.svg';

import { IInputMedia } from './InputMedia.types';

function InputMedia(props: IInputMedia) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imageSelected, setImageSelected] = useState('');

  const handleInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) return;

    const fileType = files[0].type;
    if (fileType.includes('image') || fileType.includes('video')) {
      setImageSelected(URL.createObjectURL(files[0]));
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

  const renderImage = () => (
    <img alt="selected" className={scss.imageInputed} src={imageSelected} />
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

      {imageSelected ? renderImage() : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default InputMedia;
