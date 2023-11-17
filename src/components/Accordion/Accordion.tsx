import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Accordion.module.scss';

import { TAccordionProps } from './Accordion.types';

function computeVariants(duration: number) {
  return {
    expanded: { height: 'auto', transition: { duration } },
    collapsed: { height: 0, transition: { duration } },
  };
}

function Accordion(props: TAccordionProps) {
  return (
    <section className={classNames(props.className, styles.container)}>
      <header className={styles.header}>{props.header}</header>
      <AnimatePresence>
        {props.isOpen && (
          <motion.div
            exit="collapsed"
            animate="expanded"
            initial="collapsed"
            className={styles.content}
            variants={computeVariants(props.duration ?? 0.3)}
          >
            {props.content}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Accordion;
