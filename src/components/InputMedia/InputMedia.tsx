import { useState } from 'react';

import scss from './InputMedia.module.scss';

function InputMedia() {
  const [imageSelected, setImageSelected] = useState<string | null>(null);

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

  const imageElement = imageSelected && (
    <img src={imageSelected} alt="InputImage" />
  );

  const iconInputImage = (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      strokeWidth={1.5}
      stroke="currentColor"
      className={scss.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
      />
    </svg>
  );

  return (
    <label className={scss.button}>
      {iconInputImage}
      <input
        type="file"
        role="imageInput"
        className={scss.hidden}
        accept="image/*, video/*"
        onChange={handleFileChange}
      />
      <div>{imageElement}</div>
    </label>
  );
}

export default InputMedia;
