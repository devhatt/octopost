import { ReactNode } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './Accordion.module.scss';

import { AccordionProps } from './Accordion.types';

function computeVariants(duration: number) {
  return {
    collapsed: { height: 0, transition: { duration } },
    expanded: { height: 'auto', transition: { duration } },
  };
}

export function Accordion({
  className,
  content,
  duration = 0.3,
  header,
  isOpen,
}: AccordionProps): ReactNode {
  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.header}>{header}</div>
      <motion.div
        animate={isOpen ? 'expanded' : 'collapsed'}
        className={styles.content}
        initial="collapsed"
        variants={computeVariants(duration)}
      >
        {content}
      </motion.div>
    </div>
  );
}
