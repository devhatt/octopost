import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Portal.module.scss';

import { type TPortalProps } from './Portal.types';

function Portal(props: TPortalProps) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'auto';
  });

  return createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          data-testid="portal"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={classNames(styles.container, props.className)}
          onClick={props.onClickOutside}
        >
          <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Portal;
