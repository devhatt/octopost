import { ReactNode } from 'react';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import InputMediaComposer from '~components/InputMediaComposer/InputMediaComposer';

import scss from './ContentEditor.module.scss';

import { TContentEditorProps } from './ContentEditor.types';

function ContentEditor(props: TContentEditorProps): ReactNode {
  return (
    <AccordionTab
      isOpen={props.isOpen}
      onChangeOpen={props.onToggle}
      title={props.title}
    >
      <div className={scss.content}>
        <div className={scss.textInput}>{props.editor}</div>
        <div className={scss.contentBot}>
          <div className={scss.divider} />
          <div className={scss.contentBotBot}>
            <div
              className={scss.mainComposerInputMedia}
              data-testid="mediaInputs"
            >
              <InputMediaComposer />
            </div>
            <div className={scss.iconPulsSave} />
          </div>
        </div>
      </div>
    </AccordionTab>
  );
}

export default ContentEditor;
