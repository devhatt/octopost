import { useState } from 'react';

import CharacterLimit from '../components/CharacterLimit/CharacterLimit';

import scss from './home.module.scss';

import TextCopy from './../components/TextCopy/TextCopy';

const Home = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className={scss.mainContainer}>
      <div className={scss.gridContainer}>
        <div className={scss.gridSwitches} />
        <div className={scss.gridInput}>
          <div className={scss.sections}>
            <div>
              <CharacterLimit maxLength={140} />
            </div>

            <div>
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Texto a ser replicado"
              />
              <TextCopy text={inputText} />
            </div>
          </div>
        </div>
        <div className={scss.gridTabs} />
      </div>
    </div>
  );
};

export default Home;
