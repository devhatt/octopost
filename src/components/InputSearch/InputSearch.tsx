import { useState } from 'react';

import classNames from 'classnames';

import scss from './InputSearch.module.scss';

import alertIcon from './assets/alertIcon.svg';
import leftIcon from './assets/leftIcon.svg';
import rightIcon from './assets/rightIcon.svg';

import { IInputProps } from './IInputProps.types';

export default function InputSearch(props: IInputProps) {
  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];
  const [isFocused, setIsFocused] = useState(false);

  const [value, setValue] = useState('');

  const IconAlert = () => {
    return <img className={scss.icon} src={alertIcon} />;
  };

  const IconRight = () => {
    return <img src={rightIcon} />;
  };

  const handleClear = () => {
    if (props.handleClear) props.handleClear();
    setValue('');
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

  if (
    isFocused ||
    (typeof props.value === 'string' && props.value.length > 0)
  ) {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  }

  if (props.error) {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    labelClass.push(scss.labelError);
  }

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
          onChange={(e) => setValue(e.target.value)}
        />

        <div
          className={scss.iconRight}
          data-testid="clear-button"
          onClick={handleClear}
        >
          {props.error ? <IconAlert /> : <IconRight />}
        </div>

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
