import classNames from 'classnames';

import Accordion from '../Accordion/Accordion';

import styles from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab(props: TAccordionTabProps) {
  const handleClose = () => {
    if (props.onChangeOpen) props.onChangeOpen(!props.isOpen);
  };

  return (
    <Accordion
      className={classNames(styles.container, props.className)}
      isOpen={props.isOpen ?? true}
      header={
        <div className={styles.header}>
          <p>{props.title}</p>
          {!props.hideCloseButton && (
            <button onClick={handleClose} className={styles.closeButton}>
              -
            </button>
          )}
        </div>
      }
      content={props.children}
    />
  );
}

export default AccordionTab;
