import classNames from 'classnames';

import Accordion from '../Accordion/Accordion';

import styles from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab(props: TAccordionTabProps) {
  const handleClose = () => {
    if (props.onChangeOpen) props.onChangeOpen(!props.isOpen);
  };

  const renderHeader = () => {
    const children = (
      <>
        <p className={styles.headerTitle}>{props.title}</p>
        {!props.hideCloseButton && (
          <button onClick={handleClose} className={styles.closeButton}>
            -
          </button>
        )}
      </>
    );

    if (props.renderHeader !== undefined) {
      return props.renderHeader({ className: styles.header, children });
    }

    return <div className={styles.header}>{children}</div>;
  };

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
