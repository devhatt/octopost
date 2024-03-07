import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useError } from '~stores/useError/useError';

import Icon from '~components/Icon/Icon';

import scss from './FeedbackError.module.scss';

import { animationVariants } from './FeedbackError.data';

function FeedbackError(): ReactNode {
  const errorMessage = useError((state) => state.errorMessage);

  const renderError = (): ReactNode => (
    <motion.div
      animate="visible"
      className={scss.wrapper}
      data-testid="error-container"
      exit="hidden"
      initial="hidden"
      variants={animationVariants}
    >
      <Icon className={scss.errorIcon} icon="error" size="large" />
      <p className={scss.errorMessage}>{errorMessage}</p>
    </motion.div>
  );
  return (
    <AnimatePresence>{errorMessage ? renderError() : null}</AnimatePresence>
  );
}

export default FeedbackError;
