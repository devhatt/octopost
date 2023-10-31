import { forwardRef, useImperativeHandle, useState } from 'react';

import classNames from 'classnames';

import scss from './InputSearch.module.scss';

import alertIcon from './assets/alertIcon.svg';
import leftIcon from './assets/leftIcon.svg';
import rightIcon from './assets/rightIcon.svg';

import { TInputProps, TInputComponentRef } from './InputSearch.types';

function InputSearch(props: TInputProps, ref: TInputComponentRef) {
  const [value, setValue] = useState('');

  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const [isFocused, setIsFocused] = useState(false);

  const IconAlert = () => {
    return <img className={scss.icon} src={alertIcon} />;
  };

  const IconRight = () => {
    return <img src={rightIcon} />;
  };

  const handleIcons = () => (
    <div
      className={scss.iconRight}
      data-testid="clear-button"
      onClick={handleClear}
    >
      {props.error ? <IconAlert /> : <IconRight />}
    </div>
  );

  const handleClear = () => {
    props.onChange && props.onChange('');
    setValue('');
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(e.target.value);
    setValue(e.target.value);
  };

  const renderErrorMessage = () => (
    <div className={scss.errorWrapper}>
      <span className={scss.errorMessage}>{props.errorMessage}</span>
    </div>
  );

  const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(event);
    setIsFocused(true);
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(e.target.value.length !== 0);
  };

  const handleFocusedStyles = () => {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  };

  const handleErrorStyles = () => {
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
        <label htmlFor={props.name} className={classNames(labelClass)}>
          {props.placeholder}
        </label>
        <div className={scss.iconLeft}>
          <img src={leftIcon} />
        </div>
        <input
          required
          readOnly={props.readOnly}
          type={props.type}
          id={props.name}
          name={props.name}
          className={classNames(inputClass)}
          placeholder={props.placeholder}
          onBlur={(e) => onInputBlur(e)}
          onFocus={onInputFocus}
          value={value}
          onChange={handleValue}
        />

        {value && handleIcons()}

        <fieldset eria-hidden="true" className={classNames(fieldsetClass)}>
          <legend className={classNames(legendClass)}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {props.error && renderErrorMessage()}
    </div>
  );
}

export default forwardRef(InputSearch);
