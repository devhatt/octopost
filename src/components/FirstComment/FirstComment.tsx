import { forwardRef } from 'react';

import classNames from 'classnames';

import styles from './FirstComment.module.scss';

import { TFirstCommentProps } from './FirstComment.types';

const FirstComment = forwardRef<HTMLInputElement, TFirstCommentProps>(
  function FirstComment(
    { children, labelProps, className, multine = true, ...props },
    ref
  ) {
    return (
      <label
        {...labelProps}
        className={classNames(styles.label, labelProps?.className)}
      >
        <input
          type="checkbox"
          ref={ref}
          className={classNames(styles.input, className)}
          {...props}
        />
        <span
          className={classNames(
            styles.text,
            !multine && styles.textNotMultiline
          )}
        >
          {children}
        </span>
      </label>
    );
  }
);

export default FirstComment;
