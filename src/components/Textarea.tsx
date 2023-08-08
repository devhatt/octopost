import { useState } from 'react';

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
      value={inputValue}
      placeholder="Digite algo..."
      rows={4}
      cols={50}
      onChange={handleInputChange}
    />
  );
}

export default CustomTextArea;
