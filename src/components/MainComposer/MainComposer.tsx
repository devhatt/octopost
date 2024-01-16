import { useTranslation } from 'react-i18next';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import MediaInputs from '~components/MediaInputs/MediaInput';
import '~i18n';

import scss from './MainComposer.module.scss';

import { TMainComposerProps } from './MainComposer.types';

function MainComposer({ title, isOpen, onChangeOpen }: TMainComposerProps) {
  const { t } = useTranslation();

  return (
    <AccordionTab isOpen={isOpen} onChangeOpen={onChangeOpen} title={title}>
      <div className={scss.content}>
        <div className={scss.textInput}>
          <ComposerEditor />
        </div>
        <div className={scss.contentBot}>
          <div className={scss.contentBotTop}></div>
          <div className={scss.contentBotBot}>
            <div className={scss.mainComposerInputMedia}>
              <MediaInputs />
            </div>
            <div className={scss.iconPulsSave}></div>

            <p>{t('We have a lot of work')}</p>
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default MainComposer;
