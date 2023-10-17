import ComposerEditor from '~components/ComposerEditor/ComposerEditor';

import scss from './MainComposer.module.scss';

function MainComposer() {
  return (
    <div className={scss.wrapper}>
      <div className={scss.innerHeader}>
        <div className={scss.mainContent}>
          <p className={scss.mainText}>Main Content</p>
        </div>
      </div>
      <div className={scss.content}>
        <div className={scss.textInput}>
          <ComposerEditor />
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
