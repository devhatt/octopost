import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import scss from './Modal.module.scss';

import type { TModalProps } from './Modal.types';

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
      {!!props.isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          className={classNames(scss.container, props.className)}
          data-testid="portal"
          exit={{ opacity: 0 }}
          onClick={props.onClickOutside}
          transition={{ duration: 0.3 }}
        >
          {
            // TODO: Remove this
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,, jsx-a11y/no-static-element-interactions
            <div onClick={(e) => { e.stopPropagation(); }}>
              <div className={scss.modalContent}>{props.children}</div>
            </div>
          }
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
