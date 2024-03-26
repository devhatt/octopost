import { ChangeEvent, FocusEvent, forwardRef, ReactNode, useImperativeHandle, useState } from 'react';

import classNames from 'classnames';

import scss from './InputSearch.module.scss';

import alertIconSvg from './assets/alertIcon.svg';
import leftIcon from './assets/leftIcon.svg';
import rightIconSvg from './assets/rightIcon.svg';

import { TInputComponentRef, TInputProps } from './InputSearch.types';

function InputSearch(props: TInputProps, ref: TInputComponentRef): ReactNode {
  const [value, setValue] = useState('');

  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];

  const [isFocused, setIsFocused] = useState(false);

  const rightIcon = <img alt="right icon" src={rightIconSvg} />
  const alertIcon = <img alt="alert icon" src={alertIconSvg} />

  const handleClear = (): void => {
    props.onChange('');
    setValue('');
  };

  const handleIcons = (): ReactNode => (
    <div
      className={scss.iconRight}
      data-testid="clear-button"
      onClick={handleClear}
    >
      {props.error ? alertIcon : rightIcon}
    </div>
  );

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
    props.onChange(e.target.value);
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

  if (props.error) {
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
          <img alt="left icon" src={leftIcon} />
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
      {props.error && renderErrorMessage()}
    </div>
  );
}

const ForwardedInputSearch = forwardRef(InputSearch);
export default ForwardedInputSearch;
