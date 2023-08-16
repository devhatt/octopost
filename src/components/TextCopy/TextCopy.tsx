import { useState } from 'react';

import scss from '~components/TextCopy/TextCopy.module.scss';

import { ITextCopyProps } from './TextCopy.types';

function TextCopy(props: ITextCopyProps) {
  const [text, setText] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  const updateText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setIsEdited(true);
  };

  return (
    <textarea
      className={scss.textCopy}
      value={isEdited ? text : props.text}
      onChange={updateText}
    />
  );
}

export default TextCopy;
