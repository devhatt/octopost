import { useTranslation } from 'react-i18next';

import MediaInputs from '~components/MediaInputs/MediaInput';

import ComposerEditor from '../ComposerEditor/ComposerEditor';

import '../../i18n';

import scss from './MainComposer.module.scss';

function MainComposer() {
  const { t } = useTranslation();

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
            <div className={scss.mainComposerInputMedia}>
              <MediaInputs />
            </div>
            <h2>content-bot-bot</h2>
            <p>{t('We have a lot of work')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComposer;
