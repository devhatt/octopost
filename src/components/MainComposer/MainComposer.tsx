import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import MediaInputs from '~components/MediaInputs/MediaInput';
import '~i18n';

import scss from './MainComposer.module.scss';

import { TMainComposerProps } from './MainComposer.types';

function MainComposer(props: TMainComposerProps): ReactNode {
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
          <div className={scss.contentBotTop} />
          <div className={scss.contentBotBot}>
            <div
              className={scss.mainComposerInputMedia}
              data-testid="mediaInputs"
            >
              <MediaInputs />
            </div>
            <div className={scss.iconPulsSave} />
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default MainComposer;
