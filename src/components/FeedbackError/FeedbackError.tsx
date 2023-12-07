import { AnimatePresence, motion } from 'framer-motion';
import { useFeedbackError } from 'stores/feedbackError/useFeedbackError';

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
  const errorMessage = useFeedbackError((state) => state.errorMessage);

  const renderError = () => (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      data-testid="error-container"
      variants={animationVariants}
      className={scss.wrapper}
    >
      <i className={scss.icon} />
      <p className={scss.errorMessage}>{errorMessage}</p>
    </motion.div>
  );
  return <AnimatePresence>{errorMessage && renderError()}</AnimatePresence>;
}

export default FeedbackError;
