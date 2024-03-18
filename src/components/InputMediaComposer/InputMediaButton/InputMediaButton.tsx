import { useRef } from 'react';

import classNames from 'classnames';
import { nanoid } from 'nanoid';

import scss from './InputMediaButton.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';

import { IInputMediaButtonProps } from './InputMediaButton.types';

function MediaButton(props: IInputMediaButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const inputClasses = classNames(scss.button, {
    [scss.buttonSelected]: props.files,
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
      alt="image placeholder"
      className={scss.imagePlaceholder}
      src={emptyInputGrey}
    />
  );

  const renderImage = (file: File) => (
    <img
      alt={`uploaded image ${file.name}`}
      className={scss.imageSelected}
      src={URL.createObjectURL(file)}
    />
  );

  const renderVideo = (file: File) => (
    <video className={scss.imageSelected} controls>
      <source src={URL.createObjectURL(file)} type={file.type} />
    </video>
  );

  const renderMedia = () => {
    if (!props.files) return;

    return props.files.type.includes('image')
      ? renderImage(props.files)
      : renderVideo(props.files);
  };

  return (
    <button className={inputClasses} onClick={handleInputClick}>
      <input
        accept="image/*, video/*"
        className={scss.hidden}
        data-testid="imageInput"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
      />
      {props.files ? renderMedia() : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default MediaButton;
