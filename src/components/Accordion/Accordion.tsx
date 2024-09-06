import { ReactNode } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion, Variant } from 'framer-motion';

import scss from './Accordion.module.scss';

import { TAccordionProps } from './Accordion.types';

function computeVariants(): Record<string, Variant> {
  return {
    collapsed: { height: '0px' },
    expanded: { height: 'auto' },
  };
}

function Accordion({ duration = 0.3, ...props }: TAccordionProps): ReactNode {
  return (
    <section className={classNames(props.className, scss.container)}>
      <div className={scss.header}>{props.header}</div>
      <AnimatePresence>
        <motion.div
          animate={props.isOpen ? 'expanded' : 'collapsed'}
          className={scss.content}
          exit="collapsed"
          initial="expanded"
          transition={{ duration }}
          variants={computeVariants()}
        >
          {props.content}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Accordion;
