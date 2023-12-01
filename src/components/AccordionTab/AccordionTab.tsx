import classNames from 'classnames';

import Accordion from '../Accordion/Accordion';

import scss from './AccordionTab.module.scss';

import { TAccordionTabProps } from './AccordionTab.types';

function AccordionTab(props: TAccordionTabProps) {
  const handleClose = () => {
    if (props.onChangeOpen) props.onChangeOpen(!props.isOpen);
  };

  const renderCloseButton = () => {
    if (props.hideCloseButton) return null;
    return (
      <button onClick={handleClose} className={scss.closeButton}>
        -
      </button>
    );
  };

  const renderHeader = () => (
    <div className={scss.header}>
      <p className={scss.headerTitle}>{props.title}</p>
      {renderCloseButton()}
    </div>
  );

  return (
    <Accordion
      className={classNames(scss.container, props.className)}
      isOpen={props.isOpen ?? true}
      header={renderHeader()}
      content={props.children}
    />
  );
}

export default AccordionTab;
