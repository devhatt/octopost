import { AnimatePresence, motion } from 'framer-motion';
import { useError } from 'stores/useError/useError';

import Icon from '~components/Icon/Icon';

import scss from './FeedbackError.module.scss';

const animationVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'tween',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
};

function FeedbackError() {
  const errorMessage = useError((state) => state.errorMessage);

  const renderError = () => (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={scss.wrapper}
      variants={animationVariants}
      data-testid="error-container"
    >
      <Icon icon="error" size="large" className={scss.errorIcon} />
      <p className={scss.errorMessage}>{errorMessage}</p>
    </motion.div>
  );
  return <AnimatePresence>{errorMessage && renderError()}</AnimatePresence>;
}

export default FeedbackError;
