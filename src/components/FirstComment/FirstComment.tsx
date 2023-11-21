import { useState } from 'react';

import Accordion from '../Accordion/Accordion';
import Checkbox from '../Checkbox/Checkbox';
import ComposerEditor from '../ComposerEditor/ComposerEditor';

import styles from './FirstComment.module.scss';

import { TFirstCommentProps } from './FirstComment.types';

export function FirstComment(props: TFirstCommentProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Accordion
      duration={0.5}
      className={styles.container}
      isOpen={isOpen}
      header={
        <Checkbox
          className={styles.checkbox}
          checked={isOpen}
          onChange={setOpen}
        >
          First Comment
        </Checkbox>
      }
      content={
        <div className={styles.textarea}>
          <ComposerEditor />
        </div>
      }
      {...props}
    />
  );
}

export default FirstComment;
