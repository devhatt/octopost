import { useState } from 'react';

import scss from './InputImage.module.scss';

function InputImage() {
  const [imageSelected, setImageSelected] = useState(null);

  function handleFileChange(event: any) {
    const selectedImage = event.target.files[0];
    setImageSelected(selectedImage);
    // eslint desabilitado aqui para mostrar dados da imagem durante o desenvolvimento
    // eslint-disable-next-line no-console
    console.log('imagem', selectedImage);
  }

  return (
    <div>
      <div className={scss.button}>
        <input type="file" onChange={handleFileChange} />{' '}
      </div>
      {imageSelected && (
        <img src={URL.createObjectURL(imageSelected)} alt="Imagem" />
      )}
    </div>
  );
}

export default InputImage;
