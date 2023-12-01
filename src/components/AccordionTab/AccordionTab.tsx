import classNames from 'classnames';

import Accordion from '../Accordion/Accordion';

import styles from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab(props: TAccordionTabProps) {
  const handleClose = () => {
    if (props.onChangeOpen) props.onChangeOpen(!props.isOpen);
  };

  const renderCloseButton = () => {
    if (props.hideCloseButton) return null;
    return (
      <button onClick={handleClose} className={styles.closeButton}>
        -
      </button>
    );
  };

  const renderHeader = () => (
    <div className={styles.header}>
      <p className={styles.headerTitle}>{props.title}</p>
      {renderCloseButton()}
    </div>
  );

  return (
    <Accordion
      className={classNames(styles.container, props.className)}
      isOpen={props.isOpen ?? true}
      header={renderHeader()}
      content={props.children}
    />
  );
}

export default AccordionTab;
