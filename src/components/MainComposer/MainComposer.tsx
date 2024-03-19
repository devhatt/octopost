import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import InputMediaComposer from '~components/InputMediaComposer/InputMediaComposer';
import '~i18n';

import scss from './MainComposer.module.scss';

function MainComposer(): ReactNode {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <AccordionTab isOpen={isOpen} onChangeOpen={setIsOpen} title="Main Content">
      <div className={scss.content}>
        <div className={scss.textInput}>
          <ComposerEditor value={''} />
        </div>
        <div className={scss.contentBot}>
          <div className={scss.contentBotTop} />
          <div className={scss.contentBotBot}>
            <div className={scss.mainComposerInputMedia}>
              <InputMediaComposer />
            </div>
            <div className={scss.iconPulsSave} />
            <p>{t('We have a lot of work')}</p>
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default MainComposer;
