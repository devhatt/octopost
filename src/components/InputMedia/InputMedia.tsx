import { useRef } from 'react';

import classNames from 'classnames';
import { nanoid } from 'nanoid';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';

import { IInputMediaProps } from './InputMedia.types';

function InputMedia(props: IInputMediaProps) {
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
      src={emptyInputGrey}
      alt="image placeholder"
      className={scss.imagePlaceholder}
    />
  );

  const renderImage = (file: File) => (
    <img
      src={URL.createObjectURL(file)}
      alt={`uploaded image ${file.name}`}
      className={scss.imageSelected}
    />
  );

  const renderVideo = (file: File) => (
    <video controls className={scss.imageSelected}>
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
        type="file"
        data-testid="imageInput"
        ref={fileInputRef}
        className={scss.hidden}
        accept="image/*, video/*"
        onChange={handleFileChange}
        multiple
      />
      {props.files ? renderMedia() : renderEmptyImagePlaceholder()}
    </button>
  );
}

export default InputMedia;
