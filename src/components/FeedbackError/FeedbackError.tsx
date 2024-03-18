import { ReactNode, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useError } from '~stores/useError/useError';

import { Icon } from '~components/Icon/Icon';

import scss from './FeedbackError.module.scss';

import { animationVariants } from './FeedbackError.data';

function FeedbackError(): ReactNode {
  const errorMessage = useError((state) => state.errorMessage);
  const [showErrors, setShowErrors] = useState(false);

  const errors = [''];

  const renderErrorDropdown = (): ReactNode => (
    <ul className={scss.wrapperErrorList}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
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
            <p className={scss.errorMessage}>{errorMessage}</p>
          </div>
          <button
            className={scss.dropDownIconContainer}
            onClick={() => setShowErrors((prevState) => !prevState)}
            type="button"
          >
            <Icon
              className={scss.dropDownIcon}
              icon="DropDownArrow"
              size={10}
            />
          </button>
        </div>
        {showErrors && renderErrorDropdown()}
      </div>
    </motion.div>
  );

  return <AnimatePresence>{errorMessage && renderError()}</AnimatePresence>;
}

export default FeedbackError;
