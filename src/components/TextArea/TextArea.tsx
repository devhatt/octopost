import React, { useState } from 'react';

import scss from './TextArea.module.scss';

function CustomTextArea() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <textarea
      className={scss.textArea}
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Digite algo aqui..."
    />
  );
}

export default CustomTextArea;
