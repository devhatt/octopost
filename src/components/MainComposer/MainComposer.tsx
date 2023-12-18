import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MediaInputs from '~components/MediaInputs/MediaInput';
import '~i18n';

import scss from './MainComposer.module.scss';

function MainComposer() {
  const [isOpen, setOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <AccordionTab isOpen={isOpen} onChangeOpen={setOpen} title="Main Content">
      <div className={scss.content}>
        <div className={scss.textInput}>
          <ComposerEditor />
        </div>
        <div className={scss.contentBot}>
          <div className={scss.contentBotTop}>
            <div>left</div>
            <div className={scss.socialMedias}>
              <p>Right</p>
            </div>
          </div>
          <div className={scss.contentBotBot}>
            <div className={scss.mainComposerInputMedia}>
              <MediaInputs />
            </div>
            {/* <h2>content-bot-bot</h2> */}
            <div className={scss.iconPulsSave}>
              <div className={scss.icons}>
                <p>left</p>
              </div>
              <div>
                <p>right</p>
              </div>
            </div>

            <p>{t('We have a lot of work')}</p>
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default MainComposer;
