import { forwardRef, useImperativeHandle, useState } from 'react';

import classNames from 'classnames';

import scss from './InputSearch.module.scss';

import alertIcon from './assets/alertIcon.svg';
import leftIcon from './assets/leftIcon.svg';
import rightIcon from './assets/rightIcon.svg';

import { TInputComponentRef, TInputProps } from './InputSearch.types';

function InputSearch(props: TInputProps, ref: TInputComponentRef) {
  const [value, setValue] = useState('');

  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const [isFocused, setIsFocused] = useState(false);

  function IconAlert() {
    return <img className={scss.icon} src={alertIcon} />;
  }

  function IconRight() {
    return <img src={rightIcon} />;
  }

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
    setIsFocused(e.target.value.length > 0);
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
        <label className={classNames(labelClass)} htmlFor={props.name}>
          {props.placeholder}
        </label>
        <div className={scss.iconLeft}>
          <img src={leftIcon} />
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

        {value ? handleIcons() : null}

        <fieldset className={classNames(fieldsetClass)} eria-hidden="true">
          <legend className={classNames(legendClass)}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {props.error ? renderErrorMessage() : null}
    </div>
  );
}

export default forwardRef(InputSearch);
