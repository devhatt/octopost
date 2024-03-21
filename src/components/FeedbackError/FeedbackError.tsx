import { ReactNode, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useError } from '~stores/useError/useError';
import isEmpty from '~utils/isEmpty/isEmpty';

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
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );

  const renderError = (): ReactNode => (
    <motion.div
      animate="visible"
      data-testid="error-container"
      exit="hidden"
      initial="hidden"
      variants={animationVariants}
    >
      <div className={scss.errorSection}>
        <div className={scss.errorContainer}>
          <Icon className={scss.alertIcon} icon="alert" size={20} />
          <div className={scss.errorMessageContainer}>
            <p className={scss.errorMessage}>
              Failed to progress, please click on the<strong> button </strong>on
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

  return !isEmpty(errors) && renderError();
}

export default FeedbackError;
