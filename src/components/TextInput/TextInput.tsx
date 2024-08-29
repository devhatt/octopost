import { FocusEvent, forwardRef, ReactNode, useState } from 'react';

import classNames from 'classnames';

import Icon from '~components/Icon/Icon';

import scss from './TextInput.module.scss';

import { TInputProps } from './TextInput.types';

function TextInput(props: TInputProps): ReactNode {
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const supportTextClass = [scss.supportText];
  const rightIconClass = [scss.rightIcon];

  const [isFocused, setIsFocused] = useState(false);

  if (props.error) {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    rightIconClass.push(scss.rightIconError);
    supportTextClass.push(scss.supportTextError);
    inputClass.push(scss.inputError);
  }

  if (isFocused && !props.error) {
    fieldsetClass.push(scss.fieldsetFocus);
    containerClass.push(scss.containerFocus);
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

  return (
    <div className={classNames(containerClass)}>
      <fieldset aria-hidden="true" className={classNames(fieldsetClass)}>
        <legend className={classNames(legendClass)}>
          <span>{props.label}</span>
        </legend>
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
        {!!props.rightIcon && (
          <button className={classNames(rightIconClass)}>
            {props.error ? <Icon icon="alert" /> : props.rightIcon}
          </button>
        )}
      </fieldset>
      <div className={classNames(supportTextClass)}>{props.supportText}</div>
    </div>
  );
}

const ForwardedInputSearch = forwardRef(TextInput);
export default ForwardedInputSearch;
