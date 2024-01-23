import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Accordion.module.scss';

import { TAccordionProps } from './Accordion.types';

function computeVariants(duration: number) {
  return {
    collapsed: { height: 0, transition: { duration } },
    expanded: { height: 'auto', transition: { duration } },
  };
}

function Accordion(props: TAccordionProps) {
  return (
    <section className={classNames(props.className, styles.container)}>
      <div className={styles.header}>{props.header}</div>
      <AnimatePresence>
        {props.isOpen ? (
          <motion.div
            animate="expanded"
            className={styles.content}
            exit="collapsed"
            initial="collapsed"
            variants={computeVariants(props.duration ?? 0.3)}
          >
            {props.content}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Accordion;
