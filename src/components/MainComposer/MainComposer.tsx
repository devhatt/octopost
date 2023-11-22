import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import ComposerEditor from '~components/ComposerEditor/ComposerEditor';
import '../../i18n';

import scss from './MainComposer.module.scss';

function MainComposer() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <AccordionTab
      renderHeader={(props) => (
        <div className={classNames(props.className, scss.header)}>
          {props.children}
        </div>
      )}
      isOpen={isOpen}
      onChangeOpen={setOpen}
      title="Main Content"
    >
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
            <p>{t('We have a lot of work')}</p>
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default MainComposer;
