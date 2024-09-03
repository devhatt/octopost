import {
  FocusEvent,
  forwardRef,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import classNames from 'classnames';

import Icon from '~components/Icon/Icon';

import scss from './TextInput.module.scss';

import { TInputProps } from './TextInput.types';

function TextInput(props: TInputProps): ReactNode {
  const inputClass = [scss.input];
  const labelClass = [scss.label];
  const containerClass = [scss.container];
  const innerContainerClass = [scss.innerContainer];
  const supportTextClass = [scss.supportText];
  const rightIconClass = [scss.rightIcon];

  const [isFocused, setIsFocused] = useState(false);

  if (props.error) {
    containerClass.push(scss.containerError);
    innerContainerClass.push(scss.innerContainerError);
    rightIconClass.push(scss.rightIconError);
    supportTextClass.push(scss.supportTextError);
    inputClass.push(scss.inputError);
  }

  if (isFocused && !props.error) {
    containerClass.push(scss.containerFocus);
    innerContainerClass.push(scss.innerContainerFocus);
    inputClass.push(scss.inputFocus);
  }

  if (props.supportText) {
    supportTextClass.push(scss.supportTextExists);
  }

  const onInputFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (props.onFocus) props.onFocus(event);
    setIsFocused(true);
  };

  const onInputBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(e.target.value.length > 0);
  };

  const renderRightIcon = (): ReactElement | null => {
    const { error, handleRightIconClick, rightIcon } = props;

    let iconElement;

    if (error)
      iconElement = (
        <Icon
          aria-label="alert-icon"
          className={classNames(rightIconClass)}
          icon="alert"
        />
      );

    if (rightIcon)
      iconElement = (
        <Icon
          aria-label="input icon"
          className={classNames(rightIconClass)}
          icon={rightIcon}
        />
      );

    if (!iconElement) return null;

    return handleRightIconClick ? (
      <button
        className={classNames(scss.rightIconButton)}
        onClick={handleRightIconClick}
      >
        {iconElement}
      </button>
    ) : (
      iconElement
    );
  };

  return (
    <div className={classNames(containerClass)}>
      <label className={classNames(labelClass)} htmlFor={props.name}>
        <span>{props.label}</span>
      </label>
      <div className={classNames(innerContainerClass)}>
        <input
          className={classNames(inputClass)}
          id={props.name}
          name={props.name}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          required
          type={props.type}
          {...props}
        />
        {renderRightIcon()}
      </div>
      <div
        className={classNames(supportTextClass)}
        data-testid={`${props.name}-support-text`}
      >
        {props.supportText}
      </div>
    </div>
  );
}

const ForwardedInputSearch = forwardRef(TextInput);
export default ForwardedInputSearch;
