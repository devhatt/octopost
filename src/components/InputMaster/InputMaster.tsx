import React, { useState } from 'react';

import CharacterLimit from '~components/CharacterLimit/CharacterLimit';
import scss from '~components/InputMaster/InputMaster.module.scss';
import CustomTextArea from '~components/TextArea/TextArea';
import TextCopy from '~components/TextCopy/TextCopy';

const InputMaster = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (newText: string) => {
    setInputText(newText);
  };

  return (
    <div className={scss.inputContainer}>
      <div className={scss.input}>
        <CustomTextArea onTextChange={handleInputChange} />
        <CharacterLimit maxLength={140} value={inputText} />
      </div>
      <div className={scss.copyTextContainer}>
        <TextCopy text={inputText} />
      </div>
    </div>
  );
};

export default InputMaster;
