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

export default function Accordion({
  className,
  duration = 0.3,
  isOpen,
  renderContent,
  renderHeader,
  ...props
}: TAccordionProps) {
  const contentElement = renderContent();
  const headerElement = renderHeader();

  return (
    <section className={classNames(className, styles.container)} {...props}>
      <header className={styles.header}>{headerElement}</header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit="collapsed"
            animate="expanded"
            initial="collapsed"
            className={styles.content}
            variants={computeVariants(duration)}
          >
            {contentElement}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
