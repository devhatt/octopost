import { useState } from 'react';

import { ITextCopyProps } from './TextCopy.types';

const TextCopy: React.FC<ITextCopyProps> = (props) => {
  const [text, setText] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const updateText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setIsEdited(true);
  };

  return (
    <textarea value={isEdited ? text : props.text} onChange={updateText} />
  );
};

export default TextCopy;
