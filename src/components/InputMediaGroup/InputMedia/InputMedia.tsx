import React, { ReactNode, useRef } from 'react';

import classNames from 'classnames';
import { nanoid } from 'nanoid';

import scss from './InputMedia.module.scss';

import emptyInputGrey from './assets/imageEmptyGray.svg';

import { IInputMediaProps } from './InputMedia.types';

function InputMedia(props: IInputMediaProps): ReactNode {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const inputClasses = classNames(scss.button, {
    [scss.buttonSelected]: props.files,
  });

  const handleFileSelect = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { files } = event.target;

    if (!files) return;

    const validFiles = Array.from(files).filter(
      (file) => file.type.includes('image') || file.type.includes('video')
    );

    const medias = validFiles.map((file) => ({ file, id: nanoid() }));
    const zero = 0;

    if (validFiles.length > zero) {
      props.onChange(medias);
    }
  };

  const renderEmptyImagePlaceholder = (): ReactNode => (
    <img
      alt="add file button"
      className={scss.imagePlaceholder}
      src={emptyInputGrey}
    />
  );

  const renderImage = (file: File): ReactNode => (
    <img
      alt={`${file.name}`}
      className={scss.imageSelected}
      src={URL.createObjectURL(file)}
    />
  );

  const renderVideo = (file: File): ReactNode => (
    <video className={scss.imageSelected} controls>
      <track kind="captions" />
      <source src={URL.createObjectURL(file)} type={file.type} />
    </video>
  );

  const renderMedia = (): ReactNode => {
    if (!props.files) return;

    return props.files.type.includes('image')
      ? renderImage(props.files)
      : renderVideo(props.files);
  };

  return (
    <button className={inputClasses} onClick={handleFileSelect} type="button">
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

export default InputMedia;
