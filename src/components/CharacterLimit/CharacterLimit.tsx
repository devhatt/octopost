import React, { useState } from 'react';

import { ICharacterLimitProps } from './CharacterLimit.types';

function CharacterLimit(props: ICharacterLimitProps) {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= props.maxLength) setText(newText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={props.maxLength}
        placeholder={`Digite até ${props.maxLength} caracteres`}
      />
      <span>{props.maxLength - text.length} caracteres restantes</span>
    </>
  );
}

export default CharacterLimit;
