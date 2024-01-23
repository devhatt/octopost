import classNames from 'classnames';

import Accordion from '../Accordion/Accordion';

import scss from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab(props: TAccordionTabProps) {
  const handleClose = () => {
    if (props.onChangeOpen) props.onChangeOpen(!props.isOpen);
  };

  const renderCloseButton = () => (
    <button className={scss.closeButton} onClick={handleClose}>
      -
    </button>
  );

  const renderHeader = () => (
    <div className={scss.header}>
      <p className={scss.headerTitle}>{props.title}</p>
      {props.hideCloseButton ? null : renderCloseButton()}
    </div>
  );

  return (
    <Accordion
      className={classNames(scss.container, props.className)}
      content={props.children}
      header={renderHeader()}
      isOpen={props.isOpen ?? true}
    />
  );
}

export default AccordionTab;
