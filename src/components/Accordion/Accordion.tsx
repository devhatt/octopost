import { ReactNode } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion, Variant } from 'framer-motion';

import styles from './Accordion.module.scss';

import { TAccordionProps } from './Accordion.types';

function computeVariants(duration: number): Record<string, Variant> {
  return {
    collapsed: { height: 0, transition: { duration } },
    expanded: { height: 'auto', transition: { duration } },
  };
}

function Accordion({ duration = 0.3, ...props }: TAccordionProps): ReactNode {
  return (
    <section className={classNames(props.className, styles.container)}>
      <div>{props.header}</div>
      <AnimatePresence>
        {props.isOpen ? (
          <motion.div
            animate="expanded"
            className={styles.content}
            exit="collapsed"
            initial="collapsed"
            variants={computeVariants(duration)}
          >
            {props.content}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Accordion;
