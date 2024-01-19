import { useTranslation } from 'react-i18next';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import MediaInputs from '~components/MediaInputs/MediaInput';
import '~i18n';

import scss from './MainComposer.module.scss';

import { TMainComposerProps } from './MainComposer.types';

function MainComposer(props: TMainComposerProps) {
  const { t } = useTranslation();

  return (
    <AccordionTab
      isOpen={props.isOpen}
      onChangeOpen={props.onToggle}
      title={props.title}
    >
      <div className={scss.content}>
        <div className={scss.textInput}>{props.editor}</div>
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
