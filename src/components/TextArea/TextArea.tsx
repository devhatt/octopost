import React, { ReactElement, useState } from 'react';

import scss from './TextArea.module.scss';

import { ICustomTextAreaProps } from './TextArea.types';

function CustomTextArea(props: ICustomTextAreaProps): ReactElement {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const newValue = event.target.value;
    setInputValue(newValue);
    props.onTextChange(newValue);
  };

  return (
    <div>
      <textarea
        className={scss.textArea}
        onChange={handleInputChange}
        placeholder="Digite algo aqui..."
        value={inputValue}
      />
    </div>
  );
}

export default CustomTextArea;
