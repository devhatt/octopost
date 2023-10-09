import { useRef } from 'react';

import classNames from 'classnames';
import { nanoid } from 'nanoid';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';

import { IInputMediaProps } from './InputMedia.types';

function InputMedia(props: IInputMediaProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const inputClasses = classNames(scss.button, {
    [scss.buttonSelected]: props.files && props.files.length > 0,
  });

  const handleInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) return;

    const validFiles = Array.from(files).filter(
      (file) => file.type.includes('image') || file.type.includes('video')
    );

    const medias = validFiles.map((file) => ({ file, id: nanoid() }));

    if (validFiles.length > 0) {
      props.onChange(medias);
    }
  };

  const renderEmptyImagePlaceholder = () => (
    <img
      src={emptyInputGrey}
      alt="image placeholder"
      className={scss.imagePlaceholder}
    />
  );

  const renderMedia = () => {
    if (!props.files || props.files.length === 0) {
      return null;
    }

    if (props.files[0].type.includes('image')) {
      return props.files.map((file, index) => (
        <img
          data-testid="test"
          key={index}
          src={URL.createObjectURL(file)}
          alt={`selected image ${index}`}
          className={scss.imageSelected}
        />
      ));
    } else {
      return (
        <video controls className={scss.imageSelected}>
          {props.files.map((file, index) => (
            <source
              key={index}
              src={URL.createObjectURL(file)}
              type={file.type}
            />
          ))}
        </video>
      );
    }
  };

  return (
    <button className={inputClasses} onClick={handleInputClick}>
      <input
        type="file"
        data-testid="imageInput"
        ref={fileInputRef}
        className={scss.hidden}
        accept="image/*, video/*"
        onChange={handleFileChange}
        multiple
      />
      {props.files && props.files.length > 0
        ? renderMedia()
        : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default InputMedia;
