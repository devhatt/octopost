import React, { useState } from 'react';

interface ICharacterCountdownProps {
  maxLength: number;
}

const CharacterCountdown: React.FC<ICharacterCountdownProps> = ({
  maxLength,
}) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={`Digite até ${maxLength} caracteres`}
      />
      <p>{maxLength - text.length} caracteres restantes</p>
    </div>
  );
};

export default CharacterCountdown;
