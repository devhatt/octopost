import { useState, useRef } from 'react';

import scss from './InputImage.module.scss';

function InputImage() {
  const [imageSelected, setImageSelected] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      setImageSelected(selectedImage);
      // Mostrando informações da imagem durante o desenvolvimento
      // eslint-disable-next-line no-console
      console.log('imagem', selectedImage);
    }
  };

  const handleImageIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const imageElement = imageSelected && (
    <img src={URL.createObjectURL(imageSelected)} alt="Imagem" />
  );

  const icon = (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
      />
    </svg>
  );

  return (
    <div>
      <div className={scss.button}>
        <div className={scss.icon} onClick={handleImageIconClick}>
          {icon}
        </div>
        <input
          role="imageInput"
          className={scss.hiden}
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      {imageElement}
    </div>
  );
}

export default InputImage;
