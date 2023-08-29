import { useRef, useState } from 'react';

import classNames from 'classnames';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';

import { IInputMedia } from './InputMedia.types';

function InputMedia(props: IInputMedia) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [mediaType, setMediaType] = useState('');
  const [mediaSelected, setMediaSelected] = useState('');

  const inputClasses = classNames(scss.button, {
    [scss.buttonSelected]: mediaSelected,
  });

  const handleInputClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) return;

    const fileType = files[0].type;
    if (fileType.includes('image') || fileType.includes('video')) {
      setMediaSelected(URL.createObjectURL(files[0]));
      props.onChange(files[0]);

      const mediaType = fileType.match('(image|video)');

      if (!mediaType) return;

      setMediaType(mediaType[0]);
    }
  };

  const renderEmptyImagePlaceholder = () => (
    <img
      src={emptyInputGrey}
      alt="image placeholder"
      className={scss.imagePlaceholder}
    />
  );

  const renderMedia = () =>
    mediaType === 'image' ? (
      <img
        src={mediaSelected}
        alt="selected image"
        className={scss.imageSelected}
      />
    ) : (
      <video controls className={scss.imageSelected}>
        <source src={mediaSelected} />
      </video>
    );

  return (
    <button className={inputClasses} onClick={handleInputClick}>
      <input
        type="file"
        data-testid="imageInput"
        ref={fileInputRef}
        className={scss.hidden}
        accept="image/*, video/*"
        onChange={handleFileChange}
      />

      {mediaSelected ? renderMedia() : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default InputMedia;
