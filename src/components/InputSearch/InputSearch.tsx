import { useState } from 'react';

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

  const handleClear = () => {
    if (props.handleClear) props.handleClear();
    setValue('');
  };

  const renderErrorMessage = () => (
    <div className={scss.errorWrapper}>
      <span className={scss.errorMessage}>{props.errorMessage}</span>
    </div>
  );

  const onInputFocus = () => {
    if (props.onFocus) props.onFocus();
    setIsFocused(true);
  };

  const onInputBlur = (e) => {
    setIsFocused(e.target.value.length !== 0);
  };

  if (isFocused || props.value?.length > 0) {
    fieldsetClass.push(scss.fieldsetFocus);
    legendClass.push(scss.legendFocus);
    labelClass.push(scss.labelAnimate);
    containerClass.push(scss.containerFocus);
  }

  if (props.errors) {
    fieldsetClass.push(scss.fieldsetError);
    containerClass.push(scss.containerError);
    labelClass.push(scss.labelError);
  }

  return (
    <div className={containerClass.join(' ')}>
      <div className={scss.inputWrapper}>
        <label htmlFor={props.name} className={labelClass.join(' ')}>
          {props.placeholder}
        </label>
        <div className={scss.iconLeft}>
          <img src={leftIcon} />
        </div>
        <input
          required
          readOnly={props.readonly}
          type={props.type}
          id={props.name}
          name={props.name}
          className={inputClass.join(' ')}
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
          {props.errors ? (
            <img className={scss.icon} src={alertIcon} />
          ) : (
            <img src={rightIcon} />
          )}
        </div>

        <fieldset eria-hidden="true" className={fieldsetClass.join(' ')}>
          <legend className={legendClass.join(' ')}>
            <span className={scss.legendTitle}>{props.placeholder}</span>
          </legend>
        </fieldset>
      </div>
      {props.errors && renderErrorMessage()}
    </div>
  );
}
