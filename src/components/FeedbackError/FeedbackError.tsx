import { ReactNode, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useError } from '~stores/useError/useError';

import { Icon } from '~components/Icon/Icon';

import scss from './FeedbackError.module.scss';

import { animationVariants } from './FeedbackError.data';

function FeedbackError(): ReactNode {
  const errors = useError((state) => state.errors);
  const [showErrors, setShowErrors] = useState(false);

  const renderErrorDropdown = (): ReactNode => (
    <AnimatePresence>
      <motion.ul
        animate="visible"
        className={scss.wrapperErrorList}
        exit="hidden"
        initial="hidden"
        variants={animationVariants}
      >
        {Object.values(errors).map((error) => (
          <li key={error.id}>{error.message}</li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );

  const renderError = (): ReactNode => (
    <motion.div
      animate="visible"
      exit="hidden"
      initial="hidden"
      variants={animationVariants}
    >
      <div className={scss.errorSection}>
        <div className={scss.errorContainer}>
          <Icon className={scss.alertIcon} icon="alert" size={20} />
          <div className={scss.errorMessageContainer}>
            <p className={scss.errorMessage}>
              Failed to progress, please click on the <span> button </span>on
              the side to see the errors
            </p>
          </div>
          <button
            className={scss.dropDownIconContainer}
            onClick={() => setShowErrors((prevState) => !prevState)}
            type="button"
          >
            <Icon
              className={scss.dropDownIcon}
              data-testid="dropdown-arrow"
              icon="DropDownArrow"
              size={10}
            />
          </button>
        </div>
        {showErrors && renderErrorDropdown()}
      </div>
    </motion.div>
  );

  return Object.entries(errors).length > 0 && renderError();
}

export default FeedbackError;
