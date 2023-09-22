import React, { useState } from 'react';

import CharacterLimitMainText from '~components/CharacterLimitMainText/CharacterLimitMainText';
import { networkListMock } from '~components/CharacterLimitMainText/networkListMock';
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

        <div>
          <CharacterLimitMainText
            value={inputText}
            socialList={networkListMock}
          ></CharacterLimitMainText>
        </div>
      </div>
    </div>
  );
};

export default ComposerEditor;
