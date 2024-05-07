import { ReactPortal, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';

import scss from './Modal.module.scss';

import type { TModalProps } from './Modal.types';

function Modal({
  children,
  className,
  footer,
  isOpen = false,
  onClickOutside,
  title,
}: TModalProps): ReactPortal {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className={classNames(scss.container, className)}
          data-testid="portal"
          exit={{ opacity: 0 }}
          onClick={onClickOutside}
          transition={{ duration: 0.3 }}
        >
          <div
            className={scss.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={scss.modalHeader}>
              <h2>{title}</h2>
              <div className={scss.headerButtons}>
                <Button
                  circle
                  icon={<Icon icon="close" size={14} />}
                  onClick={onClickOutside}
                  type={'button'}
                  variant={'text'}
                />
              </div>
            </div>
            <div>
              <div className={scss.modalContentText}>{children}</div>
            </div>
            <footer className={scss.modalFooter}>{footer}</footer>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
