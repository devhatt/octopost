// import { useState } from 'react';

import scss from './MainComposer.module.scss';

function MainComposer() {
  return (
    <div className={scss.wrapper}>
      <div className={scss.innerHeader}>
        <div>
          <p>Main Content</p>
        </div>
      </div>
      <div className={scss.content}>
        <div className={scss.textInput}>
          <textarea placeholder="Enter your text and links"></textarea>
        </div>
        <div className={scss.contentBot}>
          <div className={scss.contentBotTop}>
            <h2>content-bot-top</h2>
          </div>
          <div className={scss.contentBotBot}>
            <h2>content-bot-bot</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComposer;
