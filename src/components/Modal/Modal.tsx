import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import Icon from '~components/Icon/Icon';

import scss from './Modal.module.scss';

import type { TModalProps } from './Modal.types';

function Modal(props: TModalProps): ReactNode {
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
            /* 
            eslint-disable-next-line 
            jsx-a11y/no-static-element-interactions
            --
            TODO: #346 Criar um Hook de useKeyPress para escutar quando um usuário clicar em alguma tecla do teclado.
            TODO: #347 Fechar o modal quando a tecla ESCAPE é pressionada.
            */
            <div
              className={scss.modalContent}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={scss.modalHeader}>
                <h2>{props.title}</h2>
                <div className={scss.headerButtons}>
                  <button onClick={props.onClickOutside} type="button">
                    {<Icon icon="emote" size="large" />}
                  </button>
                </div>
              </div>
              <div>
                <div className={scss.modalContentText}>{props.children}</div>
              </div>
              <footer className={scss.modalFooter}>{props.footer}</footer>
            </div>
          }
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default Modal;
