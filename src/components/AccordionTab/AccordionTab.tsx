import { ReactNode } from 'react';

import classNames from 'classnames';

import Accordion from '~components/Accordion/Accordion';
import Icon from '~components/Icon/Icon';

import scss from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab({
  hideCloseButton = false,
  isOpen = false,
  ...props
}: TAccordionTabProps): ReactNode {
  const handleClose = (): void => {
    if (props.onChangeOpen) props.onChangeOpen(!isOpen);
  };
  const renderCloseButton = (): ReactNode => (
    <button className={scss.closeButton} onClick={handleClose} type="button">
      <Icon icon={isOpen ? 'minus' : 'plus'} size={16} />
    </button>
  );

  const renderHeader = (): ReactNode => (
    <div className={scss.header}>
      <div className={scss.innerHeader}>
        <Icon icon="circle" size={12} />
        <p className={scss.headerTitle}>{props.title}</p>
      </div>
      {hideCloseButton ? null : renderCloseButton()}
    </div>
  );

  return (
    <Accordion
      className={classNames(scss.container, props.className)}
      content={props.children}
      header={renderHeader()}
      isOpen={isOpen}
    />
  );
}

export default AccordionTab;
