import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import Icon from '~components/Icon/Icon';

import scss from './Modal.module.scss';

import { type TModalProps } from './Modal.types';

function Modal(props: TModalProps) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';
  }, [props.isOpen]);

  return createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          data-testid="portal"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={classNames(scss.container, props.className)}
          onClick={props.onClickOutside}
        >
          <div
            className={scss.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={scss.modalHeader}>
              <h2>{props.title}</h2>
              <div className={scss.headerButtons}>
                <button onClick={props.onClickOutside}>
                  {<Icon icon="emote" size="large" />}
                </button>
              </div>
            </div>
            <div>
              <div className={scss.modalContentText}>{props.children}</div>
            </div>
            <footer className={scss.modalFooter}>{props.footer}</footer>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
