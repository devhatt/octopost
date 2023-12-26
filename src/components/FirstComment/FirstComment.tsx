import { useState } from 'react';

import Accordion from '../Accordion/Accordion';
import Checkbox from '../Checkbox/Checkbox';
import ComposerEditor from '../ComposerEditor/ComposerEditor';

import styles from './FirstComment.module.scss';

import { TFirstCommentProps } from './FirstComment.types';

function FirstComment(props: TFirstCommentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion
      className={styles.container}
      content={
        <div className={styles.textarea}>
          <ComposerEditor />
        </div>
      }
      duration={0.5}
      header={
        <Checkbox
          checked={isOpen}
          className={styles.checkbox}
          onChange={setIsOpen}
        >
          First Comment
        </Checkbox>
      }
      isOpen={isOpen}
      {...props}
    />
  );
}

export default FirstComment;
