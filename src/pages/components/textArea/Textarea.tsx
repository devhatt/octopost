import { useState } from 'react';

import scss from './Textarea.module.scss';

interface ITextAreaProps {
  value: string;
}

function CustomTextArea({ value }: ITextAreaProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event?.target.value);
  };

  return (
    <textarea
      className={scss.textArea}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default CustomTextArea;
