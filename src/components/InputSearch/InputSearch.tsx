import { ChangeEvent, FocusEvent, ReactNode, useState } from 'react';

import classNames from 'classnames';

import Button from '~components/Button/Button';
import Icon from '~components/Icon/Icon';
import { Icons } from '~components/Icon/Icon.types';

import scss from './InputSearch.module.scss';

import { AffixAction, InputProps } from './InputSearch.types';

const AFFIX_ICON_SIZE = 21;

function Input(props: InputProps): ReactNode {
  const [value, setValue] = useState('');

  const labelClass = [scss.label];
  const inputClass = [scss.input];
  const legendClass = [scss.legend];
  const fieldsetClass = [scss.fieldset];
  const containerClass = [scss.container];

  const [isFocused, setIsFocused] = useState(false);

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
    if (props.onChange) props.onChange(e.target.value);
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

  const renderIconButton = (icon: Icons, action: AffixAction): ReactNode => (
    <Button
      circle
      className={scss.affixButton}
      icon={<Icon icon={icon} size={AFFIX_ICON_SIZE} />}
      onClick={action}
    />
  );

  const renderPreffix = (): ReactNode => {
    let prefix = null;

    if (props.prefix && 'action' in props.prefix) {
      prefix = renderIconButton(props.prefix.icon, props.prefix.action);
    }

    if (props.prefix && !('action' in props.prefix)) {
      prefix = <Icon icon={props.prefix.icon} size={AFFIX_ICON_SIZE} />;
    }

    return prefix && <div className={scss.affix}>{prefix}</div>;
  };

  const renderSuffix = (): ReactNode => {
    let suffix = null;

    if (props.suffix && 'action' in props.suffix) {
      suffix = renderIconButton(props.suffix.icon, props.suffix.action);
    }

    if (props.suffix && !('action' in props.suffix)) {
      suffix = <Icon icon={props.suffix.icon} size={AFFIX_ICON_SIZE} />;
    }

    return suffix && <div className={scss.affix}>{suffix}</div>;
  };

  if (isFocused || (typeof value === 'string' && value)) {
    handleFocusedStyles();
  }

  if (props.error) {
    handleErrorStyles();
  }

  return (
    <div className={classNames(containerClass)}>
      <div className={scss.wrapper}>
        <div className={scss.content}>
          {renderPreffix()}

          <div className={scss.inputWrapper}>
            <label className={classNames(labelClass)} htmlFor={props.name}>
              {props.placeholder}
            </label>
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
          </div>

          {renderSuffix()}
        </div>

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

export default Input;
