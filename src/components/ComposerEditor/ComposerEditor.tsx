import React, { useState } from 'react';

import CharacterLimit from '~components/CharacterLimit/CharacterLimit';
import CustomTextArea from '~components/TextArea/TextArea';

import scss from './ComposerEditor.module.scss';

const ComposerEditor = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (newText: string) => {
    setInputText(newText);
  };

  return (
    <div className={scss.inputContainer}>
      <div className={scss.wrapper}>
        <CustomTextArea onTextChange={handleInputChange} />

        <div className={scss.footer}>
          <CharacterLimit maxLength={140} value={inputText} />
        </div>
      </div>
    </div>
  );
};

export default ComposerEditor;
