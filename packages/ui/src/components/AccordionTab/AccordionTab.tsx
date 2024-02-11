import { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './AccordionTab.module.scss';

import { AccordionTabProps } from './AccordionTab.types';
import { Accordion } from '@components/Accordion';

export function AccordionTab({
  children,
  className,
  hideCloseButton,
  isOpen = true,
  onOpenChange,
  title,
  ...props
}: AccordionTabProps): ReactNode {
  const handleClose = () => {
    if (onOpenChange) onOpenChange(!isOpen);
  };

  const renderCloseButton = (): ReactNode => {
    if (hideCloseButton === true) return null;

    <button className={styles.closeButton} onClick={handleClose} type="button">
      -
    </button>;
  };

  const renderHeader = () => (
    <div className={styles.header}>
      <p className={styles.headerTitle}>{title}</p>
      {renderCloseButton()}
    </div>
  );

  return (
    <Accordion
      className={classNames(styles.container, className)}
      content={children}
      header={renderHeader()}
      isOpen={isOpen}
      {...props}
    />
  );
}
