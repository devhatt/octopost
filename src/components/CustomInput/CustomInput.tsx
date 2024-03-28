import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';

import classNames from 'classnames';

import { Icon } from '~components/Icon/Icon';

import scss from './CustomInput.module.scss';

import { TInputComponentRef, TInputProps } from './CustomInput.types';

function CustomInput(
  { error = false, ...props }: TInputProps,
  ref: TInputComponentRef
): ReactNode {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];

  const handleClear = (): void => {
    props.onChange?.('');
    setValue('');
  };

  const handleIcons = (): ReactNode => (
    <div
      className={scss.iconRight}
      data-testid="clear-button"
      onClick={handleClear}
    >
      {error ? <Icon icon="alert" /> : <Icon icon="close" />}
    </div>
  );

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
    props.onChange?.(e.target.value);
    setValue(e.target.value);
  };

  const renderErrorMessage = (): ReactNode => (
    <div className={scss.errorWrapper}>
      <span className={scss.errorMessage}>{props.errorMessage}</span>
    </div>
  );

  const onInputFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (props.onFocus) props.onFocus(event);
    setIsFocused(true);
  };

  const onInputBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(e.target.value.length > 0);
  };

  const handleFocusedStyles = (): void => {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  };

  const handleErrorStyles = (): void => {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    labelClass.push(scss.labelError);
  };

  if (isFocused || (typeof value === 'string' && value)) {
    handleFocusedStyles();
  }

  if (error) {
    handleErrorStyles();
  }

  useImperativeHandle(ref, () => ({
    clearInput: handleClear,
  }));

  return (
    <div className={classNames(containerClass)}>
      <div className={scss.inputWrapper}>
        <label className={classNames(labelClass)} htmlFor={props.name}>
          {props.placeholder}
        </label>
        <div className={scss.iconLeft}>
          <Icon icon="mag" />
        </div>
        <input
          className={classNames(inputClass)}
          id={props.name}
          name={props.name}
          onBlur={(e) => onInputBlur(e)}
          onChange={handleValue}
          onFocus={onInputFocus}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          required
          type={props.type}
          value={value}
        />

        {value && handleIcons()}

        <fieldset aria-hidden="true" className={classNames(fieldsetClass)}>
          <legend className={classNames(legendClass)}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {error && renderErrorMessage()}
    </div>
  );
}

export const CustomInputRef = forwardRef(CustomInput);
